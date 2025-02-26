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
                    <li>INIS Sp. z o.o., z siedzibą w Rybniku (44 – 200), ul. Raciborska 35a</li>
                    <li>Vente Unique, 9-11 Rue Jacquard, 93310 Le Pré Saint Gervais, Francja</li>
                    <li>one56media Szymon Surma, Kiczory 12a, 34-483 Kiczory</li>
                    <li>Wewo Media Sp. z o.o., ul. Nowogrodzka 64/43, 02-014 Warszawa</li>
                    <li>Great Call Sp. z o.o. S.K.A. ul. Fordońska, 40 85-719 Bydgoszcz</li>
                    <li>Great Call Sp. z o.o. S.K.A. ul. Fordońska, 40 85-719 Bydgoszcz</li>
                    <li>HelpHero Sp. z o.o. al. Jerozolimskie 146A, 02-305 Warszawa.</li>
                </ul>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.partners = false">Zamknij</a>
        </div>
    </UModal>
</template>
<script setup lang="ts">
const modals = useModals();
</script>