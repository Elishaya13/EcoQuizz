// src/components/QuizInterface.jsx
import React from 'react';

function QuizInterface({ theme, onQuizEnd }) {
  // Pour l'instant, juste un placeholder
  return (
    <section className="quiz-interface">
      <h2>Quiz sur le thème : {theme}</h2>
      <p>Le quiz va commencer ici !</p>
      <button onClick={() => onQuizEnd(80)}>Simuler la fin du quiz (score 80)</button>
    </section>
  );
}

export default QuizInterface;
