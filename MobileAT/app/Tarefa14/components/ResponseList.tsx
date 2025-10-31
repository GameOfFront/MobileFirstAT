import React from "react";
import styles from "../styles/ResponseList.module.css";
import { Response } from "../data/forumData";

interface Props {
  responses: Response[];
}

const ResponseList: React.FC<Props> = ({ responses }) => {
  return (
    <div className={styles.responses}>
      <h4>Respostas ({responses.length})</h4>
      {responses.map((r) => (
        <div key={r.id} className={styles.response}>
          <p>{r.message}</p>
          <div className={styles.meta}>
            <span>👤 {r.author}</span>
            <span>📅 {r.date}</span>
            <span>❤️ {r.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponseList;
