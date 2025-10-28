import Navbar from "../Components/NavBar/Navbar";
import "./styles.css";

export default function Tarefa1() {
  return (
    <main className="tarefa1-container">
      <Navbar />
      <section className="tarefa1-content">
        <h1 className="tarefa1-title">Tarefa 01 - Menu com Flexbox</h1>
        <p className="tarefa1-text">
          Este menu foi desenvolvido com React (Next.js), utilizando Flexbox e
          design mobile-first. O logo fica à esquerda, as opções centralizadas e
          o ícone do usuário à direita.
        </p>
      </section>
    </main>
  );
}
