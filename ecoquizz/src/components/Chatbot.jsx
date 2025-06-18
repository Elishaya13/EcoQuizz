// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css'; // Importez le module CSS

function Chatbot({ initialMessage, messages = [] }) { // Ajout de props messages pour le contrôle externe
  const [internalMessages, setInternalMessages] = useState([]);
  const messagesEndRef = useRef(null); // Pour faire défiler automatiquement

  useEffect(() => {
    // Si messages est passé en props, utilisez-le, sinon initialMessage
    if (messages && messages.length > 0) {
      setInternalMessages(messages);
    } else {
      setInternalMessages([{ sender: 'bot', text: initialMessage }]);
    }
  }, [initialMessage, messages]);

  // Scroll automatique vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [internalMessages]);

  return (
    <aside className={styles.chatbotContainer} aria-live="polite" aria-atomic="true">
      <div className={styles.chatbotMessages}>
        {internalMessages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Élément vide pour le défilement */}
      </div>
    </aside>
  );
}

export default Chatbot;
