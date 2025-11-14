"use client";

import styles from "./styles.module.css";

export default function Tarefa4() {
  return (
    <main className={styles.grid}>
      <header className={styles.header}>Header</header>
      <nav className={styles.globalMenu}>Global Menu</nav>
      <aside className={styles.contextMenu}>Context Menu</aside>
      <section className={styles.mainContent}>Main Content</section>
      <aside className={styles.ads}>Ads</aside>
      <footer className={styles.footer}>Footer</footer>
    </main>
  );
}
