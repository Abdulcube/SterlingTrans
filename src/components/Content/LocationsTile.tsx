import { TileWrapper } from "./TileWrapper";
import {  CenteredTextBoxDesc } from "./subcomponent";
import { Stack } from "@mui/material";
// import LandingPage  from "../../assets/LandingPage.png"

export const LocationsTile = () => {
  return (
    <TileWrapper>
      <Stack direction="row" spacing={3}>
        <CenteredTextBoxDesc title="Houston" description="Description of the Suburban." route="fleet" />
        <CenteredTextBoxDesc title="Dallas" description="Description of the Suburban." route="fleet" />
      </Stack>
    </TileWrapper>
  );
};