import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import LandingPage from "../../assets/LandingPage.png";
import { TileWrapper } from "./TileWrapper";
import { Stack } from "@mui/material";
import { aboutUs } from "./constants";
export const AboutTile = () => {
  return (
    <TileWrapper title="About Us">
      <Stack direction="row" spacing={3} alignItems="center" padding={2}>
      <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
      <TextBoxDesc
        title="Sterling Trans About Tile"
        description={aboutUs}
        route="about"
      />
      </Stack>
    </TileWrapper>
  );
};
