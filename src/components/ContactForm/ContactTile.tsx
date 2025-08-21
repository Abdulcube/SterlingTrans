import { TileWrapper } from "../Content";
import { ImageFormat } from "../Content/subcomponent";
import LandingPage from "../../assets/LandingPage.png";
import { Box, Stack } from "@mui/material";
import { ContactForm } from "./ContactForm";

export const ContactTile = () => {
  return (
    <TileWrapper>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Stack direction="row" spacing={2}>
          <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
          <ContactForm />
        </Stack>
      </Box>
    </TileWrapper>
  );
};
