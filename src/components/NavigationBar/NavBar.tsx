import React from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import MenuList from "./MenuList";
import {BasicMenu} from "./Dropdown";

const NavBar = ({
  menuItems = [
    { text: "Home", path: "" },
    { text: "About", path: "about" },
    { text: "Locations", path: "locations" },
    { text: "Services", path: "services" },
    { text: "Contact", path: "contact" },
  ],
}: {
  menuItems?: { text: string; path: string }[];
}) => {
  return (
    <AppBar >
      <Toolbar variant="dense">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          spacing={2}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
            Sterling Trans
          </Typography>
          <MenuList items={menuItems} />
          <BasicMenu items={menuItems}/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
