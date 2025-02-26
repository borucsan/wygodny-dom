<template>
    <div class="w-full">
        <section class="content-main">
            <div class="max-w-[793px]">
                <!-- <p class="pre-question">
                    
                </p> -->
                <div class="">
                    <TransitionFade :duration="{ enter: 500, leave: 200 }">
                        <UForm ref="form1"
                               class="bg-content-paper grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(0,250px))] md:justify-center gap-x-6 md:gap-y-4"
                               :state="state" :validate="validateWithVuelidate1"
                               @submit="onSubmit1" v-if="show && step === 1">
                            <div class="flex md:col-span-2 mb-5 text-md font-barlow font-bold text-center justify-center">Wypełnij formularz zgłoszeniowy:</div>
                            <UFormGroup label="Imię" name="firstName" required>
                                <UInput
                                        v-model="state.firstName" placeholder="Wpisz swoje imię" color="gray"
                                        ref="firstNameInput"
                                        data-testid="form-firstName"
                                        @blur="blurEvents.firstName" />
                            </UFormGroup>
                            <UFormGroup label="Nazwisko" name="lastName">
                                <UInput
                                        v-model="state.lastName" color="gray" placeholder="Wpisz swoje nazwisko"
                                        ref="lastNameInput"
                                        @blur="blurEvents.lastName" />
                            </UFormGroup>
                
                            <div class="flex flex-col content-center font-barlow text-xxs leading-tight col-span-2">
                                <!-- <div class="h-9 flex items-center pl-4 mt-2 md:mt-0 mb-3">Uwaga! Podanie błędnych danych
                                    uniemożliwi
                                    przyznanie nagrody.
                                </div> -->
                                <div class="mb-4 pl-4"><span
                                          class="ms-0.5 text-red-500 dark:text-red-400">*&nbsp;</span>pole obowiązkowe
                                </div>
                            </div>
                            <div class="flex justify-center md:col-span-2">
                                <UButton type="submit" color="gray" :loading="loading" data-testid="form-submit1">
                                    Dalej
                                </UButton>
                            </div>
                        </UForm>

                        <UForm ref="form2"
                               class="bg-content-paper grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(0,232px))] md:justify-center gap-x-6 md:gap-y-4"
                               :state="state" :validate="validateWithVuelidate2"
                               @submit="onSubmit2" v-if="show && step === 2">
                            <div class="flex md:col-span-2 mb-5 text-sm text-left font-barlow font-bold">Wypełnij formularz zgłoszeniowy:</div>
                                <UFormGroup label="E-mail" name="email" type="email" required>
                                <UInput data-testid="form-email" v-model="state.email"
                                        placeholder="Wpisz swój e-mail" color="gray" @blur="blurEvents.email" />
                            </UFormGroup>
                      
                            <div class="flex flex-col content-center font-barlow text-xxs leading-tight">
                                <!-- <div class="pb-1 hidden md:block">&nbsp;</div> -->
                                <div class="h-9 flex items-center pl-4 mt-2 md:mt-0 mb-3">Uwaga! Podanie błędnych danych
                                    uniemożliwi
                                    przyznanie nagrody.
                                </div>
                                <div class="mb-4 pl-4"><span
                                          class="ms-0.5 text-red-500 dark:text-red-400">*&nbsp;</span>pole obowiązkowe
                                </div>
                            </div>
                            <div class="flex justify-center md:col-span-2">&nbsp;</div>
                            <div class="flex justify-center md:col-span-2">
                                <UButton type="submit" color="gray" :loading="loading" data-testid="form-submit2">
                                    Zapisz
                                </UButton>
                            </div>
                        </UForm>
                        <UForm ref="form3"
                               class="bg-content-paper grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(0,232px))] md:justify-center gap-x-6 md:gap-y-4"
                               :state="state" :validate="validateWithVuelidate3"
                               @submit="onSubmit3" v-if="show && step === 3">
                            <div class="flex md:col-span-2 mb-5 text-sm text-left font-barlow font-bold">Wypełnij formularz zgłoszeniowy:</div>
                            <DateField v-model="state.dob" ref="birthdayInput" @blur="blurEvents.dob"
                                       :disabled-dates="[{ start: maxDate, end: null }]" :max-date="maxDate"
                                       :min-date="minDate" @update:modelValue="updDate" />
                      
                            <div class="flex flex-col content-center font-barlow text-xxs leading-tight">
                                <!-- <div class="pb-1 hidden md:block">&nbsp;</div> -->
                                <div class="h-9 flex items-center pl-4 mt-2 md:mt-0 mb-3">Uwaga! Podanie błędnych danych
                                    uniemożliwi
                                    przyznanie nagrody.
                                </div>
                                <div class="mb-4 pl-4"><span
                                          class="ms-0.5 text-red-500 dark:text-red-400">*&nbsp;</span>pole obowiązkowe
                                </div>
                            </div>
                            <div class="flex justify-center md:col-span-2">&nbsp;</div>
                            <div class="flex justify-center md:col-span-2">
                                <UButton type="submit" color="gray" :loading="loading" data-testid="form-submit2">
                                    Dalej
                                </UButton>
                            </div>
                        </UForm>
                        <UForm ref="form3"
                               class="bg-content-paper grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(0,232px))] md:justify-center gap-x-6 md:gap-y-4"
                               :state="state" :validate="validateWithVuelidate4"
                               @submit="onSubmit" v-if="step === 4">
                            <div class="flex md:col-span-2 mb-5 text-sm text-center font-barlow font-bold">Wypełnij formularz zgłoszeniowy:</div>
                            <PhoneInput v-model="state.phone" v-model:phone_prefix="state.phone_prefix"
                                        @blur="blurEvents.phone" />
                            <div class="flex flex-col content-center font-barlow text-xxs leading-tight">
                                <!-- <div class="pb-1 hidden md:block">&nbsp;</div> -->
                                <div class="h-9 flex items-center pl-4 mt-2 md:mt-0 mb-3">Uwaga! Podanie błędnych danych
                                    uniemożliwi
                                    przyznanie nagrody.
                                </div>
                                <div class="mb-4 pl-4"><span
                                          class="ms-0.5 text-red-500 dark:text-red-400">*&nbsp;</span>pole obowiązkowe
                                </div>
                            </div>
                            <div class="flex justify-center md:col-span-2">&nbsp;</div>
                            <div class="flex justify-center md:col-span-2">
                                <UButton type="submit" color="gray" :loading="loading" data-testid="form-submit3">
                                    Zapisz
                                </UButton>
                            </div>
                        </UForm>
                    </TransitionFade>
                </div>
            </div>
        </section>
        <div class="bg-footer py-8 px-10 min-h-400 md:min-h-[170px] w-full">
        <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <section
                     id="consents"
                     class="flex flex-col items-center font-barlow text-xs font-medium text-text1 leading-[1.2] dark:text-gray-200"
                     v-if="show2 && step === 4">
                <div id="consentsContent" class="flex flex-col gap-4 mb-4">
                    <div v-if="!state.consents.prop22" class="text-red-500 text-sn">Aby kontynuować, musisz potwierdzić
                        zapoznanie się z Regulaminem, Polityką
                        Prywatności
                        oraz je zaakceptować.</div>
                    <UCheckbox id="allConsents" data-testid="check-all-consents" :ui="{ label: 'font-bold' }"
                               label="Zaznacz wszystkie zgody" v-model="allConsents" />
                    <UCheckbox v-model="state.consents.prop23" name="prop23"
                               label="Wyrażam zgodę na przetwarzanie moich danych osobowych przez Salelifter Sp. z o.o. w celu marketingowym." />

                    <UCheckbox v-model="state.consents.prop24" name="prop24"
                               label="Wyrażam zgodę na otrzymywanie informacji handlowych od Salelifter Sp. z o.o. za pośrednictwem wiadomości e-mail." />
                    <UCheckbox v-model="state.consents.prop25" name="prop25"
                               label="Wyrażam zgodę na otrzymywanie informacji handlowych od Salelifter Sp. z o.o. za pośrednictwem telefonu (połączenia głosowe/SMS/MMS)." />
                    <UCheckbox v-model="state.consents.prop26" name="prop26">
                        <template #label>
                            <div>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu marketingowym (w tym na
                                profilowanie) przez <a href="#"  @click.prevent="modals.partners = true"
                                   class="underline">partnerów</a> handlowych oraz na udostępnienie partnerom moich danych
                                osobowych we wskazanym celu.</div>
                        </template>
                    </UCheckbox>
                    <UCheckbox v-model="state.consents.prop27" name="prop27"
                               label="Wyrażam zgodę na otrzymywanie informacji handlowych od partnerów, którym dane będą udostępnione za pośrednictwem telefonu (połączenia głosowe/SMS/MMS)." />
                    <UCheckbox v-model="state.consents.prop28" name="prop28"
                               label="Wyrażam zgodę na otrzymywanie informacji handlowych od partnerów, którym dane będą udostępnione za pośrednictwem wiadomości e-mail." />
                    <UCheckbox id="prop22" v-model="state.consents.prop22" name="prop22">
                        <template #label>
                            <div>Zapoznałem się z treścią <a
                                   href="#"
                                   @click.prevent="modals.rules = true"
                                   class="underline">Regulaminu konkursu</a> oraz
                                <a
                                   href="#"
                                   @click.prevent="modals.privacy = true"
                                   class="underline">Polityki
                                    prywatności</a> i je akceptuję. Chcę wziąć udział w konkursie.
                            </div>
                        </template>
                    </UCheckbox>
                </div>
                <RulesSection />
            </section>
            <section v-else-if="show2 && (step === 1 || step === 2 || step === 3)">
                <p class="text-text1 font-barlow text-sm">
                    Grafika użyta na stronie pochodzi z legalnych źródeł i ma charakter wyłącznie ilustracyjny. Apple Inc. nie jest związane z organizatorem promocji ani nie wspiera i nie sponsoruje konkursu.
                <br><br>
                Aby wziąć udział w konkursie, należy spełnić kilka prostych warunków. Uczestnik powinien wypełnić formularz zgłoszeniowy, podając swoje dane osobowe, takie jak imię, adres e-mail datę urodzenia oraz telefon. Następnie należy odpowiedzieć na 3 pytania konkursowe, najszybsza osoba, która udzieli poprawnych odpowiedzi - wygrywa. Zwycięzca konkursu zostanie poinformowany o wygranej drogą telefoniczną. Każde kolejne zgłoszenie tego samego adresu e-mail powoduje nadpisanie poprzednich odpowiedzi. Konkurs skierowany jest wyłącznie do osób pełnoletnich. Nagrodą jest iPhone 16, a uczestnictwo w konkursie jest bezpłatne.
                </p>
            </section>
        </TransitionFade>
    </div>
        <UModal v-model="prop22Modal" class="z-[999]" data-testid="rules-confirm-dialog" id="rules-confirm-dialog">
            <div class="p-4 font-barlow text-center" style="width: 100%; max-width: 500px;">
                Aby kontynuować, musisz zaakceptować Regulamin.<br>
                Zaznacz poniżej "Potwierdzam, że zapoznałem się z treścią
                Regulaminu i go akceptuję."
                <br><br>
                <a class="uppercase" href="#" data-testid="rules-confirm-dialog-close"
                   @click.prevent="prop22Modal = false">Zamknij</a>
            </div>
        </UModal>
    </div>

