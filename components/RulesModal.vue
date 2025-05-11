<template>
    <UModal v-model="modals.rules" class="z-[999] w-full" :ui="{
        width: 'w-full sm:max-w-[80vw]',
        height: 'h-full sm:max-h-[90vh]'
    }">
        <div class="p-1 md:p-10 font-barlow text-center flex flex-col overflow-hidden">
            <div class="overflow-y-scroll px-4">
                <h2 class="text-xl font-bold">REGULAMIN KONKURSU „ODBIERZ NAGRODĘ”</h2>
                <h3 class="font-bold">§1<br> Definicje</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>Użyte w Regulaminie określenia oznaczają:</li>
                </ol>
                <ol class="flex flex-col gap-4 mb-4 text-left custom-list">
                    <li><strong>Organizator</strong> – Salelifter spółka z ograniczoną odpowiedzialnością z siedzibą w
                        Rybniku (44-200) przy ul. Raciborskiej 35A, wpisana do rejestru przedsiębiorców Krajowego
                        Rejestru Sądowego prowadzonego przez Sąd Rejonowy w Gliwicach, X Wydział Gospodarczy Krajowego
                        Rejestru Sądowego pod numerem KRS: 0000472712, posiadająca NIP: 6423183413, REGON: 243306386, o
                        kapitale zakładowym 56 150,00 złotych;</li>
                    <li><strong>Uczestnik</strong> – pełnoletnia osoba fizyczna posiadająca pełną zdolność do czynności
                        prawnych, biorąca udział w Konkursie, spełniająca wymagania określone w niniejszym Regulaminie;
                    </li>
                    <li><strong>Laureat</strong> – Uczestnik konkursu, któremu Komisja Konkursowa przyznała nagrodę;
                    </li>
                    <li><strong>Komisja Konkursowa</strong> – osoby wyznaczone przez Organizatora, które zapewniają
                        prawidłową organizację i przebieg Konkursu;</li>
                    <li><strong>Konkurs</strong> – konkurs organizowany na podstawie niniejszego regulaminu;</li>
                    <li><strong>Regulamin</strong> – niniejszy regulamin Konkursu.</li>
                </ol>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1" start="2">
                    <li>W razie wątpliwości, uznaje się że powyższe definicje odnoszą się również do ww. wyrażeń
                        pisanych w treści niniejszego Regulaminu wielką literą w liczbie mnogiej, np. Uczestnicy.</li>
                </ol><br>
                <h3 class="font-bold">§2<br> Postanowienia ogólne</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>Konkurs trwa od 02.05.2025 r. do 01.05.2026 r. Uczestnicy mogą rejestrować swój udział w
                        Konkursie do dnia 02.05.2025 r.</li>
                    <li>Uczestnictwo w Konkursie jest całkowicie dobrowolne.</li>
                    <li>Konkurs dla Uczestników jest bezpłatny. Organizator nie pobiera od Uczestników żadnych opłat za
                        rejestrację Uczestnika w Konkursie, jak również za sam udział w nim.</li>
                    <li>Celem wzięcia udziału w Konkursie Uczestnik powinien odpowiedzieć na wszystkie (6, słownie:
                        sześć) zadane pytania konkursowe zamknięte oraz jedno otwarte pytanie konkursowe, a także
                        dokonać rejestracji poprzez wypełnienie formularza rejestracyjnego znajdującego się na
                        internetowej stronie konkursowej pod adresem www.quiz-to-pieniadz.pl oraz potwierdzić chęć
                        udziału w Konkursie (poprzez zaznaczenie na stronie checkboxa i kliknięcie przycisku
                        rejestracji), jak i zapoznanie się oraz akceptację niniejszego Regulaminu i Polityki prywatności
                        znajdującej się na internetowej stronie konkursowej. Po udzieleniu odpowiedzi na wszystkie
                        zamknięte pytania konkursowe oraz wypełnieniu formularza rejestracyjnego i udzieleniu
                        niezbędnych zgód Uczestnik otrzyma e-mail z linkiem potwierdzającym rejestrację. Otwarte pytanie
                        konkursowe pojawi się po kliknięciu w link potwierdzający rejestrację. </li>
                    <li>Warunkiem koniecznym pomyślnej rejestracji Uczestnika w&nbsp;Konkursie jest podanie pełnych
                        i&nbsp; prawdziwych danych w&nbsp;formularzu rejestracyjnym. W&nbsp;przypadku podania przez
                        Uczestnika danych nieprawdziwych lub niepełnych Organizator jest uprawniony do wykluczenia
                        Uczestnika z&nbsp;udziału w&nbsp;Konkursie oraz do odmowy przyznania takiemu Uczestnikowi
                        nagrody.</li>
                    <li>Uczestnikowi wolno zarejestrować się w&nbsp;Konkursie tylko jeden raz używając tego samego
                        adresu e-mail. W przypadku, gdy Uczestnik zarejestruje się drugi i&nbsp;każdy kolejny raz
                        w&nbsp;Konkursie podając ten sam adres e-mail, poprzednio udzielone przez Uczestnika odpowiedzi
                        na pytania konkursowe są zastępowane nowymi (nadpisywane, anulowane, kasowane), a&nbsp;pod uwagę
                        przy wyborze Laureatów będą brane odpowiedzi udzielone w&nbsp;późniejszym zgłoszeniu do
                        Konkursu.</li>
                </ol><br>
                <h3 class="font-bold">§3<br> Komisja Konkursowa</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>Organizator ustanowił Komisję Konkursową i opracował regulamin jej działania, aby zapewnić
                        prawidłowy przebieg Konkursu.</li>
                    <li>Komisja Konkursowa dokonuje oceny prawidłowości przesłanych zgłoszeń do Konkursu.</li>
                    <li>Komisja Konkursowa dokonuje wyboru Laureata biorąc pod uwagę odpowiedzi na zamknięte pytania
                        konkursowe oraz czas odpowiedzi.</li>
                    <li>Wygrywa Laureat z największą liczbą poprawnych odpowiedzi udzielonych w najkrótszym czasie.</li>
                    <li>Komisja Konkursowa działa w składzie wyznaczonym przez Organizatora.</li>
                    <li>Komisja Konkursowa działa w oparciu o wewnętrzny regulamin.</li>
                    <li>Komisja Konkursowa dokumentuje przebieg swoich prac sporządzając w tym celu stosowny protokół.
                    </li>
                </ol><br>
                <h3 class="font-bold">§4<br> Nagrody</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>W Konkursie zostanie przyznana jedna nagroda.</li>
                    <li>Nagrodę stanowi Smartfon APPLE iPhone 16 5G 128GB, o wartości 3 599 zł.</li>
                    <li>Organizator poinformuje Laureata o wyniku Konkursu oraz możliwości i sposobach odbioru nagrody w
                        rozmowie telefonicznej, dzwoniąc w tym celu na wskazany przez niego numer telefonu do dnia
                        16.05.2026 r. Organizator podejmie 3 (słownie: trzy) próby kontaktu telefonicznego, w co
                        najmniej dwugodzinnych odstępach czasu, w celu skontaktowania się z Laureatem. Po wykonaniu
                        przez Organizatora trzech nieudanych prób kontaktu, Laureat utraci status zwycięzcy konkursu i
                        nie będzie mógł domagać się przyznania nagrody, która pozostaje w dyspozycji Organizatora. Za
                        nieudaną próbę połączenia rozumie się brak odbioru telefonu przez 6 (słownie: sześć) sygnałów
                        lub niemożność połączenia się z użytkownikiem telefonu (abonent poza zasięgiem, wyłączony
                        telefon, włączenie się poczty głosowej lub automatycznej sekretarki, sygnał fax).</li>
                    <li>Nagroda zostanie przesłana na wskazany przez Laureata adres, w terminie do 10 (słownie:
                        dziesięć) dni roboczych od dnia poinformowania Laureata o wygranej.</li>
                    <li>Organizator nie ponosi odpowiedzialności za dokonanie przez Laureata zmiany danych (zmiana
                        adresu) uniemożliwiającą przesłanie nagrody Laureatowi, jak również za niemożność odbioru lub
                        nieodebranie nagrody, z jakiejkolwiek przyczyny leżącej po stronie Laureata. W takim przypadku
                        Laureat traci prawo do nagrody, która pozostanie w dyspozycji Organizatora.</li>
                    <li>Nagroda zostanie powiększona o nagrodę dodatkową w wysokości stanowiącej równowartość 10 %
                        wartości nagrody o której mowa w ust. 2 powyżej. Nagroda dodatkowa zostanie przeznaczona na
                        należny podatek dochodowy, płatny zgodnie z przepisami ustawy o podatku dochodowym od osób
                        fizycznych.</li>
                    <li>Nagroda w Konkursie opodatkowana jest na zasadach określonych w powszechnie obowiązujących
                        przepisach podatkowych. Organizator oblicza, pobiera i płaci podatek w imieniu Laureata w
                        wysokości 10% wartości wygranej.</li>
                </ol><br>
                <h3 class="font-bold">§5<br> Dane osobowe</h3>
                <p class="mb-4 text-left">Administratorem danych osobowych Uczestników oraz Zwycięzców Konkursu jest
                    Organizator Konkursu. Kontakt z administratorem możliwy jest przy wykorzystaniu danych
                    korespondencyjnych Organizatora wskazanych powyżej lub mailowo na adres iod@salelifter.pl. Pełna
                    informacja o zasadach przetwarzania danych osobowych Uczestników, w tym danych Zwycięzców, stanowi
                    załącznik nr 1 do niniejszego Regulaminu.</p><br>
                <h3 class="font-bold">§6 Postępowania reklamacyjne</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>Reklamacje dotyczące nieprawidłowości w realizowaniu Konkursu mogą być składane przez
                        Uczestników w formie e-mail na adres iod@salelifter.pl lub w formie pisemnej listem poleconym na
                        adres siedziby Organizatora przez cały czas trwania Konkursu, jednakże nie później niż
                        w&nbsp;terminie 21 dni od daty jego zakończenia przez Organizatora.</li>
                    <li>O zachowaniu terminu opisanego punktem poprzedzającym Regulaminu, decyduje data nadania
                        reklamacji.</li>
                    <li>Reklamacje wpływające po określonym powyżej terminie nie będą uwzględniane.</li>
                    <li>Reklamacje winny wskazywać dane wnoszącego reklamację, w szczególności umożliwiające udzielenie
                        odpowiedzi na reklamację, zgodnie z postanowieniami punktu 5 poniżej oraz zwięzły opis
                        przedmiotu reklamacji.</li>
                    <li>Skutecznie złożone reklamacje będą rozpatrywane niezwłocznie, jednakże nie później niż
                        w&nbsp;terminie 14 dni od daty otrzymania reklamacji. Zgłaszający reklamację zostanie
                        powiadomiony o sposobie rozpatrzenia reklamacji e-mailem lub listem poleconym wysłanym
                        najpóźniej w&nbsp;ciągu 7 dni od daty rozpatrzenia reklamacji.</li>
                    <li>W przypadku nieuwzględnienia reklamacji Uczestnikowi Konkursu przysługuje prawo do dochodzenia
                        roszczeń na zasadach ogólnych określonych w przez powszechnie obowiązujące przepisy prawa.</li>
                </ol><br>
                <h3 class="font-bold">§7 Postanowienia końcowe</h3>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left" type="1">
                    <li>Organizator zastrzega możliwość zdyskwalifikowania Uczestnika z Konkursu i niewydania mu
                        nagrody, jeśli ten narusza Regulamin, przepisy powszechnie obowiązującego prawa (w ramach
                        uczestnictwa w Konkursie) lub wprowadza Organizatora w błąd np. podając mu nieprawidłowe dane.
                    </li>
                    <li>Organizator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Każda taka zmiana będzie
                        ogłaszana przez Organizatora z&nbsp;tygodniowym wyprzedzeniem. Obowiązująca wersja Regulaminu
                        znajduje się na stronie internetowej pod adresem: odbierz-nagrode.pl</li>
                    <li>Uczestnik zostanie poinformowany o zmianach niniejszego Regulaminu za pośrednictwem poczty
                        elektronicznej, na podany przez Uczestnika adres e-mail. </li>
                    <li>W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają odpowiednie przepisy
                        prawa obowiązującego na terenie Rzeczpospolitej Polskiej.</li>
                </ol>
                <div class="text-left">Powyższy Regulamin obowiązuje od dnia 02.05.2025 r.</div>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.rules = false">Zamknij</a>
        </div>
    </UModal>
</template>
<script setup lang="ts">
const modals = useModals();
</script>