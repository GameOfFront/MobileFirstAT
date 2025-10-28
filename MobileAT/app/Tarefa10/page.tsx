"use client";

import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import {
  MenuContainer,
  NavBar,
  Brand,
  IconButton,
  MenuList,
  MenuItem,
} from "./styles";

export default function Tarefa10() {
  const [menuAberto, setMenuAberto] = useState(false);
  const opcoes = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];

  return (
    <MenuContainer>
      <NavBar>
        <div className="left">
          <IconButton
            className="menu-btn"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X /> : <Menu />}
          </IconButton>
          <Brand>Brand</Brand>
        </div>

        <MenuList aberto={menuAberto}>
          {opcoes.map((opcao, index) => (
            <MenuItem key={index}>{opcao}</MenuItem>
          ))}
        </MenuList>

        <IconButton className="user-btn">
          <User />
        </IconButton>
      </NavBar>
    </MenuContainer>
  );
}
