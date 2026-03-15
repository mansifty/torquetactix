import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown } from 'lucide-react';

const EMICalculator = () => {
  const [carPrice, setCarPrice] = useState(4000000);
  const [downPayment, setDownPayment] = useState(1200000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(5);

  const loanAmount = Math.max(0, carPrice - downPayment);
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;

  const emi = monthlyRate > 0 && months > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : loanAmount / (months || 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const fmt = (n: number) => '৳' + Math.round(n).toLocaleString('en-IN');

  return (
    <section id="finance" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
            Easy Car Loan <span className="text-gradient-primary">Calculator</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Plan your car purchase in seconds. See how much you pay now and your monthly EMI.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel-strong p-8 md:p-10 border-l-4 border-l-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {[
                { label: 'Car Price', value: carPrice, set: setCarPrice, max: 20000000 },
                { label: 'Down Payment', value: downPayment, set: setDownPayment, max: carPrice },
              ].map(field => (
                <div key={field.label}>
                  <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={field.max}
                    step={50000}
                    value={field.value}
                    onChange={e => field.set(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="text-right font-mono text-sm text-primary mt-1">{fmt(field.value)}</div>
                </div>
              ))}

              <div>
                <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">
                  LOAN AMOUNT (AUTO)
                </label>
                <div className="p-3 rounded-lg bg-muted/30 border border-border/30 font-mono text-lg text-primary">
                  {fmt(loanAmount)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">
                    INTEREST RATE (%)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    onChange={e => setRate(Number(e.target.value))}
                    min={1}
                    max={30}
                    className="w-full p-3 rounded-lg bg-muted/20 border border-border/30 font-mono text-foreground focus:border-primary/50 transition-colors outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-wider text-muted-foreground mb-2">
                    TENURE (YEARS)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={e => setTenure(Number(e.target.value))}
                    min={1}
                    max={10}
                    className="w-full p-3 rounded-lg bg-muted/20 border border-border/30 font-mono text-foreground focus:border-primary/50 transition-colors outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <div className="text-center">
                  <p className="font-mono text-xs text-muted-foreground tracking-wider mb-1">MONTHLY EMI</p>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary glow-text">
                    {fmt(emi)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-muted/20 border border-border/30 text-center">
                  <p className="font-mono text-xs text-muted-foreground mb-1">PAID NOW</p>
                  <p className="font-mono text-lg font-bold text-foreground">{fmt(downPayment)}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/20 border border-border/30 text-center">
                  <p className="font-mono text-xs text-muted-foreground mb-1">TOTAL INTEREST</p>
                  <p className="font-mono text-lg font-bold text-foreground">{fmt(totalInterest)}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-center">
                <p className="font-mono text-xs text-muted-foreground mb-1">TOTAL PAYMENT</p>
                <p className="font-mono text-xl font-bold text-foreground">{fmt(totalPayment)}</p>
              </div>

              <p className="text-center text-xs text-muted-foreground italic">
                "Affordable monthly payments make owning your dream car easier."
              </p>
              <p className="text-center text-xs text-primary/70 font-mono">
                ↓ Most customers finance with only 20–30% down payment
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
