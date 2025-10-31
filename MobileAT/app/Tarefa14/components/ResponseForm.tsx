import React, { useState } from "react";
import styles from "../styles/ResponseForm.module.css";

interface Props {
  currentUser: { name: string };
}

const ResponseForm: React.FC<Props> = ({ currentUser }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Resposta enviada por ${currentUser.name}: ${message}`);
      setMessage("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        Usuário atual: <strong>{currentUser.name}</strong>
      </p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva sua resposta..."
      />
      <button type="submit">Enviar resposta</button>
    </form>
  );
};

export default ResponseForm;
