"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function PhoneButton() {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className="border-primary/30 hover:bg-primary/10"
    >
      <a
        href="https://cal.eu/semgoku/darmowa-konsultacja"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zarezerwuj termin
      </a>
    </Button>
  );
}
