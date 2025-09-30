// AIMarketplace.jsx - Elite AI Engineering Showcase & Interactive Marketplace
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AIMarketplace = () => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample AI projects showcasing elite engineering skills
  const aiProjects = [
    {
      id: 1,
      category: 'neural-networks',
      title: 'NeuroVision Pro',
      subtitle: 'Advanced Computer Vision AI',
      description: 'Revolutionary deep learning model that achieves 99.8% accuracy in real-time object detection and classification.',
      features: ['Real-time Processing', 'Edge Computing', 'Custom Neural Architecture'],
      tech: ['PyTorch', 'CUDA', 'TensorRT', 'OpenCV'],
      demoUrl: '/demos/neurovision-pro/index.html',
      codeUrl: 'https://github.com/strikecell/neurovision-pro',
      status: 'production',
      metrics: { accuracy: '99.8%', speed: '120fps', model_size: '23MB' },
      gradient: 'from-purple-500 via-blue-500 to-cyan-500'
    },
    {
      id: 2,
      category: 'nlp',
      title: 'ConversaGenius',
      subtitle: 'Next-Gen Conversational AI',
      description: 'Breakthrough LLM fine-tuned for enterprise communications with contextual understanding that rivals human-level reasoning.',
      features: ['Context Retention', 'Multimodal Input', 'Domain Adaptation'],
      tech: ['Transformers', 'Hugging Face', 'RLHF', 'LangChain'],
      demoUrl: '/demos/conversa-genius/index.html',
      codeUrl: 'https://github.com/strikecell/conversa-genius',
      status: 'beta',
      metrics: { parameters: '175B', latency: '89ms', satisfaction: '96%' },
      gradient: 'from-emerald-500 via-teal-500 to-blue-500'
    },
    {
      id: 3,
      category: 'automation',
      title: 'AutoFlow Intelligence',
      subtitle: 'Intelligent Process Automation',
      description: 'AI-powered workflow orchestration that learns and optimizes business processes in real-time, reducing operational costs by 70%.',
      features: ['Self-Learning', 'Process Mining', 'Predictive Scaling'],
      tech: ['Apache Airflow', 'MLflow', 'Kubernetes', 'FastAPI'],
      demoUrl: '/demos/autoflow-intelligence/index.html',
      codeUrl: 'https://github.com/strikecell/autoflow-intelligence',
      status: 'production',
      metrics: { efficiency: '+70%', uptime: '99.99%', savings: '$2.3M' },
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    },
    {
      id: 4,
      category: 'predictive',
      title: 'PredictaMax Engine',
      subtitle: 'Quantum-Enhanced Forecasting',
      description: 'Cutting-edge predictive analytics platform leveraging quantum computing principles for unprecedented forecasting accuracy.',
      features: ['Quantum Algorithms', 'Real-time Analytics', 'Multi-dimensional Modeling'],
      tech: ['Qiskit', 'NumPy', 'Scikit-learn', 'Apache Kafka'],
      demoUrl: '/demos/predictamax-engine/index.html',
      codeUrl: 'https://github.com/strikecell/predictamax-engine',
      status: 'research',
      metrics: { accuracy: '94.7%', horizon: '12 months', features: '500+' },
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      id: 5,
      category: 'robotics',
      title: 'RoboMind Framework',
      subtitle: 'Autonomous Robotics AI',
      description: 'Revolutionary robotics control system with advanced spatial reasoning and adaptive learning for complex environment navigation.',
      features: ['SLAM Technology', 'Reinforcement Learning', 'Real-time Decision Making'],
      tech: ['ROS2', 'PyBullet', 'OpenAI Gym', 'TensorFlow'],
      demoUrl: '/demos/robomind-framework/index.html',
      codeUrl: 'https://github.com/strikecell/robomind-framework',
      status: 'prototype',
      metrics: { precision: '98.5%', latency: '12ms', autonomy: '24hrs' },
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      id: 6,
      category: 'generative',
      title: 'CreativeAI Studio',
      subtitle: 'Multimodal Content Generation',
      description: 'State-of-the-art generative AI that creates stunning visuals, compelling copy, and immersive experiences from simple prompts.',
      features: ['Text-to-Image', 'Style Transfer', 'Interactive Design'],
      tech: ['Stable Diffusion', 'GPT-4', 'ControlNet', 'ComfyUI'],
      demoUrl: '/demos/creative-ai-studio/index.html',
      codeUrl: 'https://github.com/strikecell/creative-ai-studio',
      status: 'production',
      metrics: { generation_time: '2.3s', quality_score: '9.2/10', variants: '1000+' },
      gradient: 'from-pink-500 via-purple-500 to-indigo-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL SYSTEMS', icon: '🔥' },
    { id: 'neural-networks', name: 'NEURAL NETS', icon: '🧠' },
    { id: 'nlp', name: 'NLP ENGINES', icon: '💬' },
    { id: 'automation', name: 'AUTOMATION', icon: '⚡' },
    { id: 'predictive', name: 'PREDICTIVE', icon: '🔮' },
    { id: 'robotics', name: 'ROBOTICS', icon: '🤖' },
    { id: 'generative', name: 'GENERATIVE', icon: '🎨' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? aiProjects 
    : aiProjects.filter(project => project.category === activeFilter);

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case 'production': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'beta': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'prototype': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'research': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  // Handle demo button click
  const handleDemoClick = (e, demoUrl) => {
    e.stopPropagation();
    window.open(demoUrl, '_blank');
  };

  // Handle code button click
  const handleCodeClick = (e, codeUrl) => {
    e.stopPropagation();
    window.open(codeUrl, '_blank');
  };

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
            AI MARKETPLACE
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            Witness the future of AI engineering through cutting-edge solutions that push the boundaries of what's possible. 
            <span className="text-blue-400 font-semibold"> Each project represents breakthrough innovation</span> and 
            <span className="text-purple-400 font-semibold"> elite technical mastery.</span>
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

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg shadow-blue-500/25'
                  : 'bg-light-surface/50 dark:bg-dark-surface/50 text-light-text-secondary dark:text-dark-text-secondary border-light-border dark:border-dark-border hover:border-blue-500/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-lg rounded-2xl border border-light-border dark:border-dark-border overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-mono border ${getStatusColor(project.status)}`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-light-surface dark:bg-dark-surface text-xs rounded border border-light-border dark:border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.metrics).slice(0, 3).map(([key, value], i) => (
                      <div key={i} className="p-2 bg-light-base dark:bg-dark-base rounded-lg">
                        <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary capitalize">
                          {key.replace('_', ' ')}
                        </div>
                        <div className="text-sm font-bold text-blue-400">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleDemoClick(e, project.demoUrl)}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleCodeClick(e, project.codeUrl)}
                      className="px-4 py-2 border border-light-border dark:border-dark-border rounded-lg text-sm transition-all duration-300 hover:border-blue-500/50"
                    >
                      Code
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Revolutionize Your Business?
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            These aren't just demos—they're production-ready solutions that have transformed industries. 
            Let's build the future together with AI that delivers real results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            Start Your AI Transformation
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-light-surface dark:bg-dark-surface rounded-2xl border border-light-border dark:border-dark-border max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <p className="text-lg opacity-90">{selectedProject.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                  {selectedProject.description}
                </p>
                
                {/* Detailed metrics and features would go here */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value], i) => (
                    <div key={i} className="p-3 bg-light-base dark:bg-dark-base rounded-lg">
                      <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary capitalize">
                        {key.replace('_', ' ')}
                      </div>
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleDemoClick(e, selectedProject.demoUrl)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    View Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleCodeClick(e, selectedProject.codeUrl)}
                    className="flex-1 border border-light-border dark:border-dark-border py-3 px-6 rounded-lg transition-all duration-300 hover:border-blue-500/50"
                  >
                    View Source Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIMarketplace;
