import React from 'react';
import { motion } from 'framer-motion';

const SystemDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-between mt-12 bg-card border border-border/50 rounded-xl p-8 overflow-hidden" data-testid="system-diagram">
      {/* Input Systems */}
      <div className="flex flex-col gap-6 z-10 relative">
        {['ERP', 'WMS', 'POS', 'Data Lakes'].map((sys, i) => (
          <motion.div
            key={sys}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg border border-border font-medium text-sm text-center shadow-lg"
          >
            {sys}
          </motion.div>
        ))}
      </div>

      {/* Connection Lines 1 */}
      <div className="absolute left-[150px] top-0 bottom-0 w-[150px] overflow-hidden hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 150 400" preserveAspectRatio="none">
          <motion.path
            d="M0,80 C75,80 75,200 150,200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,160 C75,160 75,200 150,200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,240 C75,240 75,200 150,200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,320 C75,320 75,200 150,200"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bargo Intelligence Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="z-10 relative bg-background border border-primary/50 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center w-64 h-64"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-2xl animate-pulse" />
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <div className="w-8 h-8 rounded-full bg-primary animate-ping" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">Bargo Intelligence Layer</h3>
        <p className="text-xs text-muted-foreground">Real-time inference & orchestration</p>
      </motion.div>

      {/* Connection Lines 2 */}
      <div className="absolute right-[200px] top-0 bottom-0 w-[100px] overflow-hidden hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 100 400" preserveAspectRatio="none">
          <motion.path
            d="M0,200 C50,200 50,140 100,140"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 C50,200 50,260 100,260"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Output / Decisions */}
      <div className="flex flex-col gap-8 z-10 relative">
        {['Autonomous Agents', 'Inventory Decisions'].map((out, i) => (
          <motion.div
            key={out}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + (i * 0.2), duration: 0.5 }}
            className="bg-card text-card-foreground px-6 py-4 rounded-lg border border-accent/40 font-semibold text-sm text-center shadow-[0_0_15px_rgba(139,92,246,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            {out}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SystemDiagram;