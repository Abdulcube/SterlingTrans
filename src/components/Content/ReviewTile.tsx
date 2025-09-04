import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { reviews } from "./constants";

interface ReviewCardProps {
  rating: number;
  name: string;
  description: string;
  isCarousel?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  name,
  description,
  isCarousel = false,
}) => {
  const theme = useTheme();

  return (
    <Card
      elevation={isCarousel ? 0 : 1}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: theme.spacing(1),
        backgroundColor: isCarousel ? "transparent" : "background.paper",
        border: isCarousel ? `1px solid ${theme.palette.divider}` : "none",
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
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              sx={{
                fontSize: "1.25rem",
                color: index < rating ? "warning.main" : "action.disabled",
                mr: theme.spacing(0.25),
              }}
            />
          ))}
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: theme.spacing(2),
            flexGrow: 1,
            lineHeight: 1.6,
            fontStyle: "italic",
            color: "text.primary",
          }}
        >
          "{description}"
        </Typography>

        <Typography
          variant="body2"
          fontWeight="medium"
          color="text.secondary"
          sx={{ mt: "auto" }}
        >
          — {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const ReviewTile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [slideIn, setSlideIn] = useState(true);

  const handleNext = () => {
    setDirection("right");
    setSlideIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
      setSlideIn(true);
    }, 300);
  };

  const handlePrev = () => {
    setDirection("left");
    setSlideIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setSlideIn(true);
    }, 300);
  };

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
            What Our Clients Say
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
            Trusted by aviation professionals and travelers across Texas
          </Typography>
        </Box>

        {isMobile ? (
          // Mobile: Carousel view
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: theme.spacing(2),
              }}
            >
              <IconButton
                onClick={handlePrev}
                aria-label="Previous review"
                sx={{
                  minWidth: "44px",
                  minHeight: "44px",
                  "&:focus": {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: "2px",
                  },
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Box
                sx={{
                  flex: 1,
                  overflow: "hidden",
                  maxWidth: "400px",
                }}
              >
                <Slide
                  direction={direction}
                  in={slideIn}
                  mountOnEnter
                  unmountOnExit
                  timeout={300}
                  easing={{
                    enter: "cubic-bezier(0.0, 0, 0.2, 1)",
                    exit: "cubic-bezier(0.4, 0, 1, 1)",
                  }}
                >
                  <Box>
                    <ReviewCard
                      rating={reviews[index].rating}
                      name={reviews[index].name}
                      description={reviews[index].description}
                      isCarousel={true}
                    />
                  </Box>
                </Slide>
              </Box>

              <IconButton
                onClick={handleNext}
                aria-label="Next review"
                sx={{
                  minWidth: "44px",
                  minHeight: "44px",
                  "&:focus": {
                    outline: `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: "2px",
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        ) : (
          // Desktop: Grid view
          <Grid container spacing={{ xs: 2, sm: 3, md: 3 }}>
            {reviews.map((review, reviewIndex) => (
              <Grid item xs={12} md={4} key={reviewIndex}>
                <ReviewCard
                  rating={review.rating}
                  name={review.name}
                  description={review.description}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: theme.spacing(3), sm: theme.spacing(4) },
          }}
        >
          <Button
            variant="outlined"
            component={RouterLink}
            to="/reviews"
            sx={{
              minHeight: "44px",
              borderRadius: theme.spacing(0.75),
              fontWeight: "medium",
              borderWidth: "2px",
              "&:hover": {
                borderWidth: "2px",
              },
            }}
          >
            See More Reviews
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
