import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import MenuMobile from "./MenuMobile";

interface HeaderProps {
  menu: string[];
}

const Header: React.FC<HeaderProps> = ({ menu }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <h1 className={styles.logo}>📱 Fórum</h1>
      </div>

      {/* Menu desktop */}
      <nav className={styles.navDesktop}>
        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão hamburguer */}
      <button
        className={`${styles.hamburger} ${open ? styles.active : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu Mobile */}
      <MenuMobile open={open} setOpen={setOpen} menu={menu} />
    </header>
  );
};

export default Header;
