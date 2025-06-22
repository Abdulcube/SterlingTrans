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
        <Typography variant="body2" color="secondary.main" sx={{ fontWeight: "medium" }}>
          Navigate
        </Typography>
        <Link
          component={RouterLink}
          to="/"
          color="secondary.main"
          variant="body2"
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="secondary.main"
          variant="body2"
        >
          About Us
        </Link>
        <Link
          component={RouterLink}
          to="/services"
          color="secondary.main"
          variant="body2"
        >
          Services
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          color="secondary.main"
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
        <Typography variant="body2" color="secondary.main" sx={{ fontWeight: "medium" }}>
          Locations
        </Typography>
        <Link color="secondary.main" variant="body2" href="Locations">
          Dallas
        </Link>
        <Link color="secondary.main" variant="body2" href="Locations">
          Houston
        </Link>
        <Link color="secondary.main" variant="body2" href="Locations">
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
        <Typography variant="body2" color="secondary.main" sx={{ fontWeight: "medium" }}>
          Contact
        </Typography>
        <Link color="secondary.main" variant="body2" href="#">
          +1(800) 347-0577
        </Link>
        <Link color="secondary.main" variant="body2" href="#">
          Dallas@ridesterling.com
        </Link>
      </Box>
    </Box>
  );
};
