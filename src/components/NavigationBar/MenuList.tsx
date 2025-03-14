import React from "react";
import { Box, List } from "@mui/material";
import MenuListItem from "./MenuListItem";

export const MenuList = ({ items }: { items: { path: string, text: string}[] }) => {
  return (
    <Box component="nav">
      <List sx={{ display: "flex" }}>
        {items.map((item, index) => (
          <MenuListItem
            key={index}
            text={item.text}
            path={`/${item.path}`}
          />
        ))}
      </List>
    </Box>
  );
};

export default MenuList;
