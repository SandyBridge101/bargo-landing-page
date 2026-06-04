import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NetworkBackground from './NetworkBackground';

const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" data-testid="hero-section">
      <NetworkBackground />
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          The orchestration layer for modern retail
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground max-w-5xl leading-[1.1]"
        >
          From fragmented retail systems to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">autonomous supply chain intelligence</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          Bargo is an AI orchestration layer that unifies retail data, predicts demand, and automates inventory decisions in real time.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all border border-primary-foreground/10"
            onClick={() => scrollTo('cta')}
            data-testid="hero-demo-btn"
          >
            Request Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-12 px-8 text-base font-medium bg-card/30 backdrop-blur-sm border-border hover:bg-secondary/50 transition-all"
            onClick={() => scrollTo('team')}
            data-testid="hero-founders-btn"
          >
            Talk to Founders
          </Button>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;