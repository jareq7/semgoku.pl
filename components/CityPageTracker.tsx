"use client";

import { useEffect } from "react";
import { trackCityPageView } from "@/lib/gtm";

export default function CityPageTracker({ cityName }: { cityName: string }) {
  useEffect(() => {
    trackCityPageView(cityName);
  }, [cityName]);

  return null;
}
