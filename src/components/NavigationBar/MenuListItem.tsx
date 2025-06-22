import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const MenuListItem = ({
  path,
  text,
  key,
}: {
  path: string;
  text: string;
  key: number;
}) => {
  return (
    <ListItem
      key={key}
      component={Link}
      to={path}
      sx={{
        color: "white",
        textDecoration: "none",
        "& .MuiListItemText-primary": { color: "white" },
      }}
    >
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuListItem;
