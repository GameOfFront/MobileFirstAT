import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Post } from "../data/socialData";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Card sx={{ mb: 3, bgcolor: "#1e1e1e" }}>
      <CardHeader
        avatar={<Avatar src={post.avatar} />}
        title={post.author}
        subheader={post.date}
        slotProps={{
          subheader: {
            sx: { color: "gray" },
          },
        }}
      />
      <CardMedia component="img" height="200" image={post.image} alt={post.title} />
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>

        <Typography sx={{ mt: 1 }} variant="body2" color="gray">
          💬 {post.comments.length} comentários
        </Typography>

        {post.comments.map((c) => (
          <Typography key={c.id} variant="body2" sx={{ mt: 0.5 }}>
            <b>{c.author}:</b> {c.text}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="error">
          <FavoriteIcon />
        </IconButton>
        <Typography>{post.likes}</Typography>
        <IconButton color="primary">
          <ShareIcon />
        </IconButton>
        <Typography>{post.shares}</Typography>
      </CardActions>
    </Card>
  );
}