</template>
<script setup lang="ts">
import useVuelidate, { type ValidationRuleWithoutParams } from '@vuelidate/core'
import { required, email, helpers, minLength, and } from '@vuelidate/validators'
import { isAfter, isBefore, isEqual, parse, sub } from 'date-fns'
import { capitalizeFirstLetter, capitalizeAllWords } from '~/utils';
import type { _padding } from '#tailwind-config/theme';
import { type UserQuizAnswer, type UserData } from '~/types';
import DateField from '~/components/DateField.vue';
import { IMask } from 'vue-imask';

declare global {
    interface Window {
        inisConversion: Record<string, unknown> | Record<string, unknown>[];
        _mgq: any;
    }
}

const blurEvents = ref({
    firstName: (val: string) => {
        state.value.firstName = capitalizeFirstLetter(state.value.firstName ?? '')
        if (state.value.firstName.length > 0) {
            useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_form_name'
                },
            ]);
        }
    },
    lastName: (val: string) => {
        state.value.lastName = capitalizeAllWords(state.value.lastName ?? '')
        if (state.value.lastName.length > 0) {
            useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_form_surname'
                },
            ]);
        }
    },
    phone: (val: string) => {
        if (state.value.phone.length > 0) {
            useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_form_phone'
                },
            ]);
        }
    },
    email: (val: string) => {
        if (state.value.email.length > 0) {
            useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_form_email'
                },
            ]);
        }
    },
    dob: (val: string) => {
        v3.value.dob.$touch();
        if (state.value?.dob?.length) {
            useInis360([
                {
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_form_date'
                },
            ]);
        }
    },
    gender: (val: string) => {
        useInis360([
            {
                actionId: actionId.value,
                advId: 'ef9b1ff32314ba272bc3c9100d474386',
                model: 'cpl_form_gender'
            }]
        );
    }
});

