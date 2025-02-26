<template>
  <UFormGroup label="Data urodzenia" name="dob" eager-validation required>
    <UInput
            placeholder="Wpisz swoją datę urodzenia"
            ref="dateInput"
            @update:model-value="updInput"
            :value="props.modelValue"
            color="gray"
            :ui="{ wrapper: 'w-full', }"
            inputmode="numeric"
            @blur="emit('blur')"
            data-testid="form-dob"
            </UInput>
<!--       <UPopover class="absolute top-[2px] right-2 z-10" focus
                :popper="{ placement: 'bottom-start' }">
        <UButton
                 icon="i-material-symbols:calendar-month-outline-sharp"
                 size="sm"
                 color="gray"
                 variant="link" />
        <template #panel="{ close }">
          <DatePicker :max-date="props.maxDate"
                      :disabled-dates="props.disabledDates"
                      :value="props.modelValue ? parse(props.modelValue, 'dd-MM-yyyy', 12) : undefined"
                      @update:model-value="updDate" @close="close" />
        </template>
      </UPopover> -->
  </UFormGroup>
</template>
<script setup lang="ts">
import { format, parse } from 'date-fns';
import { IMask } from 'vue-imask';
const dateInput = ref();

const emit = defineEmits(['update:modelValue', 'blur'])

export interface Props {
  maxDate?: Date;
  minDate?: Date;
  disabledDates?: (Date | { start: Date | null, end: Date | null })[];
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  maxDate: undefined,
  minDate: undefined,
});

const mask = ref()
const updInput = () => {
  mask.value.updateValue();
  emit('update:modelValue', mask.value.masked.value);
}
const updDate = (val: Date) => {
  const d = format(val, 'dd-MM-yyyy');
  mask.value.updateValue();
  emit('update:modelValue', d);
  dateInput.value.$el.querySelector('input').focus();
  dateInput.value.$el.querySelector('input').blur();
}

onMounted(() => {
  mask.value = IMask(dateInput.value.$el.querySelector('input'), {
    mask: Date,
    min: props.minDate,
    max: props.maxDate,
    pattern: 'dd-MM-yyyy',
    format: (date: any | Date) => {
      return format(date, 'dd-MM-yyyy').trim();
    },
    parse: (str: string | Date) => parse(str as string, 'dd-MM-yyyy', 12),
    lazy: false,
    blocks: {
      yyyy: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 2030,
        placeholderChar: 'y',
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        placeholderChar: 'm',
      },
      dd: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        placeholderChar: 'd',
      }
    }
  });
})

</script>