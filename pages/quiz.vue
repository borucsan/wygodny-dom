<template>
    <div>
        <section class="content-main">
            <div class="max-w-[793px] ">
                <p class="pre-question">
                    <span class=" text-2xl font-black">Sprawdź się</span> i&nbsp;zgarnij nagrodę: <span
                          class=" text-2xl font-black">1500&nbsp;zł</span>, <span
                          class=" text-2xl font-black">1000&nbsp;zł</span> lub <span
                          class=" text-2xl font-black">500&nbsp;zł</span>!
                </p>
                <div class="bg-content-paper">
                    <h5 class="font-barlow font-bold leading-5">Pytanie {{ currentIndex + 1 }}/{{
                        questions.questions.length }}</h5>
                    <h6 class="font-barlow leading-5 mb-2">{{ questions.title }}</h6>
                    <TransitionFade :duration="500" @after-leave="showNext()">
                        <form v-if="showQuestions" class="grid grid-cols-1 text-lg">
                            <div class="font-bold">{{ currentQuestion.question }}</div>

                            <label
                                   v-for="a in currentQuestion.answers" :key="a.id"
                                   :data-testid="`${currentQuestion.id}-${a.id}`"
                                   :class="['answer ', { 'correct': currentQuestion.completed && a.correct, 'incorrect': currentQuestion.completed && a.selected && !a.correct }]">
                                <span>{{ a.id }}</span>
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
                <p class="post-question">
                    Przysłowia to skarbnica mądrości i życiowych porad przekazywanych z pokolenia na pokolenie.
                    <br>
                    Czy potrafisz je dokończyć?
                </p>
            </div>
        </section>
        <section class="bg-footer py-8 px-10">
            <p class="text-text1 font-barlow text-sm">
                Przysłowia są mądrością narodów i od wieków pomagają nam zrozumieć rzeczywistość, przypominając o
                wartości
                wysiłku i zaradności.
                Podobnie w konkursach, aby osiągnąć sukces, trzeba podjąć pewne kroki, bo "Nie od razu Kraków
                zbudowano".
                Odpowiedz na pytania konkursowe, bo "Kto pyta, nie błądzi" – to pierwszy, kluczowy krok. Pamiętaj, że
                "bez pracy nie ma kołaczy", więc warto podjąć to wyzwanie.
                Kolejnym krokiem jest rejestracja w konkursie, bo "Kto chce, szuka sposobu, kto nie chce, szuka powodu".
                Na
                koniec, aby wyróżnić się, wymyśl zabawne powiedzonko – oryginalność jest tu kluczowa. "Fortuna kołem się
                toczy" i może właśnie Twój pomysł zostanie doceniony!
            </p>
        </section>
    </div>
</template>
<script setup lang="ts">
import type { Answer, Question } from "~/types";
import { part1 } from "../const";
const questions = ref(part1);
const currentIndex = ref(0);
const showQuestions = ref(true);

const userAnswers = useUserAnswers();
const router = useRouter();
const user = useUserData();
const utm = useUTM();

const currentQuestion = computed<Question>(() => {
    return questions.value.questions[currentIndex.value];
});

const actionId = useActionId();

const showNext = () => {
    showQuestions.value = true;
    useInis360({
        actionId: actionId.value,
        advId: 'ef9b1ff32314ba272bc3c9100d474386',
        model: `cpl_pytanie_0${currentIndex.value + 1}`
    });
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
        setTimeout(() => {
            router.push("/register");
        }, 750);
    }
};
onMounted(() => {
    questions.value.questions.forEach((q) => {
        q.completed = false;
        q.answers.forEach((a) => {
            a.selected = false;
        });
    });
    user.value.consents = {
        prop22: false,
        prop23: false,
        prop24: false,
        prop25: false,
        prop26: false,
        prop27: false,
        prop28: false,
    }

    console.debug('utm quiz', utm.value);
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
});

</script>