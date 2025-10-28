"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  Card,
  TopSection,
  Foto,
  InfoBox,
  Nome,
  Acoes,
  Icone,
  Tabela,
} from "./styles";

export default function Tarefa8() {
  const tarefas = [
    { id: 1, nome: "Tarefa 1", concluida: true },
    { id: 2, nome: "Tarefa 2", concluida: false },
    { id: 3, nome: "Tarefa 3", concluida: false },
  ];

  return (
    <Card>
      {/* ======== TOPO: FOTO + INFO + ÍCONES ======== */}
      <TopSection>
        <Foto src="/perfil.png" alt="Foto do Funcionário" />
        <InfoBox>
          <Nome>Maria Silva</Nome>
          <p>Data de Nascimento: 12/05/1990</p>
          <p>Setor: Recursos Humanos</p>
          <p>Cargo: Analista</p>
        </InfoBox>

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
      </TopSection>

      {/* ======== TABELA DE TAREFAS ======== */}
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
