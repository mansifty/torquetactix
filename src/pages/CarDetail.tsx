import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Fuel, Gauge, Calendar, Award, Car, Cog, DoorOpen,
  Lightbulb, RotateCcw, ZoomIn, ZoomOut, ChevronLeft, ChevronRight,
  Shield, Wrench, Palette, Monitor, Battery, Sparkles, Phone, MessageCircle
} from 'lucide-react';
import { featuredCars } from '@/data/cars';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EMICalculator from '@/components/EMICalculator';

import dashboardImg from '@/assets/interiors/dashboard.jpg';
import rearSeatsImg from '@/assets/interiors/rear-seats.jpg';
import steeringImg from '@/assets/interiors/steering.jpg';
import consoleImg from '@/assets/interiors/console.jpg';
import trunkImg from '@/assets/interiors/trunk.jpg';
import engineImg from '@/assets/interiors/engine.jpg';

const interiorGallery = [
  { src: dashboardImg, label: 'Dashboard & Cockpit' },
  { src: rearSeatsImg, label: 'Rear Seats' },
  { src: steeringImg, label: 'Steering Wheel' },
  { src: consoleImg, label: 'Center Console' },
  { src: trunkImg, label: 'Trunk Space' },
  { src: engineImg, label: 'Engine Bay' },
];

