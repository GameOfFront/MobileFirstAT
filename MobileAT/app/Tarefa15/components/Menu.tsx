"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface MenuItem {
  id: string;
  text: string;
  icon: React.ReactElement;
}

interface MenuProps {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

export default function Menu({ drawerOpen, setDrawerOpen }: MenuProps) {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [activeItem, setActiveItem] = React.useState("home");

  const menuItems: MenuItem[] = [
    { id: "home", text: "Início", icon: <HomeIcon /> },
    { id: "friends", text: "Amigos", icon: <PeopleIcon /> },
    { id: "messages", text: "Mensagens", icon: <ChatIcon /> },
    { id: "notifications", text: "Notificações", icon: <NotificationsIcon /> },
    { id: "profile", text: "Perfil", icon: <AccountCircleIcon /> },
  ];

  const renderMenuList = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#1e1e1e",
        height: "100%",
        p: 2,
      }}
    >
      {/* CABEÇALHO DO MENU */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="primary.main">
          Menu
        </Typography>

        {/* Botão de fechar (apenas no mobile) */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Divider sx={{ mb: 2, bgcolor: "#333" }} />

      {/* LISTA DE ITENS */}
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            sx={{
              borderRadius: 1,
              mb: 1,
              color: activeItem === item.id ? "primary.main" : "white",
              backgroundColor:
                activeItem === item.id
                  ? "rgba(144,202,249,0.1)"
                  : "transparent",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "rgba(144,202,249,0.1)",
                transform: "translateX(4px)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.id ? "primary.main" : "gray",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: 15,
                    fontWeight: 500,
                    transition: "color 0.3s",
                    color: activeItem === item.id ? "primary.main" : "white",
                  },
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* === DRAWER LATERAL === */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "#1e1e1e" } }}
      >
        {renderMenuList}
      </Drawer>

      {/* === MENU FIXO NO DESKTOP === */}
      {!isMobile && (
        <Box
          sx={{
            bgcolor: "#1e1e1e",
            borderRadius: 2,
            height: "100%",
            p: 2,
          }}
        >
          {renderMenuList}
        </Box>
      )}
    </>
  );
}
