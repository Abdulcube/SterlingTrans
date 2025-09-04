import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Card,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  DirectionsCar as CarIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { GoogleMapComponent } from "./GoogleMap";

export const MapsTile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAreaClick = (area: string) => {
    // Convert area name to URL-friendly format
    const locationParam = area.toLowerCase().replace(/\s+/g, '-');
    
    // Navigate and then scroll to top
    navigate(`/contact?location=${encodeURIComponent(locationParam)}`);
    
    // Force scroll to top immediately and after a delay to ensure it works
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  const serviceHighlights = [
    {
      icon: (
        <LocationIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />
      ),
      title: "Statewide Coverage",
      description: "Serving major Texas metropolitan areas",
    },
    {
      icon: <CarIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />,
      title: "Fleet Ready",
      description: "Multiple vehicle types available",
    },
    {
      icon: (
        <ScheduleIcon sx={{ fontSize: "1.25rem", color: "primary.main" }} />
      ),
      title: "24/7 Service",
      description: "Round-the-clock transportation",
    },
  ];

  const popularAreas = [
    "Dallas-Fort Worth",
    "Houston",
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
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: theme.spacing(4), sm: theme.spacing(5) },
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
            Service Coverage Areas
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              mb: theme.spacing(3),
            }}
          >
            Comprehensive transportation coverage across Texas metropolitan
            areas with professional service you can trust
          </Typography>

          {/* Service Highlights */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ mb: theme.spacing(2) }}
          >
            {serviceHighlights.map((highlight, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: theme.spacing(2),
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: theme.spacing(1),
                    }}
                  >
                    {highlight.icon}
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      sx={{ ml: theme.spacing(1) }}
                    >
                      {highlight.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                  >
                    {highlight.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Map Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Card
              sx={{
                borderRadius: theme.spacing(2),
                overflow: "hidden",
                boxShadow: theme.shadows[4],
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              <Box
                sx={{
                  height: { xs: "300px", sm: "400px", md: "450px" },
                  position: "relative",
                }}
              >
                <GoogleMapComponent />
              </Box>
            </Card>
          </Grid>

          {/* Service Areas Info */}
          <Grid item xs={12} lg={4}>
            <Card
              sx={{
                borderRadius: theme.spacing(2),
                boxShadow: theme.shadows[2],
                height: "100%",
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ p: theme.spacing(3) }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    mb: theme.spacing(2),
                  }}
                >
                  Popular Service Areas
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: theme.spacing(3), lineHeight: 1.6 }}
                >
                  We provide reliable transportation services across Texas's
                  major cities and metropolitan areas.
                </Typography>

                <Box sx={{ mb: theme.spacing(3) }}>
                  {popularAreas.map((area, index) => (
                    <Chip
                      key={index}
                      label={area}
                      variant="outlined"
                      clickable
                      onClick={() => handleAreaClick(area)}
                      sx={{
                        m: theme.spacing(0.5),
                        borderColor: "primary.main",
                        color: "primary.main",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                          transform: "translateY(-1px)",
                          boxShadow: theme.shadows[2],
                        },
                        "&:active": {
                          transform: "translateY(0px)",
                        },
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic" }}
                >
                  Don't see your area? Contact us for custom service coverage.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
