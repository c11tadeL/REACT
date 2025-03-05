import React, { useState } from 'react';
import Header from './components/home/Header';
import Footer from './components/home/Footer';

import HeroSection from './components/home/HeroSection';
import HowWeWork from './components/home/HowWeWork';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import Faq from './components/home/Faq';
import Contact from './components/home/Contact';

import AboutHero from './components/about/AboutHero';
import WhoWeAre from './components/about/WhoWeAre';
import ProcessFollow from './components/about/ProcessFollow';
import MissionVision from './components/about/MissionVision';
import Benefits from './components/about/Benefits';
import Team from './components/about/Team';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='wrapper'>
        <Header 
          activeLink={currentPage} 
          onNavigate={navigateTo} 
        />
      </div>
      
      {currentPage == 'home' && (
        <>
          <div className="wrapper">
            <HeroSection />
          </div>
          <HowWeWork />
          <Features />
          <Testimonials />
          <Faq />
          <Contact />
        </>
      )}

      {currentPage == 'about' && (
        <>
          <AboutHero />
          <WhoWeAre />
          <ProcessFollow />
          <MissionVision />
          <Benefits />
          <Team />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
