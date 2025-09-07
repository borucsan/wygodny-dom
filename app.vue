<template>
  <main class="flex justify-end min-h-screen items-center md:pl-8 pl-4 pr-4 md:pr-0">
    <div
         class="grid grid-cols-1 md:justify-end md:grid-cols-[minmax(0,761px)_minmax(0,550px)] auto-rows-max py-4 gap-4 sm:gap-8 md:gap-12 w-full z-10">
      <NuxtPage
                class="row-span-2 flex flex-col w-full bg-[#FFFFFF99] backdrop-blur-xl rounded-2xl" />
      <div class="hidden md:flex items-start">
        <img src="/assets/images/bg.png" alt="Background" class="w-full h-auto object-contain" />
      </div>
      <footer class="text-xxxs pb-2 md:pr-8">
        <p class="text-black font-barlow text-xss mb-1"> Grafika użyta na stronie pochodzi z legalnych źródeł i ma
          charakter wyłącznie poglądowy. Nagrodą jest Frytkownica beztłuszczowa PHILIPS Essential Ovi XL HD9270/90 Air
          Fryer. Dla 10 użytkowników, którzy odpowiedzą poprawnie, w najkrótszym czasie, na 3 pytania konkursowe.
          Marka Philips nie jest związane z organizatorem promocji ani nie wspiera i nie sponsoruje konkursu.<br>Aby
          wziąć udział w konkursie, należy spełnić kilka prostych warunków. Uczestnik powinien wypełnić formularz
          zgłoszeniowy, podając swoje dane osobowe, takie jak imię, adres e-mail, datę urodzenia oraz telefon.
          Zwycięzcy konkursu zostaną poinformowani o wygranej drogą telefoniczną. Każde kolejne zgłoszenie tego samego
          adresu e-mail powoduje nadpisanie poprzednich odpowiedzi. Konkurs skierowany jest wyłącznie do osób
          pełnoletnich. Uczestnictwo w konkursie jest bezpłatne.</p>
        <div class="flex flex-col gap-1 mt-1 font-barlow">
          <ul class="flex gap-2 flex-1 md:flex-auto text-xxxs font-medium underline">
            <a href="#" @click.prevent="modals.rules = true">Regulamin</a>
            <a href="#" @click.prevent="modals.privacy = true" class="text-center">Polityka prywatności</a>
            <a href="#" @click.prevent="modals.data = true" class="text-center">Zasady Przetwarzania Danych</a>
            <a href="#" @click.prevent="modals.partners = true" class="text-center">Partnerzy</a>
          </ul>
          <div class="flex text-xxxs self-end">Serwis wykorzystuje pliki cookies. <a @click.prevent="modals.privacy = true"
               href="#" class="font-medium underline">Więcej</a></div>
        </div>
      </footer>
    </div>
    <RulesModal />
    <PrivacyModal />
    <DataModal />
    <PartnersModal />
  </main>
</template>
<script setup lang="ts">
import { ref, } from "vue";
import { useEnv } from "./composables/states";


const title = ref(
  "Wygodny dom"
)
useEnv().value = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const modals = useModals();

useHead({
  title: title.value,
  htmlAttrs: {
    lang: "pl",
  },
  bodyAttrs: {
    class: 'custom-gradient'
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Wygodny dom",
    },
    {
      name: "application-name",
      content: "Wygodny dom",
    },
    {
      name: "msapplication-TileColor",
      content: "#D6CEB7",
    },
    {
      name: "theme-color",
      content: "#D6CEB7",
    }
  ],
  link: [
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: 'image/png', sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: 'image/png', sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "icon", type: 'image/png', sizes: "96x96", href: "/favicon-96x96.png" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  script: [
    useEnv().value === 'prod' ? {
      type: "text/javascript",
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZ6R7NZ4');
`
    } : {},
    useEnv().value === 'prod' && false ? {
      type: "text/javascript",
      innerHTML: ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sjcw6r5u28");
`
    } : {},
    useEnv().value === 'prod' ? {
      type: "text/javascript",
      innerHTML: `(function(window, document, dataLayerName, id) {
window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f="; SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
tags.async=!0,tags.src="https://inis.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
!function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
})(window, document, 'dataLayer', '1765e4f8-0a74-4d64-ac1c-4a6ab44aa060');
`
    } : {},
    useEnv().value === 'prod' && false ? {
      type: "text/javascript",
      tagPosition: 'bodyClose',
      innerHTML: `(function() {
        var d = document, w = window;
        w.MgSensorData = w.MgSensorData || [];
        w.MgSensorData.push({
            cid:502689,
            project: "a.mgid.com"
        });
        var l = "a.mgid.com";
        var n = d.getElementsByTagName("script")[0];
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        var dt = !Date.now?new Date().valueOf():Date.now();
        s.src = "https://" + l + "/mgsensor.js?d=" + dt;
        n.parentNode.insertBefore(s, n);
    })();`
    } : {}
  ],
  noscript: [
    useEnv().value === 'prod' ? {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ6R7NZ4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`
    } : {}
  ]
})
const actionId = useActionId();
const cookie = useCookie('actionId', {
  maxAge: 5184000,
  domain: "wygodny-dom.pl",
});

const route = useRoute();
actionId.value = cookie.value || Date.now().toString();

</script>

<style>
.custom-gradient {
  background: linear-gradient(247.07deg, #46CACA -8.7%, #9EE1E2 25.58%, #CAEDEE 65.42%, #F6F8FA 96.18%);
}
</style>
