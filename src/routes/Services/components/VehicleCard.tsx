import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface VehicleCardProps {
  title: string;
  image: string;
  capacity: string;
  description: string;
}

export const VehicleCard = ({
  title,
  image,
  capacity,
  description,
}: VehicleCardProps) => {
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt={title}
        sx={{
          aspectRatio: "16/10",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          fontWeight="medium"
        >
          {capacity}
        </Typography>
        <Typography variant="body2" paragraph sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
        <Button
          component={RouterLink}
          to={`/booking?vehicle=${title}`}
          variant="outlined"
          sx={{
            alignSelf: "flex-start",
            minHeight: "44px",
            minWidth: "44px",
            mt: "auto",
          }}
        >
          Request This Vehicle
        </Button>
      </CardContent>
    </Card>
  );
};
