import React from 'react';
import { motion } from 'framer-motion';

const VeritasFooter = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    // Direct download of resume PDF
    const link = document.createElement('a');
    link.href = '/Thomas_Gaye_AI_Engineer_Resume.pdf';
    link.download = 'Thomas_Gaye_AI_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href = '#contact';
  };

  return (
    <footer className="relative bg-light-elevated dark:bg-dark-elevated border-t border-light-border dark:border-dark-border overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tactical-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-light-text-accent dark:via-dark-neon-blue to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-tactical font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              VERITAS AI LAB
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-4">
              Elite AI systems architect behind next-generation AGI solutions. Deploying intelligent systems that transform enterprise and government operations.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
                OPERATIONAL • READY TO DEPLOY
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-tactical font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {['#hero', '#skills', '#marketplace', '#contact'].map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-200"
                  >
                    {link.substring(1).toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-tactical font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
              DIRECT CHANNELS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:thomasg208@gmail.com"
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-200"
                >
                  📧 thomasg208@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12408052022"
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-200"
                >
                  📱 240-805-2022
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thomas-gaye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-200"
                >
                  💼 LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thomasg208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-200"
                >
                  ⚡ GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="border-t border-light-border dark:border-dark-border pt-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-tactical font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Resumes fade. Results don't. Engage now.
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              Systems architect behind transformative AI/AGI solutions. Production-ready. Enterprise-tested. Government-trusted.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="border-2 border-light-text-accent dark:border-dark-neon-blue text-light-text-accent dark:text-dark-neon-blue px-6 py-3 rounded-lg font-bold text-sm hover:bg-light-text-accent/10 dark:hover:bg-dark-neon-blue/10 transition-all duration-300"
              >
                Initiate Contact
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Copyright & Legal */}
        <div className="text-center pt-6 border-t border-light-border dark:border-dark-border">
          <p className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
            © {currentYear} VERITAS AI LAB • Thomas Gaye • All Systems Operational
          </p>
          <p className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary mt-2">
            Florida-based • Globally Deployable • Enterprise & Government Ready
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VeritasFooter;
