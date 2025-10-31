// src/components/Questions.tsx
import React from "react";

interface Question {
  id: number;
  user: string;
  date: string;
  question: string;
  answer: string;
}

interface QuestionsProps {
  questions: Question[];
}

const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  return (
    <section className="questions-section">
      <h3>Perguntas e Respostas</h3>
      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <div className="question-header">
            <strong>{q.user}</strong>
            <span className="question-date">
              {new Date(q.date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <p className="question-text">❓ {q.question}</p>
          <p className="answer-text">💬 {q.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default Questions;
