'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, TestTube2, Cloud, Globe } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiPython,
  SiCypress, SiSelenium, SiJest,
  SiDocker, SiJenkins, SiGithub,
  SiReact, SiNodedotjs, SiExpress, SiPostman,
  SiTeamcity, SiPytest,
  SiK6
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <SiPython /> }
      ]
    },
    {
      title: 'Testing Frameworks',
      icon: <TestTube2 className="w-6 h-6" />,
      skills: [
        { name: 'Cypress', icon: <SiCypress /> },
        { name: 'TestCafe', icon: <TestTube2 className="w-4 h-4" /> }, // Fallback
        { name: 'Jest', icon: <SiJest /> },
        { name: 'Selenium', icon: <SiSelenium /> },
        { name: 'PyTest', icon: <SiPytest /> },
        { name: 'K6', icon: <SiK6 /> }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Azure DevOps', icon: <VscAzureDevops /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'Git/GitHub', icon: <SiGithub /> },
        { name: 'TeamCity', icon: <SiTeamcity /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'REST APIs', icon: <SiPostman /> },
        { name: 'React/Next.js', icon: <SiReact /> },
        { name: 'Express', icon: <SiExpress /> },
      ]
    }
  ];

  const certifications = [
    'MIT xPRO - Professional Certificate in Cybersecurity (2022-2023)',
    'Currently learning: AI-powered development with Cursor & Claude Code',
    'Focus areas: Modern React, Full-stack development, Test automation architecture'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-lg p-6 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <span className="text-accent text-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-effect rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Continuous <span className="gradient-text">Learning</span>
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
