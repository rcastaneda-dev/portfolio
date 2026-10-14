'use client';

import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';

const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap flex flex-col gap-2 pb-12 pt-4 text-[0.875rem] text-graphite md:flex-row md:justify-between md:gap-8">
        <p>
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p>
          {t.footer.built}{' '}
          <a
            href={profile.support}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-block py-2"
          >
            {t.footer.support}
            <span className="sr-only"> ({t.projects.newTab})</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
