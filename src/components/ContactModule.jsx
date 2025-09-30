import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ContactModule = () => {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
    clearanceLevel: 'standard'
  });
  
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionComplete, setTransmissionComplete] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    // Simulate transmission delay
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionComplete(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setTransmissionComplete(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          project: '',
          message: '',
          clearanceLevel: 'standard'
        });
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      name: 'SECURE EMAIL',
      value: 'thomasg208@gmail.com',
      icon: '📧',
      action: () => window.open('mailto:thomasg208@gmail.com?subject=Mission Briefing Request'),
      status: 'ACTIVE'
    },
    {
      name: 'LINKEDIN TACTICAL',
      value: '/in/thomas-gaye',
      icon: '💼',
      action: () => window.open('https://linkedin.com/in/thomas-gaye', '_blank'),
      status: 'OPERATIONAL'
    },
    {
      name: 'GITHUB ARSENAL',
      value: '/thomas-gaye',
      icon: '⚡',
      action: () => window.open('https://github.com/thomas-gaye', '_blank'),
      status: 'DEPLOYED'
    },
    {
      name: 'DIRECT COMM',
      value: '240-805-2022',
      icon: '📱',
      action: () => window.open('tel:+12408052022'),
      status: 'STANDBY'
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
    <section id="contact" className="py-20 bg-light-base dark:bg-dark-base relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-text-accent dark:via-dark-neon-cyan to-transparent" />
      
      {/* Animated Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-light-text-accent/30 dark:via-dark-neon-cyan/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: ['-100px', '100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-tactical font-black text-light-text-primary dark:text-dark-text-primary mb-4">
            ESTABLISH <span className="text-tactical">CONTACT</span>
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Initiate secure communication protocols for mission-critical projects.
            <span className="text-light-text-accent dark:text-dark-neon-cyan"> All transmissions encrypted and verified.</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="card-tactical rounded-xl p-8">
              {/* Form Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-neon flex items-center justify-center text-2xl mr-4">
                  📡
                </div>
                <div>
                  <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary">
                    SECURE TRANSMISSION
                  </h3>
                  <p className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                    ENCRYPTION: AES-256 | STATUS: READY
                  </p>
                </div>
              </div>

              {/* Transmission Status */}
              <div className="mb-6 p-4 bg-light-elevated dark:bg-dark-elevated rounded-lg border border-light-border dark:border-dark-border">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    TRANSMISSION STATUS:
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      transmissionComplete ? 'bg-green-500' : 
                      isTransmitting ? 'bg-yellow-500 animate-pulse' : 
                      'bg-blue-500'
                    }`} />
                    <span className="font-tactical font-bold text-sm text-light-text-accent dark:text-dark-neon-cyan">
                      {transmissionComplete ? 'DELIVERED' : 
                       isTransmitting ? 'TRANSMITTING...' : 
                       'READY TO SEND'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                      OPERATIVE NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-tactical w-full px-4 py-3 rounded-lg"
                      placeholder="Enter your designation"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                      SECURE CHANNEL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-tactical w-full px-4 py-3 rounded-lg"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-tactical w-full px-4 py-3 rounded-lg"
                      placeholder="Your organization"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                      CLEARANCE LEVEL
                    </label>
                    <select
                      name="clearanceLevel"
                      value={formData.clearanceLevel}
                      onChange={handleInputChange}
                      className="input-tactical w-full px-4 py-3 rounded-lg"
                    >
                      <option value="standard">STANDARD</option>
                      <option value="priority">PRIORITY</option>
                      <option value="urgent">URGENT</option>
                      <option value="classified">CLASSIFIED</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                    PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="input-tactical w-full px-4 py-3 rounded-lg"
                    placeholder="AI Development, Full Stack, Consulting, etc."
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary mb-2 tracking-wider">
                    MISSION BRIEFING *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-tactical w-full px-4 py-3 rounded-lg resize-none"
                    placeholder="Describe your project requirements, timeline, and objectives..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isTransmitting || transmissionComplete}
                  whileHover={{ scale: isTransmitting ? 1 : 1.05, y: isTransmitting ? 0 : -2 }}
                  whileTap={{ scale: isTransmitting ? 1 : 0.95 }}
                  className={`w-full btn-tactical px-8 py-4 rounded-lg text-lg font-bold neon-glow ${
                    isTransmitting || transmissionComplete ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="relative z-10">
                    {transmissionComplete ? '✓ TRANSMISSION COMPLETE' :
                     isTransmitting ? 'TRANSMITTING DATA...' :
                     'INITIATE TRANSMISSION'}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Direct Contact Methods */}
            <div className="card-tactical rounded-xl p-8">
              <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary mb-6">
                DIRECT CHANNELS
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={method.name}
                    onClick={method.action}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-4 bg-light-elevated dark:bg-dark-elevated border border-light-border dark:border-dark-border rounded-lg hover:border-light-text-accent dark:hover:border-dark-neon-cyan transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{method.icon}</div>
                        <div>
                          <h4 className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary">
                            {method.name}
                          </h4>
                          <p className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                            {method.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          method.status === 'ACTIVE' ? 'bg-green-500' :
                          method.status === 'OPERATIONAL' ? 'bg-blue-500' :
                          method.status === 'DEPLOYED' ? 'bg-purple-500' :
                          'bg-yellow-500'
                        } animate-pulse`} />
                        <span className="font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary">
                          {method.status}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="card-tactical rounded-xl p-8">
              <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary mb-6">
                RESPONSE PROTOCOLS
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-light-border dark:border-dark-border">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    STANDARD INQUIRIES
                  </span>
                  <span className="font-tactical font-bold text-light-text-accent dark:text-dark-neon-blue">
                    24 HOURS
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-light-border dark:border-dark-border">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    PRIORITY MISSIONS
                  </span>
                  <span className="font-tactical font-bold text-light-text-accent dark:text-dark-neon-purple">
                    4 HOURS
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    URGENT OPERATIONS
                  </span>
                  <span className="font-tactical font-bold text-light-text-accent dark:text-dark-neon-cyan">
                    1 HOUR
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card-tactical rounded-xl p-8">
              <h3 className="font-tactical font-bold text-xl text-light-text-primary dark:text-dark-text-primary mb-4">
                OPERATIONAL BASE
              </h3>
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🌍</div>
                <div>
                  <p className="font-tactical font-semibold text-light-text-primary dark:text-dark-text-primary">
                    GLOBAL DEPLOYMENT
                  </p>
                  <p className="text-sm font-mono text-light-text-secondary dark:text-dark-text-secondary">
                    Remote Operations • Worldwide Coverage
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactModule;
