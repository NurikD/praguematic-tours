// src/components/CaptivatingPrague.jsx
import React from 'react';
import '../styles/CaptivatingPrague.scss';
import most from '../assets/KarlovMost.png';

const CaptivatingPrague = () => {
  return (
    <section className="captivating-prague">
      <div className="content">
        <h2>Captivating Prague</h2>
        <p>
          Discover the timeless charm of Karlův Most, a beloved Prague landmark that has witnessed the city's
          evolution over the centuries.
        </p>
        <p>
          Experience the charm of Karlův Most, a beloved Prague landmark that has stood the test of time,
          connecting the city's past and present with its stunning architecture and rich history. Explore the
          bridge's intricate details, marvel at the panoramic views, and immerse yourself in the vibrant culture
          that thrives along its banks.
        </p>
      </div>
      <div className="image-card">
        <img src={most} alt="Karlův Most" />
      </div>
    </section>
  );
};

export default CaptivatingPrague;
