import React from "react";
import { Box, Typography, Paper } from "@mui/material";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export const ServiceItem = ({
  title,
  description,
  icon,
  index,
}: ServiceItemProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2.5, md: 3.5 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box
          sx={{
            color: "primary.main",
            mr: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "primary.light",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};
