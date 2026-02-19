"use client";

import { useEffect } from "react";
import { trackGenerateLead } from "@/lib/gtm";

export default function ConversionTracker() {
  useEffect(() => {
    trackGenerateLead("form_submit");
  }, []);

  return null;
}
