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
      question: "Który z wymienionych systemów operacyjnych NIE jest używany w smartfonach?",
      answers: [
        { id: "A", answer: "Android", correct: false },
        { id: "B", answer: "iOS", correct: false },
        { id: "C", answer: "Windows Phone", correct: false },
        { id: "D", answer: "Linux Mint", correct: true },
      ],
    },
    {
      id: 2,
      question: "Który przycisk na telefonie służy do zakończenia połączenia?",
      answers: [
        { id: "A", answer: "Zielona słuchawka", correct: false },
        { id: "B", answer: "Czerwona słuchawka", correct: true },
        { id: "C", answer: "Przycisk głośności", correct: false },
        { id: "D", answer: "Przycisk aparatu", correct: false },
      ],
    },
    {
      id: 3,
      question: "Co robimy, gdy telefon się rozładuje?",
      answers: [
        { id: "A", answer: "Wkładamy go do lodówki", correct: false },
        { id: "B", answer: "Podłączamy do ładowarki", correct: true },
        { id: "C", answer: "Potrząsamy nim mocno", correct: false },
        { id: "D", answer: "Naciskamy wszystkie przyciski naraz", correct: false },
      ],
    },
  ],
};

export const coRegistrationQuestions: RegistrationQuestion[] = [
  {
    type: "select",
    question: "Kiedy kończy Ci się umowa z operatorem GSM?",
    prop: "prop66",
    filter: (consents) => ["prop22", "prop26", "prop27"].every((c) => consents.includes(c)),
    options: [...months, "mam telefon na kartę", "mam umowę na czas nieokreślony"],
    inisTrack: "cpl_coreg_2_GSM",
  },
  {
    type: "radio",
    question: "Czy chcesz przetestować nowoczesne aparaty słuchowe za darmo?",
    prop: "prop67",
    filter: (consents, user) => false, /* {
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
    question: "Chcesz płacić niższe rachunki za prąd w swoim domu? Sprawdź na jakie dotacje do fotowoltaiki możesz liczyć.",
    prop: "prop74",
    filter: () => true,
    options: [
      { label: "nie jestem zainteresowany/a" },
      { label: "jestem zainteresowany/a poznaniem oferty", icon: "📞", iconPosition: "before" }
    ] as IconOption[],
  },
  {
    type: "radio",
    question: "Czy kiedykolwiek brałeś/aś pożyczkę gotówkową lub kredyt konsumpcyjny?",
    prop: "prop40",
    filter: () => true,
    options: ["tak, w złotówkach", "tak, w innej walucie", "nie"],
    inisTrack: "cpl_profilowe_6_kredyt",
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
        window.open('https://app.polecamprodukt.pl/?utm_medium=konkurs&utm_source=odbierznagrode&utm_campaign=salelifter', '_blank', 'noopener');
      }
    },
    image: {
      src: '/img/image17.png',
      class: 'w-48 h-auto'
    }
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
    question: "Czy prowadzisz działalność gospodarczą?",
    prop: "prop68",
    filter: (consents) => ["prop22", "prop26", "prop27"].every((c) => consents.includes(c)),
    options: ["tak", "nie"],
    inisTrack: "cpl_coreg_3_B2B",
  },
  {
    type: "radio",
    question:
      'Lekarze bez Granic to niezależna medyczna organizacja humanitarna niosąca pomoc przy konfliktach zbrojnych, epidemiach, katastrofach naturalnych.<br>Które działania Lekarzy bez Granic chcesz wesprzeć?:',
    prop: "prop70",
    filter: () => false,
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
];

export const profileQuestions: RegistrationQuestion[] = [
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
    question: "Czy masz ogród?",
    prop: "prop36",
    filter: () => true,
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
  {
    type: "radio",
    question: "Jakiego języka chcesz się jeszcze nauczyć lub chociaż podszkolić?",
    prop: "prop39",
    inisTrack: "cpl_profilowe_5_jezyk",
    filter: (consents) => ["prop26", "prop27"].every((c) => !consents.includes(c)),
    options: [
      "angielskiego",
      "hiszpańskiego",
      "niemieckiego",
      "włoskiego",
      "innego",
      "nie chcę się uczyć języków",
    ],
  },
];
