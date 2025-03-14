import { Box, Stack } from "@mui/material";
import { Footer } from "../Footer";
import React from "react";
import NavBar from "../NavigationBar/NavBar";

export const WebPage = ({ children }: { children: React.ReactNode }) => {
  return (

    <Box display={"flex"} height="100vh">
      <NavBar />
      <Stack component={"main"} flexGrow={1} width={100} height={100}>
        <Box>{children}</Box>
        <Footer />
      </Stack>
      
    </Box>
  );
};
