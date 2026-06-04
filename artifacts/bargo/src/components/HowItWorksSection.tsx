import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Connect retail systems",
    desc: "Plug into ERP, WMS, POS, and external data lakes. Bargo normalizes the data into a unified schema instantly."
  },
  {
    num: "02",
    title: "Forecast & detect risk",
    desc: "AI models continuously analyze the unified data stream, predicting demand spikes and identifying supply bottlenecks."
  },
  {
    num: "03",
    title: "Execute decisions",
    desc: "Autonomous agents act on the forecasts, moving inventory, triggering orders, and rebalancing stock across the network."
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-32 relative bg-card/20" data-testid="how-it-works-section">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            How it works
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-24 relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-[2px] bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start relative z-10"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary border border-border shadow-lg relative">
                <span className="text-xl font-mono text-primary font-bold">{step.num}</span>
                <div className="absolute inset-0 rounded-2xl border border-primary/20 blur-sm" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;