import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/torque-tactix-logo.png';

const navLinks = [
{ label: 'Showroom', href: '#showroom' },
{ label: 'Services', href: '#services' },
{ label: 'Finance', href: '#finance' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass-panel-strong"
      style={{ borderRadius: 0 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-3 text-inherit bg-inherit text-2xl rounded-none">
          <img alt="Torque Tactix" className="h-10 object-cover" src="/lovable-uploads/08fe8470-8749-4b0a-93e7-011f6ba7fe35.png" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 swoosh-click">
            
              {link.label}
            </a>
          )}
          <a
            href="tel:+8801608095085"
            className="glass-button-primary flex items-center gap-2 py-2 px-4 tracking-wider swoosh-click text-base">
            
            <Phone className="w-3 h-3" />
            +880 1608-095085
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}>
          
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <motion.div
        className="md:hidden p-6 space-y-4 border-t"
        style={{ borderColor: 'hsl(43 74% 49% / 0.1)', background: 'hsl(0 0% 5% / 0.95)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}>
        
          {navLinks.map((link) =>
        <a
          key={link.href}
          href={link.href}
          className="block font-body text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors swoosh-click"
          onClick={() => setOpen(false)}>
          
              {link.label}
            </a>
        )}
          <a
          href="tel:+8801608095085"
          className="glass-button-primary flex items-center gap-2 py-2 px-4 text-xs tracking-wider w-fit swoosh-click">
          
            <Phone className="w-3 h-3" />
            +880 1608-095085
          </a>
        </motion.div>
      }
    </motion.nav>);

};

export default Navbar;