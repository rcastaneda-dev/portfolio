'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, GitBranch, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Automation Expert',
      description: 'Specialized in building robust test automation frameworks and CI/CD pipelines'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Workflow',
      description: 'Leveraging modern AI tools to accelerate development and testing'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full Stack Capable',
      description: 'Proficient in both frontend and backend development with modern frameworks'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Cross-Functional',
      description: 'Bridge between development and QA teams to ensure quality delivery'
    },
  ];

  const techStack = [
    'TypeScript', 'JavaScript', 'Java', 'Python',
    'Cypress', 'TestCafe', 'Selenium', 'PyTest', 'Jest', 
    'Docker', 'Azure DevOps', 'K6', 'Playwright'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Bridging Development & Quality Assurance
            </h3>
            <p className="text-gray-300 mb-4">
              I’m a seasoned IT professional with over a decade of experience delivering high-quality solutions across multiple industries, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
              <li>Financial Services (Disputes/Claims, Payments, Chargebacks)</li>
              <li>eCommerce</li>
              <li>Cybersecurity</li>
              <li>Maritime</li>
              <li>Ground Transportation & Logistics</li>
            </ul>
            <p className="text-gray-300 mb-4">
              As a Senior QA Automation Engineer with a strong development background, I bring a cross-functional perspective to every project. My core expertise is in JavaScript/TypeScript and Java, with additional experience in Python, and I work confidently across modern tools, frameworks, and architectural patterns.
            </p>
            <p className="text-gray-300">
              Currently, I&apos;m embracing AI-powered tools like Cursor and Claude Code to enhance QA productivity and explore modern development paradigms. I&apos;m also taking the time to explore chaos engineering tools like Gremlin to further strengthen system resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="glass-effect p-4 rounded-lg hover:neon-glow transition-all"
              >
                <div className="text-primary mb-2">{feature.icon}</div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-effect rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full text-sm hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
