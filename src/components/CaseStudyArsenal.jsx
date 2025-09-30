import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CaseStudyArsenal = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      codename: 'NEURAL NEXUS',
      classification: 'Private Sector AI Consultant',
      title: 'AI-Powered Customer Intelligence Platform',
      client: 'Fortune 500 Enterprise',
      status: 'MISSION ACCOMPLISHED',
      timeline: '6 months',
      team: '8 specialists',
      description: 'Architected superintelligent behavioral prediction system achieving 94% accuracy in strategic market operations.',
      objectives: [
        'Deploy real-time intelligence processing infrastructure',
        'Operationalize combat-ready ML systems at scale',
        'Engineer command center dashboard for strategic oversight',
        'Implement defense-grade data security protocols'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'React', 'PostgreSQL', 'Docker', 'AWS'],
      results: [
        '40% tactical advantage in conversion operations',
        '$2.3M strategic value captured',
        '60% neutralization of operational losses',
        '99.9% combat readiness maintained'
      ],
      challenges: [
        'Processing 10TB+ of daily customer data',
        'Real-time inference under 100ms latency',
        'Integrating with legacy enterprise systems'
      ],
      image: '🧠',
      color: 'dark-neon-blue'
    },
    {
      id: 2,
      codename: 'QUANTUM SHIELD',
      classification: 'Confidential',
      title: 'Cybersecurity Threat Detection System',
      client: 'Government Agency',
      status: 'OPERATIONAL',
      timeline: '8 months',
      team: '12 specialists',
      description: 'Engineered autonomous cyber warfare defense system utilizing superintelligent threat neutralization protocols.',
      objectives: [
        'Deploy advanced threat detection algorithms',
        'Architect autonomous counterstrike protocols',
        'Implement zero-trust combat architecture',
        'Establish continuous battlefield surveillance'
      ],
      technologies: ['Python', 'Scikit-learn', 'Elasticsearch', 'Kibana', 'Node.js', 'MongoDB', 'Kubernetes'],
      results: [
        '99.7% enemy detection accuracy',
        '85% reduction in false threat assessments',
        '3-second counterstrike deployment',
        'Zero successful infiltrations'
      ],
      challenges: [
        'Processing millions of network events per second',
        'Adapting to evolving threat landscapes',
        'Maintaining system performance under attack'
      ],
      image: '🛡️',
      color: 'dark-neon-purple'
    },
    {
      id: 3,
      codename: 'DIGITAL FORTRESS',
      classification: 'Confidential',
      title: 'Blockchain-Based Supply Chain Platform',
      client: 'Global Manufacturing Corp',
      status: 'DEPLOYED',
      timeline: '10 months',
      team: '15 specialists',
      description: 'Commanded development of defense-grade blockchain infrastructure for global supply chain warfare operations.',
      objectives: [
        'Deploy immutable operational ledger',
        'Engineer autonomous smart contract warfare',
        'Develop tactical mobile surveillance systems',
        'Ensure international operational compliance'
      ],
      technologies: ['Solidity', 'Ethereum', 'React Native', 'Node.js', 'IPFS', 'Web3.js', 'PostgreSQL'],
      results: [
        '100% operational transparency achieved',
        '50% neutralization of hostile infiltrations',
        '$5M strategic resource optimization',
        '30+ international theaters of operation'
      ],
      challenges: [
        'Scaling blockchain for enterprise use',
        'Integrating IoT sensors with smart contracts',
        'Managing gas fees and transaction costs'
      ],
      image: '⛓️',
      color: 'dark-neon-cyan'
    },
    {
      id: 4,
      codename: 'PHOENIX PROTOCOL',
      classification: 'Confidential',
      title: 'Disaster Recovery Automation System',
      client: 'Cloud Infrastructure Provider',
      status: 'ACTIVE',
      timeline: '4 months',
      team: '6 specialists',
      description: 'Architected superintelligent crisis response system with autonomous battlefield recovery capabilities.',
      objectives: [
        'Deploy predictive failure intelligence',
        'Automate combat recovery operations',
        'Minimize operational downtime',
        'Engineer strategic command dashboard'
      ],
      technologies: ['Go', 'Terraform', 'Prometheus', 'Grafana', 'Redis', 'gRPC', 'AWS/GCP'],
      results: [
        '99.99% operational readiness',
        '90% acceleration in combat recovery',
        '$10M in prevented strategic losses',
        'Zero intelligence compromises'
      ],
      challenges: [
        'Coordinating multi-cloud deployments',
        'Handling cascading failure scenarios',
        'Maintaining state consistency during recovery'
      ],
      image: '🔥',
      color: 'dark-neon-pink'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-light-elevated dark:bg-dark-elevated relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-15" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-text-accent dark:via-dark-neon-purple to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-tactical font-black text-light-text-primary dark:text-dark-text-primary mb-4">
            STRATEGIC <span className="text-tactical">WARFARE PORTFOLIO</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Defense-critical AI operations executed with DoD-caliber precision and zero-failure protocols.
            <span className="text-light-text-accent dark:text-dark-neon-purple"> Each deployment represents superintelligent warfare capabilities.</span>
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left card-tactical rounded-xl p-6 transition-all duration-300 ${
                    activeProject === index
                      ? 'border-light-text-accent dark:border-dark-neon-purple shadow-lg shadow-light-subtle-blue/20 dark:shadow-dark-glow-purple/20'
                      : 'hover:border-light-text-accent/50 dark:hover:border-dark-neon-purple/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{project.image}</div>
                      <div>
                        <h3 className="font-tactical font-bold text-light-text-primary dark:text-dark-text-primary">
                          {project.codename}
                        </h3>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                          {project.title}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                        project.classification === 'Private Sector AI Consultant' ? 'bg-blue-500/20 text-blue-400' :
                        project.classification === 'Confidential' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.classification}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono text-light-text-secondary dark:text-dark-text-secondary">
                      {project.client}
                    </span>
                    <span className={`font-tactical font-bold ${
                      project.status === 'MISSION ACCOMPLISHED' ? 'text-green-500' :
                      project.status === 'OPERATIONAL' ? 'text-blue-500' :
                      project.status === 'DEPLOYED' ? 'text-purple-500' :
                      'text-cyan-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card-tactical rounded-xl p-8 h-full"
              >
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-2xl mr-4">
                    {projects[activeProject].image}
                  </div>
                  <div>
                    <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary">
                      {projects[activeProject].codename}
                    </h3>
                    <p className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                      MISSION BRIEFING
                    </p>
                  </div>
                </div>

                {/* Mission Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-light-base dark:bg-dark-base rounded-lg">
                    <div className="text-lg font-tactical font-bold text-light-text-accent dark:text-dark-neon-blue">
                      {projects[activeProject].timeline}
                    </div>
                    <div className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
                      DURATION
                    </div>
                  </div>
                  <div className="text-center p-3 bg-light-base dark:bg-dark-base rounded-lg">
                    <div className="text-lg font-tactical font-bold text-light-text-accent dark:text-dark-neon-purple">
                      {projects[activeProject].team}
                    </div>
                    <div className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
                      TEAM SIZE
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                  {projects[activeProject].description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                    TACTICAL ARSENAL:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono bg-light-elevated dark:bg-dark-elevated border border-light-border dark:border-dark-border rounded text-light-text-primary dark:text-dark-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
                    MISSION RESULTS:
                  </h4>
                  {projects[activeProject].results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-tactical px-8 py-4 rounded-lg text-lg font-bold neon-glow mr-4"
          >
            <span className="relative z-10">INITIATE SECURITY CLEARANCE</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg text-lg font-tactical font-semibold tracking-wider border-2 border-light-text-accent dark:border-dark-neon-purple text-light-text-accent dark:text-dark-neon-purple hover:bg-light-text-accent/10 dark:hover:bg-dark-neon-purple/10 transition-all duration-300"
          >
            ACCESS FULL ARSENAL
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyArsenal;
