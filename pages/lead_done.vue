<template>
    <section class="flex flex-col justify-center !px-2 lg:pt-24">
        <div class="flex justify-end lg:hidden pt-6 pb-3"><img class="" src="/assets/images/phones2.png"></div>
        <h3 class="font-poppins text-xl tracking-tighter mb-12 text-center">Wyświetlimy kilka nieobowiązkowych pytań od
                Partnerów Serwisu</h3>
        
        <div class="flex justify-center w-full my-12">
            <UButton type="button" color="black" size="md" :disabled="selected" @click="navigateTo('/continue')">
                Dalej
            </UButton>
        </div>
    </section>
</template>
<script setup lang="js">

</script>