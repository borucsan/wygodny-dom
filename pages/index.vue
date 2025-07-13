<template>
    <section>
        <div class="flex justify-end md:hidden" v-if="show && step !== 1"><img class="" src="/assets/images/bg3.png"></div>
        <TransitionFade :duration="{ enter: 500, leave: 200 }">
            <div class="flex flex-col gap-4 " v-if="show && step === 1">
                <div class="px-4 sm:px-6 lg:px-16">
                    <div class="pt-4 pb-8 lg:my-12 w-20 lg:w-[126px]">
                        <img src="/assets/images/head.svg" alt="Wygodny dom" />
                    </div>
                    <h1 class="font-poppins text-xl lg:text-4xl">Rozdajemy aż <strong>10 x Air Fryer</strong>!</h1>
                    <h3 class="font-poppins text-lg tracking-tighter mb-12">...za najszybsze, poprawne odpowiedzi konkursowe!</h3>
                    <UForm ref="form1"
                           class="w-full max-w-[430px]"
                           :state="state"
                           @submit="start">
                        <div class="flex justify-start">
                            <UButton type="submit" color="black" size="md" :loading="loading"
                                     data-testid="form-submit1">
                                Wchodzę do gry
                            </UButton>
                        </div>
                    </UForm>
                </div>
                <div class="flex md:hidden"><img class="w-full"
                         src="/assets/images/bg2.png" alt=""></div>
            </div>
            
            <UForm ref="form2"
                   class="lg:pt-24 px-4 sm:px-6 lg:px-16"
                   :state="state" :validate="validateWithVuelidate1"
                   @submit="onSubmit1" v-if="show && step === 2">
                <div class="w-full max-w-[430px] flex flex-col gap-12 mb-8">
                    <h2 class="text-base lg:text-2xl font-medium">Wypełnij formularz zgłoszeniowy</h2>
                    <UFormGroup label="Imię" name="firstName" required>
                        <UInput
                                v-model="state.firstName" placeholder="Wpisz swoje imię" size="md" color="gray"
                                variant="outline"
                                :ref="firstNameInputRef"
                                data-testid="form-firstName"
                                autocomplete="given-name"
                                @blur="blurEvents.firstName" />
                    </UFormGroup>
                    <UFormGroup label="Nazwisko" name="lastName">
                        <UInput
                                v-model="state.lastName" size="md" color="gray" variant="outline"
                                placeholder="Wpisz swoje nazwisko"
                                :ref="lastNameInputRef"
                                autocomplete="family-name"
                                @blur="blurEvents.lastName" />
                    </UFormGroup>
                </div>
                <div class="flex justify-start w-full max-w-[430px] mb-6">
                    <UButton type="submit" color="black" size="md" :loading="loading" data-testid="form-submit2">
                        Dalej
                    </UButton>
                </div>
            </UForm>
            <UForm ref="form3"
                   class="lg:pt-24 px-4 sm:px-6 lg:px-16"
                   :state="state" :validate="validateWithVuelidate2"
                   @submit="onSubmit2" v-if="show && step === 3">
                <div class="w-full max-w-[430px] flex flex-col gap-12 mb-8">
                    <h2 class="text-base lg:text-2xl font-medium">Wypełnij formularz zgłoszeniowy</h2>
                    <UFormGroup name="email" type="email" required class="mb-10" label="E-mail">
                        <UInput data-testid="form-email" v-model="state.email"
                                placeholder="Wprowadź adres e-mail" size="md" color="gray" variant="outline"
                                autocomplete="email"
                                @blur="blurEvents.email" />
                    </UFormGroup>
                </div>
                <div class="flex justify-start w-full max-w-[430px] mb-6">
                    <UButton type="submit" color="black" size="md" :loading="loading" data-testid="form-submit2">
                        Dalej
                    </UButton>
                </div>
            </UForm>
            <UForm ref="form4"
                   class="lg:pt-24 px-4 sm:px-6 lg:px-16"
                   :state="state" :validate="validateWithVuelidate3"
                   @submit="onSubmit3" v-if="show && step === 4">
                <div class="w-full max-w-[430px] flex flex-col gap-12 mb-8">
                    <h2 class="text-base lg:text-2xl font-medium">Wypełnij formularz zgłoszeniowy</h2>
                    <DateField v-model="state.dob" ref="birthdayInput" @blur="blurEvents.dob"
                               :disabled-dates="[{ start: maxDate, end: null }]" :max-date="maxDate"
                               :min-date="minDate" @update:modelValue="updDate" />
                </div>
                <div class="flex justify-start w-full max-w-[430px] mb-6">
                    <UButton type="submit" color="black" size="md" :loading="loading" data-testid="form-submit2">
                        Dalej
                    </UButton>
                </div>
            </UForm>
            <UForm ref="form5"
                   class="lg:pt-24 px-4 sm:px-6 lg:px-16"
                   :state="state" :validate="validateWithVuelidate4"
                   @submit="onSubmit" v-if="show && step === 5">
                <div class="w-full max-w-[430px] flex flex-col gap-12 mb-8">
                    <h2 class="text-base lg:text-2xl font-medium">Wypełnij formularz zgłoszeniowy</h2>
                    <PhoneInput v-model="state.phone" v-model:phone_prefix="state.phone_prefix"
                                @blur="blurEvents.phone" />
                </div>
                <div class="flex justify-start w-full max-w-[430px] mb-6">
                    <UButton type="submit" color="black" size="md" :loading="loading" data-testid="form-submit2">
                        Dalej
                    </UButton>
                </div>
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
                               <UCheckbox v-model="state.consents.prop26" name="prop26" :indeterminate="isPartnersIndeterminate" @change="selectAllPartners">
                        <template #label>
                            <div class="flex items-center">
                                <div>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu marketingowym (w tym na
                                    profilowanie) przez partnerów handlowych oraz na udostępnienie partnerom moich danych
                                    osobowych we wskazanym celu.</div>
                                    <UButton variant="link" :icon="partnersShow ? 'i-material-symbols:keyboard-arrow-up' : 'i-material-symbols:keyboard-arrow-down'" class="w-5 h-5 text-black dark:text-gray-200 hover:text-black hover:dark:text-gray-200" @click="partnersShow = !partnersShow"/>
                            </div>
                        </template>
                    </UCheckbox>
                    <TransitionSlide :duration="{ enter: 200, leave: 200 }" >
                            <div class="pl-7 flex flex-col gap-2" v-if="partnersShow">
                                <UCheckbox :label="partner.label" v-for="partner in partners" :key="partner.id" :model-value="state.partners?.includes(partner.name)" @update:model-value="selectPartner(partner)" />
                            </div>
                    </TransitionSlide>
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
            </UForm>
        </TransitionFade>
    </section>
