"use client";

export default function ConsentSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("semgoku:open-consent"))}
      className="text-sm px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors cursor-pointer"
    >
      Zarządzaj zgodami cookies
    </button>
  );
}
