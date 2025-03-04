import React from 'react';
import Header from './components/home/Header';
import './styles/style_home.css';
import HeroSection from './components/home/HeroSection';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
      </div>
  
    </>
  );
}

export default App;