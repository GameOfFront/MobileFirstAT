import React from "react";
import styles from "../styles/Sidebar.module.css";

interface Props {
  latest: string[];
  mostReplied: string[];
  mostLiked: string[];
}

const Sidebar: React.FC<Props> = ({ latest, mostReplied, mostLiked }) => {
  return (
    <aside className={styles.sidebar}>
      <section>
        <h4>Tópicos Recentes</h4>
        <ul>{latest.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </section>
      <section>
        <h4>Mais Respondidos</h4>
        <ul>{mostReplied.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </section>
      <section>
        <h4>Mais Curtidos</h4>
        <ul>{mostLiked.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </section>
    </aside>
  );
};

export default Sidebar;
