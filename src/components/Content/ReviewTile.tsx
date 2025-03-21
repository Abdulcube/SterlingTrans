import { Box, IconButton } from "@mui/material";
import { CustomerReview } from "./subcomponent";
import { TileWrapper } from "./TileWrapper";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { reviews } from "./constants";


export const ReviewTile = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [slideIn, setSlideIn] = useState(true);

  const handleNext = () => {
    setDirection("right"); // Exit to the right, new content will enter from left
    setSlideIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
      setSlideIn(true);
    }, 300); // Duration of slide out animation
  };

  const handlePrev = () => {
    setDirection("left"); // Exit to the left, new content will enter from right
    setSlideIn(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setSlideIn(true);
    }, 300); // Duration of slide out animation
  };

  return (
    <TileWrapper>
      <Box
        sx={{ flexGrow: 1, overflow: "hidden", position: "relative" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton aria-label="left" onClick={handlePrev}>
          <ArrowBackIosNew />
        </IconButton>

        <Box sx={{ width: "80%", position: "relative", overflow: "hidden" }}>
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
              <CustomerReview
                rating={reviews[index].rating}
                name={reviews[index].name}
                description={reviews[index].description}
              />
            </Box>
          </Slide>
        </Box>

        <IconButton aria-label="right" onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </TileWrapper>
  );
};
