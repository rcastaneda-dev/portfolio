'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

const Hero = () => {
  const { t, locale } = useI18n();

  const particleVariants = {
    animate: {
      y: [-20, 20],
      x: [-20, 20],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        },
        x: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    }
  };

  // Generate typing animation sequence from translations
  const typingSequence = useMemo(() => {
    return t.hero.roles.flatMap((role) => [role, 2000]);
  }, [t.hero.roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={particleVariants}
            animate="animate"
            className={`absolute w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="inline-block p-2 glass-effect rounded-full mb-2">
              <div
                className="w-32 h-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full p-1"
              >
                <div className="w-full h-full bg-darker rounded-full flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Ricardo Castaneda"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Ricardo Castaneda
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-primary mb-8 h-20"
          >
            <TypeAnimation
              key={locale} // Force re-render on locale change
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            {/* Download Resume CTA */}
            <motion.a
              href="/resume.pdf"
              download="Ricardo_Castaneda_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-darker font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <FileDown size={20} />
              {t.hero.downloadResume}
            </motion.a>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/rcastaneda-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full text-gray-300 hover:text-primary hover:neon-glow transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rcastaneda-dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full text-gray-300 hover:text-primary hover:neon-glow transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:hi@rcastaneda.dev"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full text-gray-300 hover:text-primary hover:neon-glow transition-all"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ChevronDown size={32} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
