'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, TestTube2 } from 'lucide-react';
import { SiK6, SiSelenium, SiTestcafe } from 'react-icons/si';
import { useI18n } from '@/lib/i18n';
import { FaMasksTheater } from 'react-icons/fa6';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [filter, setFilter] = useState<'All' | 'Dev' | 'Automation'>('All');
  const { t } = useI18n();

  const projects = [
    {
      title: t.projects.items['playwright-assessment'].title,
      year: '2026',
      description: t.projects.items.inventory.description,
      icon: <FaMasksTheater className="w-8 h-8" />,
      tech: ['TypeScript', 'Playwright'],
      color: 'from-primary to-blue-500',
      githubLink: 'https://github.com/rcastaneda-dev/playwright-assessment',
      type: 'Automation' as const,
    },
    {
      title: t.projects.items.inventory.title,
      year: '2025',
      description: t.projects.items.inventory.description,
      icon: <TestTube2 className="w-8 h-8" />,
      tech: ['React 19', 'TypeScript', 'Playwright'],
      color: 'from-primary to-blue-500',
      githubLink: 'https://github.com/rcastaneda-dev/nanis-essentials-inventory',
      liveLink: 'https://nanis-essentials-inventory.vercel.app',
      type: 'Dev' as const,
      automationStatus: 'Pending' as 'Pending' | 'Complete',
    },
    {
      title: t.projects.items['playwright-platzi-challenge2'].title,
      year: '2025',
      description: t.projects.items['playwright-platzi-challenge2'].description,
      icon: <FaMasksTheater className="w-8 h-8" />,
      tech: ['Playwright', 'Typescript', 'Node.js', 'Github'],
      color: 'from-primary to-blue-500',
      githubLink: 'https://github.com/rcastaneda-dev/curso-automatizacion-pruebas-playwright-reto2/tree/fix/existing-docs-tests',
      type: 'Automation' as const,
    },
    {
      title: t.projects.items.k6.title,
      year: '2025',
      description: t.projects.items.k6.description,
      icon: <SiK6 className="w-8 h-8 text-green-400" />,
      tech: ['K6', 'Typescript', 'Node.js', 'Github'],
      color: 'from-green-400 to-cyan-500',
      githubLink: 'https://github.com/rcastaneda-dev/k6-typescript-portfolio',
      liveLink: 'https://github.com/rcastaneda-dev/k6-typescript-portfolio/actions',
      type: 'Automation' as const,
    },
    {
      title: t.projects.items.testcafe.title,
      year: '2021',
      description: t.projects.items.testcafe.description,
      icon: <SiTestcafe className="w-8 h-8" />,
      tech: ['JavaScript', 'Node.js', 'Testcafe', 'Github'],
      color: 'from-accent to-purple-500',
      githubLink: 'https://github.com/rcastaneda-dev/AutomationPractice-Theorem',
      type: 'Automation' as const,
    },
    {
      title: t.projects.items.upgrade.title,
      year: '2019',
      description: t.projects.items.upgrade.description,
      icon: <SiSelenium className="w-8 h-8" />,
      tech: ['Java', 'Selenium', 'TestNG', 'Maven', 'RestAssured'],
      color: 'from-green-400 to-cyan-500',
      githubLink: 'https://github.com/rcastaneda-dev/AutomationChallenge-UpgradeInc',
      type: 'Automation' as const,
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.type === filter;
  });

  const filterLabels = {
    All: t.projects.filterAll,
    Dev: t.projects.filterDev,
    Automation: t.projects.filterAutomation,
  };

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 md:mb-8"></div>

          {/* Filter Toggle */}
          <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
            {(['All', 'Dev', 'Automation'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === item
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                    : 'bg-dark/50 text-gray-400 hover:text-white hover:bg-dark/80'
                }`}
              >
                {filterLabels[item]}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': project.color.split(' ')[0].split('-')[1],
                  '--tw-gradient-to': project.color.split(' ')[1].split('-')[1],
                } as React.CSSProperties}
              ></div>
              
              <div className="relative glass-effect rounded-lg p-4 md:p-6 h-full hover:neon-glow transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                  <div className={`inline-block p-2 md:p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 items-center">
                    <span className={`px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold rounded-full border ${
                      project.type === 'Dev'
                        ? 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                        : 'bg-purple-500/10 border-purple-500/50 text-purple-400'
                    }`}>
                      {project.type}
                    </span>
                    {project.type === 'Dev' && 'automationStatus' in project && (
                      <span className={`px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold rounded-full border ${
                        project.automationStatus === 'Complete'
                          ? 'bg-green-500/10 border-green-500/50 text-green-400'
                          : 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400'
                      }`}>
                        {project.automationStatus === 'Complete' ? t.projects.automationComplete : t.projects.automationPending}
                      </span>
                    )}
                    <span className="px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold rounded-full border bg-gray-500/10 border-gray-500/50 text-gray-400">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs bg-dark/50 border border-primary/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={project.githubLink ? { scale: 1.05 } : {}}
                    whileTap={project.githubLink ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-1.5 md:gap-2 transition-colors ${
                      project.githubLink
                        ? 'text-primary hover:text-white'
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={(e) => !project.githubLink && e.preventDefault()}
                  >
                    <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">{t.projects.viewCode}</span>
                  </motion.a>
                  {'liveLink' in project && project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 md:gap-2 text-primary hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">{t.projects.liveDemo}</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.a
            href="https://github.com/rcastaneda-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-primary to-accent rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all text-sm md:text-base"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            {t.projects.viewMoreGithub}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
