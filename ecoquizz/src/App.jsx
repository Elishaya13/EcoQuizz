// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemeSelection from './components/ThemeSelection';
import QuizInterface from './components/QuizInterface'; // À créer plus tard
import ScoreDisplay from './components/ScoreDisplay';   // À créer plus tard
import Chatbot from './components/Chatbot';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'quiz', 'score'
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [quizScore, setQuizScore] = useState(0); // Exemple de score

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setCurrentView('quiz');
    // Ici, vous devrez probablement appeler votre backend pour charger les questions du thème
  };

  const handleQuizEnd = (score) => {
    setQuizScore(score);
    setCurrentView('score');
  };

  return (
    <div className="app-container">
      <Header /> {/* Pour le logo, la navigation si nécessaire */}

      <main className="main-content">
        {currentView === 'home' && (
          <>
            <HeroSection
              title="Testez vos connaissances et agissez pour l'avenir de notre planète !"
              subtitle="Participez à notre quiz interactif sur l'écologie et découvrez comment vous pouvez faire la différence."
            />
            <ThemeSelection onThemeSelect={handleThemeSelect} />
            <Chatbot initialMessage="Bonjour ! Je suis là pour vous guider. Choisissez un thème ci-dessous pour commencer le quiz !" />
          </>
        )}

        {currentView === 'quiz' && selectedTheme && (
          <QuizInterface theme={selectedTheme} onQuizEnd={handleQuizEnd} />
        )}

        {currentView === 'score' && (
          <ScoreDisplay score={quizScore} theme={selectedTheme} />
        )}
      </main>

      {/* Vous pouvez ajouter un Footer ici si besoin */}
    </div>
  );
}

export default App;
