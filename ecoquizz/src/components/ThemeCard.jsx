// src/components/ThemeCard.jsx
import React from 'react';
import styles from './ThemeCard.module.css'; // Importez le module CSS

function ThemeCard({ theme, description, icon, onClick }) {
  return (
    <button
      className={styles.card}
      onClick={() => onClick(theme)}
      aria-label={`Commencer le quiz sur le thème ${theme}`}
    >
      <img src={icon} alt={`Icône pour le thème ${theme}`} className={styles.icon} loading="lazy" />
      <h3 className={styles.title}>{theme}</h3>
      <p className={styles.description}>{description}</p>
    </button>
  );
}

export default ThemeCard;
