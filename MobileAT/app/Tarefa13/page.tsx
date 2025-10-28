"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { questions } from "./data/questoes";


export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const handleAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === question.correta) {
      setScore((prev) => prev + 1);
    }
  };

const handleNext = () => {
  setIsAnswered(false);
  setSelectedOption(null);

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
  } else {
    // Exibe a pontuação final
    alert(`Quiz finalizado! Sua pontuação: ${score}/${questions.length}`);

    // Reinicia o quiz
    setTimeout(() => {
      setCurrentQuestion(0);
      setScore(0);
      setSelectedOption(null);
      setIsAnswered(false);
    }, 300);
  }
};


  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        display: "flex",
        flexDirection: isLandscape ? "row" : "column",
        alignItems: "stretch",
        gap: 3,
      }}
    >
      <Stack spacing={2} flex={1}>
        <Typography variant="h6" fontWeight="bold">
          {question.enunciado}
        </Typography>

        {question.opcoes.map((opcao, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = question.correta === index;

          let bgColor = "background.paper";
          if (isAnswered && isCorrect) bgColor = "success.light";
          else if (isAnswered && isSelected && !isCorrect)
            bgColor = "error.light";
          else if (isSelected) bgColor = "action.selected";

          return (
            <Box
              key={index}
              onClick={() => !isAnswered && setSelectedOption(index)}
              sx={{
                p: 1.5,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                cursor: isAnswered ? "default" : "pointer",
                backgroundColor: bgColor,
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: isAnswered ? bgColor : "action.hover",
                },
              }}
            >
              <Typography variant="body1">{opcao}</Typography>
            </Box>
          );
        })}

        {!isAnswered ? (
          <Button
            variant="contained"
            onClick={handleAnswer}
            disabled={selectedOption === null}
          >
            Verificar Resposta
          </Button>
        ) : (
          <>
            <Divider sx={{ my: 1 }} />
            {selectedOption === question.correta ? (
              <Typography color="success.main" fontWeight="bold">
                ✅ Acertou! +1 ponto
              </Typography>
            ) : (
              <Typography color="error.main" fontWeight="bold">
                ❌ Errou! Resposta correta:{" "}
                {question.opcoes[question.correta]}
              </Typography>
            )}

            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {question.justificativa}
            </Typography>

            <Button variant="outlined" onClick={handleNext} sx={{ mt: 2 }}>
              Próxima Pergunta
            </Button>
          </>
        )}
      </Stack>

      {/* Painel lateral (landscape) */}
      {isLandscape && (
        <Box
          sx={{
            minWidth: 160,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
            borderLeft: "1px solid",
            borderColor: "divider",
            pl: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Pontos: {score}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Questão {currentQuestion + 1} de {questions.length}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
