export interface Comment {
  id: number;
  author: string;
  text: string;
}

export interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  shares: number;
  comments: Comment[];
}

export interface Friend {
  id: number;
  name: string;
  photo: string;
  mutualFriends: number;
}

export interface Suggestion {
  id: number;
  name: string;
  photo: string;
  mutualFriend: string;
}

export const posts: Post[] = [
  {
    id: 1,
    author: "Mariana Duarte",
    avatar: "/avatars/a1.png",
    title: "Explorando o novo Material UI v6",
    content:
      "A nova versão do MUI trouxe muitas melhorias na performance e novas APIs! 🌙",
    image: "/post.jpeg",
    date: "29/10/2025",
    likes: 128,
    shares: 22,
    comments: [
      { id: 1, author: "João", text: "Ficou muito mais rápido mesmo!" },
      { id: 2, author: "Ana", text: "Adorei o tema escuro 💙" },
    ],
  },
  {
    id: 2,
    author: "Carlos Silva",
    avatar: "/icon1.png",
    title: "Design Responsivo é essencial!",
    content:
      "Sempre testem suas aplicações em telas pequenas primeiro — isso muda tudo!",
    image: "/responsiveDesign.jpeg",
    date: "30/10/2025",
    likes: 89,
    shares: 14,
    comments: [
      { id: 1, author: "Julia", text: "Concordo totalmente!" },
      { id: 2, author: "Roberto", text: "Mobile-First é o caminho!" },
    ],
  },
];

export const friends: Friend[] = [
  { id: 1, name: "Ana Paula", photo: "/avatars/f1.png", mutualFriends: 12 },
  { id: 2, name: "João Mendes", photo: "/avatars/f2.png", mutualFriends: 8 },
  { id: 3, name: "Carla Nunes", photo: "/avatars/f3.png", mutualFriends: 5 },
  { id: 4, name: "Ricardo Lima", photo: "/avatars/f4.png", mutualFriends: 9 },
];

export const suggestions: Suggestion[] = [
  { id: 1, name: "Juliana Costa", photo: "/avatars/s1.png", mutualFriend: "Ana Paula" },
  { id: 2, name: "Felipe Souza", photo: "/avatars/s2.png", mutualFriend: "Carlos Silva" },
  { id: 3, name: "Beatriz Moraes", photo: "/avatars/s3.png", mutualFriend: "João Mendes" },
];
