"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Tarefa3.module.css";

export default function Tarefa3() {
  const [count, setCount] = useState(5);

  const handleAdd = () => setCount((c) => c + 1);
  const handleRemove = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const boxes = Array.from({ length: count }, (_, i) => i);

  return (
    <main className={styles.container}>
      <div className={styles.controls}>
        <button onClick={handleAdd}>+</button>
        <span>{count}</span>
        <button onClick={handleRemove}>−</button>
      </div>

      <div className={styles.gallery}>
        {boxes.map((i) => (
          <div key={i} className={styles.box}>
            <Image
              src="/foto.jpg"
              alt={`Imagem ${i + 1}`}
              width={100}
              height={100}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
