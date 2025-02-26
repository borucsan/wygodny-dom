<template>
  <main class="bg-[#f7f4f8] md:mx-2">
    <div class="flex flex-col items-center max-w-[950px] w-full h-full mx-auto justify-between min-h-screen">
      <header class="flex flex-col md:flex-row bg-bg w-full justify-between items-center px-5" v-if="route.name !== 'index'">
        <a href="/" class="flex">
          <img src="assets/images/5.png" />
        </a>
            <img src="assets/images/head2v2.png" />
        
      </header>
      <NuxtPage class="flex flex-col flex-1" />
      <footer
              class="w-full flex flex-col gap-3 md:flex-row justify-between font-barlow text-xs bg-footer text-text1 px-2 md:px-10 py-2 border-t border-text1">
        <ul class="flex justify-between md:justify-start md:gap-3 flex-1 md:flex-auto">
          <a href="#" @click.prevent="modals.rules = true">Regulamin</a>
          <a href="#" @click.prevent="modals.privacy = true" class="text-center">Polityka prywatności</a>
          <a href="#" @click.prevent="modals.data = true" class="text-center">Zasady Przetwarzania Danych</a>
        </ul>
        <div class="col-span-2 flex justify-center">Serwis wykorzystuje pliki cookies. <a href="#"
             @click.prevent="modals.privacy = true">Więcej</a></div>
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
  "Quiz to pieniądz"
)
useEnv().value = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const modals = useModals();

useHead({
  title: title.value,
  htmlAttrs: {
    lang: "pl",
  },
  bodyAttrs: {
    class: 'bg-bg'
  },
  meta: [
    {
      name: "apple-mobile-web-app-title",
      content: "Quiz to pieniądz",
    },
    {
      name: "application-name",
      content: "Quiz to pieniądz",
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
    { rel: "icon", type: 'image/png', sizes: "16x16", href: "/favicon-32x32.png" },
    { rel: "mask-icon", color: "#D6CEB7", href: "/safari-pinned-tab.svg" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  script: [
    useEnv().value === 'prod' ? {
      type: "text/javascript",
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52LFFJB4');
`
    } : {},
    useEnv().value === 'prod' ? {
      type: "text/javascript",
      innerHTML: ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nv9xjjpw3s");
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
})(window, document, 'dataLayer', '04f96e0e-75b3-4bc5-9c67-8f516b24267e');
`
    } : {},
    useEnv().value === 'prod' ? {
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
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52LFFJB4"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`
    } : {}
  ]
})
const actionId = useActionId();
const cookie = useCookie('actionId', {
    maxAge: 5184000,
    domain: "quiz-to-pieniadz.pl",
});

const route = useRoute();
actionId.value = cookie.value || Date.now().toString();

</script>
