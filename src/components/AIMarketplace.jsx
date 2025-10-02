// AIMarketplace.jsx - Elite AI Engineering Showcase & Interactive Marketplace
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AIMarketplace = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // AI systems portfolio - recruiter-optimized intel cards
  const aiProjects = [
    {
      id: 1,
      title: 'Enterprise NLP Engine',
      descriptor: 'Production-grade natural language processing system for financial document analysis',
      result: '99.2% accuracy in contract clause extraction',
      tech: ['GPT-4', 'Hugging Face', 'FastAPI', 'PostgreSQL', 'Docker'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      id: 2,
      title: 'AutoML Pipeline Platform',
      descriptor: 'End-to-end automated machine learning infrastructure for rapid model deployment',
      result: '70% reduction in model development time',
      tech: ['PyTorch', 'MLflow', 'Kubernetes', 'Apache Airflow', 'Redis'],
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      id: 3,
      title: 'Real-Time Vision System',
      descriptor: 'Computer vision AI for quality control in manufacturing environments',
      result: '99.8% defect detection accuracy at 120 FPS',
      tech: ['TensorFlow', 'OpenCV', 'CUDA', 'TensorRT', 'gRPC'],
      gradient: 'from-emerald-500 via-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Predictive Analytics Engine',
      descriptor: 'Advanced forecasting system for supply chain optimization and demand prediction',
      result: '94.5% forecast accuracy, $2.1M cost savings',
      tech: ['Scikit-learn', 'XGBoost', 'Apache Spark', 'Kafka', 'Grafana'],
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    },
    {
      id: 5,
      title: 'Conversational AI Assistant',
      descriptor: 'Multi-turn dialogue system with context awareness for customer support automation',
      result: '85% resolution rate, 96% user satisfaction',
      tech: ['LangChain', 'OpenAI API', 'Pinecone', 'FastAPI', 'React'],
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      id: 6,
      title: 'Intelligent Process Automation',
      descriptor: 'AI-driven workflow orchestration for enterprise document processing',
      result: '80% efficiency boost, 40 hours saved weekly',
      tech: ['Python', 'Celery', 'RabbitMQ', 'MongoDB', 'Kubernetes'],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
    }
  ];


  return (
    <section id="marketplace" className="relative min-h-screen py-20 bg-light-base dark:bg-dark-base overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-mono text-blue-400 uppercase tracking-wider">Elite AI Engineering</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI SYSTEMS PORTFOLIO
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            Production-deployed AI/AGI systems delivering measurable business impact across enterprise and government sectors.
            <span className="text-blue-400 font-semibold"> Recruiter-ready portfolio</span> showcasing 
            <span className="text-purple-400 font-semibold"> technical depth and deployment results.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg px-4 py-2">
              <span className="text-green-400 font-mono text-sm">99.8% Accuracy</span>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
              <span className="text-blue-400 font-mono text-sm">120+ FPS</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg px-4 py-2">
              <span className="text-purple-400 font-mono text-sm">Real-time Processing</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Demo Intel Cards Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-lg rounded-2xl border border-light-border dark:border-dark-border overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-24 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Descriptor */}
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 leading-relaxed">
                  {project.descriptor}
                </p>

                {/* Result Metric */}
                <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
                  <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-1">
                    DEPLOYMENT RESULT
                  </div>
                  <div className="text-sm font-bold text-green-400">
                    {project.result}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-2">
                  <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 font-mono uppercase tracking-wider">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-light-elevated dark:bg-dark-base text-xs font-mono rounded border border-light-border dark:border-dark-border text-light-text-primary dark:text-dark-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* AI Mission Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            2024-2025 AI Role Alignment
          </h2>
          
          <div className="max-w-4xl mx-auto bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-lg rounded-2xl border border-light-border dark:border-dark-border p-8">
            <div className="space-y-4">
              {[
                {
                  role: 'Senior AI/ML Engineer',
                  alignment: 'Direct match: Production NLP, Computer Vision, and MLOps systems with 99%+ accuracy benchmarks'
                },
                {
                  role: 'AI Solutions Architect',
                  alignment: 'Proven track record: End-to-end AI infrastructure design from concept to enterprise deployment'
                },
                {
                  role: 'LLM/Generative AI Specialist',
                  alignment: 'Expertise in GPT-4, LangChain, and fine-tuning models for domain-specific applications'
                },
                {
                  role: 'ML Infrastructure Engineer',
                  alignment: 'Strong foundation: Kubernetes, Docker, MLflow orchestration with 99.9% uptime delivery'
                },
                {
                  role: 'AI Product Manager (Technical)',
                  alignment: 'Business impact focus: $2M+ cost savings and 70%+ efficiency improvements documented'
                },
                {
                  role: 'Full-Stack AI Developer',
                  alignment: 'Complete stack mastery: React, Node.js, Python, with integrated AI/AGI capabilities'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-blue-500 pl-4 py-2 hover:border-purple-500 transition-colors duration-300"
                >
                  <h3 className="font-tactical font-bold text-lg text-light-text-primary dark:text-dark-text-primary mb-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {item.alignment}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Deploy Enterprise AI?
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            Production-tested systems delivering measurable ROI. Let's discuss how these AI capabilities can transform your operations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            Initiate Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMarketplace;
