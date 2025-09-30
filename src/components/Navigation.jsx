import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'MISSION', href: '#hero' },
    { name: 'ARSENAL', href: '#skills' },
    { name: 'INTEL', href: '#experience' },
    { name: 'DOSSIER', href: '#projects' },
    { name: 'MARKETPLACE', href: '#marketplace' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-tactical border-b border-light-border dark:border-dark-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <span className="text-white font-tactical font-bold text-sm">TG</span>
            </div>
            <span className="text-tactical text-xl font-bold">STRIKECELL</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="relative font-tactical text-sm tracking-wider text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-accent dark:hover:text-dark-neon-blue transition-colors duration-300 group"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-neon"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Switch */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-16 h-8 rounded-full border-2 transition-all duration-500 ${
                  isDark 
                    ? 'bg-dark-surface border-dark-neon-blue shadow-lg shadow-dark-glow-blue/30' 
                    : 'bg-light-surface border-light-text-accent shadow-lg shadow-light-subtle-blue/30'
                }`}
              >
                <motion.div
                  layout
                  className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-500 ${
                    isDark 
                      ? 'left-0.5 bg-gradient-to-r from-dark-neon-blue to-dark-neon-purple shadow-lg shadow-dark-glow-blue/50' 
                      : 'left-8 bg-gradient-to-r from-light-text-accent to-light-metallic-steel shadow-lg shadow-light-subtle-blue/50'
                  }`}
                >
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isDark ? (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-xs"
                        >
                          🌙
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white text-xs"
                        >
                          ☀️
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                {/* Tactical indicators */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-dark-neon-cyan dark:bg-dark-neon-pink rounded-full animate-pulse" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-dark-neon-purple dark:bg-dark-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.button>
              
              {/* Toggle label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary"
              >
                {isDark ? 'DARK' : 'LIGHT'}
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden w-10 h-10 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
                <div className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
                <div className="w-full h-0.5 bg-light-text-primary dark:bg-dark-text-primary rounded-full" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tactical scan line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-dark-neon-blue to-transparent w-full"
      />
    </motion.nav>
  );
};

export default Navigation;
