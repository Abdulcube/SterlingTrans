import React from "react";
import { Box, Stack } from "@mui/material";
import MenuListItem from "./MenuListItem";

export const MenuList = ({
  items,
}: {
  items: { path: string; text: string }[];
}) => {
  return (
    <Box component="nav">
      <Stack
        direction="row"
        spacing={{ xs: 0.5, sm: 1 }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <MenuListItem key={index} text={item.text} path={`/${item.path}`} />
        ))}
      </Stack>
    </Box>
  );
};

export default MenuList;
