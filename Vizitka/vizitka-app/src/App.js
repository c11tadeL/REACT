import React from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';


const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default App;