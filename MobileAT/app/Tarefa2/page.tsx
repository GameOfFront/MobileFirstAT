import MenuVertical from "../Components/MenuVertical/MenuVertical";
import "./styles.css";

export default function Tarefa2() {
  return (
    <main className="tarefa2-container">
      <MenuVertical />
      <section className="tarefa2-content">
        <div className="tarefa2-textbox">
          <h1 className="tarefa2-title">Tarefa 02 - Menu Vertical</h1>
          <p className="tarefa2-description">
            Este menu foi construído com Flexbox e Flex-grow, seguindo o modelo
            mobile-first. No mobile, ele desliza da lateral esquerda.
          </p>
        </div>
      </section>
    </main>
  );
}
