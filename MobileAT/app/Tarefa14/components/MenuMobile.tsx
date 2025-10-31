import React from "react";
import styles from "../styles/MenuMobile.module.css";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  menu: string[];
}

const MenuMobile: React.FC<Props> = ({ open, setOpen, menu }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuMobile;
