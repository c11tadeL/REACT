import React from 'react';
import Header from './components/home/Header';
import './styles/style_home.css';
import HeroSection from './components/home/HeroSection';
import HowWeWork from './components/home/HowWeWork';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import Faq from './components/home/Faq';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <HeroSection />
      </div>
      <HowWeWork />
      <Features />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;