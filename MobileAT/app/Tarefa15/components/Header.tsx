"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  TextField,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language"; 

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#121212",
        mb: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* LOGO + NOME AGRUPADOS */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            minWidth: "fit-content",
          }}
        >
          <LanguageIcon sx={{ color: "primary.main", fontSize: 28 }} />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "white",
              whiteSpace: "nowrap", // impede quebra de linha
            }}
          >
            SocialX
          </Typography>
        </Box>

        {/* CAMPO DE BUSCA */}
        <TextField
          size="small"
          placeholder="Buscar..."
          variant="outlined"
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            width: isMobile ? "70%" : "40%",
            input: { color: "white" },
          }}
        />

        {/* === BOTÃO OU AVATAR === */}
        {isMobile ? (
          <IconButton
            onClick={onMenuClick}
            sx={{
              color: "white",
              backgroundColor: "rgba(255,255,255,0.08)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.15)" },
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Avatar alt="Usuário" src="/avatars/user.png" />
        )}
      </Toolbar>
    </AppBar>
  );
}
