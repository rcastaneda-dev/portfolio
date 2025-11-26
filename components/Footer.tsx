'use client';

import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-gray-400">Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-accent fill-accent" />
            </motion.div>
            <span className="text-gray-400">using Next.js & TypeScript</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © {currentYear} Ricardo Castaneda. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
