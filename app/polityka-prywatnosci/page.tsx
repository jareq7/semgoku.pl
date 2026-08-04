import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ConsentSettingsButton from "./ConsentSettingsButton";

export const metadata: Metadata = {
  title: "Polityka prywatności | SEMGOKU",
  description:
    "Polityka prywatności serwisu semgoku.pl — informacje o przetwarzaniu danych osobowych, plikach cookie i Twoich prawach zgodnie z RODO.",
  alternates: { canonical: "https://semgoku.pl/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

const sectionTitle = "text-xl font-semibold mt-10 mb-4 scroll-mt-24";
const paragraph = "text-sm text-foreground/85 leading-relaxed mb-3";
const list = "list-disc pl-5 space-y-2 text-sm text-foreground/85 leading-relaxed mb-3";

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/uslugi" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block">
              Usługi
            </Link>
            <Link
              href="/#kontakt"
              className="text-sm px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-medium"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Polityka prywatności</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Obowiązuje od 4 sierpnia 2026 r.
        </p>

        <p className={paragraph}>
          Na co dzień zajmuję się analityką i kampaniami reklamowymi, więc dobrze wiem, jakie dane
          zbierają strony internetowe. Ta polityka opisuje wprost i konkretnie, jakie dane
          przetwarza serwis semgoku.pl, po co, na jakiej podstawie i jakie masz prawa.
        </p>

        <h2 className={sectionTitle}>1. Administrator danych</h2>
        <p className={paragraph}>
          Administratorem Twoich danych osobowych jest <strong>Jarosław Rzepa</strong>, prowadzący
          działalność gospodarczą pod firmą <strong>SEMGOKU Jarosław Rzepa</strong>,
          ul.&nbsp;Dynowska 19/19, 35-505 Rzeszów, NIP: 7941814218.
        </p>
        <p className={paragraph}>
          W sprawach dotyczących danych osobowych możesz się ze mną skontaktować pod adresem
          e-mail:{" "}
          <a href="mailto:kontakt@semgoku.pl" className="text-primary hover:underline">
            kontakt@semgoku.pl
          </a>{" "}
          lub pisemnie na powyższy adres.
        </p>

        <h2 className={sectionTitle}>2. Jakie dane przetwarzam i po co</h2>
        <h3 className="text-base font-semibold mt-6 mb-2">Formularz kontaktowy</h3>
        <p className={paragraph}>
          Gdy wysyłasz wiadomość przez formularz, przetwarzam podane przez Ciebie dane: adres
          e-mail, adres Twojej strony internetowej oraz treść wiadomości. Cel: odpowiedź na Twoje
          zapytanie i ewentualne przygotowanie oferty. Podstawa prawna: art. 6 ust. 1 lit. b RODO
          (działania zmierzające do zawarcia umowy, podejmowane na Twoje żądanie) oraz art. 6
          ust. 1 lit. f RODO (prawnie uzasadniony interes — prowadzenie korespondencji).
        </p>
        <h3 className="text-base font-semibold mt-6 mb-2">Statystyki i analityka (Google Analytics 4)</h3>
        <p className={paragraph}>
          Wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO) zbieram pseudonimowe dane o sposobie
          korzystania ze strony — odwiedzane podstrony, przybliżoną lokalizację, typ urządzenia,
          źródło wejścia. Służą mi do ulepszania strony. Bez Twojej zgody narzędzia analityczne nie
          zapisują plików cookie (Consent Mode v2 — tryb domyślny: odmowa).
        </p>
        <h3 className="text-base font-semibold mt-6 mb-2">Reklama (Google Ads)</h3>
        <p className={paragraph}>
          Wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO) używane są pliki cookie służące do
          pomiaru skuteczności reklam i wyświetlania Ci trafniejszych reklam moich usług
          (remarketing).
        </p>
        <h3 className="text-base font-semibold mt-6 mb-2">Logi serwera</h3>
        <p className={paragraph}>
          Serwis jest hostowany na platformie Vercel, która automatycznie rejestruje standardowe
          logi serwera (adres IP, data i godzina żądania, informacje o przeglądarce). Cel:
          zapewnienie bezpieczeństwa i prawidłowego działania serwisu. Podstawa prawna: art. 6
          ust. 1 lit. f RODO.
        </p>

        <h2 className={sectionTitle}>3. Odbiorcy danych</h2>
        <p className={paragraph}>
          Twoje dane powierzam wyłącznie podmiotom, które pomagają mi prowadzić serwis:
        </p>
        <ul className={list}>
          <li>
            <strong>Web3Forms</strong> — obsługa techniczna formularza kontaktowego (przekazanie
            wiadomości na moją skrzynkę e-mail),
          </li>
          <li>
            <strong>Vercel Inc.</strong> — hosting serwisu,
          </li>
          <li>
            <strong>Google Ireland Ltd.</strong> — narzędzia analityczne i reklamowe (Google Tag
            Manager, Google Analytics 4, Google Ads) oraz obsługa poczty e-mail.
          </li>
        </ul>
        <p className={paragraph}>
          Nie sprzedaję ani nie udostępniam Twoich danych innym podmiotom w celach marketingowych.
        </p>

        <h2 className={sectionTitle}>4. Przekazywanie danych poza EOG</h2>
        <p className={paragraph}>
          Niektórzy z powyższych dostawców (Vercel, Web3Forms, Google) mogą przetwarzać dane na
          serwerach zlokalizowanych poza Europejskim Obszarem Gospodarczym, w szczególności w USA.
          Przekazywanie odbywa się na podstawie zatwierdzonych mechanizmów prawnych: decyzji
          Komisji Europejskiej o adekwatności (EU-U.S. Data Privacy Framework) lub standardowych
          klauzul umownych (SCC).
        </p>

        <h2 className={sectionTitle}>5. Jak długo przechowuję dane</h2>
        <ul className={list}>
          <li>
            <strong>Korespondencja z formularza</strong> — przez czas obsługi zapytania, a
            następnie do upływu okresu przedawnienia ewentualnych roszczeń (maks. 6 lat),
          </li>
          <li>
            <strong>Dane analityczne i reklamowe</strong> — zgodnie z okresami retencji narzędzi
            Google (dane GA4: do 14 miesięcy),
          </li>
          <li>
            <strong>Zapis Twojej decyzji o zgodzie</strong> — w pamięci Twojej przeglądarki
            (localStorage) do momentu jej wyczyszczenia lub zmiany decyzji.
          </li>
        </ul>

        <h2 className={sectionTitle}>6. Twoje prawa</h2>
        <p className={paragraph}>Zgodnie z RODO masz prawo do:</p>
        <ul className={list}>
          <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
          <li>sprostowania (poprawienia) danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
          <li>
            cofnięcia zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania
            sprzed cofnięcia,
          </li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
            Warszawa, <span className="whitespace-nowrap">uodo.gov.pl</span>).
          </li>
        </ul>
        <p className={paragraph}>
          Aby skorzystać ze swoich praw, napisz na{" "}
          <a href="mailto:kontakt@semgoku.pl" className="text-primary hover:underline">
            kontakt@semgoku.pl
          </a>
          .
        </p>

        <h2 className={sectionTitle}>7. Pliki cookie i podobne technologie</h2>
        <p className={paragraph}>
          Serwis korzysta z Google Tag Managera w trybie Consent Mode v2 — dopóki nie wyrazisz
          zgody, żadne cookies analityczne ani reklamowe nie są zapisywane. Kategorie:
        </p>
        <ul className={list}>
          <li>
            <strong>Niezbędne</strong> — wymagane do działania strony, w tym zapis Twojej decyzji
            o zgodzie (localStorage, klucz <code className="text-xs bg-muted px-1.5 py-0.5 rounded">semgoku_consent</code>). Nie można ich wyłączyć.
          </li>
          <li>
            <strong>Analityka (GA4)</strong> — pomiar ruchu na stronie, włączane tylko za zgodą.
          </li>
          <li>
            <strong>Reklamy (Google Ads)</strong> — pomiar konwersji i remarketing, włączane tylko
            za zgodą.
          </li>
        </ul>
        <p className={paragraph}>
          Swoją decyzję możesz zmienić w każdej chwili — poniżej lub przez link „Zarządzaj
          zgodami” w stopce strony:
        </p>
        <div className="my-4">
          <ConsentSettingsButton />
        </div>

        <h2 className={sectionTitle}>8. Dobrowolność podania danych</h2>
        <p className={paragraph}>
          Podanie danych w formularzu kontaktowym jest dobrowolne, ale konieczne, żebym mógł
          odpowiedzieć na Twoją wiadomość. Zgoda na cookies analityczne i reklamowe jest w pełni
          dobrowolna — strona działa tak samo bez niej.
        </p>

        <h2 className={sectionTitle}>9. Zautomatyzowane decyzje i profilowanie</h2>
        <p className={paragraph}>
          Nie podejmuję wobec Ciebie decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu,
          które wywoływałyby skutki prawne. Narzędzia reklamowe Google mogą — wyłącznie za Twoją
          zgodą — dopasowywać wyświetlane reklamy do Twojej aktywności (remarketing).
        </p>

        <h2 className={sectionTitle}>10. Zmiany polityki</h2>
        <p className={paragraph}>
          Jeśli zmienią się narzędzia lub zakres przetwarzania danych, zaktualizuję ten dokument, a
          data obowiązywania na górze strony zostanie zmieniona.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 SEMGOKU. Specjalista PPC & Feed Optimization.</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <Link href="/uslugi" className="hover:text-primary transition-colors">Usługi</Link>
              <a href="mailto:kontakt@semgoku.pl" className="hover:text-primary transition-colors">kontakt@semgoku.pl</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
