import React from 'react';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MarketValidationSection from '@/components/MarketValidationSection';
import BusinessModelSection from '@/components/BusinessModelSection';
import VisionSection from '@/components/VisionSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Nav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <MarketValidationSection />
      <BusinessModelSection />
      <VisionSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}