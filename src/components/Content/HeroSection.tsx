// HeroSection.tsx
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import LandingPage from "../../assets/LandingPage.png";
export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "60vh", sm: "80vh", md: "100vh" },
        width: "100%",
        backgroundImage: LandingPage, // Change to your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }}
    >
      <Stack
        sx={{
          height: "100%",
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
        alignItems="center"
      >
        {/* Left Column: Logo */}
        <Stack sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/your-logo.png" // Replace with your logo path
            alt="Logo"
            sx={{ width: "150px", maxWidth: "80%", mb: 2 }}
          />
        </Stack>

        {/* Right Column: Text */}
        <Stack
          sx={{
            textAlign: { xs: "center", md: "left" },
            padding: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            }}
          >
            Sterling Trans
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mt: { xs: 1, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            Premium Transportation Services
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
