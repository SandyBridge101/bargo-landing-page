import React from 'react';
import { motion } from 'framer-motion';

const streams = [
  { title: "Per-store subscription", desc: "Base platform access, unified data schema, and real-time dashboard." },
  { title: "API usage pricing", desc: "Volume-based pricing for high-frequency data ingestion and inference calls." },
  { title: "Premium AI workflows", desc: "Add-on intelligent agents for specific tasks like automated reordering." }
];

const BusinessModelSection: React.FC = () => {
  return (
    <section className="py-32 relative bg-card/20" data-testid="business-model-section">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Business Model
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {streams.map((stream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-24 h-24 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">{stream.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed relative z-10">{stream.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;