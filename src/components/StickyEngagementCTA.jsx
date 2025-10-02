import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyEngagementCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Direct download of resume PDF
    const link = document.createElement('a');
    link.href = '/Thomas_Gaye_AI_Engineer_Resume.pdf';
    link.download = 'Thomas_Gaye_AI_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-[2px] rounded-2xl shadow-2xl">
            <div className="bg-light-surface dark:bg-dark-surface rounded-2xl p-6 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-tactical font-bold text-light-text-primary dark:text-dark-text-primary">
                  Initiate Engagement
                </h3>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary"
                >
                  ✕
                </button>
              </div>

              {/* Subheader */}
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-6">
                Available for hire, contract AI builds, or strategic collaboration. 
                <span className="text-light-text-accent dark:text-dark-neon-blue font-semibold"> Tactical readiness. Professional autonomy.</span>
              </p>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 mb-4 p-3 bg-light-elevated dark:bg-dark-elevated rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary">
                  AVAILABLE • IMMEDIATE DEPLOYMENT
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadResume}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  📄 Download Resume
                </motion.button>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center border-2 border-light-text-accent dark:border-dark-neon-blue text-light-text-accent dark:text-dark-neon-blue py-3 px-6 rounded-lg font-bold text-sm hover:bg-light-text-accent/10 dark:hover:bg-dark-neon-blue/10 transition-all duration-300"
                >
                  💬 Direct Contact
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyEngagementCTA;
