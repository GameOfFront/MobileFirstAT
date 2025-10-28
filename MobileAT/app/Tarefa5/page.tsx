import styles from "./styles.module.css";

export default function Tarefa5() {
  return (
    <main className={styles.container}>
      {/* ===== MOBILE ===== */}
      <div className={styles.topBar}>
        <nav className={styles.globalMenu}>Global Menu</nav>
        <header className={styles.header}>Header</header>
      </div>

      {/* ===== DESKTOP ===== */}
      <header className={styles.desktopHeader}>Header</header>

      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <nav className={styles.desktopGlobalMenu}>Global Menu</nav>

          <div className={styles.contextMainWrapper}>
            <aside className={styles.contextMenu}>Context Menu</aside>
            <section className={styles.mainContent}>Main Content</section>
          </div>
        </div>

        <aside className={styles.ads}>Ads</aside>
      </div>

      <footer className={styles.footer}>Footer</footer>
    </main>
  );
}
