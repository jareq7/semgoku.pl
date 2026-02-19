# SEMGOKU — Portfolio & Landing Page

Strona portfolio Jarosława Rzepy — specjalisty PPC, Google Ads i Feed Optimization z Rzeszowa.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (CSS-first)
- **UI:** shadcn/ui (Button, Card, Slider)
- **Charts:** Recharts 3.7
- **Icons:** Lucide React
- **Forms:** Web3Forms
- **Booking:** Cal.com
- **Analytics:** Google Tag Manager + dataLayer
- **Deploy:** Netlify

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-XXXXXXX`) | For analytics |

Create `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Project Structure

```
app/
  layout.tsx          # Root layout, GTM, Consent Mode v2, Schema.org
  page.tsx            # Main portfolio page (client component)
  dziekuje/
    page.tsx          # Thank you page (post-form conversion)
    ConversionTracker.tsx  # generate_lead event
  miasta/
    page.tsx          # City hub
    rzeszow/          # City landing pages
    krakow/
    warszawa/
components/
  GoogleTagManager.tsx    # GTM script injection (head + noscript)
  DataLayerTracker.tsx    # Global event tracker (clicks, scroll, sections)
  CityPageTracker.tsx     # City page view tracking
  ui/                     # shadcn/ui components
lib/
  gtm.ts                 # dataLayer helper functions & event definitions
```

## Analytics & DataLayer

### Events

| Event | Trigger | Key params |
|-------|---------|------------|
| `page_view` | Every SPA navigation | `page_type`, `page_path`, `page_title` |
| `section_view` | Section enters viewport (30%) | `section_name` |
| `scroll_depth` | 25/50/75/90/100% scroll | `scroll_percentage` |
| `cta_click` | Primary button click | `cta_text`, `cta_location`, `cta_url` |
| `cal_booking_click` | Cal.com link click | `booking_type`, `click_location` |
| `outbound_click` | External/mailto/tel link | `link_url`, `link_text`, `link_domain` |
| `form_submit` | Contact form submit | `form_name`, `form_location` |
| `generate_lead` | Thank you page load (GA4 recommended) | `conversion_type`, `value`, `currency` |
| `city_page_view` | City landing page load | `city_name`, `page_type` |

### Consent Mode v2

Google Consent Mode v2 is initialized **before** GTM with all consent types set to `denied` by default (RODO/GDPR compliant). A CMP (e.g. CookieYes) is needed to update consent to `granted` after user acceptance.

## Deploy

Deployed on Netlify with `@netlify/plugin-nextjs`.

```bash
npm run build
```
