// src/components/ThemeCard.jsx
import React from 'react';

function ThemeCard({ theme, description, icon, onClick }) {
  return (
    <button
      className="theme-card"
      onClick={() => onClick(theme)}
      aria-label={`Commencer le quiz sur le thème ${theme}`}
    >
      <img src={icon} alt={`Icône pour le thème ${theme}`} className="theme-icon" loading="lazy" /> {/* Lazy loading */}
      <h3 className="theme-title">{theme}</h3>
      <p className="theme-description">{description}</p>
    </button>
  );
}

export default ThemeCard;
