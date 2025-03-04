import React from 'react';
import Header from './components/home/Header';
import './styles/style_home.css';
import HeroSection from './components/home/HeroSection';
import HowWeWork from './components/home/HowWeWork';
import Features from './components/home/Features';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
      </div>
      <HowWeWork />
      <Features />
    </>
  );
}

export default App;