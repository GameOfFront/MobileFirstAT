import styled from "styled-components";

/* ===== NAVBAR ===== */
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 0.75rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }
`;

/* ===== BOTÃO DE ÍCONE ===== */
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.25rem;

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

/* ===== MARCA ===== */
export const Brand = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
  flex: 1;
`;

/* ===== MENU EXPANSÍVEL ===== */
export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border: 1px solid #ccc;
  border-top: none;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  animation: expand 0.3s ease-out;

  @keyframes expand {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }
`;

/* ===== ITEM DO MENU ===== */
export const MenuItem = styled.li`
  padding: 1rem;
  border-top: 1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #334155;

    &:hover {
      background: #334155;
    }
  }
`;
