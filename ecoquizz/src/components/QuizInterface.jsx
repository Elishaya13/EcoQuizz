
// src/components/QuizInterface.jsx
import React, { useState, useEffect } from 'react';
import styles from './QuizInterface.module.css'; // Importez le module CSS

function QuizInterface({ theme, questions, onQuizEnd, addChatbotMessage }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex === 0) {
      addChatbotMessage('bot', `Question 1 : ${questions[0].question}`);
    }
  }, [questions, currentQuestionIndex, addChatbotMessage]);

  const handleAnswer = (choice) => {
    setSelectedChoice(choice);
    setShowExplanation(true);
    const currentQuestion = questions[currentQuestionIndex];

    if (choice === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
      addChatbotMessage('user', `Ma réponse : ${currentQuestion.choices[choice]}`); // Envoyer le texte de la réponse
      addChatbotMessage('bot', `Bonne réponse ! ${currentQuestion.explanation}`);
    } else {
      addChatbotMessage('user', `Ma réponse : ${currentQuestion.choices[choice]}`);
      addChatbotMessage('bot', `Mauvaise réponse. La bonne réponse était "${currentQuestion.answer}". ${currentQuestion.explanation}`);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedChoice(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      const nextQuestion = questions[currentQuestionIndex + 1];
      addChatbotMessage('bot', `Question ${currentQuestionIndex + 2} : ${nextQuestion.question}`);
    } else {
      onQuizEnd(score);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <section className={styles.quizInterface}>Chargement des questions...</section>;
  }

  return (
    <section className={styles.quizInterface}>
      <h2>Quiz sur le thème : {theme}</h2>
      <p>Question {currentQuestionIndex + 1} / {questions.length}</p>

      <div className={styles.questionCard}>
        <h3>{currentQuestion.question}</h3>
        <div className={styles.choices}>
          {Object.entries(currentQuestion.choices).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              disabled={selectedChoice !== null}
              className={`${styles.choiceButton} ${selectedChoice === key ? styles.selected : ''} ${showExplanation && key === currentQuestion.answer ? styles.correctAnswer : ''}`}
              aria-pressed={selectedChoice === key} // Accessibilité
            >
              {key}: {value}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className={styles.explanation}>
            <p><strong>Explication :</strong> {currentQuestion.explanation}</p>
            <button onClick={handleNextQuestion} className={styles.explanationButton}>
              {currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Voir mon score final'}
            </button>
          </div>
        )}
      </div>

    </section>
  );
}

export default QuizInterface;
