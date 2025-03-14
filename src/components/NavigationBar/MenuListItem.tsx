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
    <ListItem key={key} component={Link} to={path}>
      <ListItemText color="white" primary={text} />
    </ListItem>
  );
};

export default MenuListItem;
