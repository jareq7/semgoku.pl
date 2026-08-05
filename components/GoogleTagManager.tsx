import Script from 'next/script';
import { GTM_ID } from '@/lib/gtm';

// GTM tylko na produkcji: gate na NODE_ENV odcina `npm run dev` (localhost),
// a runtime'owy warunek na hostname — buildy produkcyjne uruchamiane poza
// semgoku.pl (Vercel preview, lokalny `npm start`). Bez tego podglądy robocze
// zliczały się w produkcyjnym GA4.
const IS_PROD_BUILD = process.env.NODE_ENV === 'production';
const PROD_HOSTS_JS = `['semgoku.pl','www.semgoku.pl']`;

export function GoogleTagManagerHead() {
  if (!GTM_ID || !IS_PROD_BUILD) return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if (${PROD_HOSTS_JS}.indexOf(location.hostname) !== -1) {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          }
        `,
      }}
    />
  );
}

export function GoogleTagManagerBody() {
  if (!GTM_ID || !IS_PROD_BUILD) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
