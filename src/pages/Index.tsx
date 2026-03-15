import { useState } from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import Navbar from '@/components/Navbar';
import VehicleSelector from '@/components/VehicleSelector';
import VehicleGrid from '@/components/VehicleGrid';
import EMICalculator from '@/components/EMICalculator';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SmartCarFinder from '@/components/SmartCarFinder';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [condition, setCondition] = useState<'all' | 'new' | 'reconditioned' | 'used'>('all');
  const [category, setCategory] = useState<'all' | 'jdm' | 'german'>('all');

  return (
    <>
      {!introComplete && <CinematicIntro onComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <div className="min-h-screen">
          <Navbar />
          <div className="pt-16">
            {/* Hero tagline */}
            <section className="py-20 px-4 text-center">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="gold-shimmer">Importing Excellence.</span>
                <br />
                <span className="text-foreground">Customizing Prestige.</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 font-body">
                Torque Tactix is the definitive digital showroom for the Bangladeshi elite.
                Premium JDM imports & European luxury, delivered with transparency.
              </p>
              <a
                href="#showroom"
                className="glass-button-primary inline-block swoosh-click font-body text-sm tracking-[0.15em]"
              >
                EXPLORE SHOWROOM
              </a>
            </section>

            <div className="section-divider" />

            <VehicleSelector
              condition={condition}
              category={category}
              onConditionChange={setCondition}
              onCategoryChange={setCategory}
            />
            <VehicleGrid condition={condition} category={category} />

            <div className="section-divider" />
            <EMICalculator />

            <div className="section-divider" />
            <ServicesSection />

            <div className="section-divider" />
            <AboutSection />

            <div className="section-divider" />
            <ContactSection />

            <Footer />
          </div>

          <SmartCarFinder />
        </div>
      )}
    </>
  );
};

export default Index;
