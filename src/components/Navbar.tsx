import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/torque-tactix-logo.png';

const navLinks = [
  { label: 'Showroom', href: '#showroom' },
  { label: 'Services', href: '#services' },
  { label: 'Finance', href: '#finance' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass-panel-strong border-b border-border/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Torque Tactix" className="h-10" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+8801700000000"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono text-xs tracking-wider hover:bg-primary/20 transition-all"
          >
            <Phone className="w-3 h-3" />
            CALL NOW
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden glass-panel-strong border-t border-border/30 p-6 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block font-mono text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
