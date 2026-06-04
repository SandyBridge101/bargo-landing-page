import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3' : 'bg-transparent py-5'
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-2xl font-bold tracking-tighter text-foreground">BARGO</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('product')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-product">Product</button>
          <button onClick={() => scrollTo('why-bargo')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-why-bargo">Why Bargo</button>
          <button onClick={() => scrollTo('market')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-market">Market</button>
          <button onClick={() => scrollTo('team')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="nav-team">Team</button>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={() => scrollTo('cta')} className="hidden sm:inline-flex bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]" data-testid="nav-cta">
            Request Demo
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;