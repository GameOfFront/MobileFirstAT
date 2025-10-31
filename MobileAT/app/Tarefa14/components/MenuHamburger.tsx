import React from "react";
import styles from "../styles/MenuHamburger.module.css";

interface MenuHamburgerProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const MenuHamburger: React.FC<MenuHamburgerProps> = ({ open, setOpen }) => {
  return (
    <button
      className={`${styles.hamburger} ${open ? styles.active : ""}`}
      onClick={() => setOpen(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuHamburger;