const localAnswers = ref<UserQuizAnswer[]>([]);
const state = useUserData();
const modals = useModals();
const utm = useUTM();
const loading = ref(false);

const minDate = sub(new Date(), { years: 150 });
const maxDate = sub(new Date(), { years: 18 });

const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };
const form = ref();
const firstNameInput = ref();
const lastNameInput = ref();
const firstNameMask = ref();
const lastNameMask = ref();
const step = ref(1);
const show = ref(true);
const show2 = ref(true);

/* const hasUtm = computed(() => {
    return utm.value.utm_source || utm.value.utm_medium || utm.value.utm_term;
}); */


const validateDate: ValidationRuleWithoutParams = {
    $validator: (value) => {
        const date = parse(value, 'dd-MM-yyyy', 12);
        return date.toString() !== 'Invalid Date' && (isBefore(date, maxDate) || isEqual(date, maxDate)) && (isAfter(date, minDate) || isEqual(date, minDate));
    },
    $message: "Uczestnik musi być pełnoletni.",
}

const phonePattern = /^\d{11}$/;
const actionId = useActionId();

const validPhone: ValidationRuleWithoutParams = {
    $validator: (value) => {
        return phonePattern.test((state.value.phone_prefix + value).replace(/[^0-9]/g, ""));
    },
    $message: "Proszę podać prawidłowy nr tel.",
};

