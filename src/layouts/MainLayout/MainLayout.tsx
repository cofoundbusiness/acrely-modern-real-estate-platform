import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AcrelyAIChat, Snowfall, SettingsModal } from '../../features';
import { PropertyDetailModal } from '../../components/property';
import { useTheme } from '../../context/ThemeContext';
import { useModal } from '../../context/ModalContext';
import { INITIAL_PROPERTIES, INITIAL_AGENTS } from '../../utils';

export const MainLayout: React.FC = () => {
  const { isSnowEnabled, isSettingsOpen, setSettingsOpen, isDarkMode, toggleDarkMode, toggleSnow } = useTheme();
  const { selectedProperty, setSelectedProperty } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Hide footer on dashboard-like pages if needed, specifically Invest for full immersion
  const isInvestPage = location.pathname === '/invest';

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-x-hidden flex flex-col relative transition-colors duration-300">
      {isSnowEnabled && <Snowfall />}
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setSettingsOpen(false)} 
        isSnowEnabled={isSnowEnabled}
        toggleSnow={toggleSnow}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Navbar scrolled={scrolled} onOpenSettings={() => setSettingsOpen(true)} />

      <main className="flex-grow">
        <Outlet />
      </main>

      {!isInvestPage && <Footer />}

      <AcrelyAIChat properties={INITIAL_PROPERTIES} agents={INITIAL_AGENTS} />

      {selectedProperty && (
        <PropertyDetailModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
};