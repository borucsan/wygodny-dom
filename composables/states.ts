import type { UserData, UserQuizAnswer } from "~/types";

export const useUserData = () => useState<UserData>('user', () => ({
    email: "",
    emailDomain: "",
    firstName: "",
    lastName: "",
    phone_prefix: "+48",
    phone: "",
    dob: "",
    gender: "",
    consents: {
        prop22: false,
        prop23: false,
        prop24: false,
        prop25: false,
        prop26: false,
        prop27: false,
        prop28: false
    },
    time: null,
}))

export const useUserAnswers = () => useState<UserQuizAnswer[]>('answers', () => [])

export const useUserKey = () => useState<string>('mkey', () => "")

export const useEnv = () => useState<'dev' | 'prod' | string>('env', () => 'dev')

export const useModals = () => useState<{rules: boolean, privacy: boolean, data: boolean, cookies: boolean, partners: boolean}>('modals', () => ({
    rules: false,
    privacy: false,
    data: false,
    cookies: false,
    partners: false
}))

export const useUTM = () => useState<{utm_source: string, utm_medium: string, utm_campaign: string, utm_term: string, utm_content: string}>('utm', () => ({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
}));

export const useActionId = () => useState<string>('actionId', () => '');