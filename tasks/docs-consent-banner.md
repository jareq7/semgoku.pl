# GDPR Consent Banner — Dokumentacja techniczna

## Czym jest

Własny baner GDPR (bez Cookiebot ani innych zewnętrznych narzędzi) w pełni zgodny z Google Consent Mode v2 i RODO. Zbudowany jako React component na Next.js App Router. Sam fakt posiadania niestandardowego banera jest elementem portfolio — demonstruje kompetencje w zakresie prawidłowego wdrożenia consent i tracking.

---

## Pliki

| Plik | Rola |
|---|---|
| `lib/consent.ts` | Czysta logika (zero React). Odczyt/zapis localStorage, aktualizacja gtag, push do dataLayer |
| `components/ConsentBanner.tsx` | UI banera — state machine `banner → settings → hidden` |
| `app/layout.tsx` | Montuje `<ConsentBanner />` po `<DataLayerTracker />` |
| `app/page.tsx` | Przycisk "Zarządzaj zgodami" w stopce, dispatch eventu `semgoku:open-consent` |

---

## Architektura

### State machine

```
'hidden'   — baner niewidoczny (SSR default + powrót z localStorage)
'banner'   — widok prosty: logo, nagłówek, 3 przyciski
'settings' — widok rozwinięty: 3 toggle'e kategorii, 2 przyciski
```

Przejścia:
- Mount → brak localStorage → `'banner'`
- Mount → localStorage istnieje → `applyConsentToGtag()` cicho → `'hidden'`
- Akceptuj wszystko → `grantConsent(true, true)` → `'hidden'`
- Odrzuć wszystko → `grantConsent(false, false)` → `'hidden'`
- Ustawienia → `'settings'`
- Zapisz ustawienia → `grantConsent(analytics, advertising)` → `'hidden'`
- Event `semgoku:open-consent` → `'settings'` (z footer "Zarządzaj zgodami")

### Hydration guard

Komponent startuje zawsze z `view = 'hidden'`, stan ustawia dopiero `useEffect` po sprawdzeniu localStorage. Zapobiega to hydration mismatch (SSR nie ma dostępu do `window`).

---

## lib/consent.ts — API

```typescript
getStoredConsent(): ConsentRecord | null
// Odczytuje consent z localStorage. Zwraca null jeśli brak lub inna wersja schematu.

saveConsent(analytics: boolean, advertising: boolean): ConsentRecord
// Zapisuje do localStorage z timestampem ISO.

applyConsentToGtag(analytics: boolean, advertising: boolean): void
// Wywołuje gtag('consent', 'update', {...}).
// WAŻNE: używa wzorca `arguments` (nie rest params) wymaganego przez protokół gtag.

pushConsentEvent(action, analytics, advertising): void
// Pushuje event 'consent_update' do dataLayer z parametrami.

grantConsent(analytics, advertising, action): void
// All-in-one: saveConsent + applyConsentToGtag + pushConsentEvent
```

### localStorage schema

Klucz: `semgoku_consent`

```json
{
  "version": 1,
  "timestamp": "2026-03-03T14:22:00.000Z",
  "analytics": true,
  "advertising": false
}
```

`version` pozwala invalidować stary zapis przy zmianie schematu (np. dodaniu nowych kategorii).

---

## Kategorie zgód

| Kategoria | gtag params | Domyślnie |
|---|---|---|
| Niezbędne | — (zawsze granted) | ON, disabled |
| Analityka | `analytics_storage` | OFF |
| Reklamy | `ad_storage`, `ad_user_data`, `ad_personalization` | OFF |

---

## Jak działa z GTM

### Pierwsze wejście (brak zgody)

1. `layout.tsx` `<head>` — inline script `gtag consent default all:denied wait_for_update:500`
2. GTM ładuje się — tagi GA4/Ads wstrzymane przez 500ms
3. `ConsentBanner` montuje → brak localStorage → pokazuje baner
4. User klika "Akceptuj wszystko" → `grantConsent(true, true, 'accept_all')`
5. `gtag consent update all:granted` — GTM odbiera w oknie 500ms → odpala tagi

### Powrót (localStorage ma zapis)

1. Inline script → `denied defaults`
2. `ConsentBanner useEffect` → czyta localStorage → `applyConsentToGtag()` → update < 500ms
3. Baner nie pojawia się — użytkownik nie widzi przerwy

---

## Otwieranie banera z kodu

Dowolne miejsce na stronie może otworzyć panel ustawień:

```javascript
window.dispatchEvent(new Event('semgoku:open-consent'));
```

Aktualnie używane w stopce (`app/page.tsx`) jako przycisk "Zarządzaj zgodami".

---

## Weryfikacja

```javascript
// 1. Wymuś pokazanie banera
localStorage.removeItem('semgoku_consent');
location.reload();

// 2. Sprawdź zapis po kliknięciu
JSON.parse(localStorage.getItem('semgoku_consent'));

// 3. Sprawdź consent state w GTM Preview → zakładka Consent
// analytics_storage / ad_storage powinny zmieniać się po kliknięciu

// 4. Test "Zarządzaj zgodami"
window.dispatchEvent(new Event('semgoku:open-consent'));
```

---

## Rozszerzanie

### Dodanie nowej kategorii zgody

1. `lib/consent.ts` — dodaj pole do `ConsentRecord` i `saveConsent`
2. `lib/consent.ts` `applyConsentToGtag` — dodaj nowy gtag param
3. `components/ConsentBanner.tsx` `SettingsView` — dodaj nowy Toggle
4. Zmień `SCHEMA_VERSION` na `2` — invaliduje stare zapisy

### Zmiana okresu ważności zgody

Aktualnie zgoda nie wygasa. Aby dodać expiry, w `getStoredConsent`:

```typescript
const ageMs = Date.now() - new Date(parsed.timestamp).getTime();
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 1 rok
if (ageMs > MAX_AGE_MS) return null;
```
