// src/components/RelaxSection.jsx
import React from 'react';
import '../styles/RelaxSection.scss';
import relax from '../assets/Relax.png';

const cardsData = [
  { id: 1, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax },
  { id: 2, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax },
  { id: 3, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax },
  { id: 4, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax },
  { id: 5, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax },
  { id: 6, title: "Unwind and Relax", subtitle: "Elevate Your Senses", image: relax }
];

const RelaxSection = () => {
  return (
    <section className="relax-section">
      <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelaxSection;
