// src/components/ThemeSelection.jsx
import React from 'react';
import ThemeCard from './ThemeCard';

// Définissez vos thèmes ici. Les icônes seraient des chemins vers vos fichiers SVG/WebP optimisés.
const themes = [
  {
    name: "Climat & Énergie",
    description: "Comprenez le changement climatique et les énergies de demain.",
    icon: "/icons/climate-energy.svg",
    id: "climate-energy"
  },
  {
    name: "Biodiversité",
    description: "Découvrez la richesse du vivant et comment la protéger.",
    icon: "/icons/biodiversity.svg",
    id: "biodiversity"
  },
  {
    name: "Déchets & Recyclage",
    description: "Apprenez à réduire votre empreinte et à mieux recycler.",
    icon: "/icons/waste-recycling.svg",
    id: "waste-recycling"
  },
  {
    name: "Eau & Ressources",
    description: "Explorez l'importance de l'eau et la gestion des ressources naturelles.",
    icon: "/icons/water-resources.svg",
    id: "water-resources"
  },
];

function ThemeSelection({ onThemeSelect }) {
  return (
    <section className="theme-selection" aria-labelledby="theme-selection-title">
      <h2 id="theme-selection-title" className="visually-hidden">Choisissez votre thème</h2> {/* Hidden for visual, but accessible for screen readers */}
      <div className="theme-cards-container">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.id}
            theme={theme.name}
            description={theme.description}
            icon={theme.icon}
            onClick={() => onThemeSelect(theme.id)} // Passe l'ID du thème au parent
          />
        ))}
      </div>
    </section>
  );
}

export default ThemeSelection;
