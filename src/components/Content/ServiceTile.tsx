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
  FlightTakeoff as AirportIcon,
  TrackChanges as TrackingIcon,
  Assignment as ManifestIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  benefit: string;
  bullets: string[];
  primaryAction: string;
  primaryRoute: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  benefit,
  bullets,
  primaryAction,
  primaryRoute,
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
          p: { xs: theme.spacing(2), sm: theme.spacing(3) },
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
          <Box
            sx={{
              color: "primary.main",
              mr: theme.spacing(1.5),
              transition: "transform 0.2s ease-in-out",
              "@media (prefers-reduced-motion: no-preference)": {
                "&:hover": {
                  transform: "scale(1.1)",
                },
              },
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" component="h3" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: theme.spacing(2), lineHeight: 1.5 }}
        >
          {benefit}
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: theme.spacing(2),
            mb: theme.spacing(3),
            flexGrow: 1,
            "& li": {
              mb: theme.spacing(0.5),
            },
          }}
        >
          {bullets.map((bullet, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              sx={{ lineHeight: 1.4 }}
            >
              {bullet}
            </Typography>
          ))}
        </Box>

        <Button
          variant="contained"
          component={RouterLink}
          to={primaryRoute}
          fullWidth
          sx={{
            mt: "auto",
            minHeight: "44px",
            borderRadius: theme.spacing(0.75),
            fontWeight: "medium",
          }}
        >
          {primaryAction}
        </Button>
      </CardContent>
    </Card>
  );
};

export const ServiceTile = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <AirportIcon fontSize="large" />,
      title: "Airport Transfers",
      benefit: "Reliable transportation to and from all major airports",
      bullets: [
        "Flight tracking for on-time pickups",
        "Meet & greet at baggage claim",
      ],
      primaryAction: "Book Transfer",
      primaryRoute: "/contact",
    },
    {
      icon: <TrackingIcon fontSize="large" />,
      title: "Flight Tracking",
      benefit: "Real-time monitoring ensures we're ready when you land",
      bullets: ["Automatic delay adjustments", "No waiting or extra charges"],
      primaryAction: "Learn More",
      primaryRoute: "/services",
    },
    {
      icon: <ManifestIcon fontSize="large" />,
      title: "Manifest Creation",
      benefit: "Professional documentation for group and corporate travel",
      bullets: [
        "Detailed passenger records",
        "Compliance with corporate policies",
      ],
      primaryAction: "View Services",
      primaryRoute: "/services",
    },
    // {
    //   icon: <TransportIcon fontSize="large" />,
    //   title: "General Transport",
    //   benefit: "Point-to-point transportation for any occasion",
    //   bullets: [
    //     "Corporate events and meetings",
    //     "Special occasions and nights out",
    //   ],
    //   primaryAction: "Book Now",
    //   primaryRoute: "/contact",
    // },
    // {
    //   icon: <MeetupIcon fontSize="large" />,
    //   title: "Door-to-Door Service",
    //   benefit: "Convenient pickup and drop-off at your exact location",
    //   bullets: [
    //     "Hotel lobby and residence pickup",
    //     "Curbside service available",
    //   ],
    //   primaryAction: "Get Quote",
    //   primaryRoute: "/contact",
    // },
  ];

  return (
    <Box
      sx={{
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
            Premium Transportation Services
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
            Professional, reliable transport solutions for every journey
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
          {services.slice(0, 5).map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
