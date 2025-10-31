// src/components/Comments.tsx
import React from "react";
import RatingStars from "./RatingStars";

interface Comment {
  id: number;
  user: string;
  date: string;
  message: string;
  rating: number;
}

interface CommentsProps {
  comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <section className="comments-section">
      <h3>Comentários de Usuários</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-header">
            <strong>{comment.user}</strong>
            <span className="comment-date">
              {new Date(comment.date).toLocaleDateString("pt-BR")}
            </span>
          </div>
          <RatingStars rating={comment.rating} />
          <p className="comment-message">{comment.message}</p>
        </div>
      ))}
    </section>
  );
};

export default Comments;
