import React from "react";
import { AppBar, Toolbar, Typography, Stack, useScrollTrigger } from "@mui/material";
import MenuList from "./MenuList";
import {BasicMenu} from "./Dropdown";


const ElevationScroll = ({children}: {children: React.ReactNode}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children as React.ReactElement, {
        elevation: trigger ? 4 : 0,
        sx: {
          backgroundColor: trigger ? "dark.pallette.primary.main" : "transparent", // Change background dynamically
          transition: "background-color 0.3s ease", // Smooth transition
        },
      })
    : null;
}

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
    <ElevationScroll >

    <AppBar>
      <Toolbar variant="dense" >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-around",
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
    </ElevationScroll>
  );
};

export default NavBar;
