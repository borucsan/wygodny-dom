import { parse, sub } from "date-fns";
import type { Question, RegistrationQuestion, IconOption } from "./types";

// Generate full month names
const months = Array.from({ length: 12 }, (_, i) => {
  const date = new Date("2024-01-01");
  date.setMonth(i);
  return date.toLocaleString("default", { month: "long" });
});

export const appConfig = {
  answerMaxLength: 600,
};

export const quiz: { title: string; questions: Question[] } = {
  title: "",
  questions: [
    {
      id: 1,
      question: "Która przyprawa nadaje potrawom ostry, piekący smak?",
      answers: [
        { id: "A", answer: "Cynamon", correct: false },
        { id: "B", answer: "Papryka słodka", correct: false },
        { id: "C", answer: "Chilli", correct: true },
        { id: "D", answer: "Wanilia", correct: false },
      ],
    },
    {
      id: 2,
      question: "Do jakiego rodzaju potrawy najczęściej używamy terminu \"al dente\"?",
      answers: [
        { id: "A", answer: "Mięso", correct: false },
        { id: "B", answer: "Warzywa", correct: false },
        { id: "C", answer: "Zupy", correct: false },
        { id: "D", answer: "Makaron", correct: true },
      ],
    },
    {
      id: 3,
      question: "Które z tych narzędzi kuchennych służy do ubijania białek na sztywną pianę?",
      answers: [
        { id: "A", answer: "Trzepaczka", correct: true },
        { id: "B", answer: "Szpatułka", correct: false },
        { id: "C", answer: "Wałek do ciasta", correct: false },
        { id: "D", answer: "Nóż szefa kuchni", correct: false },
      ],
    },
  ],
};

