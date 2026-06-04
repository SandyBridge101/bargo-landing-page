import React from 'react';
import { motion } from 'framer-motion';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-32 relative bg-card/30 border-t border-border/30" data-testid="team-section">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-16">
            Team
          </h2>

          <div className="inline-flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-secondary border-2 border-border mb-6 flex items-center justify-center overflow-hidden">
              <span className="text-4xl font-light text-muted-foreground">TD</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Tariq Nasser Deen</h3>
            <p className="text-primary font-medium mb-4">Founder / CEO & CTO</p>
            <p className="text-muted-foreground font-light max-w-md mx-auto italic">
              "A jack of both trades."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;