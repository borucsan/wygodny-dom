<template>
    <div class="w-full">
        <section class="content-main">
            <div class="max-w-[813px] w-full">
                <div class="min-h-[90px]">

                    <p class="pre-question pt-2 pb-8">
                    </p>

                </div>
                <div :class="['bg-content-paper flex flex-col pt-16 pb-20 md:pt-2 md:pb-2 px-2']"></div>
            </div>
        </section>
    </div>
</template>
<script setup lang="js">
onMounted(async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
    await navigateTo("/quiz");
});
</script>