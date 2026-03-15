import { motion } from 'framer-motion';
import { Fuel, Gauge, Calendar, Award } from 'lucide-react';
import type { Car } from '@/data/cars';

interface VehicleCardProps {
  car: Car;
  index: number;
}

const VehicleCard = ({ car, index }: VehicleCardProps) => {
  return (
    <motion.div
      className="car-card-shine glass-panel group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <motion.img
          src={car.image}
          alt={car.name}
          className="w-full h-48 md:h-56 object-cover"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: 1000 }}
          loading="lazy"
        />
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 font-mono text-xs font-bold text-primary-foreground">
          {car.grade}
        </div>
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent/80 font-mono text-xs text-accent-foreground capitalize">
          {car.condition}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold mb-1">{car.name}</h3>
        <p className="font-mono text-xl font-bold text-primary mb-4">{car.price}</p>

        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-mono">{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-mono">{car.mileage}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-mono">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-primary/60" />
            <span className="font-mono">{car.engine}</span>
          </div>
        </div>

        <motion.button
          className="w-full mt-5 py-3 rounded-xl bg-primary/10 border border-primary/30 font-mono text-xs tracking-widest text-primary hover:bg-primary/20 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          VIEW DETAILS
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
