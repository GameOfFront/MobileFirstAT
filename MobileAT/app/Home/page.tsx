"use client";
import Link from "next/link";
import "./styles.css";

export default function HomePage() {
  const tarefas = [
    { nome: "Tarefa 1", rota: "/Tarefa1" },
    { nome: "Tarefa 2", rota: "/Tarefa2" },
    { nome: "Tarefa 3", rota: "/Tarefa3" },
    { nome: "Tarefa 4", rota: "/Tarefa4" },
    { nome: "Tarefa 5", rota: "/Tarefa5" },
    { nome: "Tarefa 6", rota: "/Tarefa6" },
  ];

  return (
    <main className="home-container">
      <h1 className="home-title">AT Mobile-first UI com React</h1>

      <div className="button-group">
        {tarefas.map((tarefa, index) => (
          <Link key={index} href={tarefa.rota} className="task-button">
            {tarefa.nome}
          </Link>
        ))}
      </div>

      <p className="home-description">
        Clique em uma tarefa para visualizar o conteúdo correspondente.
      </p>
    </main>
  );
}
