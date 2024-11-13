import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import CaptivatingPrague from './components/CaptivatingPrague';
import RelaxSection from './components/RelaxSection';
import Footer from './components/Footer';
import './App.scss';

const Quiz = () => {
  return (
    <div className="App">
      <Header />
      <div className="app__content">
        <Sidebar />
        <div className="main-content">
          <HeroSection />
          <CaptivatingPrague />
          <RelaxSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;

