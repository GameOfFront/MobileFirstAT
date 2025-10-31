import React from "react";
import { friends } from "../data/socialData";
import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";

export default function FriendsList() {
  return (
    <Paper sx={{ p: 2, bgcolor: "background.paper" }}>
      <Typography variant="h6" gutterBottom>
        Amigos
      </Typography>
      <List>
        {friends.map((f) => (
          <ListItem key={f.id}>
            <ListItemAvatar>
              <Avatar src={f.photo} />
            </ListItemAvatar>
            <ListItemText primary={f.name} secondary={`${f.mutualFriends} amigos em comum`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
