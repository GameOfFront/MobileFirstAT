// ===== Tipagem e lista de questões =====
export interface Question {
  id: number;
  enunciado: string;
  opcoes: string[];
  correta: number;
  justificativa: string;
}

export const questions: Question[] = [
  {
    id: 1,
    enunciado: "O que significa o conceito 'Mobile-First' no design responsivo?",
    opcoes: [
      "Criar primeiro para desktop e depois adaptar para mobile.",
      "Projetar primeiro para dispositivos móveis e depois expandir para telas maiores.",
      "Usar apenas tecnologias nativas de mobile.",
      "Focar apenas em performance no celular.",
    ],
    correta: 1,
    justificativa:
      "Mobile-First significa iniciar o design e desenvolvimento priorizando dispositivos móveis, garantindo boa experiência em telas pequenas antes de expandir para desktops.",
  },
  {
    id: 2,
    enunciado:
      "Qual unidade de medida é mais recomendada para layouts responsivos?",
    opcoes: ["px", "em", "rem", "vh/vw"],
    correta: 3,
    justificativa:
      "As unidades relativas como 'vh' (viewport height) e 'vw' (viewport width) se adaptam ao tamanho da tela, tornando o layout responsivo.",
  },
  {
    id: 3,
    enunciado: "Qual princípio está diretamente ligado à usabilidade?",
    opcoes: [
      "A estética do design deve ser mais importante que a clareza.",
      "O usuário deve atingir seus objetivos de forma eficiente e intuitiva.",
      "As cores devem ser sempre vibrantes.",
      "A interface deve ter o máximo de elementos possível.",
    ],
    correta: 1,
    justificativa:
      "Usabilidade refere-se à facilidade com que o usuário realiza tarefas e entende o sistema de forma clara e intuitiva.",
  },
  {
    id: 4,
    enunciado:
      "Qual abordagem melhora o desempenho e a experiência do usuário em mobile?",
    opcoes: [
      "Carregar todas as imagens em alta resolução de uma vez.",
      "Usar lazy loading para imagens e componentes.",
      "Usar apenas imagens grandes e redimensionar via CSS.",
      "Remover cache do navegador para evitar repetição de dados.",
    ],
    correta: 1,
    justificativa:
      "O lazy loading carrega imagens e componentes apenas quando são necessários, otimizando a performance especialmente em dispositivos móveis.",
  },
  {
    id: 5,
    enunciado: "O que é design responsivo?",
    opcoes: [
      "Um design que muda de cor conforme o tema do usuário.",
      "Um design que se adapta a diferentes tamanhos e orientações de tela.",
      "Um design feito exclusivamente para celulares.",
      "Um design que responde a cliques do usuário.",
    ],
    correta: 1,
    justificativa:
      "Design responsivo adapta automaticamente o layout e os elementos visuais para se ajustarem a diferentes tamanhos e orientações de tela.",
  },
  {
    id: 6,
    enunciado:
      "Em um layout Mobile-First, o que acontece ao aumentar o tamanho da tela?",
    opcoes: [
      "Nada, o design é fixo para mobile.",
      "As regras CSS adicionam estilos para telas maiores usando media queries.",
      "O design se torna automaticamente um app desktop.",
      "A interface se desorganiza para caber mais conteúdo.",
    ],
    correta: 1,
    justificativa:
      "No Mobile-First, estilos básicos são definidos para telas pequenas e, com media queries, são adicionados estilos para telas maiores.",
  },
  {
    id: 7,
    enunciado: "Qual propriedade CSS é comumente usada em layouts responsivos?",
    opcoes: ["position: absolute;", "float: left;", "display: flex;", "z-index"],
    correta: 2,
    justificativa:
      "O Flexbox facilita a criação de layouts flexíveis e adaptáveis, sendo amplamente usado em design responsivo.",
  },
  {
    id: 8,
    enunciado:
      "O que é acessibilidade no contexto da usabilidade de um site ou app?",
    opcoes: [
      "Um recurso para deixar o site mais bonito.",
      "Garantir que qualquer pessoa, incluindo pessoas com deficiência, possa usar o sistema.",
      "Apenas o uso de teclados especiais para navegação.",
      "Usar contraste de cores apenas em dark mode.",
    ],
    correta: 1,
    justificativa:
      "Acessibilidade garante que pessoas com diferentes necessidades (visuais, motoras, cognitivas) consigam utilizar o sistema com eficiência.",
  },
  {
    id: 9,
    enunciado:
      "Qual a melhor prática ao projetar botões para telas sensíveis ao toque?",
    opcoes: [
      "Usar botões pequenos para economizar espaço.",
      "Usar áreas clicáveis grandes e bem espaçadas.",
      "Evitar ícones e usar apenas texto.",
      "Usar cor neutra para todos os botões.",
    ],
    correta: 1,
    justificativa:
      "Em dispositivos móveis, os botões devem ter áreas clicáveis amplas e bem espaçadas para evitar erros de toque e melhorar a usabilidade.",
  },
  {
    id: 10,
    enunciado:
      "Por que é importante testar o design em múltiplos dispositivos?",
    opcoes: [
      "Para verificar se o site carrega rápido apenas em um modelo de celular.",
      "Para garantir compatibilidade e boa experiência em diferentes telas e navegadores.",
      "Apenas por motivos estéticos.",
      "Para diminuir o número de usuários no site.",
    ],
    correta: 1,
    justificativa:
      "Testar o design em múltiplos dispositivos assegura que o layout e as interações funcionem corretamente em diferentes tamanhos de tela e sistemas.",
  },
];
