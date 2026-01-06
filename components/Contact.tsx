'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Image from 'next/image';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t.contact.email,
      value: 'hi@rcastaneda.dev',
      href: 'mailto:hi@rcastaneda.dev'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.contact.phone,
      value: '+503 7740-7075',
      href: 'tel:+50377407075'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t.contact.location,
      value: 'San Salvador, El Salvador',
      href: '#'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t.contact.letsConnect}</h3>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-effect rounded-lg hover:neon-glow transition-all group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform text-sm md:text-base">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400">{info.label}</p>
                    <p className="text-sm md:text-base text-gray-200">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 md:px-4 md:py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm md:text-base"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                {t.contact.form.send}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Buy Me a Coffee Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center px-4"
        >
          <p className="text-sm md:text-base text-gray-400 mb-4">{t.contact.supportMessage}</p>
          <motion.a
            href="https://www.buymeacoffee.com/rcastaneda.dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block transition-all hover:neon-glow rounded-lg"
          >
            <Image
              src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=rcastaneda.dev&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
              alt="Buy Me A Coffee"
              width={217}
              height={60}
              className="h-10 md:h-12 lg:h-14 w-auto"
              unoptimized
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
