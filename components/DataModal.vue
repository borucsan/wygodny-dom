<template>
    <UModal v-model="modals.data" class="z-[999] w-full" :ui="{
        width: 'w-full sm:max-w-[80vw]',
        height: 'h-full sm:max-h-[90vh]'
    }">
        <div class="p-1 md:p-10 font-barlow text-center flex flex-col overflow-hidden">
            <div class="overflow-y-scroll px-4">
                <h2 class="text-xl font-bold text-left">ZASADY PRZETWARZANIA DANYCH W SPÓŁCE</h2><br>

                <p class="text-left">Niniejszy dokument określa zasady Przetwarzania i ochrony Państwa Danych osobowych,
                    które zbieramy w jednym lub większej liczbie celów, opisanych poniżej.<br>
                    Niniejszy dokument ma charakter informacyjny.</p>
                <br>
                <h3 class="font-bold text-left">Spis treści:</h3><br>
                <ol class="flex pl-5 flex-col gap-2 list-decimal mb-2 text-left" type="1">
                    <li><a href="#privacy-ad1" @click.prevent="scrollTo('privacy-ad1')"
                           class="font-bold scroll-to">Słownik</a></li>
                    <li><a href="#privacy-ad2" @click.prevent="scrollTo('privacy-ad2')"
                           class="font-bold scroll-to">Administrator Danych osobowych</a></li>
                    <li><a href="#privacy-ad3" @click.prevent="scrollTo('privacy-ad3')"
                           class="font-bold scroll-to">Adresaci zasad Przetwarzania</a></li>
                    <li><a href="#privacy-ad4" @click.prevent="scrollTo('privacy-ad4')"
                           class="font-bold scroll-to">Ofertowanie i zawieranie umów – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad5" @click.prevent="scrollTo('privacy-ad5')"
                           class="font-bold scroll-to">Rozpatrywanie skarg, wniosków i reklamacji – obowiązek
                            informacyjny</a></li>
                    <li><a href="#privacy-ad6" @click.prevent="scrollTo('privacy-ad6')"
                           class="font-bold scroll-to">Odpowiadanie na żądania i wypełnianie obowiązków związanych z
                            ochroną Danych osobowych - obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad7" @click.prevent="scrollTo('privacy-ad7')"
                           class="font-bold scroll-to">Spełnianie obowiązków podatkowych – obowiązek informacyjny</a>
                    </li>
                    <li><a href="#privacy-ad8" @click.prevent="scrollTo('privacy-ad8')"
                           class="font-bold scroll-to">Ustalanie i dochodzenie roszczeń oraz obrona przed roszczeniami –
                            obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad9" @click.prevent="scrollTo('privacy-ad9')"
                           class="font-bold scroll-to">Rekrutacja pracowników – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad10" @click.prevent="scrollTo('privacy-ad10')"
                           class="font-bold scroll-to">Rekrutacja współpracowników – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad11" @click.prevent="scrollTo('privacy-ad11')"
                           class="font-bold scroll-to">Obsługa korespondencji, kontakt z Klientem – obowiązek
                            informacyjny</a></li>
                    <li><a href="#privacy-ad12" @click.prevent="scrollTo('privacy-ad12')"
                           class="font-bold scroll-to">Organizowanie wydarzeń, konferencji, itp. – obowiązek
                            informacyjny</a></li>
                    <li><a href="#privacy-ad13" @click.prevent="scrollTo('privacy-ad13')"
                           class="font-bold scroll-to">Organizowanie konkursów – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad14" @click.prevent="scrollTo('privacy-ad14')"
                           class="font-bold scroll-to">Marketing własny - przesyłanie informacji marketingowych,
                            handlowych, newslettera – obowiązek informacyjny</a></li>
                    <li><a href="#privacy-ad15" @click.prevent="scrollTo('privacy-ad15')"
                           class="font-bold scroll-to">Prawa osób, których dane dotyczą</a></li>
                    <li><a href="#privacy-ad16" @click.prevent="scrollTo('privacy-ad16')"
                           class="font-bold scroll-to">Przekazywanie Danych do państw trzecich i organizacji
                            międzynarodowych, zautomatyzowane podejmowanie decyzji</a></li>
                    <li><a href="#privacy-ad17" @click.prevent="scrollTo('privacy-ad17')"
                           class="font-bold scroll-to">Zmiany zasad Przetwarzania Danych</a></li>
                </ol>
                <br>
                <h3 id="privacy-ad1" class="font-bold text-left text-xl"></h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li><strong>Administrator Danych osobowych (Administrator)</strong>: oznacza osobę fizyczną lub
                        prawną, organ publiczny, jednostkę lub inny podmiot, który samodzielnie lub wspólnie z innymi
                        ustala cele i sposoby Przetwarzania Danych osobowych; jeżeli cele i sposoby takiego
                        Przetwarzania są określone w prawie Unii lub w prawie państwa członkowskiego, to również w
                        prawie Unii lub w prawie państwa członkowskiego może zostać wyznaczony Administrator lub mogą
                        zostać określone konkretne kryteria jego wyznaczania.</li>
                    <li><strong>Dane osobowe (Dane)</strong>: oznaczają wszelkie informacje o zidentyfikowanej lub
                        możliwej do zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”); możliwa do
                        zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować,
                        w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny,
                        dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka szczególnych czynników
                        określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub
                        społeczną tożsamość osoby fizycznej.</li>
                    <li><strong>Informacja handlowa</strong>: każda informacja przeznaczona bezpośrednio lub pośrednio
                        do promowania towarów, usług lub wizerunku przedsiębiorcy lub osoby wykonującej zawód, której
                        prawo do wykonywania zawodu jest uzależnione od spełnienia wymagań określonych w odrębnych
                        ustawach, z wyłączeniem informacji umożliwiającej porozumiewanie się za pomocą środków
                        komunikacji elektronicznej z określoną osobą oraz informacji o towarach i usługach niesłużącej
                        osiągnięciu efektu handlowego pożądanego przez podmiot, który zleca jej rozpowszechnianie, w
                        szczególności bez wynagrodzenia lub innych korzyści od producentów, sprzedawców i świadczących
                        usługi.</li>
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
                    <li><strong>Newsletter</strong>Usługa Elektroniczna, świadczona przez Usługodawcę za pośrednictwem
                        poczty elektronicznej e-mail, która umożliwia wszystkim korzystającym z niej osobom
                        subskrybowanie i automatyczne otrzymywanie drogą elektroniczną cyklicznych, bezpłatnych
                        informacji m.in. o nowościach, promocjach, w tym Informacji handlowych.</li>
                    <li><strong>Organ nadzorczy</strong>: Prezes Urzędu Ochrony Danych Osobowych (PUODO).</li>
                    <li><strong></strong>Przetwarzanie: oznacza operację lub zestaw operacji wykonywanych na Danych
                        osobowych lub zestawach Danych osobowych w sposób zautomatyzowany lub niezautomatyzowany, taką
                        jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub
                        modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie,
                        rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie,
                        usuwanie lub niszczenie.</li>
                    <li><strong>RODO</strong>: rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
                        kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i
                        w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                        rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz. Urz. UE. L Nr 119, str. 1).
                    </li>

                </ol>
                <br>
                <h3 id="privacy-ad2" class="font-bold text-left text-xl">2. Administrator Danych osobowych</h3><br>
                <p class="text-left">
                    Administratorem Danych osobowych, w rozumieniu rozporządzenia Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                    danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                    (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r. (Dz. Urz. UE. L Nr 119, str.
                    1), zwanego dalej RODO, jest <strong>Salelifter sp. z o.o. z siedzibą w Rybniku</strong>, zwana
                    dalej
                    Administratorem.
                    Administrator wyznaczył inspektora ochrony danych: <a
                       href="mailto:iod@salelifter.pl">iod@salelifter.pl</a>
                </p><br>
                <h3 id="privacy-ad3" class="font-bold text-left text-xl">3. Adresaci Polityki prywatności</h3><br>
                <p class="text-left">Polityka prywatności jest adresowana do Państwa, gdy m.in.:</p>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>są Państwo Klientem korzystającym z usług i produktów oferowanych przez Administratora,</li>
                    <li>są Państwo Kontrahentem Administratora,</li>
                    <li>są Państwo reprezentantem Kontrahenta, osobą fizyczną działającą z ramienia Kontrahenta lub
                        osobą kontaktową ze strony Kontrahenta, w tym w szczególności jego pracownikiem lub
                        współpracownikiem,</li>
                    <li>kontaktują się Państwo z nami telefonicznie lub SMS-wo, poprzez wiadomości e-mail, poprzez
                        formularz kontaktowy dostępny w ramach naszej strony internetowej, innymi środkami komunikacji
                        elektronicznej, pocztą tradycyjną, bądź to Administrator kontaktuje się z Państwem w ww. sposób,
                    </li>
                    <li>są Państwo kandydatem do pracy,</li>
                    <li>są Państwo subskrybentami naszego Newslettera lub odbiorcami innych materiałów marketingowych
                        czy handlowych.</li>
                </ol>
                <br>
                <h3 id="privacy-ad4" class="font-bold text-left text-xl">4. Ofertowanie i zawieranie umów – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe Klientów w celu zawarcia umowy, podjęcia odpowiednich
                        czynności przed zawarciem umowy (np. w ramach negocjacji, ofertowania, przygotowanie wyceny).
                    </li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>art. 6 ust. 1 lit. b RODO - Przetwarzanie jest niezbędne do wykonania umowy zawartej z
                                osobą, której dotyczą Dane lub podjęcia działań w celu jej zawarcia,</li>
                            <li>art. 6 ust. 1 lit. c RODO - w związku z koniecznością wypełnienia obowiązku prawnego
                                ciążącego na Administratorze wynikającego z przepisów podatkowych i przepisów o
                                rachunkowości co do Danych osobowych zawartych w dokumentacji podatkowej lub księgowej,
                            </li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustalenie,
                                dochodzenie i obrona przed ewentualnymi roszczeniami, prowadzenie komunikacji,
                                realizacja działań marketingowych.</li>
                        </ol>
                    </li>
                    <li>
                        Administrator będzie Przetwarzał Państwa Dane osobowe do czasu zakończenia umowy, a potem przez
                        okres 5 lat liczonych od końca roku, w którym powstał obowiązek podatkowy dla celów
                        księgowo-podatkowych, po tym czasie do upływu terminu przedawnienia roszczeń wynikających z
                        umowy o świadczenie usług. Termin przedawnienia wynosi sześć lat, a dla roszczeń o świadczenia
                        okresowe oraz roszczeń związanych z prowadzeniem działalności gospodarczej – trzy lata. Jednakże
                        koniec terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                        przedawnienia jest krótszy niż dwa lata. W przypadku realizacji działań marketingowych
                        Administrator będzie Przetwarzał Państwa Dane osobowe do czasu zgłoszenia skutecznego sprzeciwu.
                    </li>
                    <li>Podanie Danych osobowych jest warunkiem zawarcia i wykonania umowy o świadczenie usług. Podanie
                        Danych jest dobrowolne, lecz konsekwencją ich niepodania będzie brak możliwości zawarcia i/lub
                        wykonania danej umowy.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, firmy świadczące usługi księgowe, usługi prawne, analityczne,
                                badania jakości obsługi, dochodzenia należności, audytujące naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy systemów płatności elektronicznych oraz banki w zakresie realizacji
                                płatności,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>nasi partnerzy handlowi, podmioty uczestniczące w realizacji danej umowy.</li>
                        </ol>
                    </li>
                </ol><br>
                <p class="text-left">
                    Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki obowiązek będzie
                    wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej decyzji/orzeczenia sądu, w tym
                    np. do sądów, prokuratur,urzędów skarbowych.
                </p><br>
                <h3 id="privacy-ad5" class="font-bold text-left text-xl">5. Rozpatrywanie skarg, wniosków i reklamacji –
                    obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu udzielenia odpowiedzi na reklamację, skargę,
                        wniosek.</li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>art. 6 ust. 1 lit. c RODO - Przetwarzanie jest niezbędne do wypełnienia obowiązku
                                prawnego ciążącego na Administratorze,</li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustalenie,
                                dochodzenie i obrona przed ewentualnymi roszczeniami, prowadzenie komunikacji.</li>
                        </ol>
                    </li>
                    <li>Administrator będzie Przetwarzał Państwa Dane osobowe przez czas postępowania reklamacyjnego lub
                        związanego ze skargą/wnioskiem (maksymalnie do 30 dni), a w wypadku wystąpienia z dalszymi
                        roszczeniami powiązanymi z reklamacją, skargą lub wnioskiem – do czasu upływu terminów
                        przedawnienia tych roszczeń. Termin przedawnienia wynosi sześć lat, a dla roszczeń o świadczenia
                        okresowe oraz roszczeń związanych z prowadzeniem działalności gospodarczej – trzy lata. Jednakże
                        koniec terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                        przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych osobowych jest warunkiem otrzymania odpowiedzi na reklamację, skargę,
                        wniosek. Ich podanie jest dobrowolne, lecz konsekwencją ich niepodania będzie brak możliwości
                        otrzymania odpowiedzi na reklamację, skargę, wniosek.</li>
                    <li>
                        Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne, badania
                                jakości obsługi, dochodzenia należności, audytujący naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>podmioty uczestniczące w realizacji danej umowy.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur, urzędów skarbowych.</p><br>
                <h3 id="privacy-ad6" class="font-bold text-left text-xl">6. Odpowiadanie na żądania, wypełnianie innych
                    obowiązków związanych z ochroną Danych osobowych – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu udzielenia odpowiedzi na kierowane żądanie (np.
                        dostępu do Danych, usunięcia Danych, ich sprostowania), oraz w celu wypełnienia innych
                        obowiązków prawnych ciążących na Administratorze, a wynikających z prawa ochrony Danych
                        osobowych (np. Przetwarzanie Danych osobowych w związku z naruszeniami itp.).</li>
                    <li>Dane będą Przetwarzane na podstawie.:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>art. 6 ust. 1 lit. c RODO - Przetwarzanie jest niezbędne do wypełnienia obowiązku
                                prawnego ciążącego na Administratorze wynikającego z RODO.</li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustalenie,
                                dochodzenie i obrona przed ewentualnymi roszczeniami.</li>
                        </ol>
                    </li>
                    <li>Administrator będzie Przetwarzał Dane osobowe przez czas prowadzenia komunikacji związanej z
                        kierowanym żądaniem, czy naruszeniem, a potem do upływu okresu wymaganego do ustalenia,
                        dochodzenia lub obrony roszczeń. Termin przedawnienia wynosi sześć lub dziesięć lat, a dla
                        roszczeń o świadczenia okresowe oraz roszczeń związanych z prowadzeniem działalności
                        gospodarczej - trzy lata. Jednakże koniec terminu przedawnienia przypada na ostatni dzień roku
                        kalendarzowego, chyba że termin przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne, by móc prowadzić komunikacje związaną z żądaniem.
                        Konsekwencją nie podania Danych będzie brak możliwości prowadzenia komunikacji.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, usługi prawne, badania jakości obsługi, audytujące naszą
                                działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>podmioty uczestniczące w realizacji żądania.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur, urzędów skarbowych.</p>
                <br>
                <h3 id="privacy-ad7" class="font-bold text-left text-xl">7. Spełnianie obowiązków podatkowych –
                    obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu wypełnienia obowiązków prawnych ciążących na
                        Administratorze, a wynikających z prawa podatkowego (wystawianie faktur, prowadzenie
                        dokumentacji księgowej, dokonywanie płatności, itp.).</li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>art. 6 ust. 1 lit. c RODO - Przetwarzanie jest niezbędne do wypełnienia obowiązku
                                prawnego ciążącego na Administratorze wynikającego z przepisów podatkowych i przepisów o
                                rachunkowości co do Danych osobowych zawartych w dokumentacji podatkowej lub księgowej,
                            </li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustalenie,
                                dochodzenie i obrona przed ewentualnymi roszczeniami.</li>
                        </ol>
                    </li>
                    <li>Administrator będzie Przetwarzał Dane osobowe przez okres 5 lat od końca roku, w którym upłynął
                        termin zapłaty podatku za rok poprzedni lub do czasu upływu terminów przedawnienia
                        roszczeń. Termin przedawnienia wynosi sześć lat, a dla roszczeń o świadczenia okresowe oraz
                        roszczeń związanych z prowadzeniem działalności gospodarczej – trzy lata. Jednakże koniec
                        terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                        przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych osobowych jest obowiązkowe, z uwagi na konieczność spełnienia przez
                        Administratora ciążących na nim obowiązków podatkowych.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne,
                                dochodzenia należności, audytujący naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy systemów płatności elektronicznych oraz banki w zakresie realizacji
                                płatności,</li>
                            <li>operatorzy pocztowi, firmy kurierskie.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur,urzędów skarbowych.</p>
                <br>
                <h3 id="privacy-ad8" class="font-bold text-left text-xl">8. Ustalanie i dochodzenie roszczeń oraz obrona
                    przed roszczeniami – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu ustalenia, dochodzenia lub obrony przed
                        roszczeniami.</li>
                    <li>Dane będą Przetwarzane na podstawie art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do
                        celów wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora, którymi
                        są m.in. ustalenia, dochodzenia lub obrony przed roszczeniami, archiwizacja korespondencji na
                        potrzeby wykazania jej przebiegu w przyszłości.</li>
                    <li>Administrator będzie Przetwarzał Dane osobowe do upływu okresu wymaganego do ustalenia,
                        dochodzenia lub obrony roszczeń. Termin przedawnienia wynosi sześć lub dziesięć lat, a dla
                        roszczeń o świadczenia okresowe oraz roszczeń związanych z prowadzeniem działalności
                        gospodarczej - trzy lata. Jednakże koniec terminu przedawnienia przypada na ostatni dzień roku
                        kalendarzowego, chyba że termin przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne w celu ustalenia, dochodzenia lub obrony przed
                        roszczeniami.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne,
                                marketingowe, badania jakości obsługi, dochodzenia należności, audytujący naszą
                                działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy systemów płatności elektronicznych oraz banki w zakresie realizacji
                                płatności,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>nasi partnerzy handlowi, podmioty uczestniczące w realizacji danej umowy.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur,urzędów skarbowych.</p><br>
                <h3 id="privacy-ad9" class="font-bold text-left text-xl">9. Rekrutacja pracowników – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal text-left pl-5" type="1">
                    <li>
                        Administrator może gromadzić Dane osobowe kandydatów do pracy w celu przeprowadzenia rekrutacji.
                    </li>
                    <li> 2. Dane osobowe w zakresie wskazanym w przepisach prawa pracy tj. w art. 221 ustawy z 26
                        czerwca 1974 r. Kodeks pracy (Dz. U. 2020 poz. 1320 ze zm.) (dalej: Kp) oraz w Rozporządzeniu
                        Ministra Rodziny, Pracy i Polityki Społecznej z dnia 10 grudnia 2018 r. w sprawie dokumentacji
                        pracowniczej (Dz. U. 2018 poz. 2369) będą Przetwarzane w celu przeprowadzenia obecnego
                        postępowania rekrutacyjnego.
                        Podstawą Przetwarzania jest art. 221 § 1 pkt 4 – 6 Kp w zw. z art. 6 ust. 1 lit. b RODO.
                        W przypadku Danych określonych w art. 221 § 1 pkt 1 – 3 Kp podstawą Przetwarzania jest art.
                        6 ust. 1 lit. c RODO.
                        Podanie innych Danych w zakresie nieokreślonym przepisami prawa, zostanie potraktowane jako
                        zgoda na Przetwarzanie tych Danych osobowych. Wyrażenie zgody w tym przypadku jest dobrowolne,
                        a zgodę tak wyrażoną można odwołać w dowolnym czasie.
                        Podstawą Przetwarzania jest art. 6 ust. 1 lit a RODO, a w przypadku Danych osobowych
                        szczególnych kategorii art. 9 ust. 2 lit. a RODO.</li>
                    <li>Państwa Dane osobowe mogą być Przetwarzane, także w kolejnych naborach pracowników jeżeli wyrażą
                        Państwo na to zgodę, która może zostać odwołana w dowolnym czasie.</li>
                </ol>
                <p class="text-left">Podstawą Przetwarzania jest art. 6 ust. 1 lit a RODO.</p>
                <ol class="flex flex-col gap-4 list-decimal text-left pl-5" type="1" start="4">
                    <li>Administrator będzie Przetwarzał Państwa Dane osobowe do czasu zakończenia postępowania
                        rekrutacyjnego lub rezygnacji kandydata z ubiegania się o zatrudnienie, chyba że kandydat wyrazi
                        zgodę na Przetwarzanie swoich Danych osobowych także na potrzeby przyszłych rekrutacji. W
                        przypadku wyrażonej zgody na wykorzystywane Danych osobowych dla celów przyszłych rekrutacji,
                        Dane będą wykorzystywane przez 9 miesięcy.</li>
                    <li>Podanie Danych w zakresie wynikającym z art. 221 Kodeksu pracy jest niezbędne, aby uczestniczyć
                        w postępowaniu rekrutacyjnym. Podanie przez Państwa innych Danych jest dobrowolne.</li>
                </ol>
                <p class="text-left">Konsekwencją nie podania Danych niezbędnych będzie brak możliwości wzięcia udziału
                    w procesie rekrutacji.</p>
                <ol class="flex flex-col gap-4 list-decimal text-left pl-5" type="1" start="6">
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, usługi prawne, analityczne, badania jakości obsługi, audytujący
                                naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>agencje rekrutacyjne, dostawcy systemów służących do rekrutacji.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur,urzędów skarbowych.</p><br>
                <h3 id="privacy-ad10" class="font-bold text-left text-xl">10. Rekrutacja współpracowników – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe kandydatów do współpracy w celu przeprowadzenia
                        rekrutacji.</li>
                    <li>Dane osobowe będą Przetwarzane w celu przeprowadzenia obecnego postępowania rekrutacyjnego.
                        Podstawą Przetwarzania jest art. 6 ust. 1 lit. b RODO.</li>
                    <li>Państwa Dane osobowe mogą być Przetwarzane, także w kolejnych naborach współpracowników jeżeli
                        wyrażą Państwo na to zgodę, która może zostać odwołana w dowolnym czasie. Podstawą Przetwarzania
                        jest art. 6 ust. 1 lit a RODO.</li>
                    <li>Administrator będzie Przetwarzał Państwa Dane osobowe do czasu zakończenia postępowania
                        rekrutacyjnego lub rezygnacji kandydata, chyba że kandydat wyrazi zgodę na Przetwarzanie swoich
                        Danych osobowych także na potrzeby przyszłych rekrutacji. W przypadku wyrażonej zgody na
                        wykorzystywane Danych osobowych dla celów przyszłych rekrutacji, Dane będą wykorzystywane przez
                        9 miesięcy.</li>
                    <li>Podanie przez Państwa Danych osobowych jest dobrowolne.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, usługi prawne, analityczne, badania jakości obsługi, audytujący
                                naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>agencje rekrutacyjne, dostawcy systemów służących do rekrutacji.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki
                    obowiązek będzie wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej
                    decyzji/orzeczenia sądu, w tym np. do sądów, prokuratur,urzędów skarbowych.</p>
                <br>
                <h3 id="privacy-ad11" class="font-bold text-left text-xl">11. Obsługa korespondencji, kontakt z osobami,
                    których Dane dotyczą – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe Klientów i innych osób kontaktujących się z
                        Administratorem w ramach szeroko pojętej obsługi Klienta, a które to Dane osobowe są niezbędne
                        do zrealizowania danej prośby i kontaktu z nim w celu udzielenia odpowiedzi. Kontakt jest
                        możliwy telefonicznie lub SMS-wo, poprzez wiadomości e-mail, poprzez formularz kontaktowy
                        dostępny w ramach naszej strony internetowej, innymi środkami komunikacji elektronicznej, pocztą
                        tradycyjną.</li>
                    <li>Dane będą Przetwarzane na podstawie art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do
                        celów wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora, którymi
                        są: kontaktem z Państwem, a także archiwizacja ewentualnej korespondencji na potrzeby wykazania
                        jej przebiegu w przyszłości . Jeżeli po kontakcie dojdzie do zawarcia umowy, Dane będą
                        Przetwarzane na podstawie art. 6 ust. 1 lit. b RODO.</li>
                    <li>Treść korespondencji może zostać zarchiwizowana. Jeżeli zostanie zarchiwizowana będzie
                        przechowywana aż do upływu terminu przedawnienia roszczeń, które mogą się potencjalnie pojawić w
                        związku z prowadzoną korespondencją. Termin przedawnienia wynosi sześć lub dziesięć lat, a dla
                        roszczeń o świadczenia okresowe oraz roszczeń związanych z prowadzeniem działalności
                        gospodarczej - trzy lata. Jednakże koniec terminu przedawnienia przypada na ostatni dzień roku
                        kalendarzowego, chyba że termin przedawnienia jest krótszy niż dwa lata.</li>
                    <li>Podanie Danych jest dobrowolne, ale niezbędne, by nawiązać z nami kontakt. Konsekwencją nie
                        podania Danych będzie brak możliwości kontaktu.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne, badania
                                jakości obsługi, dochodzenia należności, audytujący naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>podmioty uczestniczące w realizacji danej umowy.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">
                    Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki obowiązek będzie
                    wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej decyzji/orzeczenia sądu, w tym
                    np. do sądów, prokuratur,urzędów skarbowych.
                </p><br>
                <h3 id="privacy-ad12" class="font-bold text-left text-xl">12. Organizowanie wydarzeń, konferencji, itp.
                    – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu organizacji wydarzeń, konferencji.</li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li> 6 ust. 1 lit. b RODO - Przetwarzanie jest niezbędne do wykonania umowy o udział w
                                wydarzeniu/konferencji zawartej z osobą, której Dane dotyczą lub podjęcia działań w celu
                                zawarcia takiej umowy,</li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustalenie,
                                dochodzenie i obrona przed ewentualnymi roszczeniami.</li>
                        </ol>
                    </li>
                    <li>Administrator będzie Przetwarzał Państwa Dane osobowe do zakończenia umowy o udział w
                        wydarzeniu/konferencji, a potem przez okres 5 lat liczonych od końca roku, w którym powstał
                        obowiązek podatkowy dla celów księgowo-podatkowych oraz do czasu upływu terminów przedawnienia
                        roszczeń wynikających z umowy o udział w wydarzeniu/konferencji. Termin przedawnienia wynosi
                        sześć lub dziesięć lat, a dla roszczeń o świadczenia okresowe oraz roszczeń związanych z
                        prowadzeniem działalności gospodarczej - trzy lata. Jednakże koniec terminu przedawnienia
                        przypada na ostatni dzień roku kalendarzowego, chyba że termin przedawnienia jest krótszy niż
                        dwa lata.</li>
                    <li>Podanie Danych osobowych jest warunkiem zawarcia i realizacji umowy o udział w
                        wydarzeniu/konferencji.</li>
                </ol>
                <p class="text-left">
                    Ich podanie jest dobrowolne, lecz konsekwencją ich niepodania będzie brak możliwości wzięcia udziału
                    w wydarzeniu/konferencji.
                </p>
                <ol class="flex flex-col gap-4 list-decimal text-left pl-5" type="1" start="5">
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne,
                                marketingowe, badania jakości obsługi, dochodzenia należności, audytujący naszą
                                działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy systemów płatności elektronicznych oraz banki w zakresie realizacji
                                płatności,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>nasi partnerzy handlowi, podmioty uczestniczące w realizacji danej umowy.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">
                    Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki obowiązek będzie
                    wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej decyzji/orzeczenia sądu, w tym
                    np. do sądów, prokuratur,urzędów skarbowych.
                </p>
                <br>
                <h3 id="privacy-ad13" class="font-bold text-left text-xl">13. Organizowanie konkursów – obowiązek
                    informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu organizacji konkursu (usługi) na zasadach
                        opisanych w regulaminie danego konkursu, w tym w celu prawidłowego przeprowadzenia konkursu,
                        wyłonienia zwycięzców i przyznania nagród konkursowych.</li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>6 ust. 1 lit. b RODO - Przetwarzanie jest niezbędne do wykonania umowy lub podjęcia
                                działań w celu zawarcia takiej umowy,</li>
                            <li>art. 6 ust. 1 lit. c RODO - Przetwarzanie jest niezbędne w związku z koniecznością
                                wypełnienia obowiązku prawnego ciążącego na Administratorze wynikającego z przepisów
                                podatkowych i przepisów o rachunkowości,</li>
                            <li>art. 6 ust. 1 lit. f RODO - Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora, którymi są ustaleni,
                                dochodzenie i obrona przed ewentualnymi roszczeniami.</li>
                        </ol>
                    </li>
                    <li>Administrator będzie Przetwarzał Państwa Dane osobowe w celu realizacji konkursu oraz działań
                        podjętych w związku z jego organizacją, do czasu zakończenia konkursu, wyłonienia laureatów i
                        przyznania nagród, a także do czasu upływu terminów przedawnienia roszczeń wynikających z
                        organizacji konkursu. Termin przedawnienia wynosi sześć lat, a dla roszczeń o świadczenia
                        okresowe oraz roszczeń związanych z prowadzeniem działalności gospodarczej – trzy lata. Jednakże
                        koniec terminu przedawnienia przypada na ostatni dzień roku kalendarzowego, chyba że termin
                        przedawnienia jest krótszy niż dwa lata oraz w związku z koniecznością dokonania rozliczeń
                        podatkowych - przez okres 5 lat od końca roku, w którym upłynął termin zapłaty podatku za rok
                        poprzedni.</li>
                    <li>Podanie Danych osobowych jest dobrowolne, lecz konsekwencją ich niepodania będzie brak
                        możliwości wzięcia udziału w konkursie.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, świadczące usługi księgowe, usługi prawne, analityczne,
                                marketingowe, badania jakości obsługi, audytujący naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>operatorzy pocztowi, firmy kurierskie,</li>
                            <li>nasi partnerzy handlowi, podmioty uczestniczące w procedurze konkursowej.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">
                    Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki obowiązek będzie
                    wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej decyzji/orzeczenia sądu, w tym
                    np. do sądów, prokuratur,urzędów skarbowych.
                </p><br>
                <h3 id="privacy-ad14" class="font-bold text-left text-xl">14. Marketing własny - przesyłanie informacji
                    marketingowych, Informacji handlowych, Newslettera – obowiązek informacyjny</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Administrator może gromadzić Dane osobowe w celu wysyłki Newslettera lub informacji
                        marketingowych i Informacji handlowych.</li>
                    <li>Dane będą Przetwarzane na podstawie:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>art. 6 ust. 1 lit. a RODO - osoba, której Dane dotyczą wyraziła zgodę na Przetwarzanie
                                swoich Danych osobowych oraz</li>
                            <li>art. 6 ust. 1 lit. f RODO,- Przetwarzanie jest niezbędne do celów wynikających z prawnie
                                uzasadnionych interesów realizowanych przez Administratora którymi są w tym przypadku
                                wysyłka Newslettera lub informacji marketingowych i Informacji handlowych oraz obrona
                                przed ewentualnymi skargami lub zarzutami pojawiającymi się w związku z wysyłką
                                mailingów.</li>
                        </ol>
                    </li>
                    <li>W zakresie informacji, które mogą również stanowić Dane osobowe, a które nie pochodzą
                        bezpośrednio od Państwa, a zostały zebrane automatycznie przez system służący do wysyłki
                        Newslettera czy informacji marketingowych i Informacji handlowych Przetwarzamy je w oparciu o
                        prawnie uzasadniony interes (stosownie do art. 6 ust. 1 lit. f RODO), którym jest dążenie do
                        poprawienia naszych działań i wykazanie w razie potrzeby który link z Newslettera czy
                        informacji marketingowych i Informacji handlowych został przez Państwa kliknięty.</li>
                    <li>Gdy podstawą Przetwarzania jest udzielona przez Państwa zgoda na otrzymywanie Informacji
                        handlowej lub na wysyłkę Newslettera może być ona w każdej chwili cofnięta na Państwa wniosek
                        złożony za pośrednictwem poczty elektronicznej lub w linku pojawiającym się w każdym wysyłanym
                        przez nas mailingu. Dane osobowe będą Przetwarzane do czasu skutecznego wniesienia sprzeciwu lub
                        osiągnięcia celu Przetwarzania, a w przypadku wyrażenia zgody, do czasu jej wycofania.</li>
                    <li>Podanie Danych jest dobrowolne. Konsekwencją ich nie podania będzie brak możliwości otrzymywania
                        Newslettera lub informacji marketingowych i Informacji handlowych.</li>
                    <li>Administrator informuje, że odbiorcami Państwa Danych osobowych są:
                        <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                            <li>podmioty wspierające nas w prowadzonej działalności na nasze zlecenie, w szczególności:
                                dostawcy systemów IT, usługi prawne, analityczne, marketingowe, badania jakości obsługi,
                                audytujący naszą działalność,</li>
                            <li>dostawcy usług chmury obliczeniowej, w której przechowywane są pliki, w których mogą
                                znajdować się Państwa Dane osobowe,</li>
                            <li>dostawcy systemów do wysyłki mailingów,</li>
                            <li>nasi partnerzy handlowi.</li>
                        </ol>
                    </li>
                </ol>
                <p class="text-left">
                    Państwa Dane osobowe mogą zostać przekazane również innym podmiotom, jeśli taki obowiązek będzie
                    wynikał z powszechnie obowiązujących przepisów prawa lub prawomocnej decyzji/orzeczenia sądu, w tym
                    np. do sądów, prokuratur,urzędów skarbowych.
                </p><br>
                <h3 id="privacy-ad15" class="font-bold text-left text-xl">15. Prawa osób, których Dane dotyczą</h3>
                <p class="text-left">Posiadają Państwo:</p>
                <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a">
                    <li><strong>prawo dostępu do Danych osobowych</strong>(tzn. mogą Państwo uzyskać od Administratora
                        potwierdzenie, czy Państwa Dane osobowe są przez nas Przetwarzane, czy nie; jeśli tak, mają
                        Państwo prawo żądać do nich dostępu oraz informacji związanych z ich Przetwarzaniem, m. in. o
                        celu Przetwarzania, odbiorcach lub kategoriach odbiorców Danych, planowanym okresie
                        przechowywania Danych lub kryteriach ustalenia tego okresu itp.),</li>
                    <li><strong>prawo do sprostowania Danych</strong>(np. uzupełnienia, poprawienia, uaktualnienia),
                    </li>
                    <li><strong>prawo do wniesienia sprzeciwu wobec Przetwarzania Państwa Danych</strong> (mają Państwo
                        prawo w dowolnym momencie wnieść sprzeciw – z przyczyn związanych z Państwa szczególną sytuacją
                        – wobec Przetwarzania dotyczącego Państwa Danych osobowych opartego na Przetwarzaniu, które jest
                        niezbędne dla celów wynikających z prawnie uzasadnionych interesów realizowanych przez
                        Administratora w tym profilowania na podstawie tych przepisów. W takiej sytuacji Administrator
                        zaprzestanie Przetwarzania Państwa Danych osobowych, chyba że będzie w stanie przedstawić
                        prawnie uzasadnione podstawy Przetwarzania, które będą nadrzędne w stosunku do Państwa
                        interesów, praw i swobód lub Przetwarzanie tych Danych będzie niezbędne do ustanowienia,
                        wykonania lub obrony roszczeń prawnych;</li>
                </ol>
                <p class="text-left">W każdej chwili przysługuje Państwu prawo do wniesienia sprzeciwu wobec
                    Przetwarzania Państwa Danych osobowych w celu marketingu bezpośredniego, który obejmuje profilowanie
                    w zakresie związanym z takim marketingiem bezpośrednim),</p>
                <br>
                <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a" start="4">
                    <li><strong>prawo do ograniczenia Przetwarzania Państwa Danych osobowych</strong><br>
                        (jest to możliwe w każdym z następujących przypadków:
                        <ul class="flex flex-col px-2 gap-1 mb-2 text-left list-disc">
                            <li>kwestionują Państwo prawidłowość Danych osobowych,</li>
                            <li>Przetwarzanie jest niezgodne z prawem, a Państwo żądają ograniczenia zamiast usunięcia
                                Danych,</li>
                            <li>Administrator nie potrzebuje już Państwa Danych osobowych, ale są one potrzebne Państwu
                                do korzystania z roszczeń obronnych lub prawnych,</li>
                            <li>sprzeciwiają się Państwo Przetwarzaniu Danych osobowych, a Administrator weryfikuje
                                zasadność Państwa sprzeciwu),</li>
                        </ul>
                    </li>
                    <li><strong>prawo do przenoszenia Państwa Danych osobowych</strong><br>
                        (jeżeli:
                        <ul class="flex flex-col px-2 gap-1 mb-2 text-left list-disc">
                            <li>przetwarzanie odbywa się na podstawie zgody lub na podstawie umowy oraz</li>
                            <li>gdy Przetwarzanie Danych odbywa się w sposób zautomatyzowany</li>
                        </ul>
                    </li>
                </ol>
                <p class="text-left">mają Pastwo prawo otrzymać w ustrukturyzowanym, powszechnie używanym formacie
                    nadającym się do odczytu maszynowego Dane osobowe, które Państwo dostarczyli Administratorowi, oraz
                    mają Państwo prawo przesłać te Dane osobowe innemu Administratorowi bez przeszkód z naszej strony)
                </p>
                <br>
                <ol class="flex flex-col px-10 gap-1 mb-2 text-left list-[lower-alpha]" type="a" start="6">
                    <li><strong>prawo do usunięcia Danych</strong>(ale tylko w sytuacjach określonych przepisami RODO,
                        np. gdy Państwa Dane osobowe nie są niezbędne do celów, w których zostały zebrane lub w inny
                        sposób Przetwarzane, bądź były Przetwarzane niezgodnie z prawem),</li>
                    <li><strong>prawo do wycofania zgody</strong>(zgoda może zostać cofnięta w dowolnym momencie, bez
                        wpływu na zgodność z prawem Przetwarzania, którego dokonano na podstawie zgody przed jej
                        cofnięciem. Nie jest konieczne podawanie przyczyny wycofania zgody.),</li>
                    <li><strong>prawo złożenia skargi do Organu nadzorczego </strong>(czyli Prezesa Urzędu Ochrony
                        Danych Osobowych pod adresem: Urząd Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa,
                        e-mail: <a href="mailto:iod@uodo.gov.pl<">iod@uodo.gov.pl</a>).</li>
                </ol>
                <h3 id="privacy-ad16" class="font-bold text-left text-xl">16. Przekazywanie Danych do państw trzecich i
                    organizacji międzynarodowych, zautomatyzowane podejmowanie decyzji</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>Państwa Dane nie będą przekazywane do państw trzecich ani organizacji międzynarodowych.</li>
                    <li>Wobec Państwa Danych osobowych nie będzie stosowany mechanizm automatycznego podejmowania
                        decyzji w tym profilowania.</li>
                </ol>
                <h3 id="privacy-ad17" class="font-bold text-left text-xl">17. Zmiany Zasad Przetwarzania Danych</h3><br>
                <ol class="flex flex-col gap-4 list-decimal mb-4 text-left pl-5" type="1">
                    <li>W przyszłości może pojawić się konieczność wprowadzania zmian lub aktualizacji niniejszego
                        dokumentu. W szczególności może się to okazać konieczne z uwagi na zmiany w obowiązujących
                        przepisach prawa dotyczących ochrony Danych osobowych, wytyczne w zakresie ochrony Danych
                        osobowych wydane przez Organ nadzorczy (Prezesa Urzędu Ochrony Danych Osobowych), ale również w
                        związku z ewentualnymi zmianami w zakresie prowadzenia przez Administratora swojej działalności
                        lub procesów obsługi Klientów i Kontrahentów.</li>
                    <li>Administrator gwarantuje, że wszelkie zmiany dokumentu, jakie mogą ewentualnie wystąpić w
                        przyszłości, będą pozostały w pełnej zgodności z obowiązującymi przepisami prawa w zakresie
                        ochrony Danych osobowych, jak również będą uwzględniały konieczność zapewnienia bezpieczeństwa
                        Państwa Danych osobowych Przetwarzanych przez Administratora.</li>
                    <li>Informacja o zmianie Zasad zostanie udostępniona w ramach serwisu internetowego zarządzanego
                        przez Administratora nie później niż w terminie 7 dni przed rozpoczęciem obowiązywania
                        zaktualizowanej wersji Zasad.</li>
                </ol><br>
                <div class="text-left"><strong>Ostatnia aktualizacja Zasad Przetwarzania Danych</strong> – 26.06.2024 r
                </div>
            </div>
            <a class="uppercase mt-2" href="#" @click.prevent="modals.data = false">Zamknij</a>
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