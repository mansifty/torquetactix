import { motion } from 'framer-motion';
import { Wrench, Battery, Car, Palette, MonitorSmartphone, Search } from 'lucide-react';

const services = [
  { icon: Car, title: 'JDM Vehicle Import', desc: 'Direct auction sourcing from Japan with transparent grading' },
  { icon: Battery, title: 'Hybrid Battery Replacement', desc: 'Expert hybrid battery diagnostics and replacement' },
  { icon: Wrench, title: 'Body Kit Installation', desc: 'Premium aftermarket body kits and aerodynamic upgrades' },
  { icon: Palette, title: 'Ceramic Coating', desc: 'Paint protection with nano-ceramic coating technology' },
  { icon: MonitorSmartphone, title: 'Infotainment Upgrade', desc: 'Android systems with CarPlay and navigation' },
  { icon: Search, title: 'Vehicle Inspection', desc: 'Comprehensive pre-purchase inspection services' },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-sm">Comprehensive automotive solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="glass-panel p-7 group hover:glow-box-primary transition-shadow duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <svc.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-bold mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
