<template>
    <section class="flex flex-col !px-2 pt-24">
        <h2 class="text-2xl font-medium text-center">Pytania Partnerów Serwisu</h2>
        <TransitionFade :duration="500" @after-leave="showQuestions = true">

            <form class="h-full flex flex-col flex-wrap pt-8 md:pt-24" v-if="showQuestions && currentQuestion">
                <div class=" mb-5 text-xl font-bold px-10 " v-html="currentQuestion.question"></div>
                <USelect v-if="currentQuestion.type === 'select'"
                         :value="(currentQuestion.options as string[]).indexOf(data[currentQuestion.prop])"
                         @update:model-value="data[currentQuestion.prop] = currentQuestion.options[$event] as string"
                         :options="currentQuestion.options.map((opt, index) => ({ value: index, label: opt }))"
                         @change="saveAndGoNext()" />
                <div v-if="currentQuestion.type === 'radio'" class="w-full">
                    <ul
                        type="disc"
                        :class="[currentQuestion.class ?? ' w-full px-12 list-disc flex flex-col gap-2']">
                        <li v-for="o in currentQuestion.options" :class="['answer', (o as ImageOption)?.class]">
                            <label class="flex flex-col items-center cursor-pointer text-lg hover:font-black"
                                   v-if="(o as ImageOption)?.label && (o as ImageOption)?.img">
                                <img :src="(o as ImageOption)?.img" class="w-24 md:w-32" />
                                <span>{{ (o as ImageOption).label }}</span>
                                <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o"
                                       :disabled="selected"
                                       @click="saveAndGoNext({ [currentQuestion.prop]: (o as ImageOption).label })">
                            </label>
                            <label class="flex gap-4 cursor-pointer text-base hover:font-black" v-else>
                                <span class="text-left">{{ o }}</span>
                                <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o"
                                       :disabled="selected"
                                       @click="saveAndGoNext({ [currentQuestion.prop]: o })">
                            </label>
                        </li>
                    </ul>

                    <div class="flex justify-center w-full my-12">
                        <UButton type="button" color="black" size="md" @click="goNext()">
                            Dalej
                        </UButton>
                    </div>
                </div>
            </form>
        </TransitionFade>

    </section>

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
        if (currentQuestion.value.inisTrack) {
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
            await navigateTo('/quiz')
        }
    } finally {
        selected.value = false;
    }
}

const goNext = () => {
    if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++;
        showQuestions.value = false;
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
    if (useEnv()?.value !== 'dev' && !user.value?.mkey) {
        await navigateTo("/")
    }
    /*     useScript({
            innerHTML: `fbq('track', 'Lead');`,
            type: 'text/javascript',
            src: '',
            tagPosition: 'bodyClose',
        }); */
    localKey.value = user.value.mkey;
    user.value.mkey = undefined;

    const consents = Object.keys(user.value.consents).filter(p => user.value.consents[p] === true);
    questions.value = [...coRegistrationQuestions, ...profileQuestions].filter(
        q => q.filter(consents, user.value));

});
</script>