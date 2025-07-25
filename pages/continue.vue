<template>
    <section class="flex flex-col lg:pt-24">
        <div class="flex justify-end md:hidden"><img class="" src="/assets/images/bg3.png"></div>
        <h2 class="text-base lg:text-2xl font-medium text-center">Pytania Partnerów Serwisu</h2>
        <TransitionFade :duration="500" @after-leave="showQuestions = true">
            <form class="h-full flex flex-col flex-wrap pt-8 md:pt-24" v-if="showQuestions && currentQuestion">
                <div class="mb-5 text-md lg:text-xl font-bold px-10" v-html="currentQuestion.question"></div>
                
                <!-- Add question image -->
                <div v-if="currentQuestion.image" class="flex justify-center mb-5">
                    <img :src="currentQuestion.image.src" :class="currentQuestion.image.class || 'w-48 h-auto'" :alt="currentQuestion.question">
                </div>

                <USelect v-if="currentQuestion.type === 'select'"
                         :value="getSelectValue()"
                         :model-value="getSelectValue()"
                         @update:model-value="handleSelectChange($event)"
                         :options="getSelectOptions()"
                         class="relative max-w-[250px] w-full self-center" />
                <div v-if="currentQuestion.type === 'radio'" class="w-full">
                    <ul
                        :class="[currentQuestion.class ?? ' w-full px-12 flex flex-col gap-2']">
                        <li v-for="o in currentQuestion.options"
                            :class="['answer', (o as ImageOption)?.class, { 'coregister': true, 'answer-img': (o as ImageOption)?.label && (o as ImageOption)?.img }]">
                            <!-- Image option (existing) -->
                            <label class="flex flex-col items-center cursor-pointer text-lg hover:font-black"
                                   v-if="(o as ImageOption)?.label && (o as ImageOption)?.img">
                                <img :src="(o as ImageOption)?.img" class="w-24 md:w-32" />
                                <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o"
                                       :disabled="selected"
                                       @change="handleRadioChange(o)"
                                       v-model="data[currentQuestion.prop]">
                                <span>{{ (o as ImageOption).label }}</span>
                            </label>
                            <!-- Icon option (new) -->
                            <label class="answer flex gap-4 cursor-pointer text-base hover:font-black items-center"
                                   v-else-if="(o as IconOption)?.label !== undefined">
                                <input class="hidden" type="radio" :name="currentQuestion.prop" :value="(o as IconOption).label"
                                       :disabled="selected"
                                       @change="handleRadioChange((o as IconOption).label)"
                                       v-model="data[currentQuestion.prop]">
                                <span v-if="(o as IconOption).icon && (o as IconOption).iconPosition === 'before'" 
                                      class="no-underline">{{ (o as IconOption).icon }}</span>
                                <span class="text-left">{{ (o as IconOption).label }}</span>
                                <span v-if="(o as IconOption).icon && (o as IconOption).iconPosition === 'after'" 
                                      class="no-underline">{{ (o as IconOption).icon }}</span>
                            </label>
                            <!-- Plain string option (existing) -->
                            <label class="answer flex gap-4 cursor-pointer text-base hover:font-black" v-else>
                                <input class="hidden" type="radio" :name="currentQuestion.prop" :value="o"
                                       :disabled="selected"
                                       @change="handleRadioChange(o)"
                                       v-model="data[currentQuestion.prop]">
                                <span class="text-left">{{ o }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="flex justify-center w-full my-12">
                    <UButton type="button" color="black" size="md" :disabled="selected" @click="saveAndGoNextLazy(currentQuestion)">
                        Dalej
                    </UButton>
                </div>
            </form>
        </TransitionFade>

    </section>

</template>
<script setup lang="ts">

import type { ImageOption, IconOption, Question, RegistrationQuestion } from "~/types";
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
const inisTrackedQuestions = ref<Set<number>>(new Set());
const currentQuestion = computed(() => {
    return questions.value[currentIndex.value];
});
const actionId = useActionId();

const getSelectOptions = () => {
    return currentQuestion.value.options.map((opt, index) => {
        if (typeof opt === 'string') {
            return { value: index, label: opt };
        } else if ((opt as IconOption).label !== undefined) {
            const iconOpt = opt as IconOption;
            const label = iconOpt.icon && iconOpt.iconPosition === 'before' 
                ? `${iconOpt.icon} ${iconOpt.label}`
                : iconOpt.icon && iconOpt.iconPosition === 'after'
                ? `${iconOpt.label} ${iconOpt.icon}`
                : iconOpt.label;
            return { value: index, label };
        } else if ((opt as ImageOption).label) {
            return { value: index, label: (opt as ImageOption).label };
        }
        return { value: index, label: String(opt) };
    });
};

const getSelectValue = () => {
    const currentValue = data.value[currentQuestion.value.prop];
    if (!currentValue) return -1;
    
    return currentQuestion.value.options.findIndex(opt => {
        if (typeof opt === 'string') {
            return opt === currentValue;
        } else if ((opt as IconOption).label !== undefined) {
            return (opt as IconOption).label === currentValue;
        } else if ((opt as ImageOption).label) {
            return (opt as ImageOption).label === currentValue;
        }
        return false;
    });
};

const handleSelectChange = async (selectedIndex: number) => {
    const selectedOption = currentQuestion.value.options[selectedIndex];
    if (typeof selectedOption === 'string') {
        data.value[currentQuestion.value.prop] = selectedOption;
    } else if ((selectedOption as IconOption).label !== undefined) {
        data.value[currentQuestion.value.prop] = (selectedOption as IconOption).label;
    } else if ((selectedOption as ImageOption).label) {
        data.value[currentQuestion.value.prop] = (selectedOption as ImageOption).label;
    } else {
        data.value[currentQuestion.value.prop] = String(selectedOption);
    }
    await triggerInisIfNeeded();
}

const handleRadioChange = async (value: any) => {
    await triggerInisIfNeeded();
}

const triggerInisIfNeeded = async () => {
    if (currentQuestion.value.inisTrack && 
        !inisTrackedQuestions.value.has(currentIndex.value) && 
        data.value[currentQuestion.value.prop]) {
        
        inisTrackedQuestions.value.add(currentIndex.value);
        
        try {
            await useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: currentQuestion.value.inisTrack
                },
            ]);
        } catch (error) {
            console.error('Inis360 tracking error:', error);
        }
    }
}

