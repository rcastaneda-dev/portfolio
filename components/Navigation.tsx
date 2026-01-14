'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full z-50 pt-8 pb-6 md:pt-10"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Language Switcher - Always top-right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <LanguageSwitcher />
          </motion.div>
        </div>

        {/* Centered Navigation */}
        <div className="flex items-center justify-center">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="text-base text-gray-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 relative group px-2 py-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-400 group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: isOpen ? 90 : 0,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="glass-effect rounded-lg p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ 
                      x: 8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="block py-3 px-3 -mx-3 rounded-md text-base text-gray-300 hover:text-primary hover:bg-primary/10 hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.3)] transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
