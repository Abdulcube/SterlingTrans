import { Container, Box } from "@mui/material";
import React from "react";

export const TileWrapper = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
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
        <Box width="100%">
          {/* {title && <Typography variant="h3" sx={{paddingLeft:2}}>{title}</Typography>} */}
          {children}
        </Box>
      </Box>
    </Container>
  );
};
