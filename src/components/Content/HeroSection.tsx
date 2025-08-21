// HeroSection.tsx
import React from "react";
import { Box, Typography, Stack, Button, Container } from "@mui/material";
import LandingPage from "../../assets/LandingPage.png";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: { xs: "80vh", sm: "90vh", md: "100vh" },
        width: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${LandingPage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <Container maxWidth="lg">
        <Stack
          spacing={{ xs: 3, sm: 5 }}
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "60%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: "-0.02em",
            }}
          >
            Reliable Transport Anytime, Anywhere
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              fontWeight: 400,
              maxWidth: "90%",
              mx: { xs: "auto", md: 0 },
              opacity: 0.9,
            }}
          >
            24/7 airport pickups, scheduled drop-offs, and premium vehicles.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            sx={{
              mt: { xs: 3, sm: 5 },
              width: "100%",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                py: { xs: 1, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                borderRadius: "4px",
                textTransform: "none",
                minWidth: "160px",
                minHeight: "48px",
              }}
            >
              Book a Ride
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate("/services")}
              sx={{
                py: { xs: 1, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                borderRadius: "4px",
                textTransform: "none",
                minWidth: "160px",
                minHeight: "48px",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
