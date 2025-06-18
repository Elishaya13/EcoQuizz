// // src/components/ThemeSelection.jsx
// import React from 'react';
// import ThemeCard from './ThemeCard';
// import styles from './ThemeSelection.module.css'; // Importez le module CSS

// const themes = [
//   {
//     name: "Climat & Énergie",
//     description: "Comprenez le changement climatique et les énergies de demain.",
//     icon: "/icons/climate-energy.png",
//     id: "climate-energy"
//   },
//   {
//     name: "Biodiversité",
//     description: "Découvrez la richesse du vivant et comment la protéger.",
//     icon: "/icons/biodiversity.png",
//     id: "biodiversity"
//   },
//   {
//     name: "Déchets & Recyclage",
//     description: "Apprenez à réduire votre empreinte et à mieux recycler.",
//     icon: "/icons/waste-recycling.png",
//     id: "waste-recycling"
//   },
//   {
//     name: "Eau & Ressources",
//     description: "Explorez l'importance de l'eau et la gestion des ressources naturelles.",
//     icon: "/icons/water-resources.png",
//     id: "water-resources"
//   },
// ];

// function ThemeSelection({ onThemeSelect }) {
//   return (
//     <section className={styles.themeSelection} aria-labelledby="theme-selection-title">
//       <h2 id="theme-selection-title" className="visually-hidden">Choisissez votre thème</h2>
//       <div className={styles.themeCardsContainer}>
//         {themes.map((theme) => (
//           <ThemeCard
//             key={theme.id}
//             theme={theme.name}
//             description={theme.description}
//             icon={theme.icon}
//             onClick={() => onThemeSelect(theme.id)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ThemeSelection;
// src/components/ThemeSelection.jsx
import React from 'react';
import ThemeCard from './ThemeCard';
import styles from './ThemeSelection.module.css'; // Importez le module CSS

// Définissez vos thèmes ici. Les icônes seraient des chemins vers vos fichiers png/WebP optimisés.
const themes = [
  {
    name: "Climat & Énergie",
    description: "Comprenez le changement climatique et les énergies de demain.",
    icon: "/icons/climate-energy.png", // Assurez-vous d'avoir cette icône
    id: "climate-energy"
  },
  {
    name: "Biodiversité",
    description: "Découvrez la richesse du vivant et comment la protéger.",
    icon: "/icons/biodiversity.png", // Assurez-vous d'avoir cette icône
    id: "biodiversity"
  },
  {
    name: "Déchets & Recyclage",
    description: "Apprenez à réduire votre empreinte et à mieux recycler.",
    icon: "/icons/waste-recycling.png", // Assurez-vous d'avoir cette icône
    id: "waste-recycling"
  },
  {
    name: "Eau & Ressources",
    description: "Explorez l'importance de l'eau et la gestion des ressources naturelles.",
    icon: "/icons/water-ressources.png", // Assurez-vous d'avoir cette icône
    id: "water-resources"
  },
  {
    name: "Empreinte IA", // Nouveau thème
    description: "Découvrez l'impact environnemental de l'intelligence artificielle et comment le réduire.",
    icon: "/icons/ai-impact.png", // Vous devrez créer ou trouver une icône pour ce thème
    id: "ai-impact"
  },
];

function ThemeSelection({ onThemeSelect }) {
  return (
    <section className={styles.themeSelection} aria-labelledby="theme-selection-title">
      <h2 id="theme-selection-title" className="visually-hidden">Choisissez votre thème</h2>
      <div className={styles.themeCardsContainer}>
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
