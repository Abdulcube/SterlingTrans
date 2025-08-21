import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import LandingPage from "../../assets/LandingPage.png";
import { TileWrapper } from "./TileWrapper";
import { Stack } from "@mui/material";
import { service } from "./constants";
export const ServiceTile = () => {
  return (
    <TileWrapper>
      <Stack direction="row" spacing={3} alignItems="center" padding={2}>
        <TextBoxDesc
          title="Our Commitment to Service"
          description={service}
          route="fleet"
        />
        <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
      </Stack>
    </TileWrapper>
  );
};
