"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getStoredConsent, applyConsentToGtag, grantConsent } from "@/lib/consent";

type View = "banner" | "settings" | "hidden";

function Toggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${checked ? "bg-primary" : "bg-muted"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function ConsentBanner() {
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsentToGtag(stored.analytics, stored.advertising);
      setView("hidden");
    } else {
      setView("banner");
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const stored = getStoredConsent();
      setAnalytics(stored?.analytics ?? false);
      setAdvertising(stored?.advertising ?? false);
      setView("settings");
    };
    window.addEventListener("semgoku:open-consent", handler);
    return () => window.removeEventListener("semgoku:open-consent", handler);
  }, []);

  if (view === "hidden") return null;

  const handleAcceptAll = () => {
    grantConsent(true, true, "accept_all");
    setView("hidden");
  };

  const handleRejectAll = () => {
    grantConsent(false, false, "reject_all");
    setView("hidden");
  };

  const handleSaveSettings = () => {
    grantConsent(analytics, advertising, "save_settings");
    setView("hidden");
  };

  const openSettings = () => {
    const stored = getStoredConsent();
    setAnalytics(stored?.analytics ?? false);
    setAdvertising(stored?.advertising ?? false);
    setView("settings");
  };

  return (
    <div
      role="dialog"
      aria-modal
      aria-label="Ustawienia prywatności"
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Card */}
      <div className="relative w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Orange brand stripe */}
        <div className="h-1 w-full rounded-t-2xl bg-primary" />

        <div className="border-2 border-border rounded-b-2xl bg-card shadow-2xl overflow-hidden">

          {view === "banner" && (
            <>
              {/* Logo header — full width, centered */}
              <div className="flex flex-col items-center gap-1.5 px-6 pt-6 pb-5 border-b border-border/60">
                <Image
                  src="/semgoku logo poziomo białe.svg"
                  alt="SEMGOKU"
                  width={200}
                  height={48}
                  className="h-10 w-auto"
                  priority
                />
                <p className="text-xs text-muted-foreground tracking-wide">
                  Mierzę co ważne — za Twoją zgodą.
                </p>
              </div>

              {/* Body */}
              <div className="px-6 pt-5 pb-6 space-y-4">
                <div>
                  <h2 className="text-base font-semibold leading-snug">
                    Zanim zacznę mierzyć — muszę zapytać. 🍪
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    (tak, to też część mojej roboty)
                  </p>
                </div>

                <p className="text-sm text-foreground/85 leading-relaxed">
                  Używamy plików cookie do analizy ruchu i reklam. Możesz
                  wszystko zaakceptować, odrzucić, albo wybrać co Ci pasuje.
                </p>

                {/* Attribution */}
                <p className="text-xs text-muted-foreground/50 italic">
                  Handcrafted by SEMGOKU · Consent Mode v2 · RODO
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={openSettings}
                    className="text-sm px-3 py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                  >
                    Ustawienia
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-sm px-3 py-1.5 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors"
                  >
                    Odrzuć wszystko
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="ml-auto text-sm px-5 py-1.5 rounded-lg bg-primary text-white hover:opacity-90 active:scale-95 transition-all font-medium shadow-md shadow-primary/30"
                  >
                    Akceptuj wszystko
                  </button>
                </div>

                <p className="text-xs text-muted-foreground/50">
                  Polityka prywatności (wkrótce).
                </p>
              </div>
            </>
          )}

          {view === "settings" && (
            <div className="p-6 space-y-5">
              {/* Header */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setView("banner")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  ← Wróć
                </button>
                <h2 className="text-base font-semibold">Ustawienia prywatności</h2>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Niezbędne</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Wymagane do działania strony. Nie możesz ich wyłączyć.
                    </p>
                  </div>
                  <Toggle checked={true} onChange={() => {}} disabled />
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Analityka (GA4)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Pomagają mi zrozumieć, jak korzystasz ze strony — anonimowo.
                    </p>
                  </div>
                  <Toggle checked={analytics} onChange={setAnalytics} />
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Reklamy (Google Ads)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Umożliwiają wyświetlanie Ci trafnych reklam moich usług.
                    </p>
                  </div>
                  <Toggle checked={advertising} onChange={setAdvertising} />
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleSaveSettings}
                  className="w-full text-sm px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors"
                >
                  Zapisz ustawienia
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full text-sm px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 active:scale-[0.98] transition-all font-medium shadow-md shadow-primary/30"
                >
                  Akceptuj wszystko
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
