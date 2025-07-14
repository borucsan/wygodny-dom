<template>
    <UModal v-model="modals.partners" class="z-[999] w-full" :ui="{
        width: 'w-full sm:max-w-[80vw]',
        height: 'h-full sm:max-h-[90vh]'
    }">
        <div class="p-1 md:p-10 font-barlow text-center flex flex-col overflow-hidden">
            <div class="overflow-y-scroll px-4">
                <h2 class="text-2xl font-bold">Partnerzy</h2>
                <br><br>
                <ul class="flex flex-col gap-4 list-decimal mb-4 text-left pl-6 ml-4">
                    <li v-for="partner in partners.filter(p => p.enabled)" :key="partner.id"  v-html="partner.label"></li>
                </ul>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.partners = false">Zamknij</a>
        </div>
    </UModal>
</template>
<script setup lang="ts">
import { partners } from '@/const';

const modals = useModals();

</script>