<template>
    <UModal v-model="modals.orange" :ui="{ width: 'w-full sm:max-w-sm', container: 'items-start sm:items-center pt-16 sm:pt-0' }">
        <div class="relative bg-white rounded-2xl px-8 pt-10 pb-8 font-barlow text-center shadow-lg">
            <div
                class="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#3d2060] flex items-center justify-center cursor-pointer text-white text-lg font-bold select-none"
                @click="modals.orange = false">
                ✕
            </div>
            <p class="text-xl leading-relaxed text-gray-800">
                Już niedługo <strong>skontaktuje</strong>&nbsp;się z&nbsp;Tobą<br>
                <strong class="text-orange-500">Sklep&nbsp;Orange</strong><br>
                w&nbsp;celu przedstawienia dopasowanej oferty
            </p>
        </div>
    </UModal>
</template>
<script setup lang="ts">
const modals = useModals();
const trigger = useOrangeTrigger();
const route = useRoute();

watch(() => route.path, (path) => {
    if (path === '/finish' && trigger.value) {
        modals.value.orange = true;
        trigger.value = false;
    }
}, { immediate: true });
</script>
