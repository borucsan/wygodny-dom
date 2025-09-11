<template>

        <section class="flex flex-col items-center justify-center py-10">
            <div class="max-w-[793px] w-full">
                <div class="min-h-[90px]">
                    <TransitionFade :duration="{ enter: 200, leave: 0 }">
                        
                        <p class="pre-question text-center" v-if="completed && show">
                            <br>
                            <span class=" text-xl text-center"><strong>BRAWO!</strong> Konkurs ukończony. Twój czas to {{user.time}}!</span>
                        </p>

                    </TransitionFade>
                </div>
                <div :class="['bg-content-paper', { 'flex flex-col': completed && show }]">
                    <TransitionFade :duration="{ enter: 500, leave: 200 }">
                        <div class="text-center mb-5 text-lg font-barlow h-full"
                             v-if="completed && show">
                            Na adres: <span class="underline">{{ user.email }}</span> wysłaliśmy Ci prośbę o potwierdzenie udziału.<br>
                            Wejdź na swoją skrzynkę pocztową i Wygraj!
                            <div class="flex items-center justify-center">
                            <a :href="currentEsp.link" class="flex items-center min-h-[70px]"  v-if="currentEsp" target="_blank">
                                <span class="underline">Zaloguj się >></span>
                                <img :src="currentEsp.img" alt="" class="ml-2 max-w-[150px]">
                            </a>
                        </div>
                            
                            <span class="text-sm">PS. Jeżeli nie masz emaila w&nbsp;skrzynce głównej, sprawdź inne foldery i&nbsp;spam.</span>

                        </div>

                    </TransitionFade>
                </div>
            </div>
        </section>

</template>
<script setup lang="ts">
import { useVuelidate, type ValidationRuleWithoutParams } from '@vuelidate/core';
import { capitalizeFirstLetter } from '~/utils';
import { SettlementType, type UserData } from '~/types';
import { IMask } from 'vue-imask';

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };
const user = useUserData();
const form = ref();
const state = useUserData();
const completed = ref(true);
const loading = ref(false);
const show = ref(true);
const postalInput = ref();
const cityInput = ref();
const localKey = ref<string | undefined>();

const validPostal: ValidationRuleWithoutParams = {
    $validator: (value) => {
        return value ? /^\d{2}-\d{3}$/.test(value) : true;
    },
    $message: "Kod niepoprawny.",
};

const rules = {
    postalCode:
        { validPostal },
};

const esp = [
    {
        domains: ['interia.pl', 'interia.eu', 'poczta.fm', 'interia.com', 'intmail.pl', 'interiowy.pl', 'adresik.net', 'pisz.to', 'pacz.to', 'ogarnij.se'],
        img: '/img/interia.png',
        link: 'https://poczta.interia.pl/'
    },
    {
        domains: ['gmail.com', 'googlemail.com'],
        img: '/img/gmail.png',
        link: 'https://mail.google.com/'
    },
    {
        domains: ['wp.pl'],
        img: '/img/wp.png',
        link: 'https://poczta.wp.pl/'
    },
    {
        domains: ['op.pl', 'onet.pl', 'poczta.onet.pl', 'onet.eu', 'onet.com.pl', 'autograf.pl', 'buziaczek.pl', 'spoko.pl', 'poczta.onet.eu', 'amorki.pl', 'opoczta.pl'],
        img: '/img/onet.png',
        link: 'https://poczta.onet.pl'
    },
    {
        domains: ['o2.pl'],
        img: 'img/o2.png',
        link: 'https://poczta.o2.pl'
    }
]

const currentEsp = computed(() => {
    return esp.find((e) => e.domains.includes(user.value.email?.split('@')[1] ?? ''));
});

const actionId = useActionId();

const postalMask = ref();
const cityMask = ref();

const v = useVuelidate<UserData>(rules, state.value)

async function validateWithVuelidate() {
    v.value.$touch()
    await v.value.$validate()
    return v.value.$errors.map((error: any) => ({
        message: error.$message,
        path: error.$propertyPath,
    }))
}

defineExpose({
    validate: async () => {
        await form.value.validate()
    }
});

const updPostalInput = () => {
    postalMask.value.updateValue();
    state.value.postalCode = postalMask.value?.masked.value;
}

async function onSubmit() {
    try {
        loading.value = true;

        const data = {
            prop8: state.value.postalCode,
            prop9: state.value.city,
            prop34: state.value.settlementType,
        };
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
        show.value = false;
        if (response.status === "success") {
            setTimeout(async () => {
                show.value = true;
                completed.value = true;
                useInis360([
                    {
                        actionId: actionId.value,
                        advId: 'ef9b1ff32314ba272bc3c9100d474386',
                        model: 'cpl_info_doubleoptin',
                    },
                ]);
            }, 500);

        } else {
            throw new Error();
        }

    } catch (e) {
        return "error";
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    if (useEnv().value !== 'dev' && !user.value.mkey) {
        await navigateTo("/")
    }
    localKey.value = user.value.mkey;
    user.value.mkey = undefined;
    useInis360([
                    {
                        actionId: actionId.value,
                        advId: 'ef9b1ff32314ba272bc3c9100d474386',
                        model: 'cpl_info_doubleoptin',
                    },
                ]);

});

</script>