</template>
<script setup lang="ts">
import useVuelidate, { type ValidationRuleWithoutParams } from '@vuelidate/core'
import { required, email, helpers, minLength, and } from '@vuelidate/validators'
import { isAfter, isBefore, isEqual, parse, sub } from 'date-fns'
import type { UserData } from '~/types';
import { capitalizeAllWords, capitalizeFirstLetter } from '~/utils';
import { IMask } from 'vue-imask';
import { last } from 'lodash-es';
import { partners } from '~/const';

const actionId = useActionId();
actionId.value = Date.now().toString();
const cookie = useCookie('actionId', {
    maxAge: 5184000,
    // path: "https://www.quiz-to-pieniadz.pl/"
});
cookie.value = actionId.value;
const utm = useUTM();
const route = useRoute();
const state = useUserData();
const modals = useModals();
const minDate = sub(new Date(), { years: 150 });
const maxDate = sub(new Date(), { years: 18 });
const loading = ref(false);
const step = ref<number>(1);
const show = ref(true);
const config = useRuntimeConfig();
const options = { baseURL: config.public.apiBase };
const prop22Modal = ref(false);
const showResult = ref<"success" | "error" | null>(null);
const partnersShow = ref(false);

const firstNameInput = ref();
const lastNameInput = ref();
const firstNameMask = ref();
const lastNameMask = ref();

const validateDate: ValidationRuleWithoutParams = {
    $validator: (value) => {
        const date = parse(value, 'dd-MM-yyyy', 12);
        return date.toString() !== 'Invalid Date' && (isBefore(date, maxDate) || isEqual(date, maxDate)) && (isAfter(date, minDate) || isEqual(date, minDate));
    },
    $message: "Uczestnik musi być pełnoletni.",
}

const phonePattern = /^\d{11}$/;

const validPhone: ValidationRuleWithoutParams = {
    $validator: (value) => {
        return phonePattern.test((state.value.phone_prefix + value).replace(/[^0-9]/g, ""));
    },
    $message: "Proszę podać prawidłowy nr tel.",
};

const updDate = (val: string) => {
    state.value.dob = val;
    v3.value.dob.$touch();
}

