"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function PhoneButton() {
  return (
    <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
      <a href="tel:+48669809002">
        Zadzwoń: 669 809 002
      </a>
    </Button>
  );
}
