// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-section__title">
        Welcome to Karlův<br /> Most Praha
      </h1>
      <p className="hero-section__description">
        Explore the rich history and stunning<br /> architecture of the iconic Karlův Most, a<br /> beloved landmark in the heart of Prague.
      </p>
      <button className="hero-section__button">Learn More</button>
    </section>
  );
};

export default HeroSection;
