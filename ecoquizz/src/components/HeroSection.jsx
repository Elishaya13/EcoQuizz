// src/components/HeroSection.jsx
import React from 'react';

function HeroSection({ title, subtitle }) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <h2 id="hero-title" className="hero-title">{title}</h2>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  );
}

// C'est cette ligne qui est cruciale !
export default HeroSection;
