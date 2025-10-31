import React from "react";
import { posts } from "../data/socialData";
import PostCard from "./Post";
import { Box } from "@mui/material";

export default function Feed() {
  return (
    <Box>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}
