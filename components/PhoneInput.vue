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
    mask.value = IMask(phoneInput.value.$el.querySelector('input'), {
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