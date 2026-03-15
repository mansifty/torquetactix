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
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs text-primary tracking-[0.3em] mb-4 uppercase">
              FOUNDER & VISIONARY
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-6">
              <span className="text-foreground" style={{ WebkitTextStroke: '1px hsl(0 0% 98%)', color: 'transparent' }}>
                MAHIR
              </span>
              <br />
              <span className="text-foreground" style={{ WebkitTextStroke: '1px hsl(0 0% 98%)', color: 'transparent' }}>
                AHMED
              </span>
              <br />
              <span className="text-gradient-primary">IFTY</span>
            </h2>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic border-l-4 border-primary/30 pl-6 mb-6">
              "Precision isn't a goal; it's our baseline."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Torque Tactix is a premium automobile dealership specializing in Japanese imported vehicles 
              and selected European luxury cars. We provide transparent auction grading, customization options, 
              and competitive pricing in the Bangladesh automotive market.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 max-w-xl">
              <p className="font-mono text-xs text-primary tracking-wider mb-1">MISSION</p>
              <p className="text-sm text-muted-foreground">
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-4xl font-bold text-primary">MI</span>
                  </div>
                  <p className="font-display text-lg font-bold">Mahir Ahmed Ifty</p>
                  <p className="font-mono text-xs text-muted-foreground tracking-wider">CEO & FOUNDER</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