export const coRegistrationQuestions: RegistrationQuestion[] = [
  {
    type: "inputs",
    props: {
      postalCode: { prop: "prop8", inisTrack: "cpl_adres_kod" },
      city: { prop: "prop9", inisTrack: "cpl_adres_miejscowosc" }
    },
    filter: () => true,
  },
  {
    type: "inputs",
    props: {
      street: { prop: "prop5", inisTrack: "cpl_adres_ulica" },
      houseNumber: { prop: "prop6", inisTrack: "cpl_adres_ulica_numer" },
      apartmentNumber: { prop: "prop7", inisTrack: "cpl_adres_ulica_numer" }
    },
    filter: () => true,
  },
  {
    type: "radio",
    question: "Czy chcesz się dowiedzieć jak działa szybki światłowód lub nowoczesna telewizja w Play? 📺",
    prop: "prop77",
    filter: (consents) => true,
    options: ["nie, dziękuję", "tak, chętnie dowiem się więcej"],
},
  {
    type: "radio",
    question:
      'Lekarze bez Granic to niezależna medyczna organizacja humanitarna niosąca pomoc przy konfliktach zbrojnych, epidemiach, katastrofach naturalnych.<br>Które działania Lekarzy bez Granic chcesz wesprzeć?:',
    prop: "prop70",
    filter: () => true,
    class: "in-row-images-3",
    options: [
      { label: "leczenie niedożywienia", img: "/img/image39.jpg" },
      { label: "dostęp do opieki okołoporodowej", img: "/img/image31.jpg" },
      { label: "pomoc pokrzywdzonym w konfliktach zbrojnych", img: "/img/image8.jpg" },
      { label: "pomoc pokrzywdzonym na skutek katastrof naturalnych", img: "/img/image16.jpg" },
      { label: "walka z chorobami zakaźnymi np. gruźlicą", img: "/img/image6.jpg" },
      { label: "nie jestem zainteresowana", img: "/img/image36.jpg" },
    ],
    inisTrack: "cpl_coreg_4_LBG",
  },
  {
    type: "radio",
    question: "Czy kiedykolwiek brałeś/aś chwilówkę lub pożyczkę w banku?",
    prop: "prop40",
    filter: () => true,
    options: ["tak, kredyt gotówkowy w banku", "tak, pożyczkę chwilówkę", "nie, ale rozważam to", "nie i nie zamierzam brać pożyczek"],
    inisTrack: "cpl_profilowe_6_kredyt",
  },
  {
    type: "select",
    question: "Kiedy kończy Ci się ubezpieczenie OC samochodu?",
    prop: "prop65",
    filter: (consents) => ["prop22", "prop26", "prop27"].every((c) => consents.includes(c)),
    options: [...months, "nie mam auta"],
    inisTrack: "cpl_coreg_1_OC",
  },
  {
    type: "radio",
    question: "Chcesz płacić niższe rachunki za prąd w swoim domu? Sprawdź na jakie dotacje do fotowoltaiki możesz liczyć.",
    prop: "prop74",
    filter: () => true,
    inisTrack: "cpl_coreg_9_fotowoltaika",
    options: [
      { label: "nie, dziękuję – nie chcę kontaktu" },
      { label: "tak, proszę o telefon i więcej szczegółów" },
      { label: "mam już fotowoltaikę" },
    ] as IconOption[],
  },
  {
    type: "radio",
    question: "Chcesz, żeby Twoja fotowoltaika znów zarabiała?",
    prop: "prop78",
    filter: (consents, user, answers) => answers?.prop74 === "mam już fotowoltaikę",
    //inisTrack: "cpl_coreg_magazyn_energii",
    options: [
      "chcę dowiedzieć się więcej o magazynie energii",
      "nie, nie chcę",
    ],
  },
  {
    type: "radio",
    question: "Jakie jest źródło Twojego dochodu?",
    prop: "prop68",
    filter: (consents) => ["prop22", "prop26", "prop27"].every((c) => consents.includes(c)),
    options: ["umowa o pracę", "umowa zlecenie/dzieło", "emerytura/renta", "zasiłek", "własna działalność", "inne", "brak dochodu"],
    inisTrack: "cpl_coreg_3_B2B",
  },
  {
    type: "radio",
    question: "Czy masz dzieci?",
    prop: "prop35",
    filter: () => true,
    options: ["tak", "nie"],
    inisTrack: "cpl_profilowe_13_dzieci",
  },
  {
    type: "radio",
    question: "Czy chcesz płynnie mówić po angielsku?",
    prop: "prop39",
    filter: () => true,
    options: ["tak, chcę", "nie, nie jest to moim priorytetem"],
    inisTrack: "cpl_profilowe_5_jezyk",
  },
  {
    type: "select",
    question: "Kiedy kończy Ci się umowa z operatorem GSM?",
    prop: "prop66",
    filter: (consents) => ["prop22", "prop26", "prop27"].every((c) => false),
    options: [...months, "mam telefon na kartę", "mam umowę na czas nieokreślony"],
    inisTrack: "cpl_coreg_2_GSM",
  },
  {
    type: "radio",
    question: "Czy chcesz przetestować nowoczesne aparaty słuchowe za darmo?",
    prop: "prop67",
    filter: (consents, user) => false, /* {
    d
      const today = new Date();
      const maxDate = sub(today, { years: 60 });
      const date = parse(user.dob as string, "dd-MM-yyyy", new Date());
      return ["prop22", "prop26", "prop27"].every((c) => consents.includes(c));
      // You may want to re-enable this logic:
      // && date.toString() !== 'Invalid Date' && (isBefore(date, maxDate) || isEqual(date, maxDate))
    }, */
    options: ["tak, chętnie", "nie jestem zainteresowany/a"],
    inisTrack: "cpl_coreg_7_aparaty",
  },
  {
    type: "radio",
    question: "Co by Cię przekonało do zakupu pakietu medycznego?",
    prop: "prop71",
    filter: () => false,
    /* filter: (consents, user) => {
      const today = new Date();
      const maxDate = sub(today, { years: 60 });
      const date = parse(user.dob as string, "dd-MM-yyyy", new Date());
      return ["prop22", "prop26", "prop27"].every((c) => consents.includes(c));
    }, */
    options: [
      "najniższa rynkowa cena",
      "brak kolejek",
      "pakiet zawierający teleporady oraz wizyty stacjonarne",
      "nic by mnie nie przekonało",
    ],
    inisTrack: "cpl_coreg_7_+pakiet_medyczny+",
  },
  {
    type: "radio",
    question: "Czy chcesz nauczyć się inwestować?",
    prop: "prop69",
    filter: () => false,
    options: ["tak, chcę porozmawiać ze specjalistą", "nie interesuje mnie ten temat"],
    inisTrack: "cpl_coreg_5_inwestycje",
  },
  {
    type: "radio",
    question: 'Czy chcesz pobrać aplikację ułatwiającą codzienne zarabianie na małe przyjemności?',
    prop: 'prop76',
    filter: (consensts) => false, // ['prop22', 'prop26', 'prop27'].every(c => consensts.includes(c)),
    options: ["TAK - chcę spróbować i zarobić", "NIE - rezygnuję z korzyści"],
    onAnswer: async (answer) => {
      if (answer === "TAK - chcę spróbować i zarobić") {
        window.open('https://app.polecamprodukt.pl/?utm_medium=konkurs&utm_source=wygodny-dom&utm_campaign=salelifter', '_blank', 'noopener');
      }
    },
    image: {
      src: '/img/image17.png',
      class: 'w-48 h-auto'
    }
  },
];

export const profileQuestions: RegistrationQuestion[] = [
  {
    type: "radio",
    question: "Czy masz ogród?",
    prop: "prop36",
    filter: () => false,
    options: ["tak", "nie"],
    inisTrack: "cpl_profilowe_2_dom",
  },
  {
    type: "radio",
    question: "Na co dzień poruszasz się:",
    prop: "prop37",
    filter: () => false,
    class: "in-row-images",
    inisTrack: "cpl_profilowe_3_komunikacja",
    options: [
      { label: "samochodem", img: "/img/autem.jpeg" },
      { label: "komunikacją miejską", img: "/img/komunikacja.jpeg" },
      { label: "rowerem", img: "/img/rowerem.jpeg" },
      { label: "pieszo", img: "/img/pieszo.jpeg" },
      { label: "inne", img: "/img/inaczej.jpeg", class: "md:col-span-2" },
      { label: "siedzę w domu", img: "/img/wdomu.jpeg", class: "md:col-span-2" },
    ],
  },
  {
    type: "radio",
    question: "Jakie masz wykształcenie?",
    inisTrack: "cpl_profilowe_4_wyksztalcenie",
    prop: "prop38",
    filter: (consents) => ["prop26", "prop27"].every((c) => !consents.includes(c)),
    options: ["podstawowe", "gimnazjalne", "zasadnicze", "średnie", "wyższe"],
  },
];

export const partners = [
    {
        id: 1,
        name: "Energia",
        label: "Energia (dostawcy energii, paliw, gazu itp.)",
        enabled: true
    },
    {
        id: 2,
        name: "Finanse",
        label: "Finanse (pożyczki, karty kredytowe, kredyty, inwestycje, odszkodowania itp.)",
        enabled: true
    },
    {
        id: 3,
        name: "Handel detaliczny",
        label: "Handel detaliczny (sprzedaż online, stacjonarna, FMCG, motoryzacja, beauty itp.)",
        enabled: true
    },
    {
        id: 4,
        name: "Lifestyle",
        label: "Lifestyle (zdrowie i uroda, fitness itp.)",
        enabled: true
    },
    {
        id: 5,
        name: "Media i wydawnictwa",
        label: "Media i wydawnictwa (hobby, gry, edukacja, social media itp.)",
        enabled: true
    },
    {
        id: 6,
        name: "Telekomunikacja",
        label: "Telekomunikacja (usługi telefoniczne i internetowe itp.)",
        enabled: true
    },
    {
        id: 7,
        name: "Turystyka",
        label: "Turystyka (podróże, noclegi, biura podróży itp.)",
        enabled: true
    },
    {
        id: 8,
        name: "Ubezpieczenia",
        label: "Ubezpieczenia (osobowe, turystyczne, majątkowe itp.)",
        enabled: true
    },
    {
        id: 9,
        name: "INIS Sp. z o.o.",
        label: "INIS Sp. z o.o., z siedzibą w Rybniku (44‑200), ul. Raciborska 35a",
        enabled: true
    },
    {
        id: 10,
        name: "Sales Masters Sp. z o.o.",
        label: "Sales Masters Sp. z o.o., ul. Franciszka Ksawerego Dmochowskiego 4/2, 00‑427 Warszawa",
        enabled: true
    },
    {
        id: 11,
        name: "Caf Call Sp. z o.o.",
        label: "Caf Call Sp. z o.o. ul. rondo Marsz. Józefa Piłsudskiego 28, 05-120 Legionowo",
        enabled: true
    },
    {
        id: 12,
        name: "Fundacja 'Lekarze bez Granic'",
        label: "Fundacja 'Lekarze bez Granic' ul. Sapieżyńska 10A, 00-215 Warszawa",
        enabled: true
    },
    {
        id: 13,
        name: "Colonnade Insurance Societe Anonyme",
        label: "Colonnade Insurance Societe Anonyme SA Oddział w Polsce, ul. Prosta 67, 00-838 Warszawa",
        enabled: true
    },
    {
        id: 14,
        name: "Call Center House Sp. z o.o.",
        label: "Call Center House Sp. z o.o. Aleja T. Kościuszki 80/82, 90-437 Łódź",
        enabled: true
    },
    {
        id: 15,
        name: "Sanmarks Sp. z o.o.",
        label: "Sanmarks Sp. z o.o. ul. Słowackiego 36, Lubaczów",
        enabled: true
    }
];
