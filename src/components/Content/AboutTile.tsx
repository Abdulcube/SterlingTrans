import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import exampleImage from "../../assets/exampleImage.png";
import { TileWrapper } from "./TileWrapper";
export const AboutTile = () => {
  return (
    <TileWrapper>
      <ImageFormat imageAlt="test image" imageSrc={exampleImage} />
      <TextBoxDesc
        title="Sterling Trans About Tile"
        description="Description of what the company is about, services and offerings."
        route="about"
      />
    </TileWrapper>
  );
};
