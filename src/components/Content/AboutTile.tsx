import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Button,
  useTheme,
} from "@mui/material";
import {
  VerifiedUser as LicensedIcon,
  Schedule as DispatchIcon,
  EmojiTransportation as DriversIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import LandingPage from "../../assets/LandingPage.png";

export const AboutTile = () => {
  const theme = useTheme();

  const proofPoints = [
    {
      icon: (
        <LicensedIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />
      ),
      text: "Licensed & fully insured",
    },
    {
      icon: (
        <DispatchIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />
      ),
      text: "24/7 dispatch and support",
    },
    {
      icon: <DriversIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />,
      text: "Professional, vetted drivers",
    },
  ];

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
        <Card
          elevation={1}
          sx={{
            borderRadius: theme.spacing(1.5),
            overflow: "hidden",
            background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  p: {
                    xs: theme.spacing(3),
                    sm: theme.spacing(4),
                    md: theme.spacing(5),
                  },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
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
                    mb: theme.spacing(2),
                  }}
                >
                  About Sterling Trans
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    lineHeight: 1.6,
                    color: "text.primary",
                    mb: theme.spacing(3),
                    fontSize: { xs: "1rem", sm: "1.125rem" },
                  }}
                >
                  Professional, reliable transport service available 24/7 for
                  all your transportation needs. We monitor flight arrivals in
                  real-time to ensure prompt service the moment you land.
                </Typography>

                <Box sx={{ mb: theme.spacing(3) }}>
                  {proofPoints.map((point, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: theme.spacing(1.5),
                        "&:last-child": { mb: 0 },
                      }}
                    >
                      {point.icon}
                      <Typography
                        variant="body2"
                        sx={{
                          ml: theme.spacing(1.5),
                          fontWeight: "medium",
                          color: "text.primary",
                        }}
                      >
                        {point.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/about"
                  sx={{
                    alignSelf: { xs: "stretch", sm: "flex-start" },
                    minHeight: "44px",
                    borderRadius: theme.spacing(0.75),
                    fontWeight: "medium",
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                    },
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: { xs: "250px", md: "100%" },
                  minHeight: { md: "400px" },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={LandingPage}
                  alt="Sterling Trans professional transport service"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: {
                      xs: 0,
                      md: `0 ${theme.spacing(1.5)} ${theme.spacing(1.5)} 0`,
                    },
                    transition: "transform 0.3s ease-in-out",
                    "@media (prefers-reduced-motion: no-preference)": {
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};
