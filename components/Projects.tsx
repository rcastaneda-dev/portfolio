'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, TestTube2 } from 'lucide-react';
import { SiK6, SiSelenium, SiTestcafe } from 'react-icons/si';
import { useI18n } from '@/lib/i18n';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [filter, setFilter] = useState<'All' | 'Dev' | 'Automation'>('All');
  const { t } = useI18n();

  const projects = [
    {
      title: t.projects.items.inventory.title,
      year: '2025',
      description: t.projects.items.inventory.description,
      icon: <TestTube2 className="w-8 h-8" />,
      tech: ['React 19', 'TypeScript', 'Playwright', 'Dexie'],
      highlights: t.projects.items.inventory.highlights,
      color: 'from-primary to-blue-500',
      githubLink: 'https://github.com/rcastaneda-dev/nanis-essentials-inventory',
      liveLink: 'https://nanis-essentials-inventory.vercel.app',
      type: 'Dev' as const,
      automationStatus: 'Pending' as 'Pending' | 'Complete',
    },
    {
      title: t.projects.items.k6.title,
      year: '2025',
      description: t.projects.items.k6.description,
      icon: <SiK6 className="w-8 h-8 text-green-400" />,
      tech: ['K6', 'Typescript', 'Node.js', 'Github'],
      highlights: t.projects.items.k6.highlights,
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
      highlights: t.projects.items.testcafe.highlights,
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
      highlights: t.projects.items.upgrade.highlights,
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>

          {/* Filter Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            {(['All', 'Dev', 'Automation'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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

        <div className="grid md:grid-cols-2 gap-8">
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
              
              <div className="relative glass-effect rounded-lg p-6 h-full hover:neon-glow transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                      project.type === 'Dev' 
                        ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' 
                        : 'bg-purple-500/10 border-purple-500/50 text-purple-400'
                    }`}>
                      {project.type}
                    </span>
                    {project.type === 'Dev' && 'automationStatus' in project && (
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        project.automationStatus === 'Complete'
                          ? 'bg-green-500/10 border-green-500/50 text-green-400'
                          : 'bg-yellow-500/10 border-yellow-500/50 text-yellow-400'
                      }`}>
                        {project.automationStatus === 'Complete' ? t.projects.automationComplete : t.projects.automationPending}
                      </span>
                    )}
                    <span className="px-3 py-1 text-xs font-semibold rounded-full border bg-gray-500/10 border-gray-500/50 text-gray-400">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-dark/50 border border-primary/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={project.githubLink ? { scale: 1.05 } : {}}
                    whileTap={project.githubLink ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 transition-colors ${
                      project.githubLink 
                        ? 'text-primary hover:text-white' 
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
                    onClick={(e) => !project.githubLink && e.preventDefault()}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">{t.projects.viewCode}</span>
                  </motion.a>
                  {'liveLink' in project && project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.projects.liveDemo}</span>
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
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rcastaneda-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <Github className="w-5 h-5" />
            {t.projects.viewMoreGithub}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
