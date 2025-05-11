<template>
    <UModal v-model="modals.partners" class="z-[999] w-full" :ui="{
        width: 'w-full sm:max-w-[80vw]',
        height: 'h-full sm:max-h-[90vh]'
    }">
        <div class="p-1 md:p-10 font-barlow text-center flex flex-col overflow-hidden">
            <div class="overflow-y-scroll px-4">
                <h2 class="text-2xl font-bold">Partnerzy</h2>
                <br><br>
                <ul class="flex flex-col gap-4 list-decimal mb-4 text-left">
                    <li v-for="partner in partners.filter(p => p.enabled)" :key="partner.id"  v-html="partner.label"></li>
                </ul>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.partners = false">Zamknij</a>
        </div>
    </UModal>
</template>
<script setup lang="ts">
const modals = useModals();

const partners = ref([
    {
        id: 1,
        name: "INIS Sp. z o.o.",
        label: 'INIS Sp. z o.o., z siedzibą w Rybniku (44 – 200), ul. Raciborska 35a',
        enabled: true,
    },
    {
        id: 2,
        name: "Vente Unique",
        label: 'Vente Unique, 9-11 Rue Jacquard, 93310 Le Pré Saint Gervais, Francja',
        enabled: true,
    },
    {
        id: 3,
        name: "one56media Szymon Surma",
        label: 'one56media Szymon Surma, Kiczory 12a, 34-483 Kiczory',
        enabled: true,
    },
    {
        id: 4,
        name: "Wewo Media Sp. z o.o.",
        label: 'Wewo Media Sp. z o.o., ul. Nowogrodzka 64/43, 02-014 Warszawa',
        enabled: true,
    },
    {
        id: 5,
        name: "Great Call Sp. z o.o. S.K.A.",
        label: 'Great Call Sp. z o.o. S.K.A. ul. Fordońska, 40 85-719 Bydgoszcz',
        enabled: true,
    },
    {
        id: 6,
        name: "HelpHero Sp. z o.o.",
        label: 'HelpHero Sp. z o.o. al. Jerozolimskie 146A, 02-305 Warszawa.',
        enabled: false,
    },
    {
        id: 7,
        name: "Sales Masters Sp. z o.o.",
        label: 'Sales Masters Sp. z o.o.,ul. Franciszka Ksawerego Dmochowskiego 4 /2, 00-427 Warszawa',
        enabled: true,
    },
    {
        id: 8,
        name: "Salvum Wojciech Dudkiewicz",
        label: 'Salvum Wojciech Dudkiewicz, ul. Konecka 41 97-330 Sulejów',
        enabled: false,
    }
])
</script>