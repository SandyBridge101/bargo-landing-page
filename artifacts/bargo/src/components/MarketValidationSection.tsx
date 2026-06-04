import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "75%", label: "Retailers say AI agents will be essential to compete" },
  { value: "Core", label: "AI is now core to execution, not just experimentation" },
  { value: "Rapid", label: "Acceleration in retail AI infrastructure spending" },
  { value: "Billions", label: "Value unlocked by just 1-2% efficiency improvement" }
];

const MarketValidationSection: React.FC = () => {
  return (
    <section id="market" className="py-32 relative bg-background border-t border-border/30" data-testid="market-section">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            The shift is already happening
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 bg-card border border-border/50 rounded-2xl text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground mb-4">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketValidationSection;