<template>
    <section>
        <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <div class="flex justify-end pr-3 pt-5 text-xl font-medium" v-if="show && step === 2">
                <span v-if="stopwatch.hours.value > 0">{{ stopwatch.hours }}:</span><span>{{ minutes  }}</span>:<span>{{ seconds }}</span>
            </div>
        </TransitionFade>
            <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <div class="flex flex-col justify-center h-full" v-if="show && step === 1">
                <h3 class="font-poppins text-xl -tracking-tighter mb-12"><strong>Za chwilę zobaczysz 3 pytania
                        konkursowe.</strong><br />Wygrywają 3 najszybsze osoby spośród tych, z poprawnymi odpowiedziami.
                </h3>
                <UForm ref="form1"
                       class="w-full max-w-[430px]"
                       :state="state"
                       @submit="start">
                    <div class="flex justify-start">
                        <UButton type="submit" color="black" size="md" data-testid="form-submit1">
                            CZAS START!
                        </UButton>
                    </div>
                </UForm>
            </div>
            <div v-else-if="show && step === 2" class="flex flex-col justify-center h-full">
                <TransitionFade :duration="500" @after-leave="showNext()">
                    <form v-if="showQuestions" class="grid grid-cols-1 gap-2 text-lg">
                        <div class="font-bold">{{ currentQuestion.question }}</div>

                        <label
                               v-for="a in currentQuestion.answers" :key="a.id"
                               :data-testid="`${currentQuestion.id}-${a.id}`"
                               :class="['answer ', { 'correct': currentQuestion.completed && a.correct, 'incorrect': currentQuestion.completed && a.selected && !a.correct }]">
                            <span class="pr-1">{{ a.id }}.</span>
                            <span>{{ a.answer }}</span>
                            <input
                                   class="hidden" type="radio" name="answer"
                                   :data-answer-id="a.id"
                                   :disabled="currentQuestion.completed"
                                   @change="selectAnswer(a, currentQuestion)">
                        </label>

                    </form>
                </TransitionFade>
            </div>
        </TransitionFade>
    </section>
</template>
<script setup lang="ts">
import type { Answer, Question } from "~/types";
import { quiz } from "../const";

import { useStopwatch } from 'vue-timer-hook';
const stopwatch = useStopwatch(0, false);

const questions = ref(quiz);
const currentIndex = ref(0);
const showQuestions = ref(true);

const userAnswers = useUserAnswers();
const router = useRouter();
const step = ref<number>(1);
const show = ref(true);
const state = useUserData();
const from = ref<number | undefined>(undefined);
const to = ref<number | undefined>(undefined);
const localKey = ref<string | undefined>();
const user = useUserData();

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };

const seconds = computed(() => {
    const s = stopwatch.seconds;
    return (s.value >= 10 ? s.value.toString()[0] : '0') + (s.value >= 10 ? s.value.toString()[1] : s.value.toString())
});


const minutes = computed(() => {
    const s = stopwatch.minutes;
    return (s.value >= 10 ? s.value.toString()[0] : '0') + (s.value >= 10 ? s.value.toString()[1] : s.value.toString())
});


const totalSeconds = computed(() => {
    return (stopwatch.hours.value * 3600) + (stopwatch.minutes.value * 60) + stopwatch.seconds.value;
});

async function start() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 2;
        from.value = Date.now();
        stopwatch.start();
    }, 300);

    
}

const currentQuestion = computed<Question>(() => {
    return questions.value.questions[currentIndex.value];
});

const actionId = useActionId();

const showNext = () => {
    showQuestions.value = true;
};


const selectAnswer = (a: Answer, q: Question) => {
    userAnswers.value[currentIndex.value] = { questionId: q.id, answerId: a.id, correct: a.correct, ts: Date.now() };
    a.selected = true;
    q.completed = true;
    if (currentIndex.value < questions.value.questions.length - 1) {
        setTimeout(() => {
            currentIndex.value++;
            showQuestions.value = false;
        }, 750);
    } else {
        stopwatch.pause();
        to.value = Date.now();
        setTimeout(async () => {
            await save({
                prop33: `${stopwatch.hours.value}:${minutes.value}:${seconds.value}`,
                prop32: userAnswers.value.filter((a) => a.correct).length,
            });
            router.push("/finish");
        }, 750);
    }
};

const save = async (data: Record<string, unknown>) => {
    try {
        const postData = new FormData();
        postData.append("mtd", "upd");
        postData.append("mkey", localKey.value as string);
        postData.append("data", JSON.stringify(data));
        const response: { status: "success" | "error"; userExists?: boolean } =
            await $fetch("/inc/api.php", {
                method: "POST",
                body: postData,
                ...options,
            });

        if (response.status === "success") {
            user.value.mkey = localKey.value;

        } else {
            throw new Error();
        }
    } catch (e) {
        return "error";
    }
}
onMounted(async () => {

    if (useEnv()?.value !== 'dev' && !user.value?.mkey) {
        await navigateTo("/")
    }
    localKey.value = user.value.mkey;
    user.value.mkey = undefined;

    questions.value.questions.forEach((q) => {
        q.completed = false;
        q.answers.forEach((a) => {
            a.selected = false;
        });
    });

    questions.value.questions.forEach((q) => {
        q.completed = false;
        q.answers.forEach((a) => {
            a.selected = false;
        });
    });
});

</script>