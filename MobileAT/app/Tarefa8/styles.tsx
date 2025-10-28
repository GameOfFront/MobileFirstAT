import styled from "styled-components";

/* ===== CARD ===== */
export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  font-family: "Arial", sans-serif;
  color: #222;
  margin: 1rem auto;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    color: #f1f5f9;
    border-color: #334155;
  }
`;

/* ===== SEÇÃO SUPERIOR (FOTO + INFO + AÇÕES) ===== */
export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  @media (prefers-color-scheme: dark) {
    border-color: #334155;
  }

  /* Layout horizontal em telas grandes */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

/* ===== FOTO ===== */
export const Foto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid #2563eb;
  flex-shrink: 0;

  @media (min-width: 768px) {
    height: auto;
    aspect-ratio: 3 / 4;
    align-self: stretch; /* cresce junto com as outras seções */
  }
`;

/* ===== INFORMAÇÕES ===== */
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.95rem;
  flex-grow: 1;
  width: 100%;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

/* ===== NOME ===== */
export const Nome = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 0 0.3rem 0;
`;

/* ===== AÇÕES ===== */
export const Acoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-top: 1px solid #ddd;
  padding-top: 0.75rem;

  @media (prefers-color-scheme: dark) {
    border-color: #334155;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    border-top: none;
    border-left: 1px solid #ddd;
    padding: 0 0.75rem;
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

/* ===== TABELA ===== */
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
