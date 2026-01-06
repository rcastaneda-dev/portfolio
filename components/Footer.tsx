'use client';

import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="py-6 md:py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-3 md:mb-4">
            <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm text-gray-400">{t.footer.builtWith}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
            </motion.div>
            <span className="text-xs md:text-sm text-gray-400">{t.footer.using}</span>
          </div>

          <p className="text-xs md:text-sm text-gray-500">
            © {currentYear} Ricardo Castaneda. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
