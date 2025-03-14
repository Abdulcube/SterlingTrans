import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {" "}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
          Navigate
        </Typography>
        <Link
          component={RouterLink}
          to="/"
          color="text.secondary"
          variant="body2"
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="text.secondary"
          variant="body2"
        >
          About Us
        </Link>
        <Link
          component={RouterLink}
          to="/services"
          color="text.secondary"
          variant="body2"
        >
          Services
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          color="text.secondary"
          variant="body2"
        >
          Contact
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
          Locations
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Dallas
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Houston
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          New Jersey
        </Link>
      </Box>
 
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
          Contact
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          +1(800) 347-0577
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Dallas@ridesterling.com
        </Link>
      </Box>
    </Box>
  );
};
