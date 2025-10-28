"use client";

import { Phone, Mail, MapPin, Info } from "lucide-react";
import {
  Acoes,
  Card,
  Foto,
  Header,
  Icone,
  Nome,
  Tabela,
  InfoBox,
} from "./styles";

export default function Tarefa7() {
  const tarefas = [
    { id: 1, nome: "Tarefa 1", concluida: true },
    { id: 2, nome: "Tarefa 2", concluida: false },
    { id: 3, nome: "Tarefa 3", concluida: false },
  ];

  return (
    <Card>
      {/* ===== Cabeçalho ===== */}
      <Header>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Foto src="/perfil.png" alt="Foto do Funcionário" />
          <InfoBox>
            <Nome>Maria Silva</Nome>
            <p>Data de Nascimento: 12/05/1990</p>
            <p>Setor: Recursos Humanos</p>
            <p>Cargo: Analista</p>
          </InfoBox>
        </div>
        <Info size={20} className="info-icon" />
      </Header>

      {/* ===== Ações ===== */}
      <Acoes>
        <Icone>
          <Phone />
        </Icone>
        <Icone>
          <Mail />
        </Icone>
        <Icone>
          <MapPin />
        </Icone>
      </Acoes>

      {/* ===== Tabela de Tarefas ===== */}
      <Tabela>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>
                <input type="checkbox" checked={tarefa.concluida} readOnly />
              </td>
              <td>{tarefa.nome}</td>
            </tr>
          ))}
        </tbody>
      </Tabela>
    </Card>
  );
}
