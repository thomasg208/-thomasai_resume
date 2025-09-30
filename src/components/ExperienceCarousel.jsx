import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceCarousel = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = [
    {
      id: 1,
      title: 'Chief Technology Officer',
      company: 'Avigdor Corporation',
      period: '2023 - Present',
      location: 'Washington, D.C.',
      type: 'Advisory & Strategic Role',
      description: 'Commanding strategic AI warfare initiatives and superintelligence infrastructure development for defense-critical operations.',
      technologies: ['AI Warfare Systems', 'Strategic Patent Architecture', 'Defense-Grade Infrastructure', 'Superintelligence Command'],
      achievements: [
        'Deployed 30+ autonomous AI warfare systems',
        'Architected 7 provisional patents for defense technologies',
        'Strategic command of IP portfolio and next-gen warfare systems'
      ]
    },
    {
      id: 2,
      title: 'Senior AI Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Architecting mission-critical AI infrastructure and superintelligent systems for Fortune 500 defense contractors.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Operationalized 15+ combat-ready ML systems',
        'Achieved 40% acceleration in real-time threat detection',
        'Commanded elite engineering strike team of 5 specialists'
      ]
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Engineered defense-grade distributed systems and secure APIs for high-stakes operational environments.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
      achievements: [
        'Deployed 10+ mission-critical applications to production',
        'Enhanced operational efficiency by 60% through strategic optimization',
        'Led tactical training programs for junior warfare engineers'
      ]
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'StartupX',
      period: '2018 - 2020',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Spearheaded development of next-generation financial warfare systems for strategic market operations.',
      technologies: ['JavaScript', 'Python', 'MongoDB', 'Express', 'React'],
      achievements: [
        'Architected combat-ready MVP from ground zero',
        'Scaled operations to 100K+ active deployments',
        'Implemented DoD-grade security protocols'
      ]
    },
    {
      id: 5,
      title: 'Navy Information Systems Technician',
      company: 'United States Navy',
      period: '2014 - 2018',
      location: 'Various Deployments',
      type: 'Military Service',
      description: 'Commanded critical intelligence infrastructure and secure communications networks in active combat zones.',
      technologies: ['Tactical Network Security', 'Combat Systems Administration', 'Satellite Warfare Communications'],
      achievements: [
        'Sustained 99.9% operational readiness in hostile environments',
        'Directed elite technical warfare training programs',
        'Awarded multiple commendations for exceptional combat performance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light-base dark:bg-dark-base relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-tactical font-black text-light-text-primary dark:text-dark-text-primary mb-4">
            OPERATIONAL <span className="text-tactical">COMMAND HISTORY</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Classified record of strategic AI warfare deployments and defense infrastructure victories.
            <span className="text-light-text-accent dark:text-dark-neon-blue"> Every operation executed with DoD-caliber precision and zero-failure tolerance.</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-light-text-accent via-light-metallic-silver to-light-text-accent dark:from-dark-neon-blue dark:via-dark-neon-purple dark:to-dark-neon-cyan transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-neon rounded-full transform md:-translate-x-1/2 z-10 shadow-lg shadow-light-subtle-blue/50 dark:shadow-dark-glow-blue/50">
                  <div className="absolute inset-0 bg-gradient-neon rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card-tactical rounded-xl p-6 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-tactical font-bold text-light-text-primary dark:text-dark-text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-light-text-accent dark:text-dark-neon-blue font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                          {exp.period}
                        </div>
                        <div className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-light-subtle-blue dark:bg-dark-surface border border-light-border dark:border-dark-border text-xs font-mono text-light-text-accent dark:text-dark-neon-cyan mb-4">
                      {exp.type}
                    </div>

                    {/* Description */}
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-mono bg-light-elevated dark:bg-dark-elevated border border-light-border dark:border-dark-border rounded text-light-text-primary dark:text-dark-text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary mb-2">
                        KEY ACHIEVEMENTS:
                      </h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-light-text-accent dark:bg-dark-neon-blue rounded-full" />
                          <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-tactical px-8 py-4 rounded-lg text-lg font-bold neon-glow"
          >
            <span className="relative z-10">ACCESS FULL DOSSIER</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
