import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SkillsMatrix = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const capabilities = [
    {
      category: 'Machine Learning',
      proficiency: 95,
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Keras']
    },
    {
      category: 'Natural Language Processing',
      proficiency: 92,
      tools: ['GPT-4', 'BERT', 'Hugging Face', 'spaCy', 'NLTK']
    },
    {
      category: 'Generative AI',
      proficiency: 90,
      tools: ['OpenAI API', 'Stable Diffusion', 'LangChain', 'DALL-E', 'Claude']
    },
    {
      category: 'MLOps & Infrastructure',
      proficiency: 88,
      tools: ['Docker', 'Kubernetes', 'MLflow', 'Airflow', 'Kubeflow']
    },
    {
      category: 'Computer Vision',
      proficiency: 85,
      tools: ['OpenCV', 'YOLO', 'ResNet', 'Detectron2', 'Pillow']
    },
    {
      category: 'Cloud & DevOps',
      proficiency: 87,
      tools: ['AWS', 'GCP', 'Azure', 'Terraform', 'CI/CD']
    },
    {
      category: 'Full-Stack Development',
      proficiency: 93,
      tools: ['React', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL']
    },
    {
      category: 'Data Engineering',
      proficiency: 89,
      tools: ['Pandas', 'NumPy', 'Spark', 'Airflow', 'dbt']
    }
  ];

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
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
            AI/AGI <span className="text-tactical">CAPABILITIES MATRIX</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Elite-level proficiency across AI/AGI systems, infrastructure automation, and full-stack intelligent deployment.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border border-light-border dark:border-dark-border rounded-lg">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border">
                <div className="px-6 py-4 text-left">
                  <span className="text-sm font-tactical font-bold text-light-text-primary dark:text-dark-text-primary tracking-wider">
                    SYSTEM CATEGORY
                  </span>
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="text-sm font-tactical font-bold text-light-text-primary dark:text-dark-text-primary tracking-wider">
                    PROFICIENCY
                  </span>
                </div>
                <div className="px-6 py-4 text-left">
                  <span className="text-sm font-tactical font-bold text-light-text-primary dark:text-dark-text-primary tracking-wider">
                    TOOL STACK
                  </span>
                </div>
              </div>

              {/* Table Body */}
              <div className="bg-light-base dark:bg-dark-base divide-y divide-light-border dark:divide-dark-border">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.category}
                    custom={index}
                    variants={rowVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-3 hover:bg-light-elevated dark:hover:bg-dark-elevated transition-colors duration-200"
                  >
                    {/* Category */}
                    <div className="px-6 py-4 flex items-center">
                      <span className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary">
                        {capability.category}
                      </span>
                    </div>

                    {/* Proficiency */}
                    <div className="px-6 py-4 flex items-center justify-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-light-surface dark:bg-dark-surface rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-light-text-accent to-light-metallic-steel dark:from-dark-neon-blue dark:to-dark-neon-cyan rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${capability.proficiency}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          />
                        </div>
                        <span className="font-mono text-sm font-bold text-light-text-accent dark:text-dark-neon-blue">
                          {capability.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="px-6 py-4 flex items-center">
                      <div className="flex flex-wrap gap-2">
                        {capability.tools.map((tool) => (
                          <motion.span
                            key={tool}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative px-3 py-1 text-xs font-mono bg-light-elevated dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:border-light-text-accent dark:hover:border-dark-neon-blue hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-all duration-200 cursor-default"
                            title={tool}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'AI/AGI FRAMEWORKS', value: '25+', icon: '⚙️' },
            { label: 'SYSTEMS DEPLOYED', value: '35+', icon: '🏆' },
            { label: 'ENTERPRISE CLIENTS', value: '50+', icon: '🏢' },
            { label: 'UPTIME GUARANTEE', value: '99.9%', icon: '🎯' }
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
