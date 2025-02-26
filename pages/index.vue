<template>

    <div>
        <section class="content-sg w-full relative">
        <div class="flex items-center justify-between px-5">
            <img src="assets/images/5.png" />
            <img src="assets/images/head2.png" />
        </div>
            <div class=" text-xl sm:text-2xl md:text-[30px] leading-none font-barlow py-5 px-2 md:px-0 md:py-10 flex flex-col justify-center md:pl-24 lg:pl-36 text-center md:text-left">
                <p><strong>Rozdajemy iPhone 16</strong><br><br>
                    za najszybsze, poprawne odpowiedzi konkursowe!
                </p>
            </div>
            <div class="flex justify-center items-start">
                <NuxtLink class="uppercase text-xl md:text-2xl font-bold text-white bg-[#d696bc] flex justify-center items-center tracking-[0.2em] w-[322px] h-[2.5em] shadow-[1px_5px_5px_0px_rgba(0,0,0,0.22)]"
                data-testid="start-quiz"
                   to="/register">WCHODZĘ DO GRY</NuxtLink>
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

const actionId = useActionId();
actionId.value = Date.now().toString();
const cookie = useCookie('actionId', {
    maxAge: 5184000,
    path: "https://www.quiz-to-pieniadz.pl/"
});
cookie.value = actionId.value;
const utm = useUTM();
const route = useRoute();

onMounted(() => {
    const { utm_campaign, utm_source, utm_medium, utm_term } = route.query;
    utm.value.utm_campaign = utm_campaign as string;
    utm.value.utm_source = utm_source as string;
    utm.value.utm_medium = utm_medium as string;
    utm.value.utm_term = utm_term as string;
    console.debug('utm', utm.value);
    useInis360(
        {
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            model: 'suc_strona_glowna'
        }
    );
});

</script>