// src/data/productData.tsx

export const productData = {
  product: {
    id: 1,
    name: "Smartphone Galaxy Z Pro",
    description:
      "Smartphone dobrável de última geração com tela AMOLED de 7.6 polegadas, 256GB de armazenamento e 12GB de RAM.",
    price: 8999.9,
    rating: 4.7,
    image: "/Smartphone.jpeg", // imagem local
  },

  seller: {
    name: "TechStore Oficial",
    email: "contato@techstore.com",
    phone: "(11) 91234-5678",
    rating: 4.9,
  },

  comments: [
    {
      id: 1,
      user: "Ana Pereira",
      date: "2025-09-21",
      message: "Produto excelente! Superou minhas expectativas.",
      rating: 5,
    },
    {
      id: 2,
      user: "Lucas Andrade",
      date: "2025-09-22",
      message: "Gostei bastante, mas achei o preço um pouco alto.",
      rating: 4,
    },
  ],

  questions: [
    {
      id: 1,
      user: "Marina Silva",
      date: "2025-09-25",
      question: "O produto vem com carregador incluso?",
      answer: "Sim! Acompanha carregador turbo original na caixa.",
    },
    {
      id: 2,
      user: "João Mendes",
      date: "2025-09-28",
      question: "Tem opção de garantia estendida?",
      answer:
        "Sim, você pode adicionar a garantia estendida no momento da compra.",
    },
  ],

  relatedProducts: [
    {
      id: 101,
      name: "Smartwatch Galaxy Fit",
      price: 1299.9,
      image: "/Smartphone.jpeg",
    },
    {
      id: 102,
      name: "Fones Galaxy Buds Max",
      price: 999.9,
      image: "/Smartphone.jpeg",
    },
    {
      id: 103,
      name: "Capa Protetora Premium",
      price: 199.9,
      image: "/Smartphone.jpeg",
    },
  ],
};
