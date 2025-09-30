import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const HeroModule = () => {
  const { isDark } = useTheme();
  const controls = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-base via-light-elevated to-light-surface dark:from-dark-base dark:via-dark-surface dark:to-dark-elevated">
        {/* Tactical Grid */}
        <div className="absolute inset-0 tactical-grid opacity-30" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-light-text-accent dark:bg-dark-neon-blue rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Scanning Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-neon-cyan to-transparent"
          animate={{
            y: [0, window.innerHeight, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-dark-neon-purple to-transparent"
          animate={{
            x: [0, window.innerWidth, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Status Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-tactical border border-light-border dark:border-dark-border">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-light-text-secondary dark:text-dark-text-secondary tracking-wider">
              STRIKECELL OPERATIONAL • SUPERINTELLIGENCE SYSTEMS ACTIVE
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-tactical font-black tracking-tighter">
            <motion.span
              variants={glitchVariants}
              className="block text-light-text-primary dark:text-dark-text-primary"
              data-text="THOMAS"
            >
              THOMAS
            </motion.span>
            <motion.span
              variants={glitchVariants}
              className="block text-tactical glitch"
              data-text="GAYE"
            >
              GAYE
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-lg md:text-xl font-tactical tracking-wider">
            <span className="text-light-text-accent dark:text-dark-neon-blue">AI WARFARE ARCHITECT</span>
            <div className="hidden md:block w-px h-6 bg-light-border dark:bg-dark-border" />
            <span className="text-light-text-accent dark:text-dark-neon-purple">NAVAL INTELLIGENCE VETERAN</span>
            <div className="hidden md:block w-px h-6 bg-light-border dark:bg-dark-border" />
            <span className="text-light-text-accent dark:text-dark-neon-cyan">DEFENSE INFRASTRUCTURE ENGINEER</span>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary max-w-4xl mx-auto leading-relaxed">
            Architecting superintelligent AI systems and defense-grade infrastructure with DoD-caliber precision. 
            <span className="text-tactical"> Commanding the future of autonomous warfare and strategic AI deployment.</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-tactical px-8 py-4 rounded-lg text-lg font-bold neon-glow"
          >
            <span className="relative z-10">INITIATE ENGAGEMENT</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg text-lg font-tactical font-semibold tracking-wider border-2 border-light-text-accent dark:border-dark-neon-blue text-light-text-accent dark:text-dark-neon-blue hover:bg-light-text-accent/10 dark:hover:bg-dark-neon-blue/10 transition-all duration-300"
          >
            ACCESS COMMAND CENTER
          </motion.button>
        </motion.div>

        {/* Tactical Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'AI SYSTEMS DEPLOYED', value: '35+', color: 'text-dark-neon-blue' },
            { label: 'OPERATIONAL YEARS', value: '8+', color: 'text-dark-neon-purple' },
            { label: 'WARFARE TECHNOLOGIES', value: '25+', color: 'text-dark-neon-cyan' },
            { label: 'MISSION SUCCESS RATE', value: '100%', color: 'text-dark-neon-pink' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-tactical font-bold ${stat.color} mb-2`}>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 + index * 0.2, duration: 0.5 }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <div className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary tracking-wider">
            PROCEED TO INTELLIGENCE BRIEFING
          </span>
          <div className="w-6 h-10 border-2 border-light-text-accent dark:border-dark-neon-blue rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-light-text-accent dark:bg-dark-neon-blue rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroModule;
