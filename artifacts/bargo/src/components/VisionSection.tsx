import React from 'react';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
  return (
    <section className="py-40 relative bg-background overflow-hidden flex items-center justify-center text-center" data-testid="vision-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground max-w-5xl mx-auto leading-tight"
        >
          AI tools fail in retail because they sit on top of broken systems — <span className="text-accent italic">we build under them.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-3xl mx-auto"
        >
          From fragmented operations to autonomous retail coordination system.
        </motion.p>
      </div>
    </section>
  );
};

export default VisionSection;