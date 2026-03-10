# Audyt strony semgoku.pl — wyniki i status

Data audytu: 2026-03-10

---

## 1. Bezpieczeństwo — ZROBIONE ✓

### Co zostało naprawione
Dodano 4 nagłówki HTTP w `next.config.ts`:

| Nagłówek | Wartość | Cel |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Zapobiega błędnej interpretacji typu pliku przez przeglądarkę |
| `X-Frame-Options` | `SAMEORIGIN` | Zapobiega clickjackingowi (osadzeniu strony w iframe) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Ogranicza jakie URL są przekazywane zewnętrznym serwisom |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` | Wyłącza nieużywane funkcje przeglądarki |

### Co celowo pominięto
- **Content-Security-Policy** — GTM wstrzykuje skrypty z wielu domen dynamicznie, co czyni CSP ekstremalnie trudnym bez ryzyka zepsucia GA4/Google Ads. Benefit < ryzyko dla tego typu strony.

### Co jest OK bez zmian
- `Strict-Transport-Security: max-age=63072000` — HTTPS wymuszony na 2 lata (Vercel domyślnie) ✓
- Brak wrażliwych endpointów API ✓
- Web3Forms klucz w HTML — celowe, domain-restricted, bezpieczne ✓

---

## 2. Performance / Core Web Vitals — CZĘŚCIOWO ZROBIONE ⚠️

### Wyniki Lighthouse (mobile, stan przed/po)
| Metryka | Przed | Po | Cel Google |
|---|---|---|---|
| Performance score | 67 | ~75 (szacowane) | >90 |
| LCP | 8.6s | ~6s (szacowane) | <2.5s |
| CLS | 0 | 0 | <0.1 ✓ |
| TBT (proxy INP) | 80ms | 80ms | <200ms ✓ |
| FCP | 1.3s | 1.3s | <1.8s ✓ |

### Co zostało naprawione
- **Usunięto Recharts** z `package.json` — biblioteka wykresów nieużywana po refactorze, ~143 KiB oszczędności JS
- **Usunięto nieużywane ikony Lucide** z `app/page.tsx`: `Calendar`, `Globe`, `ShoppingCart`
- **Noindex na /dziekuje** + usunięto z sitemapy — strona thank-you nie powinna być indeksowana

### Co NIE zostało naprawione — wymaga działania

#### ⚠️ KRYTYCZNE: Logo SVG 1.6MB jako LCP element
- Plik: `/public/semgoku logo poziomo białe.svg` — **1.6MB**
- Pozostałe loga: `kwadrat białe.svg` i `sygnet.svg` — po **1.9MB**
- Przyczyna: SVG zawiera embedded base64 PNG zamiast właściwego wektora
- Next.js NIE optymalizuje SVG — serwuje 1.6MB każdemu użytkownikowi
- Wyciągnięto embedded PNG (98 KB) ale ma wymiary 1844×1844px i brak kanału alpha — nie można wprost podmienić

**Wymagane działanie od Jarka:** Eksport PNG lub WebP z oryginalnego źródła (Figma/Illustrator/itp.):
- `logo-poziomo-biale.png` — logo poziome białe, min. 400×100px, tło transparentne
- `logo-kwadrat-biale.png` — logo kwadratowe białe, min. 200×200px, tło transparentne
- `logo-sygnet.png` — sam sygnet, min. 200×200px, tło transparentne

Po dostarczeniu: Next.js Image automatycznie zoptymalizuje do WebP i dobierze rozmiar. Oczekiwany efekt: LCP < 3s, Performance score > 85.

---

## 3. Dostępność (Accessibility) — OK ✓

Lighthouse: **100/100** — brak działań wymaganych.

---

## 4. SEO techniczne — OK ✓

Lighthouse: **100/100**.

### Dodatkowe naprawione w trakcie sesji
- Sitemap rozszerzony z 3 do 16 miast
- Canonical URL dla każdej podstrony
- Schema.org: Person + ProfessionalService + FAQPage
- OG image wygenerowany dynamicznie (`app/opengraph-image.tsx`, edge runtime)
- `/dziekuje` usunięta z sitemapy + noindex

### Problem z indeksowaniem miast — W TOKU
- **Przyczyna znaleziona:** Vercel miał `www.semgoku.pl` jako primary domain, canonicale wskazywały na `semgoku.pl` bez www → Google widział redirect + duplicate
- **Naprawione przez Jarka:** zmiana primary domain na `semgoku.pl` w Vercel
- **Status:** Po zmianie `www.semgoku.pl` nadal zwraca 200 zamiast redirect — sprawdzić w Vercel czy www jest ustawione jako redirect (nie jako osobna domena)
- **Następne kroki:** W GSC użyć "Zażądaj indeksowania" dla kluczowych miast, poczekać 2-3 tygodnie

---

## 5. Copywriting — DO ZROBIENIA

Zaplanowane, nie przeprowadzone jeszcze. Do analizy:
- Czy nagłówki i teksty faktycznie sprzedają, czy tylko opisują
- Spójność komunikatu na wszystkich podstronach
- Propozycja wartości (USP) — czy jest wystarczająco wyraźna i wyróżniająca

---

## 6. Analiza konkurencji — DO ZROBIENIA

Zaplanowane, nie przeprowadzone. Do sprawdzenia:
- Jak strona wypada na tle innych freelancerów SEM i małych agencji PPC w Polsce
- Jakich fraz brakuje w treści które konkurencja pokrywa

---

## Niezrealizowane pomysły rozwojowe (odłożone decyzją Jarka)

- Referencje klientów — brak bezpośrednich klientów (praca przez agencje); alternatywa: rekomendacje z LinkedIn od współpracowników lub przepozycjonowanie jako atut ("znam agencję od środka")
- Strona /o-mnie
- Cennik / widełki cenowe
- Lead magnet (PDF/checklist)
- Strona /audyt
- Case studies z pełną narracją
- Kalkulator kwalifikacyjny
- Blog (odrzucony — brak chęci generowania treści AI)
- Google Business Profile (działanie poza kodem)
