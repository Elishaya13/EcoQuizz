// src/components/ScoreDisplay.jsx
import React from 'react';

function ScoreDisplay({ score, theme }) {
  return (
    <section className="score-display">
      <h2>Votre Score Final !</h2>
      <p>Pour le thème "{theme}", vous avez obtenu : <strong className="final-score">{score}</strong> points.</p>
      <p>Félicitations pour votre engagement !</p>
      {/* Vous pouvez ajouter un bouton pour refaire le quiz ou choisir un autre thème */}
      <button onClick={() => window.location.reload()}>Refaire un quiz</button>
    </section>
  );
}

export default ScoreDisplay;
