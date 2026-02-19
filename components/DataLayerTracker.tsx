"use client";

import { useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackCalBookingClick,
  trackCtaClick,
  trackOutboundClick,
  trackPageView,
  trackScrollDepth,
  trackSectionView,
  resetDataLayer,
} from "@/lib/gtm";

function getSectionId(el: Element): string {
  return (
    el.closest("section[id]")?.id ||
    el.closest("[data-section]")?.getAttribute("data-section") ||
    "unknown"
  );
}

function isOutboundLink(href: string): boolean {
  if (!href) return false;
  if (href.startsWith("mailto:")) return true;
  if (href.startsWith("tel:")) return true;
  try {
    const url = new URL(href, window.location.origin);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function extractDomain(href: string): string {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  try {
    return new URL(href).hostname;
  } catch {
    return "unknown";
  }
}

export default function DataLayerTracker() {
  const pathname = usePathname();
  const trackedSections = useRef<Set<string>>(new Set());
  const trackedDepths = useRef<Set<number>>(new Set());

  // Reset dataLayer and re-track on SPA navigation
  useEffect(() => {
    resetDataLayer();
    trackedSections.current.clear();
    trackedDepths.current.clear();

    const pageType = pathname === "/" ? "homepage"
      : pathname.startsWith("/miasta/") ? "city_landing"
      : pathname === "/miasta" ? "city_hub"
      : pathname === "/dziekuje" ? "thank_you"
      : "other";

    trackPageView(pageType, pathname, document.title);
  }, [pathname]);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");
    const button = target.closest("button");
    const el = link || button;

    if (!el) return;

    const href = link?.getAttribute("href") || "";
    const text = el.textContent?.trim() || "";

    // Cal.com booking clicks
    if (href.includes("cal.eu/semgoku")) {
      trackCalBookingClick(getSectionId(el));
      return;
    }

    // Outbound links (LinkedIn, mailto, tel, external)
    if (link && isOutboundLink(href)) {
      trackOutboundClick(href, text, extractDomain(href));
      return;
    }

    // CTA clicks (primary buttons or data-track-cta elements)
    if (
      el.classList.contains("bg-primary") ||
      el.getAttribute("data-track-cta")
    ) {
      trackCtaClick(text, getSectionId(el), href);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);
    const thresholds = [25, 50, 75, 90, 100];

    for (const threshold of thresholds) {
      if (percent >= threshold && !trackedDepths.current.has(threshold)) {
        trackedDepths.current.add(threshold);
        trackScrollDepth(threshold);
      }
    }
  }, []);

  const observeSections = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (!trackedSections.current.has(id)) {
              trackedSections.current.add(id);
              trackSectionView(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    const cleanupObserver = observeSections();

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("scroll", handleScroll);
      cleanupObserver?.();
    };
  }, [handleClick, handleScroll, observeSections]);

  return null;
}
