import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Box } from "@mui/material";

const MenuListItem = ({
  path,
  text,
  key,
}: {
  path: string;
  text: string;
  key: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "44px",
        minWidth: "44px",
      }}
    >
      <Link
        component={RouterLink}
        to={path}
        underline="none"
        sx={{
          color: "white",
          padding: { xs: "4px 4px", sm: "4px 8px" },
          fontWeight: 500,
          fontSize: { xs: "0.875rem", sm: "1rem" },
          "&:hover": {
            color: "rgba(255, 255, 255, 0.85)",
          },
          "&:focus-visible": {
            outline: "2px solid white",
            outlineOffset: "2px",
          },
        }}
      >
        {text}
      </Link>
    </Box>
  );
};

export default MenuListItem;
