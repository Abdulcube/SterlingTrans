import { Container, Box, Typography } from "@mui/material";
import React from "react";

export const TileWrapper = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters={false}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "background.paper",
        }}
      >
        <Box width="100%">
          {title && (
            <Typography variant="h4" sx={{ mb: 2, px: { xs: 1, sm: 2 } }}>
              {title}
            </Typography>
          )}
          {children}
        </Box>
      </Box>
    </Container>
  );
};
