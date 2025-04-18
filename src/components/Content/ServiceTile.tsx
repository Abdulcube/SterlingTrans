import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import LandingPage from "../../assets/LandingPage.png";
import { TileWrapper } from "./TileWrapper";
export const ServiceTile = () => {
  return (
    <TileWrapper>
      <TextBoxDesc
        title="Tiles about our dedication to customer service"
        description="Description of how we work for customer service."
        route="fleet"
      />
      <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
    </TileWrapper>
  );
};