const rules1 = {
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
};

const rules2 = {
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
};

const rules3 = {
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
    dob: { required: helpers.withMessage("Uczestnik musi być pełnoletni.", required), validateDate },
};
const rules4 = {
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
    phone: { required: helpers.withMessage("Proszę podać prawidłowy nr tel.", required,), validPhone },
    dob: { required: helpers.withMessage("Uczestnik musi być pełnoletni.", required), validateDate },
};

const genders = [{
    value: 'kobieta',
    label: 'Kobieta'
}, {
    value: 'mezczyzna',
    label: 'Mężczyzna'
}, {
    value: 'inna',
    label: 'Inna'
}]

const v1 = useVuelidate<UserData>(rules1, state.value);
const v2 = useVuelidate<UserData>(rules2, state.value);
const v3 = useVuelidate<UserData>(rules3, state.value);
const v4 = useVuelidate<UserData>(rules3, state.value);

const updDate = (val: string) => {
    state.value.dob = val;
    v3.value.dob.$touch();
}

async function validateWithVuelidate1() {
    v1.value.$touch()
    await v1.value.$validate()
    return v1.value.$errors.map((error: any) => ({
        message: error.$message,
        path: error.$propertyPath,
    }))
}
async function validateWithVuelidate2() {
    v2.value.$touch()
    await v2.value.$validate()
    return v2.value.$errors.map((error: any) => ({
        message: error.$message,
        path: error.$propertyPath,
    }))
}
async function validateWithVuelidate3() {
    v3.value.$touch()
    await v3.value.$validate()
    return v3.value.$errors.map((error: any) => ({
        message: error.$message,
        path: error.$propertyPath,
    }))
}
async function validateWithVuelidate4() {
    v4.value.$touch()
    await v4.value.$validate()
    return v4.value.$errors.map((error: any) => ({
        message: error.$message,
        path: error.$propertyPath,
    }))
}