const saveAndGoNext = async (input?: Record<string, unknown>) => {
    selected.value = true;
    try {
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

const saveAndGoNextLazy = async (q: RegistrationQuestion) => {
    selected.value = true;
    try {
        const current = {
            [q.prop]: data.value[q.prop]
        };
        
        await save(current);

        // Execute onAnswer callback if it exists
        if (q.onAnswer && data.value[q.prop]) {
            await q.onAnswer(data.value[q.prop]);
        }

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
    useScript({
        innerHTML: `fbq('track', 'Lead');`,
        type: 'text/javascript',
        src: '',
        tagPosition: 'bodyClose',
    });
    localKey.value = user.value.mkey;
    user.value.mkey = undefined;

    const consents = Object.keys(user.value.consents)
        .filter(p => user.value.consents[p] === true);
    questions.value = [...coRegistrationQuestions, ...profileQuestions]
        .filter(q => q.filter(consents, user.value));

    });
</script>

<style scoped>
/* Override .answer font size to be consistent 1rem on all screen sizes */
.answer {
    font-size: 1rem !important; /* text-base size on all screens */
    line-height: 1.5rem !important;
}

/* Remove default underline from label */
label.answer:hover {
    text-decoration: none !important;
}

/* Add underline only to text spans, not icons */
label.answer:hover .text-left {
    text-decoration: underline;
}

/* Icon styles - no underline ever */
.answer .no-underline {
    text-decoration: none !important;
}

.answer .no-underline:hover {
    text-decoration: none !important;
}

.answer .no-underline * {
    text-decoration: none !important;
}
</style>