const rules1 = {
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
};
const rules2 = {
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
};
const rules3 = {
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
    dob: { required: helpers.withMessage("Uczestnik musi być pełnoletni.", required), validateDate },
};

const rules4 = {
    email: { required: helpers.withMessage("Proszę podać prawidłowy e-mail", required), email: helpers.withMessage("Proszę podać prawidłowy e-mail", email) },
    dob: { required: helpers.withMessage("Uczestnik musi być pełnoletni.", required), validateDate },
    firstName: { required: helpers.withMessage("Proszę podać prawidłowe imię", and(required, minLength(1))) },
    lastName: {},
    phone: { required: helpers.withMessage("Proszę podać prawidłowy nr tel.", required,), validPhone },
};

const scrollTo = async (target: string) => {
    await nextTick();
    const element = document.querySelector(`#${target}`);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}

const allConsents = computed<boolean>({
    get: () => {
        return Object.values(state.value.consents).every((c) => c === true);
    },
    set: (val) => {
        for (const key in state.value.consents) {
            state.value.consents[key] = val;
        }
        if (!state.value.partners) {
            state.value.partners = [];
        }
        
        if (val) {
            state.value.partners = partners.map((partner) => partner.name);
        } else {
            state.value.partners = [];
        }
    },
});

const isPartnersIndeterminate = computed(() => {
    return state.value.partners?.length > 0 && state.value.partners?.length < partners.length;
});

const selectPartner = (partner: { name: string }) => {
    if (!state.value.partners) {
        state.value.partners = [];
    }
    
    if (state.value.partners.includes(partner.name)) {
        state.value.partners = state.value.partners.filter((p) => p !== partner.name);
    } else {
        state.value.partners.push(partner.name);
    }

    if(state.value.partners.length > 0) {
        state.value.consents.prop26 = true;
    } else {
        state.value.consents.prop26 = false;
    }
}

const selectAllPartners = (val: boolean) => {
    if (!state.value.partners) {
        state.value.partners = [];
    }
    
    if(val) {
        state.value.partners = partners.map((partner) => partner.name);
    } else {
        state.value.partners = [];
    }
}
const firstNameInputRef = (el: unknown) => {
    firstNameInput.value = el;
    if (firstNameInput?.value?.$el) {
        firstNameMask.value = IMask(firstNameInput?.value?.$el.querySelector('input'), {
            mask: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]?[a-zżźćńółęąś]*$/
        });
    }
}
const lastNameInputRef = (el: unknown) => {
    lastNameInput.value = el;
    if (lastNameInput?.value?.$el) {
        lastNameMask.value = IMask(lastNameInput?.value?.$el.querySelector('input'), {
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
    }
}

const v1 = useVuelidate<UserData>(rules1, state.value);
const v2 = useVuelidate<UserData>(rules2, state.value);
const v3 = useVuelidate<UserData>(rules3, state.value);
const v4 = useVuelidate<UserData>(rules4, state.value);

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

async function start() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 2;
    }, 300);
}

async function onSubmit1() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 3;
    }, 300);
}
async function onSubmit2() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 4;
    }, 300);
}
async function onSubmit3() {
    show.value = false;
    setTimeout(() => {
        show.value = true;
        step.value = 5;
    }, 300);
}

async function onSubmit() {
    if (state.value.consents.prop22 === false) {
        prop22Modal.value = true;
        await scrollTo("consentsContent");
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
    postData.append("group", group.toString());
    postData.append("prop17", "odbierznagrode.pl");
    postData.append("prop10", actionId.value);
    postData.append("partners", JSON.stringify(state.value.partners));
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
        try {
            if (useEnv().value === 'prod') {
                console.log('prod mgid');
                (window as any)._mgq.push(["MgSensorInvoke", "register"]);
            }
        }
        catch (e) {
            console.log('prod mgid error', e);
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
            await navigateTo("/lead_done");
            return "success";

        } else {
            throw new Error();
        }
    } catch (e) {
        showResult.value = "error";
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    const { utm_campaign, utm_source, utm_medium, utm_term } = route.query;
    utm.value.utm_campaign = utm_campaign as string;
    utm.value.utm_source = utm_source as string;
    utm.value.utm_medium = utm_medium as string;
    utm.value.utm_term = utm_term as string;
    console.debug('utm', utm.value);
    useInis360(
        {
            actionId: actionId.value,
            advId: 'ef9b1ff32314ba272bc3c9100d474386',
            model: 'suc_strona_glowna'
        }
    );
    
});

</script>