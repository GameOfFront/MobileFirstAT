"use client";

import { useState } from "react";
import styles from "./styles.module.css";

export default function Tarefa11() {
  const [menuAberto, setMenuAberto] = useState(false);
  const opcoesMenu = ["Início", "Serviços", "Sobre", "Contato"];

  return (
    <main className={styles.container}>
      {/* ===== HEADER ===== */}
      <header className={styles.header}>Header</header>

      {/* ===== WRAPPER PRINCIPAL ===== */}
      <div className={styles.contentWrapper}>
        {/* ===== COLUNA ESQUERDA ===== */}
        <div className={styles.leftColumn}>
          {/* ===== MENU GLOBAL (COLAPSÁVEL) ===== */}
          <nav className={styles.globalMenu}>
            <button
              className={styles.menuButton}
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? "✖" : "☰"}
            </button>

            <div
              className={`${styles.menuOptions} ${
                menuAberto ? styles.menuAberto : ""
              }`}
            >
              {opcoesMenu.map((opcao, index) => (
                <a key={index} href="#" className={styles.menuItem}>
                  {opcao}
                </a>
              ))}
            </div>
          </nav>

          {/* ===== CONTEXT + CONTEÚDO ===== */}
          <div className={styles.contextMainWrapper}>
            <aside className={styles.contextMenu}>Context Menu</aside>
            <section className={styles.mainContent}>Main Content</section>
          </div>
        </div>

        {/* ===== COLUNA DIREITA (ADS) ===== */}
        <aside className={styles.ads}>Ads</aside>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>Footer</footer>
    </main>
  );
}
