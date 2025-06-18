// // src/components/ScoreDisplay.jsx
// import React from 'react';

// function ScoreDisplay({ score, theme }) {
//   return (
//     <section className="score-display">
//       <h2>Votre Score Final !</h2>
//       <p>Pour le thème "{theme}", vous avez obtenu : <strong className="final-score">{score}</strong> points.</p>
//       <p>Félicitations pour votre engagement !</p>
//       {/* Vous pouvez ajouter un bouton pour refaire le quiz ou choisir un autre thème */}
//       <button onClick={() => window.location.reload()}>Refaire un quiz</button>
//     </section>
//   );
// }

// export default ScoreDisplay;
// src/components/ScoreDisplay.jsx
import React from 'react';
import styles from './ScoreDisplay.module.css'; // N'oubliez pas d'importer le module CSS

function ScoreDisplay({ score, theme }) {
  return (
    <section className={styles.scoreDisplay}>
      <h2>Votre Score Final !</h2>
      <p>Pour le thème "<strong>{theme}</strong>", vous avez obtenu : <strong className={styles.finalScore}>{score}</strong> bonne(s) réponse(s) sur 5 !</p>
      <p>Félicitations pour votre engagement !</p>
      {/* Bouton pour refaire un quiz, qui recharge simplement la page pour le moment */}
      <button onClick={() => window.location.reload()} className={styles.restartButton}>Refaire un quiz</button>
    </section>
  );
}

export default ScoreDisplay;
