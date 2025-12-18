<template>
    <section class="flex flex-col items-center justify-center h-full">
        <TransitionFade :duration="500">
            <div class="flex flex-col items-center p-5">
                <div class="text-center font-bold mb-5 text-xl">Dziękujemy za potwierdzenie udziału w konkursie.</div>
                <div class="text-center font-bold mb-1 text-xl">Zapraszamy do skorzystania z kodów rabatowych:</div>
                <div class="text-center font-bold mb-12 text-xl"><UButton color="black" size="md" to="https://zrabatowani.pl/#oferty">KLIKNIJ TUTAJ</UButton> </div>
            </div>


        </TransitionFade>
    </section>
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

    if (route.query.actionId) {
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
            prop33: state.value.answer.replace(/\s/gm, " "),
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