<template>
    <UFormGroup label="Telefon" name="phone" required>
        <div class="flex w-full items-center gap-2">
            <USelectMenu
                         v-if="phonePrefix"
                         id="phone_prefix"
                         v-model="phonePrefix"
                         name="phone_prefix"
                         class="z-10 w-[80px]"
                         selected-icon=""
                         :trailing="false"
                         size="md"
                         variant="outline"
                         type="tel"
                         value-attribute="id"
                         @change="emit('blur')"
                         color="gray"
                         :ui-menu="{
                            background: '!bg-white dark:bg-gray-800',
                            height: 'max-h-[100px] h-full',
                            option: {
                                selected: 'pe-0'
                            },
                            color: {
                                white: {
                                    outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset !ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
                                },
                                gray: {
                                    outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset !ring-gray-300 dark:ring-gray-700',
                                },
                            },
                        }"
                         :ui="{
                            rounded: 'rounded-xl',

                            option: {
                                selected: 'pe-0'
                            },
                            color: {
                                white: {
                                    outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
                                },
                                gray: {
                                    outline: 'shadow-sm bg-transparent dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset !ring-gray-300 dark:ring-gray-700',
                                },
                            },
                        }"
                         :options="[
                            { label: '+48', id: '+48' },
                            { label: '+49', id: '+49' },
                            { label: '+44', id: '+44' },
                            { label: '...', id: null }]" />
            <UInput
                    placeholder="Wpisz swój nr telefonu"
                    @update:model-value="updInput"
                    :value="props.modelValue"
                    ref="phoneInput"
                    type="tel" title="phone"
                    autocomplete="tel"
                    :ui="{ padding: { sm: phonePrefix ? 'pl-[75px]' : '' } }"
                    @blur="emit('blur')"
                    size="md"
                    variant="outline"
                    data-testid="form-phone"
                    class="flex-1"
                    color="gray" />
        </div>
    </UFormGroup>
</template>
<script setup lang="ts">
import type { size } from 'lodash-es';
import { IMask } from 'vue-imask';


const emit = defineEmits(['update:modelValue', 'blur']);

export interface Props {
    modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {});
const phonePrefix = defineModel<string>("phone_prefix");

const phoneInput = ref();
const mask = ref();


const lastPrefix = ref(phonePrefix.value);

watch(phonePrefix, (val) => {
    if (val !== null) {
        lastPrefix.value = val;
    } else if (mask.value.masked.value !== '') {
        emit('update:modelValue', lastPrefix.value + mask.value.masked.value);
        mask.value.updateValue();
    }
});

const updInput = () => {
    mask.value.updateValue();
    emit('update:modelValue', mask.value.masked.value);
}
onMounted(() => {
    const input = phoneInput.value.$el.querySelector('input');
    
    // Handle autocomplete before mask processes the value
    input.addEventListener('input', (e: InputEvent) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        
        // Only process autocomplete if prefix is selected (not null/...)
        // When prefix is null, user can type full number with country code
        if (phonePrefix.value === null) {
            return;
        }
        
        // Check if autocomplete filled in a value with country code
        // Formats: "+XX XXX XXX XXX" or "+XXXXXXXXXXX"
        if (value && value.startsWith('+') && value.length > 10) {
            // Remove all spaces to get clean digits
            const cleanValue = value.replace(/\s+/g, '');
            
            // Extract all digits after the +
            const digitsOnly = cleanValue.substring(1); // Remove the +
            
            // Polish phone numbers have 9 digits, extract last 9 digits as the number
            if (digitsOnly.length >= 11) { // At least 2 digits for prefix + 9 for number
                const number = digitsOnly.slice(-9); // Last 9 digits
                const prefixDigits = digitsOnly.slice(0, -9); // Everything before last 9 digits
                const prefix = '+' + prefixDigits;
                
                // Check if prefix is valid (+ followed by 2-4 digits)
                if (/^\+\d{2,4}$/.test(prefix)) {
                    phonePrefix.value = prefix;
                    // Set only the number part, let the mask format it
                    target.value = number;
                }
            }
        }
    }, true); // Use capture phase to run before mask
    
    mask.value = IMask(input, {
        mask: [
            {
                mask: '000 000 000',
                lazy: false,
            },
            {
                mask: '+00 000 000 000',
                lazy: false,
            }
        ],
        dispatch: (_, dynamicMasked) => {
            return phonePrefix.value ? dynamicMasked.compiledMasks[0] : dynamicMasked.compiledMasks[1];
        }

    });
});

</script>
<style lang="scss" scoped></style>