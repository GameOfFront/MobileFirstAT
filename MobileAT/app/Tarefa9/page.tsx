"use client";

import { useState } from "react";
import { Menu, User } from "lucide-react";
import { NavBar, Brand, IconButton, MenuList, MenuItem } from "./styles";

export default function Tarefa9() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {/* ======== NAVBAR SUPERIOR ======== */}
      <NavBar>
        <IconButton onClick={() => setAberto(!aberto)}>
          <Menu />
        </IconButton>

        <Brand>Brand</Brand>

        <IconButton>
          <User />
        </IconButton>
      </NavBar>

      {/* ======== MENU EXPANSÍVEL ======== */}
      {aberto && (
        <MenuList>
          <MenuItem>Opção 1</MenuItem>
          <MenuItem>Opção 2</MenuItem>
          <MenuItem>Opção 3</MenuItem>
          <MenuItem>Opção 4</MenuItem>
        </MenuList>
      )}
    </>
  );
}
