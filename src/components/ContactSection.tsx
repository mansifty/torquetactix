import { motion } from 'framer-motion';
import { Phone, MessageCircle, Facebook, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-sm">Visit our showroom or reach out anytime</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              desc: '+880 1608-095085',
              href: 'tel:+8801608095085',
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              desc: 'Chat with us instantly',
              href: 'https://wa.me/8801608095085',
            },
            {
              icon: Facebook,
              title: 'Facebook',
              desc: 'Follow Torque Tactix',
              href: 'https://www.facebook.com/profile.php?id=61579162455911',
            },
            {
              icon: MapPin,
              title: 'Showroom',
              desc: 'Dhaka, Bangladesh',
              href: 'https://www.google.com/maps?q=23.820555,90.390440',
            },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 flex items-center gap-5 group hover:glow-box-primary transition-all duration-500 swoosh-click"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <div className="p-3 rounded-xl" style={{ background: 'hsl(43 74% 49% / 0.1)' }}>
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Map */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden border border-border/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <iframe
            title="Torque Tactix Showroom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5!2d90.390440!3d23.820555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzE0LjAiTiA5MMKwMjMnMjUuNiJF!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
