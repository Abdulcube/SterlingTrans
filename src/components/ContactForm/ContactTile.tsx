import { TileWrapper } from "../Content";
import { ImageFormat } from "../Content/subcomponent";
import exampleImage from "../../assets/exampleImage.png";
import { Stack } from "@mui/material";
import { ContactForm } from "./Contact";

export const ContactTile = () => {
  return (
    <TileWrapper>
      <Stack direction="row" spacing={2}>
        <ImageFormat imageAlt="test image" imageSrc={exampleImage} />
        <ContactForm />
      </Stack>
    </TileWrapper>
  );
};
