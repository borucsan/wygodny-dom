<template>
    <section class="flex flex-col justify-center !px-2 lg:pt-24">
        <div class="flex justify-end md:hidden"><img class="" src="/assets/images/bg3.png"></div>
        <h3 class="font-poppins text-xl tracking-tighter mb-12 text-center">Wyświetlimy kilka pytań od
                Partnerów Serwisu</h3>
        
        <div class="flex justify-center w-full my-12">
            <UButton type="button" color="black" size="md" :disabled="selected" @click="navigateTo('/continue')">
                Dalej
            </UButton>
        </div>
    </section>
</template>
<script setup lang="js">
const user = useUserData();

onMounted(() => {
    const consents = Object.keys(user.value.consents)
        .filter(p => user.value.consents[p] === true);

    if (consents.length === 1 && consents[0] === 'prop22') {
        navigateTo('/quiz');
    }
});
</script>