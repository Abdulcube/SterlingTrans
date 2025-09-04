import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import {
  People as PeopleIcon,
  Luggage as LuggageIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import bmw from "../../assets/bmw.png";
import Sprinter from "../../assets/Sprinter.png";
import Suburban from "../../assets/Suburban.png";

interface VehicleCardProps {
  image: string;
  name: string;
  passengers: string;
  luggage: string;
  comfort: string;
  primaryAction: string;
  primaryRoute: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  image,
  name,
  passengers,
  luggage,
  comfort,
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
        overflow: "hidden",
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
      <Box
        sx={{
          position: "relative",
          paddingTop: "60%", // 5:3 aspect ratio
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={`${name} vehicle`}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
            "@media (prefers-reduced-motion: no-preference)": {
              "&:hover": {
                transform: "scale(1.05)",
              },
            },
          }}
        />
      </Box>

      <CardContent
        sx={{
          p: { xs: theme.spacing(2.5), sm: theme.spacing(3) },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: theme.spacing(2) }}
        >
          {name}
        </Typography>

        <Box sx={{ mb: theme.spacing(2), flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: theme.spacing(1),
            }}
          >
            <PeopleIcon
              sx={{
                fontSize: "1.125rem",
                color: "primary.main",
                mr: theme.spacing(1),
              }}
            />
            <Typography variant="body2" fontWeight="medium">
              {passengers}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: theme.spacing(1.5),
            }}
          >
            <LuggageIcon
              sx={{
                fontSize: "1.125rem",
                color: "primary.main",
                mr: theme.spacing(1),
              }}
            />
            <Typography variant="body2" fontWeight="medium">
              {luggage}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            {comfort}
          </Typography>
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
            to="/fleet"
            sx={{
              flex: 1,
              minHeight: "44px",
              borderRadius: theme.spacing(0.75),
              fontWeight: "medium",
            }}
          >
            See Fleet
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/contact"
            sx={{
              flex: 1,
              minHeight: "44px",
              borderRadius: theme.spacing(0.75),
              fontWeight: "medium",
            }}
          >
            Request Vehicle
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export const FleetTile = () => {
  const theme = useTheme();

  const vehicles = [
    {
      image: Suburban,
      name: "Suburban",
      passengers: "Up to 6 passengers",
      luggage: "6-8 large bags",
      comfort:
        "Spacious luxury SUV perfect for airport transfers and group travel",
      primaryAction: "See Fleet",
      primaryRoute: "/fleet",
    },
    {
      image: Sprinter,
      name: "Sprinter Van",
      passengers: "Up to 14 passengers",
      luggage: "12-16 large bags",
      comfort: "Premium van ideal for larger groups and extended journeys",
      primaryAction: "See Fleet",
      primaryRoute: "/fleet",
    },
    {
      image: bmw,
      name: "Highlander",
      passengers: "Up to 7 passengers",
      luggage: "5-7 large bags",
      comfort: "Comfortable mid-size SUV for families and small groups",
      primaryAction: "See Fleet",
      primaryRoute: "/fleet",
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
            Our Premium Fleet
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
            Modern, well-maintained vehicles for every transportation need
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
          {vehicles.map((vehicle, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <VehicleCard {...vehicle} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
