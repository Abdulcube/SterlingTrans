import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Schedule as HoursIcon,
  LocalAirport as AirportIcon,
  Directions as DirectionsIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

interface LocationCardProps {
  title: string;
  subtitle: string;
  highlights: string[];
  locationRoute: string;
  directionsUrl: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  title,
  subtitle,
  highlights,
  locationRoute,
  directionsUrl,
}) => {
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.spacing(1),
        transition: "all 0.2s ease-in-out",
        "@media (prefers-reduced-motion: no-preference)": {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.shadows[4],
          },
        },
        "&:focus-within": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: theme.spacing(2.5), sm: theme.spacing(3) },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: theme.spacing(2),
          }}
        >
          <LocationIcon
            sx={{
              color: "primary.main",
              mr: theme.spacing(1.5),
              fontSize: "1.75rem",
            }}
          />
          <Box>
            <Typography variant="h5" component="h3" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: theme.spacing(3), flexGrow: 1 }}>
          {highlights.map((highlight, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: theme.spacing(1.5),
                "&:last-child": { mb: 0 },
              }}
            >
              {index === 0 && (
                <AirportIcon
                  sx={{
                    fontSize: "1.125rem",
                    color: "primary.main",
                    mr: theme.spacing(1),
                  }}
                />
              )}
              {index === 1 && (
                <HoursIcon
                  sx={{
                    fontSize: "1.125rem",
                    color: "primary.main",
                    mr: theme.spacing(1),
                  }}
                />
              )}
              {index === 2 && (
                <LocationIcon
                  sx={{
                    fontSize: "1.125rem",
                    color: "primary.main",
                    mr: theme.spacing(1),
                  }}
                />
              )}
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.4,
                  color: "text.primary",
                }}
              >
                {highlight}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: theme.spacing(1.5),
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="contained"
            component={RouterLink}
            to={locationRoute}
            sx={{
              flex: 1,
              minHeight: "44px",
              borderRadius: theme.spacing(0.75),
              fontWeight: "medium",
            }}
          >
            View Location
          </Button>
          <Button
            variant="outlined"
            component="a"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DirectionsIcon />}
            sx={{
              flex: 1,
              minHeight: "44px",
              borderRadius: theme.spacing(0.75),
              fontWeight: "medium",
            }}
          >
            Directions
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export const LocationsTile = () => {
  const theme = useTheme();

  const locations = [
    {
      title: "Houston, TX",
      subtitle: "Serving Greater Houston Area",
      highlights: [
        "George Bush Intercontinental Airport (IAH) & William P. Hobby Airport (HOU) service",
        "24/7 availability",
        "Curbside pickup available",
      ],
      locationRoute: "/locations#houston",
      directionsUrl: "https://maps.google.com/?q=Houston+TX",
    },
    {
      title: "Dallas, TX",
      subtitle: "Serving Greater Dallas-Fort Worth",
      highlights: [
        "Dallas Fort Worth International Airport(DFW) & Love Field service",
        "24/7 availability",
        "Curbside pickup available",
      ],
      locationRoute: "/locations#dallas",
      directionsUrl: "https://maps.google.com/?q=Dallas+TX",
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
            Service Locations
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
            Premium transportation coverage across Texas
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {locations.map((location, index) => (
            <Grid item xs={12} md={6} key={index}>
              <LocationCard {...location} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
