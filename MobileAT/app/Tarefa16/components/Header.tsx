// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">TechStore</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="search-input"
        />
      </div>

      <div className="header-icons">
        <span title="Perfil">👤</span>
        <span title="Carrinho">🛒</span>
      </div>
    </header>
  );
};

export default Header;
