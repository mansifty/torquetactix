import { motion } from 'framer-motion';

type Condition = 'all' | 'new' | 'reconditioned' | 'used';
type Category = 'all' | 'jdm' | 'german';

interface VehicleSelectorProps {
  condition: Condition;
  category: Category;
  onConditionChange: (c: Condition) => void;
  onCategoryChange: (c: Category) => void;
}

const conditions: { value: Condition; label: string; desc: string }[] = [
  { value: 'new', label: 'NEW', desc: 'Factory fresh' },
  { value: 'reconditioned', label: 'RECONDITIONED', desc: 'Auction imported' },
  { value: 'used', label: 'USED', desc: 'Pre-owned' },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'ALL BRANDS' },
  { value: 'jdm', label: 'JDM CARS' },
  { value: 'german', label: 'GERMAN CARS' },
];

const VehicleSelector = ({ condition, category, onConditionChange, onCategoryChange }: VehicleSelectorProps) => {
  return (
    <section id="showroom" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
            <span className="text-gradient-primary">THE FUTURE</span> OF THE DHAKA DRIVE
          </h2>
          <p className="text-muted-foreground font-mono text-sm tracking-wider">
            SELECT YOUR VEHICLE CONDITION
          </p>
        </motion.div>

        {/* Condition selector */}
        <motion.div
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {conditions.map(c => (
            <button
              key={c.value}
              onClick={() => onConditionChange(condition === c.value ? 'all' : c.value)}
              className={`relative p-5 rounded-xl border transition-all duration-500 group ${
                condition === c.value
                  ? 'bg-primary/10 border-primary/50 glow-box-primary'
                  : 'bg-card/40 border-border/30 hover:border-primary/30 hover:bg-card/60'
              }`}
            >
              <span className={`block font-display text-lg md:text-xl font-bold tracking-wider ${
                condition === c.value ? 'text-primary' : 'text-foreground'
              }`}>
                {c.label}
              </span>
              <span className="block text-xs text-muted-foreground mt-1 font-mono">
                {c.desc}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Category selector */}
        <motion.div
          className="flex justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map(c => (
            <button
              key={c.value}
              onClick={() => onCategoryChange(c.value)}
              className={`px-6 py-2.5 rounded-full font-mono text-xs tracking-widest border transition-all duration-300 ${
                category === c.value
                  ? 'bg-accent/20 border-accent/50 text-accent-foreground'
                  : 'bg-card/30 border-border/30 text-muted-foreground hover:border-accent/30'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleSelector;
