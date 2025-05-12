<template>
    <UModal v-model="modals.privacy" class="z-[999] w-full" :ui="{
        width: 'w-full sm:max-w-[80vw]',
        height: 'h-full sm:max-h-[90vh]'
    }">
        <div class="p-1 md:p-10 font-barlow text-center flex flex-col overflow-hidden">
            <div class="overflow-y-scroll px-4">
                <h2 class="text-xl font-bold text-left">POLITYKA PRYWATNOŚCI I COOKIES<br>
                    SERWISU INTERNETOWEGO<br>
                    https://odbierz-nagrode.pl/&nbsp;(zwanego dalej Serwisem)</h2><br>

                <p class="text-left">Polityka Prywatności określa zasady Przetwarzania i ochrony Danych osobowych<br>
                    Użytkowników oraz innych podmiotów korzystających z Serwisu internetowego. Dokument określa również
                    zasady stosowania plików cookies.
                    Polityka Prywatności Serwisu ma charakter informacyjny.</p>
                <br>
                <h3 class="font-bold text-left">Spis treści:</h3><br>
                <ol class="flex pl-5 flex-col gap-2 list-decimal mb-2 text-left" type="1">
                    <li><a href="#privacy-ad1" @click.prevent="scrollTo('privacy-ad1')"
                           class="font-bold scroll-to">Słownik pojęć</a></li>
                    <li><a href="#privacy-ad2" @click.prevent="scrollTo('privacy-ad2')"
                           class="font-bold scroll-to">Administrator Danych osobowych</a></li>
                    <li><a href="#privacy-ad3" @click.prevent="scrollTo('privacy-ad3')"
                           class="font-bold scroll-to">Adresaci Polityki prywatności</a></li>
                    <li><a href="#privacy-ad4" @click.prevent="scrollTo('privacy-ad4')"
                           class="font-bold scroll-to">Formularz kontaktowy – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad5" @click.prevent="scrollTo('privacy-ad5')"
                           class="font-bold scroll-to">Konto – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad6" @click.prevent="scrollTo('privacy-ad6')"
                           class="font-bold scroll-to">Newsletter, informacja handlowa – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad7" @click.prevent="scrollTo('privacy-ad7')" class="font-bold scroll-to">Blog
                            i system komentarzy – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad8" @click.prevent="scrollTo('privacy-ad8')"
                           class="font-bold scroll-to">Media społecznościowe – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad9" @click.prevent="scrollTo('privacy-ad9')"
                           class="font-bold scroll-to">Odbiorcy Danych osobowych</a></li>
                    <li><a href="#privacy-ad10" @click.prevent="scrollTo('privacy-ad10')"
                           class="font-bold scroll-to">Prawa osób, których Dane dotyczą</a></li>
                    <li><a href="#privacy-ad11" @click.prevent="scrollTo('privacy-ad11')"
                           class="font-bold scroll-to">Profilowanie i przekazywanie Danych do państw trzecich i
                            organizacji międzynarodowych</a></li>
                    <li><a href="#privacy-ad12" @click.prevent="scrollTo('privacy-ad12')"
                           class="font-bold scroll-to">Informacje techniczne i technologie śledzące</a></li>
                    <li><a href="#privacy-ad13" @click.prevent="scrollTo('privacy-ad13')"
                           class="font-bold scroll-to">Polityka cookies</a></li>
                    <li><a href="#privacy-ad14" @click.prevent="scrollTo('privacy-ad14')"
                           class="font-bold scroll-to">Zmiany polityki prywatności</a></li>
                </ol>
                <br>
                <h3 id="privacy-ad1" class="font-bold text-left text-xl">1. Słownik pojęć</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li><strong>Dane osobowe (Dane)</strong>: oznaczają wszelkie informacje o zidentyfikowanej lub
                        możliwej do
                        zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”); możliwa do zidentyfikowania
                        osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować, w szczególności
                        na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane o
                        lokalizacji, identyfikator internetowy lub jeden bądź kilka szczególnych czynników określających
                        fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość
                        osoby fizycznej.</li>
                    <li><strong>Formularz rejestracji</strong>: interaktywny formularz dostępny w Serwisie internetowym
                        np.
                        umożliwiający utworzenie Konta Klienta.</li>
                    <li><strong>Informacja handlowa</strong>: każda informacja przeznaczona bezpośrednio lub pośrednio
                        do promowania
                        towarów, usług lub wizerunku przedsiębiorcy lub osoby wykonującej zawód, której prawo do
                        wykonywania zawodu jest uzależnione od spełnienia wymagań określonych w odrębnych ustawach, z
                        wyłączeniem informacji umożliwiającej porozumiewanie się za pomocą środków komunikacji
                        elektronicznej z określoną osobą oraz informacji o towarach i usługach niesłużącej osiągnięciu
                        efektu handlowego pożądanego przez podmiot, który zleca jej rozpowszechnianie, w szczególności
                        bez wynagrodzenia lub innych korzyści od producentów, sprzedawców i świadczących usługi.</li>
                    <li><strong>Klient</strong>:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>osoba fizyczna, posiadająca pełną zdolność do czynności prawnych, a w wypadkach
                                przewidzianych przez powszechnie obowiązujące przepisy prawa także osoba fizyczna
                                posiadająca ograniczoną zdolność do czynności prawnych,</li>
                            <li>osoba prawna</li>
                            <li>jednostka organizacyjna nieposiadająca osobowości prawnej, której prawo przyznaje
                                zdolność prawną,</li>
                        </ol>
                        która zawarła lub zamierza zawrzeć umowę sprzedaży z Usługodawcą, a także która korzysta lub
                        zamierza skorzystać z Usługi elektronicznej.
                    </li>
                    <li><strong>Konto Klienta (Konto)</strong>: Usługa elektroniczna, oznaczona indywidualną nazwą
                        (loginem) i hasłem
                        podanym przez Klienta, zbiór Danych w systemie teleinformatycznym Usługodawcy, w którym
                        gromadzone są Dane podane przez Klienta, w tym informacje teleadresowe oraz historia zamówień.
                    </li>
                    <li><strong>Kontrahent</strong>:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>osoba fizyczna, posiadająca pełną zdolność do czynności prawnych, a w wypadkach
                                przewidzianych przez powszechnie obowiązujące przepisy prawa także osoba fizyczna
                                posiadająca ograniczoną zdolność do czynności prawnych,</li>
                            <li>osoba prawna,</li>
                            <li>jednostka organizacyjna nieposiadająca osobowości prawnej, której prawo przyznaje
                                zdolność prawną,</li>
                        </ol>
                        korzystająca z usług i produktów oferowanych przez Administratora, a także dostawca,
                        podwykonawca.
                    </li>
                    <li><strong>Newsletter</strong>: Usługa Elektroniczna, świadczona przez Usługodawcę za pośrednictwem
                        poczty elektronicznej e-mail, która umożliwia wszystkim korzystającym z niej osobom
                        subskrybowanie i automatyczne otrzymywanie drogą elektroniczną cyklicznych, bezpłatnych
                        informacji m.in. o nowościach, promocjach, w tym informacji handlowych.
                    </li>
                    <li><strong>Osoba Kontaktująca się</strong>: osoba kontaktująca się z Administratorem telefonicznie
                        lub SMS-wo, poprzez wiadomości e-mail, poprzez formularz kontaktowy dostępny w ramach danego
                        Serwisu, innymi środkami komunikacji elektronicznej, pocztą tradycyjną.
                    </li>
                    <li><strong>Organ nadzorczy</strong>: Prezes Urzędu Ochrony Danych Osobowych (PUODO).</li>
                    <li><strong>Przetwarzanie</strong>: oznacza operację lub zestaw operacji wykonywanych na Danych
                        osobowych lub zestawach Danych osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką
                        jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub
                        modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie,
                        rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie,
                        usuwanie lub niszczenie.</li>
                    <li><strong>RODO</strong>: rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
                        kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z Przetwarzaniem danych osobowych i
                        w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                        rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz. Urz. UE. L Nr 119, str. 1).
                    </li>
                    <li><strong>Serwis internetowy</strong>: serwis, którego dotyczy niniejsza Polityka prywatności.
                    </li>
                    <li><strong>Usługa elektroniczna</strong>: usługa świadczona drogą elektroniczną przez Usługodawcę
                        na rzecz Klienta za pośrednictwem Serwisu internetowego.</li>
                    <li><strong>Usługodawca</strong>: Administrator Danych osobowych wskazany w rozdziale 2.</li>
                    <li><strong>Użytkownik</strong>: osoba korzystająca z Serwisu internetowego, w tym: Klient, Osoba
                        kontaktująca się.</li>
                </ol>
                <br>
                <h3 id="privacy-ad2" class="font-bold text-left text-xl">2. Administrator Danych osobowych</h3><br>
                <p class="text-left">
                    Administratorem Danych osobowych, w rozumieniu rozporządzenia Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                    danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                    (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz. Urz. UE. L Nr 119, str.
                    1), zwanego dalej RODO, jest Salelifter sp. z o.o. z siedzibą w Rybniku, zwana dalej Administratorem
                    i będąca jednocześnie Usługodawcą Serwisu internetowego.
                    Administrator wyznaczył inspektora ochrony danych, z którym można się skontaktować wysyłając maila
                    na adres: <a href="mailto:iod@salelifter.pl">iod@salelifter.pl</a> lub za pomocą poczty tradycyjnej:
                    Rybnik (44-200), ul. Raciborska 35A.
                </p><br>
                <h3 id="privacy-ad3" class="font-bold text-left text-xl">3. Adresaci Polityki prywatności</h3><br>
                <p class="text-left">Polityka prywatności jest adresowana do Użytkowników i innych podmiotów
                    korzystających z Serwisu internetowego gdy:</p>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>odwiedzają Państwo lub korzystają z Serwisu internetowego, w tym korzystają Państwo z usług
                        (również usług elektronicznych udostępnionych w ramach Serwisu), takich jak możliwość utworzenia
                        Konta, zapisania się do Newslettera/ otrzymywania Informacji handlowych, możliwość dodania
                        komentarza na blogu, możliwość przesłania wiadomości do Administratora przy wykorzystaniu
                        elektronicznego formularza kontaktowego i inne dostępne na stronie, w tym opisane w regulaminie
                        Serwisu udostępnionym przez Administratora, bądź jeżeli odwiedzacie Państwo profile
                        Administratora prowadzone w mediach społecznościowych (Facebook, LinkedIn, Twitter, YouTube,
                        Instagram),</li>
                    <li>są Państwo Użytkownikiem (w tym również Klientem) korzystającym z usług i produktów oferowanych
                        przez Administratora, bądź Kontrahentem Administratora,</li>
                    <li>są Państwo reprezentantem kontrahenta, osobą fizyczną działającą z ramienia kontrahenta lub
                        osobą kontaktową ze strony kontrahenta, w tym w szczególności jego pracownikiem lub
                        współpracownikiem,</li>
                    <li>kontaktują się Państwo z nami telefonicznie lub SMS-wo, poprzez wiadomości e-mail, poprzez
                        formularz kontaktowy dostępny w ramach Serwisu, innymi środkami komunikacji elektronicznej,
                        pocztą tradycyjną, bądź to Administrator kontaktuje się z Państwem w ww. sposób.</li>
                </ol>
                <br>
                <h3 id="privacy-ad4" class="font-bold text-left text-xl">4. Formularz kontaktowy – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator w ramach Serwisu internetowego może gromadzić Dane osobowe Użytkowników
                        kontaktujących się z Administratorem, a które to Dane osobowe są niezbędne do zrealizowania
                        danej prośby Użytkownika i kontaktu z nim w celu udzielenia odpowiedzi.</li>
                    <li>Podstawą prawną Przetwarzania Danych w związku z kontaktem z Administratorem, a także po
                        ewentualnym zakończeniu kontaktu będzie usprawiedliwiony cel w postaci np. prowadzenia
                        komunikacji, a następnie jej archiwizowania na potrzeby wykazania jej przebiegu w przyszłości, a
                        także potrzeba ustalenia, dochodzenia lub obrony roszczeń (stosownie do art. 6 ust. 1 lit. f
                        RODO), jeżeli po kontakcie dojdzie do zawarcia umowy, Dane będą Przetwarzane na podstawie art. 6
                        ust. 1 lit. b RODO.</li>
                    <li>Treść korespondencji może zostać zarchiwizowana. Jeżeli zostanie zarchiwizowana będzie
                        przechowywana aż do upływu terminu przedawnienia roszczeń, które mogą się potencjalnie pojawić w
                        związku z prowadzoną korespondencją. Termin przedawnienia wynosi sześć lat, a dla roszczeń o
                        świadczenia okresowe oraz roszczeń związanych z prowadzeniem działalności gospodarczej – trzy
                        lata. Jednakże koniec terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba
                        że termin przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne, by nawiązać z nami kontakt. Skutkiem nie podania
                        Danych będzie brak możliwości skomunikowania się z Państwem.</li>
                </ol><br>
                <h3 id="privacy-ad5" class="font-bold text-left text-xl">5. Konto – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator w ramach Serwisu internetowego może gromadzić Dane osobowe Użytkowników, które są
                        niezbędne do zapewnienia pełnej obsługi Użytkownika, w tym zakładania i zarządzania
                        Kontem/Kontami Użytkownika, rozwiązywania problemów technicznych związanych z Kontem i
                        udostępniania odpowiednich funkcji dotyczących Konta (np. przy rejestracji do Systemu SARE).
                    </li>
                    <li>Podstawą prawną Przetwarzania Danych będzie wykonanie umowy lub czynności poprzedzające tę umowę
                        (stosownie do art. 6 ust. 1 lit. b RODO) oraz usprawiedliwiony cel w postaci np. prowadzenia
                        komunikacji, a następnie jej archiwizowanie na potrzeby wykazania jej przebiegu w przyszłości, a
                        także potrzeba ustalenia, dochodzenia lub obrony roszczeń (stosownie do art. 6 ust. 1 lit. f
                        RODO).</li>
                    <li>Dane związane z Kontem będą przechowywane do czasu usunięcia Konta, ewentualnie aż do upływu
                        terminu przedawnienia roszczeń, które mogą się potencjalnie pojawić w związku z prowadzeniem
                        Konta. Termin przedawnienia wynosi sześć lat, a dla roszczeń o świadczenia okresowe oraz
                        roszczeń związanych z prowadzeniem działalności gospodarczej – trzy lata. Jednakże koniec
                        terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                        przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie wyszczególnionych podczas procesu rejestracji Danych jest konieczne do założenia Konta.
                        Brak ich podania uniemożliwi założenie Konta. Dane oznaczone podczas rejestracji jako opcjonalne
                        można podać dodatkowo.</li>
                </ol><br>
                <h3 id="privacy-ad6" class="font-bold text-left text-xl">6. Newsletter, Informacja handlowa - obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator w ramach Serwisu internetowego może gromadzić Dane osobowe Użytkowników w celu
                        wysyłki Newslettera oraz Informacji handlowych na podstawie wyrażonej zgody, zgodnie z art. 6
                        ust. 1 lit. a RODO oraz prawnie uzasadnionego interesu zgodnie z art. 6 ust. 1 lit. f RODO,
                        którym jest w tym przypadku wysyłka Newslettera oraz Informacji handlowych, a także obrona przed
                        ewentualnymi skargami lub zarzutami pojawiającymi się w związku z wysyłką mailingów. W zakresie
                        informacji, które mogą również stanowić Dane osobowe, a które nie pochodzą bezpośrednio od
                        Państwa, a zostały zebrane automatycznie przez system służący do wysyłki Newslettera czy
                        Informacji handlowej(np. numer IP, lokalizacja), przetwarzamy je w oparciu o prawnie uzasadniony
                        interes (stosownie do art. 6 ust. 1 lit. f RODO), którym jest dążenie do poprawienia naszych
                        działań i wykazanie w razie potrzeby który link z Newslettera czy Informacji handlowej został
                        przez Państwa kliknięty. Gdy podstawą Przetwarzania jest udzielona przez Państwa zgoda na
                        otrzymywanie Informacji handlowej lub na wysyłkę Newslettera może być ona w każdej chwili
                        cofnięta na Państwa wniosek złożony za pośrednictwem poczty elektronicznej lub w linku
                        pojawiającym się w każdym wysyłanym przez nas mailingu.</li>
                    <li>Gdy podstawą Przetwarzania jest prawnie uzasadniony interes Dane osobowe będą Przetwarzane do
                        czasu skutecznego wniesienia sprzeciwu tj. na Państwa wniosek złożony za pośrednictwem poczty
                        elektronicznej lub poprzez kliknięcie w link pojawiający się w każdym wysyłanym przez nas
                        mailingu.</li>
                    <li>Dane będą Przetwarzane:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>gdy podstawą jest zgoda: do czasu wycofania zgody,</li>
                            <li>gdy podstawa jest prawnie uzasadniony: do czasu skutecznego wniesienia sprzeciwu lub
                                osiągnięcia celu Przetwarzania np. do upływu terminu przedawnienia roszczeń, które mogą
                                się potencjalnie pojawić w związku z prowadzeniem Państwa Konta. Termin przedawnienia
                                wynosi sześć lat, a dla roszczeń o świadczenia okresowe oraz roszczeń związanych z
                                prowadzeniem działalności gospodarczej – trzy lata. Jednakże koniec terminu
                                przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                                przedawnienia jest krótszy niż dwa lata.</li>
                        </ol>
                    </li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne do otrzymania Informacji handlowej/Newslettera.
                    </li>
                </ol><br>
                <h3 id="privacy-ad7" class="font-bold text-left text-xl">7. Blog i system komentarzy – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Dane przekazane podczas dodawania komentarza wykorzystywane są w celu opublikowania komentarza
                        na blogu, a podstawą prawną ich Przetwarzania jest zgoda (art. 6 ust. 1 lit. a RODO), wynikająca
                        z dodania komentarza.
                    </li>
                    <li>
                        Dane będą Przetwarzane przez czas funkcjonowania komentarzy na blogu. Można wystosować do
                        Administratora prośbę o usunięcie komentarza poprzez napisanie prośby na adres mailowy podany w
                        stopce strony Serwisu. Usunięcie komentarza spowoduje jednocześnie usunięcie Danych z serwisu.
                    </li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne, by dodać komentarz.</li>
                </ol><br>
                <h3 id="privacy-ad8" class="font-bold text-left text-xl">8. Media społecznościowe – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Gdy obserwują Państwo nasze profile, konta w mediach społecznościowych, takich jak Facebook,
                        LinkedIn, Youtube, Twitter, Instagram lub wchodzą Państwo w interakcje z naszymi profilami i
                        kontami (np. napiszą Państwo komentarz, udostępnią, polubią wpis), możemy przeglądać Państwa
                        Dane udostępniane w danych mediach społecznościowych. Państwa Dane przetwarzamy na podstawie
                        prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO) w celu obsługi mediów
                        społecznościowych, prowadzenia z Państwem korespondencji, analizy statystyk, tworzenia grup
                        odbiorców w przypadku ustawiania reklam, np. na Facebooku, promowania własnej marki oraz
                        poprawiania jakości świadczonych usług, a w razie takiej konieczności – dochodzenia roszczeń i
                        obrony przed roszczeniami.</li>
                    <li>Państwa Dane osobowe Przetwarzane w ww. celach przetwarzamy wyłączne w zakresie korzystania
                        przez nas z naszego profilu/konta w danym serwisie, a w zakresie pozostałego korzystania przez
                        Państwa z serwisów społecznościowych, Państwa Dane osobowe przetwarza właściciel danego serwisu
                        (np. w przypadku Facebooka i Instagrama jest to Meta Platforms Ireland
                        Limited:<a
                           target="_blank"
                           href="https://pl-pl.facebook.com/privacy/explanation">https://pl-pl.facebook.com/privacy/explanation</a>,
                        Linkedina jest to LinkedIn Ireland
                        Unlimited Company: <a
                           target="_blank"
                           href="https://pl.linkedin.com/legal/privacy-policy">https://pl.linkedin.com/legal/privacy-policy</a>,
                        Youtube jest to Google LLC:
                        <a
                           target="_blank"
                           href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/">https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/</a>)
                        na podstawie
                        swojego regulaminu i polityki prywatności.
                    </li>
                    <li>Administrator będzie przetwarzał ww. Dane osobowe do czasu skutecznego wniesienia sprzeciwu lub
                        osiągnięcia celu Przetwarzania.</li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne aby mogli Państwo obserwować oraz wchodzić w
                        interakcje z naszymi profilami i kontami.</li>
                    <li>W przypadku naszego profilu na Facebooku wskazujemy, że jesteśmy współadministratorami Państwa
                        Danych osobowych jako użytkowników Strony lub Grupy na Facebooku wraz z Meta Platforms Ireland
                        Limited (zgodnie z orzecznictwem TSUE, tj. Trybunału Sprawiedliwości Unii Europejskiej, twórca
                        Strony na Facebooku jest współadministratorem Danych osobowych wraz z Meta Platforms Ireland
                        Limited). Zalecamy zatem także zapoznanie się z polityką prywatności Facebooka:
                        <a
                           target="_blank"
                           href="https://pl-pl.facebook.com/privacy/explanation">https://pl-pl.facebook.com/privacy/explanation</a>.
                    </li>
                </ol><br>
                <h3 id="privacy-ad9" class="font-bold text-left text-xl">9. Odbiorcy Danych osobowych</h3><br>
                <p class="text-left">Administrator informuje Użytkowników Serwisu, że odbiorcami Państwa Danych
                    osobowych są:</p>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>dostawca domeny internetowej,</li>
                    <li>hostingodawca, który przechowuje Dane osobowe na serwerze, na którym jest zainstalowany Serwis,
                    </li>
                    <li>dostawca usługi chmury obliczeniowej, w której przechowywane są pliki, w których mogą znajdować
                        się Państwa Dane osobowe,</li>
                    <li>podmioty dostarczające narzędzia służące do analizy aktywności w Serwisie,</li>
                    <li>podmiot świadczący usługi w zakresie obsługi technicznej i informatycznej Serwisu,</li>
                    <li>inni dostawcy usług związanych z funkcjonowaniem Serwisu, jeżeli zajdzie potrzeba udzielenia im
                        dostępu do Państwa Danych osobowych.</li>
                </ol><br>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur,urzędów skarbowych.</p><br>
                <h3 id="privacy-ad10" class="font-bold text-left text-xl">10. Prawa</h3><br>
                <p class="text-left">Posiadają Państwo:</p>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li><strong>prawo dostępu do Danych osobowych</strong>(tzn. mogą Państwo uzyskać od Administratora
                        potwierdzenie, czy Państwa Dane osobowe są przez nas Przetwarzane, czy nie; jeśli tak, mają
                        Państwo prawo żądać do nich dostępu oraz informacji związanych z ich Przetwarzaniem, m. in. o
                        celu Przetwarzania, odbiorcach lub kategoriach odbiorców Danych, planowanym okresie
                        przechowywania Danych lub kryteriach ustalenia tego okresu itp., jak również uzyskania kopii
                        Danych),</li>
                    <li><strong>prawo do sprostowania Danych</strong>(np. uzupełnienia, poprawienia, uaktualnienia),
                    </li>
                    <li><strong>prawo do wniesienia sprzeciwu wobec Przetwarzania Państwa Danych</strong>(gdy
                        Administrator przetwarza Państwa Dane osobowe, gdy to Przetwarzanie jest niezbędne dla celów
                        wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora, w każdej
                        chwili, z powodów związanych z Państwa szczególną sytuacją, mają Państwo prawo wnieść sprzeciw
                        wobec Przetwarzania Danych osobowych, których sprzeciw dotyczy, z uwzględnieniem profilowania, w
                        takiej sytuacji Administrator zaprzestanie Przetwarzania Państwa Danych osobowych, chyba że
                        będzie w stanie przedstawić prawnie uzasadnione podstawy Przetwarzania, które będą nadrzędne w
                        stosunku do Państwa interesów, praw i swobód lub Przetwarzanie tych Danych będzie niezbędne do
                        ustanowienia, wykonania lub obrony roszczeń prawnych, ponadto w każdej chwili przysługuje
                        Państwu prawo do wniesienia sprzeciwu wobec Przetwarzania Państwa Danych osobowych w celu
                        marketingu bezpośredniego, który obejmuje profilowanie w zakresie związanym z takim marketingiem
                        bezpośrednim),</li>
                    <li><strong>prawo do ograniczenia Przetwarzania Państwa Danych osobowych</strong>(jest to możliwe w
                        każdym z następujących przypadków: kwestionują Państwo prawidłowość Danych osobowych,
                        Przetwarzanie jest niezgodne z prawem, a Państwo żądają ograniczenia zamiast usunięcia Danych,
                        Administrator nie potrzebuje już Państwa Danych osobowych, ale są one potrzebne Państwu do
                        korzystania z roszczeń obronnych lub prawnych lub sprzeciwiają się Państwo Przetwarzaniu Danych
                        osobowych, a Administrator weryfikuje zasadność Państwa sprzeciwu),</li>
                    <li><strong>prawo do przenoszenia Państwa Danych osobowych</strong>(jeżeli w wyniku kontaktu doszło
                        do zawarcia umowy, lub w przypadku gdy podstawą Przetwarzania jest Państwa zgoda oraz gdy
                        Przetwarzanie Danych odbywa się w sposób zautomatyzowany mają Państwo prawo do uzyskania od
                        Administratora Danych osobowych, które Państwo mu przekazali, w ustrukturyzowanym, powszechnie
                        używanym i przeznaczonym do odczytu komputerowego formacie i mają Państwo prawo do przekazania
                        tych Danych do innego administratora, o ile jest to technicznie możliwe),</li>
                    <li><strong>prawo do usunięcia Danych</strong>(ale tylko w sytuacjach określonych przepisami RODO,
                        np. gdy Państwa Dane osobowe nie są niezbędne do celów, w których zostały zebrane lub w inny
                        sposób Przetwarzane, bądź były Przetwarzane niezgodnie z prawem),</li>
                    <li><strong>prawo do wycofania zgody</strong>(może ona zostać przez cofnięta w dowolnym momencie,
                        bez konieczności podawania przyczyny, co jednakże nie będzie miało wpływu na zgodność z prawem
                        Przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem),</li>
                    <li><strong>prawo złożenia skargi do organu nadzorczego</strong>(czyli Prezesa Urzędu Ochrony Danych
                        Osobowych pod adresem: Urząd Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, e-mail: <a
                           href="mailto:iod@uodo.gov.pl">iod@uodo.gov.pl</a>).</li>
                </ol><br>
                <h3 id="privacy-ad11" class="font-bold text-left text-xl">11. Profilowanie i przekazywanie Danych do
                    państw trzecich i organizacji międzynarodowych</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może korzystać w Serwisie internetowym z profilowania do celów marketingu
                        bezpośredniego, ale decyzje podejmowane na podstawie takiego profilowania przez Administratora
                        nie dotyczą zawarcia lub odmowy zawarcia umowy sprzedaży, czy też możliwości korzystania z usług
                        elektronicznych. Administrator nie stosuje wobec Danych mechanizmu automatycznego podejmowania
                        decyzji w tym profilowania.</li>
                    <li>Efektem profilowania może być np. przyznanie danemu Użytkownikowi rabatu, przesłanie kodu
                        rabatowego, przypomnienie dotyczące usługi Administratora, przesłanie propozycji zakupu usługi,
                        która może odpowiadać np. zainteresowaniom danej osoby. Ostatecznie to jednak Użytkownik
                        podejmuje swobodnie decyzję, czy będzie chciał skorzystać np. z otrzymanego rabatu, zawrzeć z
                        nami umowę. Profilowanie w Serwisie może polegać na automatycznej analizie lub prognozie
                        zachowania danego Użytkownik na stronie Serwisu np. poprzez przeglądanie konkretnej zakładki na
                        naszej stronie internetowej. Warunkiem takiego profilowania jest posiadanie przez Administratora
                        Danych osobowych takiego Użytkownika, aby móc jej następnie przesłać kod rabatowy np. drogą
                        mailową.</li>
                    <li>Osoba, której Dane dotyczą, ma prawo do tego, by nie podlegać decyzji, która opiera się
                        wyłącznie na zautomatyzowanym Przetwarzaniu, w tym profilowaniu, i wywołuje wobec tej osoby
                        skutki prawne lub w podobny sposób istotnie na nią wpływa (prawo sprzeciwu).</li>
                    <li>Dane nie będą przekazywane do państw trzecich ani organizacji międzynarodowych.</li>
                </ol><br>
                <h3 id="privacy-ad12" class="font-bold text-left text-xl">12. Informacje techniczne i technologie
                    śledzące</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator pozyskuje informacje o Użytkownikach m.in. poprzez gromadzenie logów serwera za
                        pośrednictwem operatora hostingowego.</li>
                    <li>Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze strony
                        internetowej Serwisu i nie są wykorzystywane w celu identyfikacji osób korzystających z serwisu.
                    </li>
                    <li>Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania Serwisem, a ich
                        zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.</li>
                    <li>Administrator zastrzega sobie prawo do filtrowania i blokowania wiadomości przesyłanych poprzez
                        wewnętrzny system wiadomości, w szczególności, jeśli mają charakter spamu, zawierają
                        niedozwolone treści lub w inny sposób zagrażają bezpieczeństwu użytkowników Serwisu
                        internetowego.</li>
                    <li>Administrator w sposób automatyczny rejestruje Dane przekazywane na serwer przez przeglądarki
                        internetowe lub urządzenia Użytkowników, np. adres IP, parametry oprogramowania i sprzętu,
                        przeglądane strony, numer identyfikacyjny urządzenia mobilnego oraz inne dane dotyczące urządzeń
                        i korzystania z systemów. Gromadzenie powyższych informacji następować będzie w przypadku
                        korzystania z Serwisu internetowego.</li>
                    <li>Administrator informuje, że może stosować następujące technologie śledzące działania podejmowane
                        przez użytkownika/Użytkownika w ramach strony internetowej Serwisu:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>kod śledzenia Google Analitycs –<br>
                                wykorzystywany w celu analizy statystyk strony internetowej Serwisu oraz
                                obsługi narzędzia Google Ads; informacje związane z Google Analytics znajdują
                                się na stronie: <a
                                   href="https://support.google.com/analytics/answer/6004245">https://support.google.com/analytics/answer/6004245</a>
                            </li>
                            <li>piksel konwersji Facebooka (fragment
                                kodu JavaScript) – wykorzystywany w celu monitorowania zdarzeń na stronie
                                internetowej Serwisu oraz zarządzania reklamami na Facebooku; informacje
                                Przetwarzane w ramach piksela Facebooka są anonimowe - nie pozwalają
                                Administratorowi na identyfikację danej osoby. Więcej informacji związanych z
                                wykorzystaniem przez Facebooka Danych zbieranych poprzez piksel znajduje się
                                tutaj: <a
                                   href="https://www.facebook.com/privacy/explanation">https://www.facebook.com/privacy/explanation</a>
                            </li>
                            <li>
                                kod śledzenia Microsoft Clarity
                                wykorzystywany w celu analizy zachowań na stronie oraz monitoringu ruchu fraudowego.
                                Informacje o przetwarzaniu danych znajdują się na stronie:
                                <a
                                   href="https://privacy.microsoft.com/pl-pl/privacystatement">https://privacy.microsoft.com/pl-pl/privacystatement</a>
                            </li>
                            <li>
                                kod śledzenia PIWIK
                                wykorzystywany w celu analizy statystyk strony internetowej Serwisu. Informacje o
                                przetwarzaniu danych znajdują się na stronie:
                                <a
                                   href="https://piwikpro.pl/privacy-policy/">https://piwikpro.pl/privacy-policy/</a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        Na stronie używane są wtyczki i inne narzędzia udostępniane przez serwisy społecznościowe, takie
                        jak Facebook czy LinkedIn. Wyświetlając stronę internetową, zawierającą taką wtyczkę,
                        przeglądarka Użytkownika nawiązuje bezpośrednie połączenie z serwerami administratorów ww.
                        serwisów społecznościowych. Zawartość wtyczki jest przekazywana bezpośrednio do przeglądarki
                        Użytkownika i integrowana ze stroną. Jeśli Użytkownik jest zalogowany do jednego z serwisów
                        społecznościowych, to usługodawca serwisu będzie mógł bezpośrednio przyporządkować wizytę na
                        Stronie do danego profilu w danym serwisie społecznościowym. Jeśli Użytkownik kliknie np. w
                        przycisk „Lubię to”, to odpowiednia informacja zostanie również przesłana bezpośrednio na serwer
                        danego usługodawcy i tam zachowana. Ponadto, informacje te zostaną opublikowane w danym serwisie
                        społecznościowym i ukażą się np. na tablicy na Facebooku. Cel i zakres gromadzenia Danych oraz
                        ich dalszego Przetwarzania i wykorzystania przez usługodawców, jak również możliwość kontaktu
                        oraz prawa Użytkowników w tym zakresie i możliwość dokonania ustawień zapewniających ochronę
                        prywatności zostały opisane w polityce prywatności poszczególnych usługodawców.
                    </li>
                    <li>Serwis może zawierać linki do stron internetowych należących lub administrowanych przez podmioty
                        trzecie. Administrator nie ponosi odpowiedzialności za zasady Przetwarzania Danych osobowych
                        przez te podmioty trzecie w ramach innych stron internetowych, w tym za polityki prywatności,
                        klauzule informacyjne i inne tego typu dokumenty umieszczone na tych stronach internetowych.
                    </li>
                </ol><br>
                <h3 id="privacy-ad13" class="font-bold text-left text-xl">13. Polityka cookies</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator zbiera w sposób automatyczny informacje zawarte w plikach cookies w celu
                        gromadzenia Danych związanych z korzystaniem z Serwisu internetowego przez Użytkownika. Pliki
                        cookies to mały fragment tekstu, który serwis internetowy wysyła do przeglądarki Użytkownika i
                        który przeglądarka wysyła z powrotem przy następnych wejściach na witrynę. Używane są głównie do
                        utrzymywania sesji np. poprzez wygenerowanie i odesłanie tymczasowego identyfikatora po
                        logowaniu.</li>
                    <li>Administrator wykorzystuje pliki cookies „sesyjne” przechowywane na urządzeniu końcowym
                        Użytkownika do czasu jego wylogowania, wyłączenia strony internetowej lub wyłączenia
                        przeglądarki internetowej oraz pliki cookies „stałe” przechowywane na urządzeniu końcowym
                        Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
                        Użytkownika.</li>
                    <li>Administrator w ramach Serwisu internetowego stosuje następujące rodzaje plików cookies:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>„niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach
                                Serwisu,</li>
                            <li>pliki cookies służące do zapewnienia bezpieczeństwa,</li>
                            <li>„wydajnościowe” pliki cookies, wykorzystywane do pozyskiwania informacji o sposobie
                                korzystania ze strony internetowej Serwisu przez Użytkowników,</li>
                            <li>„reklamowe” pliki cookies, umożliwiające dostarczanie Użytkownikom treści reklamowych
                                bardziej dostosowanych do ich zainteresowań,</li>
                            <li>„funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez Użytkownika
                                ustawień i dostosowanie Serwisu do Użytkownika.</li>
                        </ol>
                    </li>
                    <li>Administrator usługi wykorzystuje cookies zewnętrzne w następujących celach:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>zbierania ogólnych i anonimowych danych statycznych za pośrednictwem narzędzi
                                analitycznych: Google Analytics (administratorem cookies jest Google Ireland Ltd),</li>
                            <li>popularyzacji Serwisu internetowego za pomocą serwisów społecznościowych
                                (administratorem cookies zewnętrznych jest m.in.: Meta Platforms Ireland z siedzibą w
                                Irlandii).</li>
                        </ol>
                    </li>
                    <li>Administrator zapewnia możliwość korzystania z funkcji społecznościowej, takiej jak subskrypcja
                        (zaobserwowanie) profilu społecznościowego. Korzystanie z takiej funkcji może wiązać się z
                        wykorzystywaniem plików cookies administratorów serwisów społecznościowych takich jak Facebook.
                    </li>
                    <li>Pliki cookies dostosowują i optymalizują Serwis internetowy i jego ofertę dla potrzeb
                        Użytkowników poprzez takie działania jak tworzenie statystyk odsłon Serwisu internetowego oraz
                        zapewnienie bezpieczeństwa jego Użytkownikom.</li>
                    <li>Pliki cookies niezbędne są również do utrzymania sesji Użytkownika po opuszczeniu przez niego
                        Serwisu internetowego.</li>
                    <li>Użytkownik w każdej chwili za pomocą swojej przeglądarki internetowej może zmienić ustawienia
                        dotyczące plików cookies, w tym może zablokować możliwość gromadzenia plików cookies.</li>
                    <li>Zablokowanie możliwości gromadzenia plików cookies czy wprowadzenie innych zmian w ustawieniach
                        dotyczących plików cookies na urządzeniu Użytkownika może utrudnić lub uniemożliwić korzystanie
                        z usług i narzędzi Serwisu internetowego.</li>
                    <li>Użytkownik, który nie chce wykorzystywania plików cookies w opisanych powyżej celach w każdej
                        chwili może usunąć je ręcznie. Do zapoznania się ze szczegółową instrukcją postępowania należy
                        odwiedzić stronę internetową producenta przeglądarki internetowej, z której aktualnie korzysta
                        Użytkownik. Więcej informacji na temat cookies dostępnych jest w menu pomocy każdej przeglądarki
                        internetowej. Przykładowe przeglądarki internetowe obsługujące wspomniane pliki cookies to
                        Mozilla Firefox, Google Chrome.</li>
                    <li>Administrator może umożliwiać podmiotom zewnętrznym, np. dostawcom reklam czy dostawcom
                        rozwiązań analitycznych, gromadzenie informacji z wykorzystaniem powyższych technologii
                        bezpośrednio na stronie internetowej Serwisu internetowego. Zgromadzone w ten sposób Dane
                        podlegają postanowieniom polityk prywatności opracowanym przez te podmioty.</li>
                </ol><br>
                <h3 id="privacy-ad14" class="font-bold text-left text-xl">14. Zmiany Polityki Prywatności</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>W przyszłości może pojawić się konieczność wprowadzania zmian lub aktualizacji Polityki
                        Prywatności. W szczególności może się to okazać konieczne z uwagi na zmiany w obowiązujących
                        przepisach prawa dotyczących ochrony Danych osobowych, wytyczne w zakresie ochrony Danych
                        osobowych wydane przez organ nadzorczy (Prezesa Urzędu Ochrony Danych Osobowych), ale również
                        np. w związku z ewentualnymi zmianami w zakresie prowadzenia przez Administratora Serwisu lub
                        procesów obsługi Kontrahentów.</li>
                    <li>Administrator gwarantuje, że wszelkie zmiany Polityki Prywatności, jakie mogą ewentualnie
                        wystąpić w przyszłości, będą pozostały w pełnej zgodności z obowiązującymi przepisami prawa w
                        zakresie ochrony Danych osobowych, jak również będą uwzględniały konieczność zapewnienia
                        bezpieczeństwa Państwa Danych osobowych Przetwarzanych przez Administratora.</li>
                    <li>Informacja o zmianie Polityki Prywatności będzie udostępniona w ramach Serwisu nie później niż w
                        terminie 7 dni przed rozpoczęciem obowiązywania zaktualizowanej wersji Polityki Prywatności.
                    </li>
                </ol><br>
                <div class="text-left"><strong>Ostatnia aktualizacja Polityki Prywatności</strong> – 26.06.2024 r</div>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.privacy = false">Zamknij</a>
        </div>
    </UModal>
</template>
<script setup lang="ts">
const modals = useModals();
const scrollTo = (target: string) => {
    const element = document.querySelector(`#${target}`);
    element?.scrollIntoView({ behavior: "smooth" });
}
</script>