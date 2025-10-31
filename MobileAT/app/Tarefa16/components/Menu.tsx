// src/components/Menu.tsx
import React from "react";

const Menu: React.FC = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Promoções</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
