export interface Topic {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  likes: number;
  responses: number;
}

export interface Response {
  id: number;
  author: string;
  date: string;
  message: string;
  likes: number;
}

export const mainTopic: Topic = {
  id: 1,
  title: "Como aplicar o conceito Mobile-First?",
  subtitle: "Discussão sobre práticas de design responsivo",
  description:
    "Mobile-First é uma abordagem essencial no design moderno. Compartilhe experiências e dúvidas sobre como aplicá-lo em projetos reais.",
  author: "Mariana Duarte",
  date: "28/10/2025",
  likes: 54,
  responses: 8,
};

export const topicResponses: Response[] = [
  {
    id: 1,
    author: "João Mendes",
    date: "28/10/2025",
    message:
      "Eu sempre começo pelo layout mobile e depois uso media queries para telas maiores. Faz toda diferença!",
    likes: 10,
  },
  {
    id: 2,
    author: "Ana Paula",
    date: "28/10/2025",
    message:
      "O segredo é pensar nas restrições primeiro. Assim você foca no essencial.",
    likes: 8,
  },
  {
    id: 3,
    author: "Carlos Silva",
    date: "29/10/2025",
    message:
      "Ferramentas como Figma ajudam muito a visualizar breakpoints diferentes.",
    likes: 6,
  },
  {
    id: 4,
    author: "Julia Ferreira",
    date: "29/10/2025",
    message:
      "Em projetos grandes, o Mobile-First ajuda a manter o código CSS mais limpo e organizado.",
    likes: 12,
  },
  {
    id: 5,
    author: "Roberto Lima",
    date: "30/10/2025",
    message:
      "Vale lembrar que o Google prioriza sites responsivos no ranking de busca!",
    likes: 15,
  },
];

export const menuItems = [
  "Início",
  "Tópicos Recentes",
  "Meus Tópicos",
  "Favoritos",
  "Configurações",
];

export const sidebarData = {
  latest: [
    "O futuro do CSS responsivo",
    "Frameworks leves para mobile",
    "Como testar usabilidade no Figma",
    "Boas práticas de UI/UX",
    "Design inclusivo",
  ],
  mostReplied: [
    "Melhor grid system para React",
    "Como otimizar imagens responsivas",
    "Flexbox vs CSS Grid",
    "Dark mode com CSS puro",
    "Design tokens na prática",
  ],
  mostLiked: [
    "Diferenças entre UX e UI",
    "Por que o Figma domina o mercado",
    "Erros comuns em Mobile-First",
    "Guia prático de media queries",
    "Melhores práticas para acessibilidade",
  ],
};

export const currentUser = {
  name: "Usuário Autenticado",
};
