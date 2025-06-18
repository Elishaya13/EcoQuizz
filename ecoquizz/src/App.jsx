// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThemeSelection from './components/ThemeSelection';
import QuizInterface from './components/QuizInterface';
import ScoreDisplay from './components/ScoreDisplay';
import Chatbot from './components/Chatbot';
// L'import de Loader est supprimé ici

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  // isLoading est supprimé ici
  const [error, setError] = useState(null);

  const [chatbotMessages, setChatbotMessages] = useState([
    { sender: 'bot', text: "Bonjour ! Je suis là pour vous guider. Choisissez un thème ci-dessous pour commencer le quiz !" }
  ]);

  const addChatbotMessage = (sender, text) => {
    setChatbotMessages(prevMessages => [...prevMessages, { sender, text }]);
  };

  const handleThemeSelect = async (themeId) => {
    setError(null);
    // setIsLoading(true); // La logique de chargement est supprimée
    setSelectedTheme(themeId);

    addChatbotMessage('user', `J'ai choisi le thème : ${themeId}`);
    addChatbotMessage('bot', `Excellent choix ! Je prépare votre quiz sur "${themeId}"...`);

    try {
      const response = await fetch('http://localhost:3001/start-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: themeId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors du démarrage du quiz.');
      }

      const data = await response.json();
      setQuizQuestions(data.questions);
      setCurrentView('quiz');
      addChatbotMessage('bot', "Le quiz est prêt ! Voici votre première question :");
    } catch (err) {
      console.error('Erreur de l\'API backend:', err);
      setError(err.message);
      addChatbotMessage('bot', `Désolé, il y a eu un problème pour générer le quiz. (${err.message}) Veuillez réessayer.`);
      // setIsLoading(false); // La logique de chargement est supprimée
      setCurrentView('home');
    } finally {
      // setIsLoading(false); // La logique de chargement est supprimée
    }
  };

  const handleQuizEnd = (score) => {
    setQuizScore(score);
    setCurrentView('score');
    addChatbotMessage('bot', `Quiz terminé ! Votre score est de ${score}.`);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        {currentView === 'home' && (
          <>
            <HeroSection
              title="Testez vos connaissances et agissez pour l'avenir de notre planète !"
              subtitle="Participez à notre quiz interactif sur l'écologie et découvrez comment vous pouvez faire la différence."
            />
            {/* Le Loader est supprimé ici. Le ThemeSelection s'affiche directement. */}
            <ThemeSelection onThemeSelect={handleThemeSelect} />
            {error && (
              <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
                Erreur: {error}
              </p>
            )}
          </>
        )}

        {currentView === 'quiz' && selectedTheme && quizQuestions.length > 0 && (
          <QuizInterface
            theme={selectedTheme}
            questions={quizQuestions}
            onQuizEnd={handleQuizEnd}
            addChatbotMessage={addChatbotMessage}
          />
        )}

        {currentView === 'score' && (
          <ScoreDisplay score={quizScore} theme={selectedTheme} />
        )}
      </main>

      <Chatbot messages={chatbotMessages} />
    </div>
  );
}

export default App;
