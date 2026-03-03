const STORAGE_KEY = 'semgoku_consent';
const SCHEMA_VERSION = 1;

export interface ConsentRecord {
  version: number;
  timestamp: string;
  analytics: boolean;
  advertising: boolean;
}

export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== SCHEMA_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean, advertising: boolean): ConsentRecord {
  const record: ConsentRecord = {
    version: SCHEMA_VERSION,
    timestamp: new Date().toISOString(),
    analytics,
    advertising,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function applyConsentToGtag(analytics: boolean, advertising: boolean): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // Must use arguments object — not rest params — for gtag protocol
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    (window.dataLayer as unknown as Array<unknown>).push(arguments);
  }
  gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: advertising ? 'granted' : 'denied',
    ad_user_data: advertising ? 'granted' : 'denied',
    ad_personalization: advertising ? 'granted' : 'denied',
  });
}

export function pushConsentEvent(
  action: 'accept_all' | 'reject_all' | 'save_settings',
  analytics: boolean,
  advertising: boolean
): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_action: action,
    consent_analytics: analytics,
    consent_advertising: advertising,
  });
}

export function grantConsent(
  analytics: boolean,
  advertising: boolean,
  action: 'accept_all' | 'reject_all' | 'save_settings'
): void {
  saveConsent(analytics, advertising);
  applyConsentToGtag(analytics, advertising);
  pushConsentEvent(action, analytics, advertising);
}
