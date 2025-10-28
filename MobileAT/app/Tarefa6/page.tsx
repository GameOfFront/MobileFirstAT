"use client"

import { useState } from "react";
import styles from "./styles.module.css";

export default function Tarefa6() {
  const [itens] = useState([
    { id: 1, nome: "Arroz 5kg", preco: 25.9, quantidade: 2 },
    { id: 2, nome: "Feijão 1kg", preco: 7.5, quantidade: 3 },
    { id: 3, nome: "Azeite 500ml", preco: 22.0, quantidade: 1 },
    { id: 4, nome: "Café 500g", preco: 15.8, quantidade: 2 },
  ]);

  const totalGeral = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>🛒 Lista de Compras</h1>

      <section className={styles.lista}>
        <header className={styles.cabecalho}>
          <span>Item</span>
          <span>Valor Unitário</span>
          <span>Qtd</span>
          <span>Total</span>
        </header>

        {itens.map((item) => (
          <div key={item.id} className={styles.item}>
            <span>{item.nome}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
            <span>{item.quantidade}</span>
            <span>R$ {(item.preco * item.quantidade).toFixed(2)}</span>
          </div>
        ))}

        <footer className={styles.rodape}>
          <strong>Total da Compra:</strong>
          <strong>R$ {totalGeral.toFixed(2)}</strong>
        </footer>
      </section>
    </main>
  );
}
