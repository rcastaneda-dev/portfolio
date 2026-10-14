'use client';

import { CheckCircle2, CircleDot, MinusCircle, XCircle, type LucideIcon } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { profile } from '@/lib/data/profile';
import type { CiPanelData, RunStatus } from '@/lib/data/ci';

const BUILD_STATUS: Record<RunStatus, { Icon: LucideIcon; className: string }> = {
  passed: { Icon: CheckCircle2, className: 'text-pass' },
  failed: { Icon: XCircle, className: 'text-flag' },
  running: { Icon: CircleDot, className: 'text-flag' },
  cancelled: { Icon: MinusCircle, className: 'text-graphite' },
};

interface FooterProps {
  version: string;
  /** Latest run of this repo's CI workflow on main; null until it has run once. */
  siteCi: CiPanelData | null;
}

const Footer = ({ version, siteCi }: FooterProps) => {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const latest = siteCi?.runs[0];
  const status = latest ? BUILD_STATUS[latest.status] : null;

  return (
    <footer>
      <div className="wrap flex flex-col gap-2 pb-12 pt-4 text-[0.875rem] text-graphite md:flex-row md:justify-between md:gap-8">
        <div>
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <p className="flex flex-wrap items-center gap-x-4">
            <span className="tabular-nums">{`v${version}`}</span>
            {latest && status && (
              <a
                href={latest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1.5 py-2"
              >
                <status.Icon size={14} aria-hidden className={status.className} />
                {t.footer.build[latest.status]}
                <span className="sr-only"> ({t.projects.newTab})</span>
              </a>
            )}
          </p>
        </div>
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
