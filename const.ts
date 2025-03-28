import { parse, sub } from "date-fns";
import type { Question, RegistrationQuestion } from "./types";

const months = new Array(12).fill(0).map((_, i) => {
    const date = new Date("2024-01-01");
    date.setMonth(date.getMonth() + i);
    return date.toLocaleString('default', { month: 'long' });
});

export const appConfig = {
    answerMaxLength: 600
}

export const quiz: { title: string, questions: Question[] } = {
    "title": "",
    "questions": [
        {
            "id": 1,
            "question": "Który z wymienionych systemów operacyjnych NIE jest używany w smartfonach?",
            "answers": [
                {
                    "id": "A",
                    "answer": "Android",
                    "correct": false
                },
                {
                    "id": "B",
                    "answer": "iOS",
                    "correct": false
                },
                {
                    "id": "C",
                    "answer": "Windows Phone",
                    "correct": false
                },
                {
                    "id": "D",
                    "answer": "Linux Mint",
                    "correct": true
                }
            ]
        },
        {
            id: 2,
            question: "Który przycisk na telefonie służy do zakończenia połączenia?",
            answers: [
                {
                    id: "A",
                    answer: "Zielona słuchawka",
                    correct: false
                },
                {
                    id: "B",
                    answer: "Czerwona słuchawka",  //"mały ma",
                    correct: true
                },
                {
                    id: "C",
                    answer: "Przycisk głośności",
                    correct: false
                },
                {
                    id: "D",
                    answer: "Przycisk aparatu",
                    correct: false
                }
            ]
        },
        {
            id: 3,
            question: "Co robimy, gdy telefon się rozładuje?",
            answers: [
                {
                    id: "A",
                    answer: "Wkładamy go do lodówki",
                    correct: false
                },
                {
                    id: "B",
                    answer: "Podłączamy do ładowarki",
                    correct: true
                },
                {
                    id: "C",
                    answer: "Potrząsamy nim mocno",  //"należy się za darmo",
                    correct: false
                },
                {
                    id: "D",
                    answer: "Naciskamy wszystkie przyciski naraz",
                    correct: false
                }
            ]
        },
    ]
}


export const coRegistrationQuestions: RegistrationQuestion[] = [
    {
        type: "select",
        question: 'Kiedy kończy Ci się ubezpieczenie OC samochodu?',
        prop: 'prop65',
        filter: (consensts) => ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)),
        options: [...months, 'nie mam auta'],
        inisTrack: 'cpl_coreg_1_OC'
    },
    {
        type: "radio",
        question: `Szukamy 500 osób do testowania najnowszych aparatów słuchowych!<br>
Chcesz wziąć udział w bezpłatnych badaniach słuchu i wypróbować nowoczesny aparat słuchowy? (Liczba miejsc ograniczona).
`,
        prop: 'prop67',
        filter: (consensts, user) => ['prop22', 'prop26', 'prop27'].every(c => {
            const today = new Date();
            const maxDate = sub(today, { years: 60 });
            const date = parse(user.dob as string, 'dd-MM-yyyy', 12);
            return consensts.includes(c) /* && date.toString() !== 'Invalid Date' && (isBefore(date, maxDate) || isEqual(date, maxDate)) */; }),
        options: ['tak, chętnie', 'nie jestem zainteresowany/a'],
    },
    {
        type: "radio",
        question: `Co by Cię przekonało do zakupu pakietu medycznego?`,
        prop: 'prop71',
        filter: (consensts, user) => ['prop22', 'prop26', 'prop27'].every(c => {
            const today = new Date();
            const maxDate = sub(today, { years: 60 });
            const date = parse(user.dob as string, 'dd-MM-yyyy', 12);
            return consensts.includes(c) /* && date.toString() !== 'Invalid Date' && (isBefore(date, maxDate) || isEqual(date, maxDate)) */; }),
        options: ['najniższa rynkowa cena', 'brak kolejek', 'pakiet zawierający teleporady oraz wizyty stacjonarne', 'nic by mnie nie przekonało'],
    },
     {
        type: "radio",
        question: 'Czy kiedykolwiek brałeś/aś pożyczkę gotówkową lub kredyt konsumpcyjny?',
        prop: 'prop40',
        filter: (consensts) => true, // ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)),
        options: ["tak, w złotówkach", "tak, w innej walucie", "nie"],
        inisTrack: 'cpl_profilowe_6_kredyt'
    },
    {
        type: "radio",
        question: 'Oferujemy bezpłatne szkolenia inwestycyjne:',
        prop: 'prop69',
        filter: (consensts) => true, // ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)),
        options: ["tak, chcę porozmawiać ze specjalistą", "nie interesuje mnie ten temat"],
        inisTrack: 'cpl_coreg_5_inwestycje'
    },
    {
        type: "select",
        question: 'Kiedy kończy Ci się umowa z operatorem GSM?',
        prop: 'prop66',
        filter: (consensts) => ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)),
        options: [...months, 'mam telefon na kartę', 'mam umowę na czas nieokreślony'],
        inisTrack: 'cpl_coreg_2_GSM'
    },
     {
        type: "radio",
        question: 'Czy prowadzisz działalność gospodarczą?',
        prop: 'prop68',
        filter: (consensts, user) => ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)) /* && user.gender === 'mezczyzna' */,
        options: ['tak', 'nie'],
        inisTrack: 'cpl_coreg_3_B2B'
    },
    {
        type: "radio",
        question: 'Lekarze bez Granic to niezależna medyczna organizacja humanitarna niosąca pomoc przy konfliktach zbrojnych, epidemiach, katastrofach naturalnych.<br>Które działania Lekarzy bez Granic chcesz wesprzeć?:',
        prop: 'prop70',
        filter: (c, user) => false /* user.gender != 'mezczyzna' */,
        class: 'in-row-images-3',
        options: [{
            label: "leczenie niedożywienia",
            img: "/img/image39.jpg"
        }, {
            label: "dostęp do opieki okołoporodowej",
            img: '/img/image31.jpg'
        }, {
            label: "pomoc pokrzywdzonym w konfliktach zbrojnych",
            img: '/img/image8.jpg'
        }, {
            label: "pomoc pokrzywdzonym na skutek katastrof naturalnych",
            img: '/img/image16.jpg',
        }, {
            label: "walka z chorobami zakaźnymi np. gruźlicą",
            img: '/img/image6.jpg',
        },
        {
            label:"nie jestem zainteresowana",
            img: '/img/image36.jpg',
    }],
    inisTrack: 'cpl_coreg_4_LBG'
    },
]

