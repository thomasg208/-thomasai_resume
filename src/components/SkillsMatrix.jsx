import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SkillsMatrix = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeCategory, setActiveCategory] = useState('AI');

  const skillCategories = {
    AI: {
      title: 'AI WARFARE SYSTEMS',
      icon: '🧠',
      color: 'dark-neon-blue',
      skills: [
        { name: 'Superintelligent ML Systems', level: 95, description: 'Combat-ready TensorFlow, PyTorch, Tactical Scikit-learn' },
        { name: 'Deep Warfare Networks', level: 90, description: 'Neural Warfare, CNNs, RNNs, Strategic Transformers' },
        { name: 'Intelligence Processing', level: 88, description: 'BERT, GPT-4, Tactical NLP, NLTK Operations' },
        { name: 'Battlefield Vision Systems', level: 85, description: 'OpenCV, YOLO Detection, Threat Classification' },
        { name: 'MLOps Command Infrastructure', level: 82, description: 'Docker, Kubernetes, MLflow, Airflow Deployment' },
        { name: 'Strategic Data Intelligence', level: 92, description: 'Pandas, NumPy, Combat Analytics, Seaborn' }
      ]
    },
    FULLSTACK: {
      title: 'DEFENSE INFRASTRUCTURE',
      icon: '⚡',
      color: 'dark-neon-purple',
      skills: [
        { name: 'Tactical React/Next.js', level: 95, description: 'Combat UI, Strategic Hooks, SSR Operations' },
        { name: 'Node.js Command Systems', level: 90, description: 'Secure APIs, GraphQL Warfare, Microservice Fleet' },
        { name: 'Python Defense Frameworks', level: 88, description: 'Django REST Ops, FastAPI Strike, Flask Tactical' },
        { name: 'Database Warfare Systems', level: 85, description: 'PostgreSQL Fortress, MongoDB Intel, Redis Cache' },
        { name: 'Cloud Combat Platforms', level: 87, description: 'AWS Command, GCP Operations, Azure Defense' },
        { name: 'DevOps Battle Systems', level: 83, description: 'CI/CD Pipeline, Docker Fleet, Terraform Deploy' }
      ]
    },
    STRATEGY: {
      title: 'STRATEGIC COMMAND',
      icon: '🎯',
      color: 'dark-neon-cyan',
      skills: [
        { name: 'Mission Command', level: 92, description: 'Agile Warfare, Scrum Ops, Strategic Leadership' },
        { name: 'System Warfare Architecture', level: 89, description: 'Microservice Fleet, Zero-Failure Scalability' },
        { name: 'Intelligence Documentation', level: 87, description: 'Classified Docs, API Warfare Specs, Tactical Briefs' },
        { name: 'Strike Team Leadership', level: 85, description: 'Elite Mentoring, Combat Reviews, Strategic Command' },
        { name: 'High-Value Target Relations', level: 90, description: 'Mission Requirements, Secure Comms, Precision Delivery' },
        { name: 'Naval Combat Precision', level: 98, description: 'Zero-Tolerance Discipline, DoD Standards, Flawless Execution' }
      ]
    }
  };

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-light-elevated dark:bg-dark-elevated relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-text-accent dark:via-dark-neon-blue to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-tactical font-black text-light-text-primary dark:text-dark-text-primary mb-4">
            WARFARE <span className="text-tactical">CAPABILITIES MATRIX</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            DoD-caliber proficiency in superintelligent AI systems, defense infrastructure, and strategic warfare operations.
            <span className="text-light-text-accent dark:text-dark-neon-blue"> Combat-ready technologies deployed with zero-failure precision.</span>
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 md:space-y-0"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-tactical font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-light-text-accent to-light-metallic-steel dark:from-dark-neon-blue dark:to-dark-neon-purple text-white shadow-lg shadow-light-subtle-blue/30 dark:shadow-dark-glow-blue/30'
                  : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-accent dark:hover:border-dark-neon-blue'
              }`}
            >
              <span className="mr-2">{skillCategories[category].icon}</span>
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Skills List */}
          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary tracking-wider">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-sm text-light-text-accent dark:text-dark-neon-blue">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="skill-bar h-3 mb-2 relative">
                  <motion.div
                    className="skill-bar-fill h-full rounded-lg relative overflow-hidden"
                    variants={skillBarVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-light-text-accent/20 to-light-metallic-steel/20 dark:from-dark-neon-blue/20 dark:to-dark-neon-purple/20" />
                </div>
                
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-mono">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Tactical Display */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="card-tactical rounded-xl p-8 h-full">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-2xl mr-4">
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                    STRIKECELL STATUS: WEAPONS HOT
                  </p>
                </div>
              </div>

              {/* Tactical Readout */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-light-border dark:border-dark-border">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    WARFARE PROFICIENCY
                  </span>
                  <span className="font-tactical font-bold text-light-text-accent dark:text-dark-neon-blue">
                    ELITE OPERATOR
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-light-border dark:border-dark-border">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    COMBAT READINESS
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-tactical font-bold text-green-500">
                      BATTLE READY
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    THREAT LEVEL
                  </span>
                  <span className="font-tactical font-bold text-light-text-accent dark:text-dark-neon-purple">
                    DEFCON 1
                  </span>
                </div>
              </div>

              {/* Tactical Visualization */}
              <div className="relative h-32 bg-light-base dark:bg-dark-base rounded-lg p-4 overflow-hidden">
                <div className="absolute inset-0 tactical-grid opacity-30" />
                
                {/* Animated radar sweep */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, rgba(0, 212, 255, 0.3) 45deg, transparent 90deg)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Center indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-light-text-accent dark:bg-dark-neon-blue rounded-full animate-pulse" />
                </div>
                
                {/* Skill indicators */}
                {skillCategories[activeCategory].skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="absolute w-2 h-2 bg-light-text-accent dark:bg-dark-neon-cyan rounded-full"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${30 + index * 20}%`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'WARFARE TECHNOLOGIES', value: '25+', icon: '⚙️' },
            { label: 'AI SYSTEMS DEPLOYED', value: '35+', icon: '🏆' },
            { label: 'OPERATIONAL YEARS', value: '8+', icon: '📅' },
            { label: 'MISSION SUCCESS', value: '100%', icon: '🎯' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center card-tactical rounded-lg p-4"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-tactical font-bold text-light-text-accent dark:text-dark-neon-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
