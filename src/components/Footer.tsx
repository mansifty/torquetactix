import { motion } from 'framer-motion';
import logo from '@/assets/torque-tactix-logo.png';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Torque Tactix" className="h-8" />
          </div>
          <p className="font-mono text-xs text-muted-foreground tracking-wider text-center">
            © {new Date().getFullYear()} TORQUE TACTIX. PRECISION. POWER. PRESTIGE.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'FAQ'].map(link => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
