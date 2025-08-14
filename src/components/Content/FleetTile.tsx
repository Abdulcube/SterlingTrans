import { TileWrapper } from "./TileWrapper";
import { ImageOverText } from "./subcomponent";
import { Stack } from "@mui/material";
import bmw from "../../assets/bmw.png";
// import LandingPage  from "../../assets/LandingPage.png"
import Sprinter from "../../assets/Sprinter.png";
import Suburban from "../../assets/Suburban.png";
export const FleetTile = () => {
  return (
    <TileWrapper>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        sx={{ padding: { xs: 1, sm: 2 } }}
      >
        <ImageOverText image={bmw} route={"fleet"} title={"Suburban"} />
        <ImageOverText image={Sprinter} route={"fleet"} title={"Sprinter"} />
        <ImageOverText image={Suburban} route={"fleet"} title={"Highlander"} />
      </Stack>
    </TileWrapper>
  );
};
