import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  KeyboardArrowRight as ArrowIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonPath?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to Book Your Ride?",
  subtitle = "Get a quick quote and confirm in minutes.",
  buttonText = "Book Now",
  buttonPath = "/contact",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: { xs: 2.5, sm: 3 },
        pb: `calc(${theme.spacing(2.5)} + env(safe-area-inset-bottom, 0px))`,
        mb: { xs: 4, sm: 5, md: 6 }, // Added margin bottom for separation
        position: "relative", // For the pseudo-element
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -8,
          left: 0,
          right: 0,
          height: 8,
          backgroundColor: "background.default", // Uses the theme's default background color
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                variant="body1"
                sx={{
                  mt: 0.5,
                  opacity: 0.9,
                  maxWidth: "600px",
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          <Button
            component={RouterLink}
            to={buttonPath}
            variant="contained"
            color="secondary"
            size={isMobile ? "large" : "medium"}
            startIcon={<PhoneIcon />}
            endIcon={<ArrowIcon />}
            sx={{
              py: 1,
              px: { xs: 2, sm: 3 },
              fontSize: { xs: "0.95rem", sm: "1rem" },
              fontWeight: 600,
              minHeight: "44px",
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: "160px" },
              whiteSpace: "nowrap",
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