const customizationOptions = [
  { icon: Wrench, title: 'Body Kit Installation', desc: 'Aero kits, spoilers & bumper upgrades', price: 'From ৳80,000' },
  { icon: Cog, title: 'Custom Wheels & Rims', desc: '17"–22" alloy & forged wheels', price: 'From ৳60,000' },
  { icon: Palette, title: 'Interior Upgrades', desc: 'Leather, Alcantara & carbon trim', price: 'From ৳45,000' },
  { icon: Monitor, title: 'Android Infotainment', desc: '10"–13" touchscreen with CarPlay', price: 'From ৳25,000' },
  { icon: Battery, title: 'Hybrid Battery Replacement', desc: 'OEM & aftermarket cells', price: 'From ৳1,20,000' },
  { icon: Sparkles, title: 'Ceramic Coating', desc: '9H nano-ceramic paint protection', price: 'From ৳35,000' },
];

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = useMemo(() => featuredCars.find(c => c.id === id), [id]);

  const [rotation, setRotation] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-panel p-12">
          <p className="font-display text-2xl mb-4">Vehicle not found</p>
          <button onClick={() => navigate('/')} className="glass-button-primary swoosh-click">
            Back to Showroom
          </button>
        </div>
      </div>
    );
  }

  const toggleCustomization = (title: string) => {
    setSelectedCustomizations(prev =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-12">
        {/* Back button */}
        <div className="container mx-auto px-4 mb-6">
          <motion.button
            onClick={() => navigate('/')}
            className="glass-button flex items-center gap-2 text-xs tracking-widest uppercase swoosh-click"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Showroom
          </motion.button>
        </div>

        {/* Hero: 360° Viewer */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Car viewer */}
            <motion.div
              className="glass-panel p-6 relative overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl"
                style={{ background: 'radial-gradient(ellipse at center, hsl(0 0% 10%), hsl(0 0% 4%))' }}>
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="w-[85%] h-auto object-contain drop-shadow-2xl"
                  style={{ scale: zoom }}
                  animate={{ rotateY: rotation }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Lights overlay */}
                <AnimatePresence>
                  {lightsOn && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: 'radial-gradient(ellipse at 25% 50%, hsl(43 74% 49% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 75% 50%, hsl(43 74% 49% / 0.15) 0%, transparent 50%)',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Doors open indicator */}
                <AnimatePresence>
                  {doorsOpen && (
                    <motion.div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full font-mono text-xs"
                      style={{ background: 'hsl(43 74% 49% / 0.2)', border: '1px solid hsl(43 74% 49% / 0.3)', color: 'hsl(43 74% 62%)' }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      Doors & Trunk Open
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
                <button
                  onClick={() => setRotation(r => r - 45)}
                  className="glass-button p-2.5 swoosh-click" title="Rotate Left"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setRotation(r => r + 45)}
                  className="glass-button p-2.5 swoosh-click" title="Rotate Right"
                >
                  <RotateCcw className="w-4 h-4 scale-x-[-1]" />
                </button>
                <button
                  onClick={() => setDoorsOpen(!doorsOpen)}
                  className={`glass-button p-2.5 swoosh-click ${doorsOpen ? 'border-primary/50' : ''}`}
                  title="Toggle Doors"
                >
                  <DoorOpen className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setLightsOn(!lightsOn)}
                  className={`glass-button p-2.5 swoosh-click ${lightsOn ? 'border-primary/50' : ''}`}
                  title="Toggle Lights"
                >
                  <Lightbulb className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
                  className="glass-button p-2.5 swoosh-click" title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoom(z => Math.max(z - 0.2, 0.6))}
                  className="glass-button p-2.5 swoosh-click" title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Car info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-2">
                  {car.condition} · {car.category === 'jdm' ? 'Japanese Import' : 'European Luxury'}
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-bold mb-2">
                  <span className="gold-shimmer">{car.name}</span>
                </h1>
                <p className="font-display text-xl text-muted-foreground">{car.year}</p>
              </div>

              <p className="font-mono text-3xl md:text-4xl font-bold text-primary">{car.price}</p>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: 'Year', value: String(car.year) },
                  { icon: Gauge, label: 'Mileage', value: car.mileage },
                  { icon: Car, label: 'Engine', value: car.engine },
                  { icon: Fuel, label: 'Fuel', value: car.fuel },
                  { icon: Award, label: 'Grade', value: car.grade },
                  { icon: Shield, label: 'Body', value: car.bodyType },
                ].map((spec) => (
                  <div key={spec.label} className="glass-panel p-3 flex items-center gap-3">
                    <spec.icon className="w-4 h-4 text-primary/60 flex-shrink-0" />
                    <div>
                      <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                      <p className="font-mono text-sm font-semibold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+8801608095085"
                  className="glass-button-primary flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.15em] uppercase swoosh-click"
                >
                  <Phone className="w-4 h-4" />
                  Reserve Vehicle
                </a>
                <a
                  href="https://wa.me/8801608095085?text=I'm%20interested%20in%20the%20{car.name}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.15em] uppercase swoosh-click"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Test Drive
                </a>
                <a
                  href="tel:+8801608095085"
                  className="glass-button flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.15em] uppercase swoosh-click sm:col-span-2"
                >
                  <Car className="w-4 h-4" />
                  Preorder Similar Car
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interior Gallery */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Interior <span className="text-gradient-primary">Gallery</span>
            </h2>
            <div className="glass-panel p-4">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4"
                style={{ background: 'hsl(0 0% 5%)' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryIdx}
                    src={interiorImages[galleryIdx]}
                    alt={`Interior view ${galleryIdx + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <button
                  onClick={() => setGalleryIdx(i => (i - 1 + interiorImages.length) % interiorImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 glass-button p-2 swoosh-click"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setGalleryIdx(i => (i + 1) % interiorImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 glass-button p-2 swoosh-click"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {interiorImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIdx(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 swoosh-click ${
                      i === galleryIdx ? 'border-primary/60 ring-1 ring-primary/30' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Specification Table */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold mb-6">
              Vehicle <span className="text-gradient-primary">Specifications</span>
            </h2>
            <div className="glass-panel overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Model', car.name],
                    ['Year', String(car.year)],
                    ['Engine', car.engine],
                    ['Fuel Type', car.fuel],
                    ['Mileage', car.mileage],
                    ['Auction Grade', car.grade],
                    ['Body Type', car.bodyType],
                    ['Condition', car.condition.charAt(0).toUpperCase() + car.condition.slice(1)],
                    ['Import Origin', car.category === 'jdm' ? 'Japan' : 'Europe'],
                    ['Transmission', 'Automatic (CVT)'],
                    ['Drivetrain', car.bodyType === 'SUV' ? 'AWD / 4WD' : 'FWD'],
                    ['Seating', car.bodyType === 'SUV' ? '5–7 Passengers' : '5 Passengers'],
                  ].map(([label, value], i) => (
                    <tr
                      key={label}
                      className={`border-b border-border/30 ${i % 2 === 0 ? 'bg-card/30' : ''}`}
                    >
                      <td className="px-5 py-3.5 font-body text-muted-foreground tracking-wide">{label}</td>
                      <td className="px-5 py-3.5 font-mono font-semibold text-right">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* Customization Options */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold mb-2">
              Customization <span className="text-gradient-primary">Options</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm mb-6">Select upgrades for your preorder</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {customizationOptions.map((opt) => {
                const selected = selectedCustomizations.includes(opt.title);
                return (
                  <motion.button
                    key={opt.title}
                    onClick={() => toggleCustomization(opt.title)}
                    className={`glass-panel p-5 text-left swoosh-click transition-all duration-300 ${
                      selected ? 'border-primary/50 glow-box-primary' : ''
                    }`}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${selected ? 'bg-primary/20' : 'bg-secondary'}`}>
                        <opt.icon className={`w-5 h-5 ${selected ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-body font-semibold text-sm mb-1">{opt.title}</h4>
                        <p className="text-muted-foreground text-xs mb-2">{opt.desc}</p>
                        <p className="font-mono text-xs text-primary/80">{opt.price}</p>
                      </div>
                    </div>
                    {selected && (
                      <motion.div
                        className="mt-3 text-center text-xs font-mono text-primary/80 tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        ✓ SELECTED
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* EMI Calculator */}
        <EMICalculator />

        <div className="section-divider" />
      </div>
      <Footer />
    </div>
  );
};

export default CarDetail;
