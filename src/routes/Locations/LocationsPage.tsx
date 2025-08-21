import { Box } from "@mui/material";
import { Locations } from "./components";
import { CTABanner } from "../../common/BookBanner";
import { WebPage } from "../../common/WebPage";

export const LocationsPage = () => {
  return (
    <WebPage>
      <Locations />
      <Box sx={{ mt: 6 }}>
        <CTABanner />
      </Box>
    </WebPage>
  );
};
