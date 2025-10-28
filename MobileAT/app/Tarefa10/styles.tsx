import styled from "styled-components";

interface MenuListProps {
  aberto: boolean;
}

/* ===== CONTAINER ===== */
export const MenuContainer = styled.header`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

/* ===== NAVBAR ===== */
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #ccc;
  padding: 0.75rem 1rem;
  position: relative;
  z-index: 10;

  .left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }

  @media (min-width: 768px) {
    .menu-btn {
      display: none;
    }
  }
`;

/* ===== MARCA ===== */
export const Brand = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

/* ===== BOTÃO DE ÍCONE ===== */
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: opacity 0.2s ease;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
`;

/* ===== MENU LIST ===== */
export const MenuList = styled.ul<MenuListProps>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;

  /* --- MOBILE --- */
  @media (max-width: 767px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    max-height: ${(props) => (props.aberto ? "300px" : "0")};
    opacity: ${(props) => (props.aberto ? "1" : "0")};
    transition: max-height 0.3s ease, opacity 0.3s ease;

    @media (prefers-color-scheme: dark) {
      background: #1e293b;
      border-color: #334155;
    }
  }

  /* --- DESKTOP --- */
  @media (min-width: 768px) {
    flex: 1;
    justify-content: center;
    position: static;
    background: transparent;
    border: none;
    max-height: none;
    opacity: 1;
  }
`;

/* ===== MENU ITEM ===== */
export const MenuItem = styled.li`
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background: #334155;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    border-top: 1px solid #ccc;
    border-radius: 0;

    @media (prefers-color-scheme: dark) {
      border-color: #334155;
    }
  }
`;