export const profileQuestions: RegistrationQuestion[] = [
    {
        type: "radio",
        question: 'Czy masz dzieci?',
        prop: 'prop35',
        filter: () => true,
        options: ['tak', 'nie'],
        inisTrack: 'cpl_profilowe_13_dzieci'
    },
    {
        type: "radio",
        question: 'Czy masz ogród?',
        prop: 'prop36',
        filter: () => true,
        options: ['tak', 'nie'],
        inisTrack: 'cpl_profilowe_2_dom'
    },
    {
        type: "radio",
        question: 'Na co dzień poruszasz się:',
        prop: 'prop37',
        filter: () => true,
        class: 'in-row-images',
        inisTrack: 'cpl_profilowe_3_komunikacja',
        options: [{
            label: "samochodem",
            img: "/img/autem.jpeg"
        }, {
            label: "komunikacją miejską",
            img: '/img/komunikacja.jpeg'
        }, {
            label: "rowerem",
            img: '/img/rowerem.jpeg'
        }, {
            label: "pieszo",
            img: '/img/pieszo.jpeg',
            
        }, {
            label: "inne",
            img: '/img/inaczej.jpeg',
            class: 'md:col-span-2'
        },
        {
            label:"siedzę w domu",
            img: '/img/wdomu.jpeg',
            class: 'md:col-span-2'
    }]
    },
    {
        type: "radio",
        question: 'Jakie masz wykształcenie?',
        inisTrack: 'cpl_profilowe_4_wyksztalcenie',
        prop: 'prop38',
        filter: (consensts) => ['prop26', 'prop27'].every(c => !consensts.includes(c)),
        options: ["podstawowe", "gimnazjalne", "zasadnicze", "średnie", "wyższe"]
    },
    {
        type: "radio",
        question: 'Jakiego języka chcesz się jeszcze nauczyć lub chociaż podszkolić?',
        prop: 'prop39',
        inisTrack: 'cpl_profilowe_5_jezyk',
        filter: (consensts) => ['prop26', 'prop27'].every(c => !consensts.includes(c)),
        options: ["angielskiego", "hiszpańskiego", "niemieckiego", "włoskiego", "innego", "nie chcę się uczyć języków"]
    },
/*     {
        type: "radio",
        question: 'Czy kiedykolwiek brałeś/aś pożyczkę gotówkową lub kredyt konsumpcyjny?',
        prop: 'prop40',
        filter: (consensts) => ['prop26', 'prop27'].every(c => !consensts.includes(c)),
        options: ["tak", "nie"],
        inisTrack: 'cpl_profilowe_6_kredyt'
    } */
]