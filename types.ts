export interface Question {
    id: number;
    question: string;
    answers: Answer[];
    completed?: boolean;
}

export interface Answer {
    id: number | string;
    answer: string;
    correct: boolean;
    selected?: boolean;
}

export interface UserQuizAnswer {
    questionId: number;
    answerId: number | string;
    correct: boolean;
    ts: number;
}

export enum SettlementType {
    CITY = "miasto",
    VILLAGE = "wieś",
}

export interface UserData {
    email: string;
    emailDomain?: string;
    firstName: string;
    lastName: string;
    phone_prefix: string;
    phone: string;
    dob?: string;
    gender?: 'kobieta' | 'mezczyzna' | 'inna' | string;
    mkey?: string;
    postalCode?: string;
    city?: string;
    settlementType?: SettlementType;
    consents: UserConsents;
    time: string | null;
    partners: string[];
}

export interface UserConsents {
    [key: string]: boolean;
    prop22: boolean;
    prop23: boolean;
    prop24: boolean;
    prop25: boolean;
    prop26: boolean;
    prop27: boolean;
    prop28: boolean;
}

export interface ImageOption {
    label: string;
    img: string;
    class?: string;
}

export interface IconOption {
    label: string;
    icon?: string;
    iconPosition?: 'before' | 'after';
}

export interface RegistrationQuestion {
    prop?: string
    props?: {
        postalCode?: string | { prop: string, inisTrack?: string },
        city?: string | { prop: string, inisTrack?: string },
        street?: string | { prop: string, inisTrack?: string },
        houseNumber?: string | { prop: string, inisTrack?: string },
        apartmentNumber?: string | { prop: string, inisTrack?: string }
    }
    type: 'select' | 'radio' | 'inputs'
    class?: string
    question?: string,
    filter: ((consents: string[], user: UserData) => boolean),
    options?: string[] | ImageOption[] | IconOption[],
    inisTrack?: string,
    onAnswer?: (answer: string | Record<string, unknown>) => Promise<void>,
    image?: {
        src: string,
        class?: string
    }
}