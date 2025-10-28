import styles from "./styles.module.css";

export default function Tarefa4() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>Header</header>

      <div className={styles.contentWrapper}>
        {/* COLUNA ESQUERDA */}
        <div className={styles.leftColumn}>
          <nav className={styles.globalMenu}>Global Menu</nav>

          {/* CONTEXTO + MAIN agrupados horizontalmente */}
          <div className={styles.contextMainWrapper}>
            <aside className={styles.contextMenu}>Context Menu</aside>
            <section className={styles.mainContent}>Main Content</section>
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <aside className={styles.ads}>Ads</aside>
      </div>

      <footer className={styles.footer}>Footer</footer>
    </main>
  );
}
