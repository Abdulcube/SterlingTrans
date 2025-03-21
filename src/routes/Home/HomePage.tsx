import { Box } from "@mui/material";
import { AboutTile, ReviewTile, ServiceTile } from "../../components";

export const HomePage = () => {
  return (
    <Box>
      <AboutTile />
      <ServiceTile />
      <ReviewTile />
    </Box>
  );
};
