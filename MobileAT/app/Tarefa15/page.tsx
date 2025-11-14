"use client";

import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Grid
} from "@mui/material";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import FriendsList from "./components/FriendsList";
import SuggestionsList from "./components/SuggestionsList";

export default function Page() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      primary: {
        main: "#90caf9",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      {/* HEADER */}
      <Header onMenuClick={() => setDrawerOpen(true)} />

      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {/* MENU LATERAL */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Menu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          </Grid>

          {/* FEED PRINCIPAL */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Feed />
          </Grid>

          {/* AMIGOS + SUGESTÕES */}
          <Grid size={{ xs: 12, md: 3 }}>
            <FriendsList />
            <Box sx={{ mt: 2 }}>
              <SuggestionsList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
