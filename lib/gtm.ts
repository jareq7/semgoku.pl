export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export function pushDataLayer(data: DataLayerEvent) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

/**
 * Reset dataLayer event-scoped variables between SPA navigations.
 * Prevents stale parameters from leaking into subsequent events.
 */
export function resetDataLayer() {
  pushDataLayer({
    event: 'dataLayer_reset',
    page_type: undefined,
    page_path: undefined,
    page_title: undefined,
    city_name: undefined,
    cta_text: undefined,
    cta_location: undefined,
    cta_url: undefined,
    click_location: undefined,
    booking_type: undefined,
    form_name: undefined,
    form_location: undefined,
    conversion_type: undefined,
    scroll_percentage: undefined,
    section_name: undefined,
    link_url: undefined,
    link_domain: undefined,
    link_text: undefined,
  });
}

// --- GA4 Recommended Events ---

export function trackPageView(pageType: string, pagePath: string, pageTitle: string) {
  pushDataLayer({
    event: 'page_view',
    page_type: pageType,
    page_path: pagePath,
    page_title: pageTitle,
  });
}

export function trackCtaClick(ctaText: string, ctaLocation: string, ctaUrl: string) {
  pushDataLayer({
    event: 'cta_click',
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_url: ctaUrl,
  });
}

export function trackCalBookingClick(clickLocation: string) {
  pushDataLayer({
    event: 'cal_booking_click',
    booking_type: 'darmowa_konsultacja',
    click_location: clickLocation,
  });
}

export function trackFormSubmit(formName: string, formLocation: string) {
  pushDataLayer({
    event: 'form_submit',
    form_name: formName,
    form_location: formLocation,
  });
}

/**
 * GA4 recommended event: generate_lead
 * Fires on /dziekuje after successful form submission.
 * Maps directly to GA4 generate_lead without extra GTM config.
 */
export function trackGenerateLead(conversionType: string) {
  pushDataLayer({
    event: 'generate_lead',
    conversion_type: conversionType,
    value: 1,
    currency: 'PLN',
  });
}

export function trackCityPageView(cityName: string) {
  pushDataLayer({
    event: 'city_page_view',
    page_type: 'city_landing',
    city_name: cityName,
  });
}

export function trackScrollDepth(depth: number) {
  pushDataLayer({
    event: 'scroll_depth',
    scroll_percentage: depth,
  });
}

export function trackSectionView(sectionName: string) {
  pushDataLayer({
    event: 'section_view',
    section_name: sectionName,
  });
}

/**
 * Track outbound link clicks (LinkedIn, mailto, external).
 * GA4 recommended event: click with link_* params.
 */
export function trackOutboundClick(linkUrl: string, linkText: string, linkDomain: string) {
  pushDataLayer({
    event: 'outbound_click',
    link_url: linkUrl,
    link_text: linkText,
    link_domain: linkDomain,
  });
}

/**
 * Google Consent Mode v2 defaults.
 * Must be called BEFORE GTM loads. Sets denied by default (RODO compliant).
 * Update consent state after user accepts cookies via GTM or CMP.
 */
export function initConsentMode() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // gtag-style consent default
  window.dataLayer.push({
    event: 'consent_default',
    'consent': 'default',
  });
  // Push actual gtag consent command
  function gtag(...args: unknown[]) {
    window.dataLayer.push(arguments as unknown as DataLayerEvent);
  }
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500,
  });
}
