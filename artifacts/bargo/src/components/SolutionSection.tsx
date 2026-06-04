import React from 'react';
import { motion } from 'framer-motion';
import SystemDiagram from './SystemDiagram';

const capabilities = [
  {
    title: "Data Unification",
    desc: "Connects all retail data systems silently in the background."
  },
  {
    title: "Continuous Forecasting",
    desc: "Predicts demand and supply risk with sub-second latency."
  },
  {
    title: "Automated Replenishment",
    desc: "Executes inventory decisions without manual intervention."
  },
  {
    title: "Agent Orchestration",
    desc: "Deploys specialized AI agents across supply chain workflows."
  }
];

const SolutionSection: React.FC = () => {
  return (
    <section id="product" className="py-32 relative bg-background border-t border-border/30 overflow-hidden" data-testid="solution-section">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            A unified intelligence layer for <span className="text-primary">retail operations</span>
          </h2>
        </motion.div>

        <SystemDiagram />

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border/40 rounded-xl p-6 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-primary text-sm font-mono mb-4 opacity-70">0{i + 1}</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{cap.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;