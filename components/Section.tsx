import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  /** `band` puts the section on a full-bleed white band to break the page rhythm. */
  tone?: 'bench' | 'band';
  children: ReactNode;
}

// Every content section shares this layout: the title sits in a left gutter
// (sticky on desktop) and the content takes the remaining nine columns.
// Section spacing lives here and nowhere else.
const Section = ({ id, title, tone = 'bench', children }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={tone === 'band' ? 'bg-sheet' : undefined}
  >
    <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-28">
      <h2
        id={`${id}-title`}
        className="font-display text-[1.75rem] font-semibold leading-[1.15] md:col-span-3 md:sticky md:top-24 md:self-start"
      >
        {title}
      </h2>
      <div className="min-w-0 md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
