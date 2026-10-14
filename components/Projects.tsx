'use client';

import { useI18n } from '@/lib/i18n';
import { projects } from '@/lib/data/projects';
import { profile } from '@/lib/data/profile';
import Section from './Section';

const linkClass = 'link inline-flex min-h-11 items-center';

const Projects = () => {
  const { t } = useI18n();
  const newTab = <span className="sr-only"> ({t.projects.newTab})</span>;

  return (
    <Section id="projects" title={t.projects.title}>
      <ol className="[&>li:first-child]:border-t-0 [&>li:first-child]:pt-0">
        {projects.map((project) => {
          const item = t.projects.items[project.id];
          return (
            <li
              key={project.id}
              className="grid gap-3 border-t border-rule py-8 md:grid-cols-[5rem_1fr_9rem] md:gap-8"
            >
              <p className="text-[0.9375rem] tabular-nums text-graphite">{project.year}</p>

              <div className="min-w-0">
                <h3 className="font-display text-[1.125rem] font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[62ch] font-serif text-[1.0625rem] leading-[1.65]">
                  {item.description}
                </p>
                <p className="mt-3 text-[0.875rem] text-graphite">{project.stack.join(', ')}</p>
                {project.inProgress && (
                  <p className="mt-1 text-[0.875rem] font-medium text-flag">
                    {t.projects.inProgress}
                  </p>
                )}
              </div>

              <ul className="flex flex-wrap gap-x-6 text-[0.9375rem] md:flex-col md:gap-x-0">
                <li>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.projects.code}
                    {newTab}
                  </a>
                </li>
                {project.live && (
                  <li>
                    <a
                      href={project.live.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {project.live.kind === 'demo' ? t.projects.liveDemo : t.projects.ciRuns}
                      {newTab}
                    </a>
                  </li>
                )}
              </ul>
            </li>
          );
        })}
      </ol>

      <p className="mt-6">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {t.projects.moreOnGithub}
          {newTab}
        </a>
      </p>
    </Section>
  );
};

export default Projects;
