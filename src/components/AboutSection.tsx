import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left - Name */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            
            <p className="font-body text-xs text-primary tracking-[0.3em] mb-4 uppercase">
              Founder & Visionary
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
              <span className="text-foreground/20 mx-0 my-0 px-[22px]" style={{ WebkitTextStroke: '1px hsl(40 20% 95% / 0.3)' }}>
                MAHIR
              </span>
              <br />
              <span className="text-foreground/20 px-0" style={{ WebkitTextStroke: '1px hsl(40 20% 95% / 0.3)' }}>
                AHMED
              </span>
              <br />
              <span className="gold-shimmer py-0 px-[50px]">IFTY</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic pl-6 mb-6 font-body" style={{ borderLeft: '4px solid hsl(43 74% 49% / 0.3)' }}>
              "Precision isn't a goal. It's our baseline."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed max-w-xl font-body">
              Torque Tactix is a premium automobile dealership specializing in Japanese imported vehicles 
              and selected European luxury cars. We provide transparent auction grading, customization options, 
              and competitive pricing in the Bangladesh automotive market.
            </p>
            <div className="mt-6 glass-panel p-4 max-w-xl" style={{ borderColor: 'hsl(43 74% 49% / 0.15)' }}>
              <p className="font-body text-xs text-primary tracking-wider mb-1 uppercase">Mission</p>
              <p className="text-sm text-muted-foreground font-body">
                Deliver reliable vehicles with transparency and the best pricing in the market.
              </p>
            </div>
          </motion.div>

          {/* Right - Logo overlay area */}
          <motion.div
            className="md:col-span-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            
            <div className="relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-3xl border" style={{
                background: 'linear-gradient(135deg, hsl(43 74% 49% / 0.08), hsl(0 0% 7%), hsl(30 60% 42% / 0.05))',
                borderColor: 'hsl(43 74% 49% / 0.12)'
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                    background: 'linear-gradient(135deg, hsl(43 74% 49% / 0.15), hsl(43 74% 49% / 0.05))',
                    border: '2px solid hsl(43 74% 49% / 0.25)'
                  }}>
                    <span className="font-display text-4xl font-bold text-primary">MI</span>
                  </div>
                  <p className="font-display text-lg font-bold">Mahir Ahmed Ifty</p>
                  <p className="font-body text-xs text-muted-foreground tracking-wider">CEO & FOUNDER</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutSection;