<template>
    <VDatePicker
                v-model="date"
                :mode="props.mode"
                :disabled-dates="props.disabledDates"
                :max-date="props.maxDate"
                @blur="emit('blur')"
                v-bind="{ ...attrs, ...$attrs }" />
</template>

<script setup lang="ts">
import type { DatePickerDate } from 'v-calendar/dist/types/src/use/datePicker.js';
const props = defineProps({
    modelValue: {
        type: [Date, Object] as PropType<DatePickerDate | null>,
        default: null
    },
    mode: {
        type: String as PropType<'single' | 'range'>,
        default: 'date'
    },
    disabledDates: {
        type: Array as PropType<(Date | string | {start: Date | null, end: Date | null})[]>,
        default: () => []
    },
    maxDate: {
        type: Date,
        default: null
    }
})

const emit = defineEmits(['update:model-value', 'close', 'blur'])

const date = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:model-value', value)
        emit('close')
    }
})

const attrs = {
    transparent: true,
    borderless: true,
    highlight: {
        color: 'orange',
        fillMode: 'light',
    },
    color: 'primary',
    'is-dark': { selector: 'html', darkClass: 'dark' },
    'first-day-of-week': 2,
}
</script>


<style>
.vc-primary {
    --vc-accent-50: rgb(var(--color-primary-50));
    --vc-accent-100: rgb(var(--color-primary-100));
    --vc-accent-200: rgb(var(--color-primary-200));
    --vc-accent-300: rgb(var(--color-primary-300));
    --vc-accent-400: rgb(var(--color-primary-400));
    --vc-accent-500: #c8c3a1;
    --vc-accent-600: #c8c3a1;
    --vc-accent-700: rgb(var(--color-primary-700));
    --vc-accent-800: rgb(var(--color-primary-800));
    --vc-accent-900: rgb(var(--color-primary-900));
}
</style>
