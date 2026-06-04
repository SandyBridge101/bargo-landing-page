import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/20 text-center md:text-left" data-testid="footer">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold tracking-tighter text-foreground block mb-2">BARGO</span>
          <p className="text-sm text-muted-foreground">The intelligence layer for retail supply chains.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#product" className="hover:text-foreground transition-colors">Product</a>
          <a href="#market" className="hover:text-foreground transition-colors">Market</a>
          <a href="#team" className="hover:text-foreground transition-colors">Team</a>
        </div>

        <div className="text-sm text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Bargo Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;