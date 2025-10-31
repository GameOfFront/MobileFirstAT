import React from "react";
import { suggestions } from "../data/socialData";
import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";

export default function SuggestionsList() {
  return (
    <Paper sx={{ p: 2, bgcolor: "background.paper" }}>
      <Typography variant="h6" gutterBottom>
        Sugestões
      </Typography>
      <List>
        {suggestions.map((s) => (
          <ListItem key={s.id}>
            <ListItemAvatar>
              <Avatar src={s.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={s.name}
              secondary={`Amigo em comum: ${s.mutualFriend}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
