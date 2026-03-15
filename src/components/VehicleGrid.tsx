import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { featuredCars } from '@/data/cars';
import VehicleCard from './VehicleCard';

interface VehicleGridProps {
  condition: 'all' | 'new' | 'reconditioned' | 'used';
  category: 'all' | 'jdm' | 'german';
}

const VehicleGrid = ({ condition, category }: VehicleGridProps) => {
  const filtered = useMemo(() => {
    return featuredCars.filter(car => {
      if (condition !== 'all' && car.condition !== condition) return false;
      if (category !== 'all' && car.category !== category) return false;
      return true;
    });
  }, [condition, category]);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl font-bold">
            Featured <span className="text-gradient-primary">Vehicles</span>
          </h3>
          <span className="font-mono text-xs text-muted-foreground tracking-wider">
            {filtered.length} VEHICLES
          </span>
        </motion.div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((car, i) => (
              <VehicleCard key={car.id} car={car} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20 glass-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground font-mono text-sm">
              No vehicles found. Try adjusting filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VehicleGrid;