defineExpose({
    validate: async () => {
        await form.value.validate()
    }
})

//type Schema = z.output<typeof schema>
const prop22Modal = ref(false);
const showResult = ref<"success" | "error" | null>(null);

const scrollTo = (target: string) => {
    const element = document.querySelector(`#${target}`);
    console.debug(element);
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}

const allConsents = computed<boolean>({
    get: () => {
        return Object.values(state.value.consents).every((c) => c === true);
    },
    set: (val) => {
        for (const key in state.value.consents) {
            state.value.consents[key] = val;
        }
    },
});

async function onSubmit1() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 2;
    }, 300);
}
async function onSubmit2() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 3;
    }, 300);
}

async function onSubmit3() {
    show.value = false;
    show2.value = false;
    setTimeout(() => {
        show.value = true;
        show2.value = true;
        step.value = 4;
    }, 300);
}

async function onSubmit() {
    if (state.value.consents.prop22 === false) {
        prop22Modal.value = true;
        scrollTo("consents");
        useInis360([
            {
                actionId: actionId.value,
                advId: 'ef9b1ff32314ba272bc3c9100d474386',
                model: 'cpl_form_permision_reminder'
            },
        ]);
        return false;
    }
    loading.value = true;
    const group = Object.keys(state.value.consents).some(key => {
        return key !== 'prop22' && state.value.consents[key]
    }) ? 1 : 2;

    const postData = new FormData();
    postData.append("mtd", "add");
    postData.append("firstName", state.value.firstName);
    postData.append("lastName", state.value.lastName);
    postData.append("email", state.value.email);
    postData.append("phone", state.value.phone);
    postData.append("phone_prefix", state.value.phone_prefix);
    postData.append("phone_full", `${state.value.phone_prefix}${state.value.phone}`.replace(/[^0-9]/g, ""));
    postData.append("dob", state.value.dob?.toString() ?? "");
    postData.append("consents", JSON.stringify(state.value.consents));
    postData.append("answers", JSON.stringify(localAnswers.value));
    postData.append("group", group.toString());
    postData.append("prop17", "quiz-to-pieniadz.pl");
    postData.append("prop10", actionId.value);
    if (utm.value.utm_source) {
        postData.append("prop62", utm.value.utm_source);
    }
    if (utm.value.utm_medium) {
        postData.append("prop63", utm.value.utm_medium);
    }
    if (utm.value.utm_term) {
        postData.append("prop64", utm.value.utm_term);
    }
    try {
        if (useEnv().value === 'prod') {
            console.log('prod mgid');
            window._mgq.push(["MgSensorInvoke", "register"]);
        }
        const response: { status: "success" | "error"; key?: string } =
            await $fetch("/inc/api.php", {
                method: "POST",
                body: postData,
                ...options,
            });

        if (response.status === "success") {
            showResult.value = "success";
            state.value.mkey = response.key;
            state.value.firstName = "";
            state.value.lastName = "";
            state.value.phone = "";
            state.value.phone_prefix = "+48";
            state.value.dob = "";
            const allConsents = Object.values(state.value.consents).every((c) => c === true);
            const inisData = []
            if (allConsents) {
                inisData.push({
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_sprzedaz'
                });
            } else {
                inisData.push({
                    actionId: actionId.value,
                    advId: 'ef9b1ff32314ba272bc3c9100d474386',
                    model: 'cpl_singleoptin'
                });
            }

            useInis360(inisData);
            await navigateTo("/continue");

        } else {
            throw new Error();
        }
    } catch (e) {
        showResult.value = "error";
    } finally {
        loading.value = false;
    }
}

onMounted(async () => {
    useInis360([
        {
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            model: 'cpl_formularz'
        },
    ]);
    firstNameMask.value = IMask(firstNameInput.value.$el.querySelector('input'), {
        mask: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]?[a-zżźćńółęąś]*$/
    });
    lastNameMask.value = IMask(lastNameInput.value.$el.querySelector('input'), {
        mask: 'R[r]',
        blocks: {
            R: {
                mask: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]?[a-zżźćńółęąś^\-]*$/
            },
            r: {
                mask: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{1}[a-zżźćńółęąś]*$/,
            }
        }
    });
});

</script>