// App.jsx - Command Center Main Frame
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import HeroModule from './components/HeroModule';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceCarousel from './components/ExperienceCarousel';
import CaseStudyArsenal from './components/CaseStudyArsenal';
import AIMarketplace from './components/AIMarketplace';
import ContactModule from './components/ContactModule';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-light-base dark:bg-dark-base transition-all duration-500">
          <Navigation />
          <main>
            <HeroModule />
            <SkillsMatrix />
            <ExperienceCarousel />
            <CaseStudyArsenal />
            <AIMarketplace />
            <ContactModule />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
