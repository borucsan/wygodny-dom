<template>
    <div class="flex flex-col">
        <wniosker-app></wniosker-app>
        <div><strong>Ważna informacja:</strong> Twoje dane są przekazywane bezpośrednio do Loando Direct Sp. z o.o. Nie zapisujemy ani
            nie archiwizujemy danych wpisanych w formularzu.</div>
        <div class="flex justify-center w-full my-12">
            <UButton type="button" color="black" size="md" @click="$emit('go-next')">
                Nie, dziękuję
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
  'go-next': []
}>()
</script>
