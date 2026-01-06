'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [showDev, setShowDev] = useState(false);
  const { t } = useI18n();

  const experiences = [
    {
      title: t.experience.jobs.lumenalta.title,
      company: t.experience.jobs.lumenalta.company,
      period: `05/2023 - ${t.experience.present}`,
      location: 'Remote',
      category: 'QA',
      description: t.experience.jobs.lumenalta.description,
      tech: [
        'Azure DevOps', 'JavaScript', 'TypeScript', 'Cypress', 'Performance Testing',
        'Postman', 'Spike Testing', 'Component Testing', 'React Testing Library',
        'Docker', 'Docker Compose', 'Bash', 'XML', 'JSON', 'GitHub', 'GitHub Actions', 'Nx', 'Monorepo', 'Jenkins', 'PyTest', 'Python'
      ]
    },
    {
      title: t.experience.jobs.avenueCode.title,
      company: t.experience.jobs.avenueCode.company,
      period: '03/2022 - 02/2023',
      location: 'Remote',
      category: 'QA',
      description: t.experience.jobs.avenueCode.description,
      tech: [
        'API Testing', 'JIRA', 'Quality Assurance', 'TestCafe', 'JavaScript', 
        'Git', 'Software Quality', 'Node.js', 'Jenkins', 'PyTest', 'Python', 'GitHub', 'GitHub Actions'
      ]
    },
    {
      title: t.experience.jobs.encora.title,
      company: t.experience.jobs.encora.company,
      period: '11/2019 - 03/2022',
      location: 'Remote',
      category: 'QA',
      description: t.experience.jobs.encora.description,
      tech: [
        'JavaScript (ES6)', 'TestCafe', 'Node.js', 'ESLint', 'Prettier', 'Gulp', 'Npm',
        'Postman', 'Python', 'PyTest', 'Jest', 'Docker', 'Kubernetes', 'RabbitMQ',
        'TeamCity', 'TestRail', 'BDD', 'JIRA', 'Datadog', 'Splunk', 'VSCode', 'PyCharm'
      ]
    },
    {
      title: t.experience.jobs.pegaDev.title,
      company: t.experience.jobs.pegaDev.company,
      period: '05/2018 - 10/2019',
      location: 'El Salvador (Hybrid)',
      category: 'Dev',
      description: t.experience.jobs.pegaDev.description,
      tech: ['Pega PRPC', 'BPM', 'JAXB', 'JSON', 'Postman', 'XML', 'JSP', 'SoapUI']
    },
    {
      title: t.experience.jobs.ruleswareQa.title,
      company: t.experience.jobs.ruleswareQa.company,
      period: '08/2015 - 07/2018',
      location: 'El Salvador (Onsite)',
      category: 'QA',
      description: t.experience.jobs.ruleswareQa.description,
      tech: [
        'Java EE', 'Selenium WebDriver', 'API Testing', 'JAXB', 'Quality Assurance', 
        'Postman', 'Java', 'XML', 'Git', 'SoapUI', 'Software Quality', 'SQL', 'Jenkins'
      ]
    },
    {
      title: t.experience.jobs.synergyca.title,
      company: t.experience.jobs.synergyca.company,
      period: '03/2015 - 07/2015',
      location: 'El Salvador (Onsite)',
      category: 'Dev',
      description: t.experience.jobs.synergyca.description,
      tech: [
        'JPA', 'PrimeFaces', 'JSON', 'Java', 'JSP', 'SQL', 'Bash', '.NET'
      ]
    },
    {
      title: t.experience.jobs.sherwin.title,
      company: t.experience.jobs.sherwin.company,
      period: '12/2013 - 03/2015',
      location: 'El Salvador (Onsite)',
      category: 'Dev',
      description: t.experience.jobs.sherwin.description,
      tech: [
        'Java EE5', 'JPA', 'JMS', 'JSF', 'Icefaces', 'PrimeFaces', 'Knockout.js', 
        'JavaScript', 'HTML5', 'jQuery Mobile', 'JSON', 'PL/SQL', 'Oracle', 
        'Glassfish', 'iReport', 'NetBeans', 'Subversion'
      ]
    }
  ];

  const filteredExperiences = experiences.filter(exp => showDev || exp.category === 'QA');

  return (
    <section id="experience" className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 md:mb-8"></div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4">
            <span className={`text-xs md:text-sm font-semibold ${!showDev ? 'text-primary' : 'text-gray-400'}`}>
              {t.experience.qaToggle}
            </span>
            <button
              onClick={() => setShowDev(!showDev)}
              className={`relative w-12 h-6 md:w-14 md:h-7 rounded-full transition-colors duration-300 focus:outline-none ${
                showDev ? 'bg-primary' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: showDev ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-xs md:text-sm font-semibold ${showDev ? 'text-primary' : 'text-gray-400'}`}>
              {t.experience.devToggle}
            </span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-6 md:left-auto md:right-[-2.5rem] transform md:translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-darker ${
                  exp.category === 'Dev' ? 'bg-accent' : 'bg-primary'
                }`}
              ></motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`glass-effect rounded-lg p-4 md:p-6 ml-12 md:ml-0 hover:neon-glow transition-all ${
                  exp.category === 'Dev' ? 'border-l-4 border-accent' : ''
                }`}
              >
                <div className={`flex items-center gap-2 mb-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <Briefcase className={`w-3 h-3 md:w-4 md:h-4 ${exp.category === 'Dev' ? 'text-accent' : 'text-primary'}`} />
                  <h3 className={`text-base md:text-lg lg:text-xl font-bold ${exp.category === 'Dev' ? 'text-accent' : 'text-primary'}`}>
                    {exp.title}
                  </h3>
                </div>

                <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-2">{exp.company}</h4>

                <div className={`flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400 mb-3 md:mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <ul className={`space-y-1.5 md:space-y-2 mb-3 md:mb-4 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-300">
                      • {item}
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-1.5 md:gap-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 md:py-1 text-[10px] md:text-xs border rounded ${
                        exp.category === 'Dev'
                          ? 'bg-accent/10 border-accent/30 text-accent-light'
                          : 'bg-primary/10 border-primary/30 text-primary-light'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
