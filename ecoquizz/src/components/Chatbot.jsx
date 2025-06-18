// src/components/Chatbot.jsx
import React, { useState, useEffect } from 'react';

function Chatbot({ initialMessage }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Le premier message du chatbot
    setMessages([{ sender: 'bot', text: initialMessage }]);
  }, [initialMessage]);

  // Vous ajouterez ici des fonctions pour ajouter des messages du bot ou de l'utilisateur
  // en fonction de l'interaction (choix de thème, réponses aux questions).

  return (
    <aside className="chatbot-container" aria-live="polite" aria-atomic="true">
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      {/* Vous pouvez ajouter un input pour l'utilisateur si le chatbot le nécessite,
          mais pour un quiz avec choix prédéfinis, ce n'est pas toujours nécessaire. */}
    </aside>
  );
}

export default Chatbot;
