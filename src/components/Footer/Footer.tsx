import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Contact } from "./Contact";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "secondary.main", mt: 1 }}>
      {"Copyright © "}
      <Link
        color="secondary.main"
        href="https://github.com/Abdulcube/"
        target="_blank"
        rel="noopener"
      >
        Abdul.Source
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Contact />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: 0 },
          pt: { xs: 3, sm: 4, md: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "white",
        }}
      >
        <div>
          <Link color="secondary.main" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="secondary.main" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "secondary.main" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/mui"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};
