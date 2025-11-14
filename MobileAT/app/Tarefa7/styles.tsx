import styled from "styled-components";

/* ===== CARD GERAL ===== */
export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-family: "Arial", sans-serif;
  color: #222;
  margin: 1rem auto;

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }
`;

/* ===== HEADER ===== */
export const Header = styled.div`
  display: flex;
  align-items: stretch; 
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    border-color: #334155;
  }

  .info-icon {
    color: #2563eb;
    cursor: pointer;
    transition: transform 0.2s ease;
    align-self: flex-start; 

    &:hover {
      transform: scale(1.2);
      color: #1d4ed8;
    }

    @media (prefers-color-scheme: dark) {
      color: #60a5fa;
    }
  }
`;

/* ===== FOTO ===== */
export const Foto = styled.img`
  width: 110px; 
  height: auto;
  aspect-ratio: 3 / 4; 
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid #2563eb;
  flex-shrink: 0; 
`;


/* ===== INFO DO FUNCIONÁRIO ===== */
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;

  p {
    margin: 0;
  }
`;

/* ===== NOME ===== */
export const Nome = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

/* ===== AÇÕES ===== */
export const Acoes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  @media (prefers-color-scheme: dark) {
    border-color: #334155;
  }
`;

/* ===== ÍCONE ===== */
export const Icone = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.1);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
  }
`;

/* ===== TABELA DE TAREFAS ===== */
export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;

  th,
  td {
    padding: 0.6rem;
    border: 1px solid #ddd;
  }

  th {
    background: #e2e8f0;
    font-weight: bold;
    text-align: center;
  }

  tr:hover {
    background: rgba(37, 99, 235, 0.05);
  }

  input[type="checkbox"] {
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    th {
      background: #334155;
    }

    td,
    th {
      border-color: #475569;
    }
  }
`;
