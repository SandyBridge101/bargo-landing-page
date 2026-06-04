import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    title: "Systems don't talk",
    desc: "ERP, WMS, and POS systems are siloed, requiring manual reconciliation and batch updates.",
    icon: (
      <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "No real-time visibility",
    desc: "Lack of immediate insight across inventory and demand creates massive blind spots.",
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Forecasting is reactive",
    desc: "Models are inaccurate, manual, and backward-looking, unable to handle dynamic shifts.",
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: "Fragmented decisions",
    desc: "Execution is split across disconnected teams and tools, leading to massive inefficiencies.",
    icon: (
      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section id="why-bargo" className="py-32 relative bg-background" data-testid="problem-section">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-3xl">
            Retail supply chains are broken at the <span className="text-muted-foreground">infrastructure level</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/60 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{prob.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;