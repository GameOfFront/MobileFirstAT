"use client";

import Image from "next/image";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import "./styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO - alinhado à esquerda */}
      <div className="navbar-logo">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="navbar-brand">Brand</span>
      </div>

      {/* MENU CENTRAL */}
      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li>Início</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Contato</li>
        <li>Sobre</li>
      </ul>

      {/* ÍCONES À DIREITA */}
      <div className="navbar-icons">
        <User className="user-icon" />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <Menu className="menu-icon" />
        </button>
      </div>
    </nav>
  );
}
