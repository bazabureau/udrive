"use client";

import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { FleetPreview } from "@/components/home/fleet-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FinalCTA } from "@/components/home/final-cta";

export function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FleetPreview />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
