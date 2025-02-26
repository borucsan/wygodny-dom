<template>
    <div>
        <section :class="['content-main', { '!justify-stretch': !completed }]">
            <TransitionFade :duration="500">
                <div class="max-w-[793px] w-full" v-if="show">
                    <p class="pre-question" v-if="completed">
                    </p>

                    <div class="bg-content-paper">

                        <UForm v-if="!completed" ref="form" class="w-full md:p-8 p-4" :state="state"
                               :validate="validateWithVuelidate"
                               @submit="onSubmit">
                            <div class="text-center mb-5 text-lg">Dziękujemy za potwierdzenie udziału w
                                naszym
                                konkursie!</div>
                            <p class="font-barlow text-lg">
                                TBD
                            </p>

                            <UFormGroup name="answer" class="mb-4" label=" ">
                                <template #hint>
                                    <p class="text-sm">{{ state.answer.length }} / {{ appConfig.answerMaxLength }}</p>
                                </template>
                                <template #default>
                                    <UTextarea placeholder="Twoja odpowiedz" :maxlength="appConfig.answerMaxLength"
                                    color="gray"
                                               :rows="5" v-model="state.answer" resize autoresize />
                                </template>
                            </UFormGroup>
                            <div class="flex justify-center md:col-span-2">
                                <UButton type="submit" color="gray" :loading="loading">
                                    Zatwierdź
                                </UButton>
                            </div>

                        </UForm>
                        <div v-else-if="completed" class="flex flex-col items-center p-5">
                            <!-- <div class="text-center text-lg">
                                Najwięcej dobrych odpowiedzi udzieliły te 3 województwa:
                            </div>
                            <div class="w-full max-w-[80%]">
                                <ClientOnly>
                                    <apexchart width="100%" height="200px" type="bar" ref="chart"
                                               :options="chartOptions" :series="series">
                                    </apexchart>
                                </ClientOnly>
                            </div>
                            <div class="text-center mb-5 text-lg">
                                Najwięcej dobrych odpowiedzi udzielili mieszkańcy:
                            </div>

                            <div class="bg-[#bab5a2] min-w-[85px] text-center py-1 rounded-sm mb-5">{{ data?.most ??
                                "Miast" }}</div> -->
                            <div class="text-center font-bold mb-5 text-lg">Dziękujemy serdecznie za udział
                                w naszym
                                konkursie! Mamy
                                nadzieję, że&nbsp;zobaczymy się także w przyszłych edycjach.</div>
                        </div>
                    </div>
                </div>
            </TransitionFade>
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
import { useVuelidate } from '@vuelidate/core';
import { helpers, maxLength, required } from '@vuelidate/validators';
import { appConfig } from '../const';
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { assignIn } from 'lodash-es'
const route = useRoute();
const { mkey } = route.query;
const actionId = useActionId();

const breakpoints = useBreakpoints(breakpointsTailwind);
const md = ref(true);
const loading = ref(false);

watch(() => breakpoints.active().value, () => {
    md.value = breakpoints.greater("md").value;
});

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };
const form = ref();
const chart = ref();
const state = ref({
    answer: "",
});
const completed = ref(true);
const show = ref(true);

const { data } = await useFetch<{ categories: string[], data: number[], most: string }>("/inc/api.php", {
    query: {
        mtd: "getData",

    }, ...options,
})

const rules = {
    answer: { required: helpers.withMessage("Proszę podać odpowiedz", required), email: helpers.withMessage("Proszę podać odpowiedz", maxLength(appConfig.answerMaxLength)) },
};

const v = useVuelidate(rules, state.value)

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

const categories = data.value?.categories ?? ["Mazowieckie", "Śląskie", "Wielkopolskie"];

const defaults = {
    colors: ['#e3ddc7', '#d5d0ba', '#c7c2ae'],
    chart: {
        id: 'data',
        background: 'transparent',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,
    },
    dataLabels: {
        formatter: function (val: string, opts: any) {
            return categories[opts.dataPointIndex];
        },
        style: {
            fontSize: '16px',
            fontFamily: 'Barlow',
            fontWeight: 'medium',
            colors: ['#000'],
        },
    },
    states: {
        hover: {
            filter: {
                type: 'none',
            }
        },
    },

    tooltip: {
        enabled: false,
    },
    xaxis: {
        show: false,
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        categories: categories,
    },
    yaxis: {
        show: false,
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
};

const chartOptions = computed(() => {
    return assignIn(
        defaults,
        {
            dataLabels: {
                formatter: function (val: string, opts: any) {
                    return categories[opts.dataPointIndex];
                },
                style: {
                    fontSize: md.value ? '16px' : '12px',
                    fontFamily: 'Barlow',
                    fontWeight: 'medium',
                    colors: ['#000'],
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '90%',
                    distributed: true,
                    dataLabels: {
                        position: md.value ? 'bottom' : 'center',
                        maxItems: 100,
                        hideOverflowingLabels: true,
                        orientation: md.value ? 'horizontal' : 'vertical',
                    }
                }
            },
        }
    );
});

const series = [
    {
        name: 'states',
        data: data.value?.data ?? [5479294, 4300858, 3452792],
    },
];

onMounted(async () => {
    if (!mkey) {
        await navigateTo("/")
    }

    if(route.query.actionId) {
        actionId.value = route.query.actionId as string;
    }

    md.value = window.innerWidth > 768;
    useInis360({
        actionId: actionId.value,
        advId: 'ef9b1ff32314ba272bc3c9100d474386',
        userHash: mkey as string,
        model: 'cpl_doubleoptin'
    });
});

async function onSubmit() {
    try {
        loading.value = true;
        const data = {
            prop33: state.value.answer.replace(/\s/gm," "),
        };
        const postData = new FormData();
        postData.append("mtd", "upd");
        postData.append("mkey", mkey as string);
        postData.append("data", JSON.stringify(data));
        useInis360({
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            userHash: mkey as string,
            model: 'cpl_zakonczony_konkurs'
        });
        const response: { status: "success" | "error"; userExists?: boolean } =
            await $fetch("/inc/api.php", {
                method: "POST",
                body: postData,
                ...options,
            });

        if (response.status === "success") {
            show.value = false;

            setTimeout(async () => {
                completed.value = true;
                show.value = true;
            }, 500);
            return "success";
        } else {
            throw new Error();
        }

    } catch (e) {
        return "error";
    } finally {
        loading.value = false;
    }
}
</script>