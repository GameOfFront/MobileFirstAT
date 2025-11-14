"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./styles.css";

export default function MenuVertical() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="menu-btn"
          aria-label="Abrir menu"
        >
          <Menu className="icon" />
        </button>
      )}

      <aside className={`menu-vertical ${open ? "open" : ""}`}>
        <div className="menu-header">
          <div className="menu-logo">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="brand">Brand</span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="menu-close"
            aria-label="Fechar menu"
          >
            <X className="icon" />
          </button>
        </div>

        <nav className="menu-links">
          <a>Perfil</a>
          <a>Postagens</a>
          <a>Amigos</a>
          <a>Fotos</a>
          <a>Vídeos</a>
          <a>Configurações</a>
          <a>Mensagens</a>
          <a>Notificações</a>
        </nav>

        <div className="menu-footer">© 2025 MeuApp</div>
      </aside>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
