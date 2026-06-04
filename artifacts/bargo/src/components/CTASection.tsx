import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTASection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mock submit
  };

  return (
    <section id="cta" className="py-32 relative bg-background border-t border-border/50 overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container px-6 mx-auto relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Build the future of retail intelligence with us
          </h2>
          <p className="text-xl text-muted-foreground font-light mb-12">
            Join early design partners and book a demo.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your work email" 
              required
              className="h-14 bg-card border-border/50 text-base focus-visible:ring-primary/50"
              data-testid="cta-email-input"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              data-testid="cta-submit-btn"
            >
              Book a demo
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;