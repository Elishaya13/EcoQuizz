// src/components/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css'; // Importez le module CSS

function HeroSection({ title, subtitle }) {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <h2 id="hero-title" className={styles.heroTitle}>{title}</h2>
      <p className={styles.heroSubtitle}>{subtitle}</p>
    </section>
  );
}

export default HeroSection;
