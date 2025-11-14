"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
  Box,
  Stack,
  useMediaQuery,
  Grid,
  Switch,
  FormControlLabel,
} from "@mui/material";

interface Item {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function Tarefa12() {
  const [darkMode, setDarkMode] = useState(false);

  const itens: Item[] = [
    { id: 1, nome: "Camiseta Básica", preco: 79.9, quantidade: 2 },
    { id: 2, nome: "Calça Jeans", preco: 199.9, quantidade: 1 },
    { id: 3, nome: "Tênis Esportivo", preco: 349.9, quantidade: 1 },
  ];

  const totalGeral = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        bgcolor: darkMode ? "#111" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <Container maxWidth="md">
        {/* Toggle Dark Mode */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode((prev) => !prev)}
              />
            }
            label={darkMode ? "Dark mode" : "Light mode"}
          />
        </Box>

        {/* ===== Título ===== */}
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          🛒 Carrinho de Compras
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 3, color: darkMode ? "grey.400" : "text.secondary" }}
        >
          {itens.length} itens no carrinho
        </Typography>

        {isMobile ? (
          // ===== MOBILE VIEW =====
          <Stack spacing={2}>
            {itens.map((item) => (
              <Paper
                key={item.id}
                elevation={3}
                sx={{
                  p: 2,
                  bgcolor: darkMode ? "#1f1f1f" : "#fff",
                  color: darkMode ? "#fff" : "inherit",
                }}
              >
                <Grid container spacing={1}>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.nome}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: darkMode ? "grey.400" : "text.secondary" }}
                    >
                      Preço unitário:
                    </Typography>
                    <Typography variant="body1">
                      R$ {item.preco.toFixed(2)}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: darkMode ? "grey.400" : "text.secondary" }}
                    >
                      Quantidade:
                    </Typography>
                    <Typography variant="body1">
                      {item.quantidade}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1" fontWeight="bold">
                      Total: R$ {(item.preco * item.quantidade).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Stack>
        ) : (
          // ===== DESKTOP VIEW =====
          <Paper
            elevation={4}
            sx={{
              overflowX: "auto",
              bgcolor: darkMode ? "#1f1f1f" : "#fff",
              color: darkMode ? "#fff" : "inherit",
              "& .MuiTableCell-root": {
                color: darkMode ? "#fff" : "inherit",
                borderColor: darkMode ? "#444" : "rgba(224, 224, 224, 1)",
              },
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Item</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Valor Unitário
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Quantidade</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {itens.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>R$ {item.preco.toFixed(2)}</TableCell>
                    <TableCell>{item.quantidade}</TableCell>
                    <TableCell>
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}

        {/* ===== TOTAL GERAL ===== */}
        <Box sx={{ mt: 4, textAlign: "right" }}>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" fontWeight="bold">
            Total da Compra: R$ {totalGeral.toFixed(2)}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
