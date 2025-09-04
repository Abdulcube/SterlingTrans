import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { GoogleMapComponent } from "./GoogleMap";

export const MapsTile = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        py: {
          xs: theme.spacing(4),
          sm: theme.spacing(5),
          md: theme.spacing(6),
        },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: theme.spacing(3), sm: theme.spacing(4) },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
            }}
          >
            Service Coverage Areas
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Comprehensive transportation coverage across Texas metropolitan
            areas
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: theme.spacing(1),
            overflow: "hidden",
            boxShadow: theme.shadows[2],
          }}
        >
          <GoogleMapComponent />
        </Box>
      </Container>
    </Box>
  );
};
