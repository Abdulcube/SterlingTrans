import { Container, Box } from "@mui/material";
import React from "react";

export const TileWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          py: 4,
          backgroundColor: "background.paper",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
