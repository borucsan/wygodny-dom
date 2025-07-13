<template>
    <section>
        <div class="flex justify-end md:hidden" v-if="show && step === 2"><img class=""
                 src="/assets/images/bg3.png"></div>
        <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <div class="flex justify-end pr-3 pt-5 text-xl font-medium" v-if="show && step === 2">
                <span v-if="stopwatch.hours.value > 0">{{ stopwatch.hours }}:</span><span>{{ minutes }}</span>:<span>{{
                    seconds }}</span>:<span>{{ milliseconds }}</span>
            </div>
        </TransitionFade>
        <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <div class="flex flex-col justify-center h-full gap-4 pt-4" v-if="show && step === 1">
                <div class="flex flex-col px-4 sm:px-6 md:px-16">
                    <h3 class="font-poppins text-xl -tracking-tighter mb-12"><strong>Za chwilę zobaczysz 3&nbsp;pytania
                            konkursowe.</strong><br />Wygrywa 10&nbsp;najszybszych osób spośród tych, z&nbsp;poprawnymi odpowiedziami.
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
                <div class="flex md:hidden"><img class="w-full"
                    src="/assets/images/bg2.png" alt=""></div>
            </div>
            <div v-else-if="show && step === 2" class="flex flex-col justify-center h-full pb-4">
                <TransitionFade :duration="500" @after-leave="showNext()">
                    <form v-if="showQuestions" class="grid grid-cols-1 gap-2 text-lg px-4 sm:px-6 lg:px-16">
                        <div class="font-bold text-md lg:text-base">{{ currentQuestion.question }}</div>

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
const elapsed = ref<number | undefined>(undefined);
const interval = ref<number | ReturnType<typeof setInterval> | undefined>(undefined);
const localKey = ref<string | undefined>();
const user = useUserData();

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };

const seconds = computed(() => {
    const s = elapsed.value ? Math.floor((elapsed.value / 1000) % 60) : 0;
    return (s >= 10 ? s.toString()[0] : '0') + (s >= 10 ? s.toString()[1] : s.toString())
});


const minutes = computed(() => {
    const s = elapsed.value ? Math.floor((elapsed.value / 1000 / 60) % 60) : 0;
    return (s >= 10 ? s.toString()[0] : '0') + (s >= 10 ? s.toString()[1] : s.toString())
});

const milliseconds = computed(() => {
    return (elapsed.value ? elapsed.value % 1000 : 0).toString().padStart(3, '0');
});

const totalSeconds = computed(() => {
    const s = elapsed.value ? Math.floor((elapsed.value / 1000) % 60) : 0;
    return s;
});

async function start() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 2;
        from.value = Date.now();
        //stopwatch.start();
        interval.value = setInterval(function () {
            elapsed.value = Date.now() - (from?.value ?? 0);
        }, 100);
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
        useInis360({
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            model: `cpl_pytanie_0${currentIndex.value + 2}`
        });
    } else {
        clearInterval(interval.value);
        elapsed.value = Date.now() - (from?.value ?? 0);
        user.value.time = `${minutes.value}:${seconds.value}:${milliseconds.value}`;
        setTimeout(async () => {
            await save({
                prop33: user.value.time,
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

    useInis360([
        {
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            model: 'cpl_pytanie_01'
        }
    ]);

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