import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Mémoire temporaire des sessions
const sessions = {};

/**
 * Route pour démarrer un quiz
 * Body: { theme: "Recyclage" }
 * Retourne: { sessionId, questions }
 */
app.post('/start-quiz', async (req, res) => {
  const { theme } = req.body;

  if (!theme) return res.status(400).json({ error: 'Thème requis.' });

  try {
    const prompt = `
Tu es un générateur de quiz sur l'écologie.

Génère exactement 5 questions à choix multiples sur le thème suivant : "${theme}".

Pour chaque question, retourne :
- question
- 4 choix (A, B, C, D)
- la bonne réponse (lettre)
- une explication courte

Retourne le résultat en **JSON brut**, sous forme d’un tableau de 5 objets JSON, sans aucune explication autour. Le format doit être exactement :

[
  {
    "question": "...",
    "choices": { "A": "...", "B": "...", "C": "...", "D": "..." },
    "answer": "B",
    "explanation": "..."
  },
  ...
]

    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    const jsonText = completion.choices[0].message.content;
    const questions = JSON.parse(jsonText);

    const sessionId = uuidv4();
    sessions[sessionId] = {
      theme,
      questions,
      currentIndex: 0,
      score: 0
    };
    console.log("questions : ", questions)
    res.json({ sessionId, questions });
  } catch (err) {
    console.error('Erreur GPT:', err);
    res.status(500).json({ error: 'Erreur lors de la génération du quiz.' });
  }
});


app.listen(port, () => {
  console.log(`✅ Serveur EcoQuiz démarré sur http://localhost:${port}`);
});
