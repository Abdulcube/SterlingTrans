import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import LandingPage from "../../assets/LandingPage.png";
import { TileWrapper } from "./TileWrapper";
export const AboutTile = () => {
  return (
    <TileWrapper>
      <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
      <TextBoxDesc
        title="Sterling Trans About Tile"
        description="Description of what the company is about, services and offerings."
        route="about"
      />
    </TileWrapper>
  );
};
