'use client';

import { useI18n } from '@/lib/i18n';
import { skillGroups, type SkillGroupId } from '@/lib/data/profile';
import Section from './Section';

const groupIds = Object.keys(skillGroups) as SkillGroupId[];

const Skills = () => {
  const { t } = useI18n();

  return (
    <Section id="skills" title={t.skills.title} tone="band">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {groupIds.map((id) => (
          <div key={id}>
            <h3 className="font-display text-[1.125rem] font-semibold">
              {t.skills.categories[id]}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {skillGroups[id].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-display text-[1.125rem] font-semibold">{t.skills.learningTitle}</h3>
        <ul className="prose-serif mt-4 list-disc space-y-2 pl-5 marker:text-graphite">
          {t.skills.learning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
