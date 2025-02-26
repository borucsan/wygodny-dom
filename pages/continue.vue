<template>
    <div>
        <section class="content-main">
            <div class="max-w-[793px] w-full">
                <p class="pre-question"></p>
                <div class="bg-content-paper flex flex-col">
                    <TransitionFade :duration="500" @after-leave="showQuestions = true">
                        <form class="h-full flex flex-col flex-wrap" v-if="showQuestions && currentQuestion">
                            <div class="text-center mb-5 text-lg font-bold" v-html="currentQuestion.question"></div>
                            <USelect v-if="currentQuestion.type === 'select'" :value="(currentQuestion.options as string[]).indexOf(data[currentQuestion.prop])" @update:model-value="data[currentQuestion.prop] = currentQuestion.options[$event] as string" 
                                     class="font-barlow" :options="currentQuestion.options.map((opt, index) => ({value: index, label: opt}))" @change="saveAndGoNext()" />
                            <div v-if="currentQuestion.type === 'radio'">
                                <ul :class="['grid justify-items-center', currentQuestion.class ?? 'grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2']">
                                    <li v-for="o in currentQuestion.options" :class="['answer', (o as ImageOption)?.class]">
                                        <label class="flex flex-col items-center cursor-pointer text-lg hover:font-black" v-if="(o as ImageOption)?.label && (o as ImageOption)?.img">
                                            <img :src="(o as ImageOption)?.img" class="w-24 md:w-32" />
                                            <span>{{ (o as ImageOption).label }}</span>
                                            <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o" :disabled="selected"
                                                   @click="saveAndGoNext({ [currentQuestion.prop]: (o as ImageOption).label })">
                                        </label>
                                        <label class="flex gap-4 cursor-pointer text-base hover:font-black" v-else>
                                            <span>{{ o }}</span>
                                            <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o" :disabled="selected"
                                                   @click="saveAndGoNext({ [currentQuestion.prop]: o })">
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </TransitionFade>
                </div>
            </div>
        </section>
        <section class="bg-footer py-8 px-10">
            <p class="text-text1 font-barlow text-sm">
                Grafika użyta na stronie pochodzi z legalnych źródeł i ma charakter wyłącznie ilustracyjny. Apple Inc. nie jest związane z organizatorem promocji ani nie wspiera i nie sponsoruje konkursu.
                <br><br>
                Aby wziąć udział w konkursie, należy spełnić kilka prostych warunków. Uczestnik powinien wypełnić formularz zgłoszeniowy, podając swoje dane osobowe, takie jak imię, adres e-mail datę urodzenia oraz telefon. Następnie należy odpowiedzieć na 3 pytania konkursowe, najszybsza osoba, która udzieli poprawnych odpowiedzi - wygrywa. Zwycięzca konkursu zostanie poinformowany o wygranej drogą telefoniczną. Każde kolejne zgłoszenie tego samego adresu e-mail powoduje nadpisanie poprzednich odpowiedzi. Konkurs skierowany jest wyłącznie do osób pełnoletnich. Nagrodą jest iPhone 16, a uczestnictwo w konkursie jest bezpłatne.
            </p>
        </section>
    </div>
</template>
<script setup lang="ts">

import type { ImageOption, RegistrationQuestion } from "~/types";
import { coRegistrationQuestions, profileQuestions } from "../const";

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };
const user = useUserData();
const currentIndex = ref(0);

const data = ref<Record<string, string>>({
})
const showQuestions = ref(true);
const selected = ref(false);
const localKey = ref<string | undefined>();
const questions = ref<RegistrationQuestion[]>([]);
const currentQuestion = computed(() => {
    return questions.value[currentIndex.value];
});
const actionId = useActionId();

const saveAndGoNext = async (input?: Record<string, unknown>) => {
    selected.value = true;
    try {
    if(currentQuestion.value.inisTrack) {
        await useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: currentQuestion.value.inisTrack
                },
            ]);
    }
    const current = input ? input : data.value;
        await save(current);
        if (currentIndex.value < questions.value.length - 1) {
            currentIndex.value++;
            showQuestions.value = false;

        } else {
            user.value.mkey = localKey.value;
            await navigateTo('/finish')
        }
    } finally {
        selected.value = false;
    }
}

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
            return "success";

        } else {
            throw new Error();
        }
    } catch (e) {
        return "error";
    }
}

onMounted(async () => {
    if (useEnv().value !== 'dev' && !user.value.mkey) {
        await navigateTo("/")
    }
    useScript({
        innerHTML: `fbq('track', 'Lead');`,
        type: 'text/javascript',
        src: '',
        tagPosition: 'bodyClose',
    });
    localKey.value = user.value.mkey;
    user.value.mkey = undefined;

    const consents = Object.keys(user.value.consents).filter(p => user.value.consents[p] === true);
    questions.value = [...coRegistrationQuestions, ...profileQuestions].filter(
        q => q.filter(consents, user.value));

});
</script>