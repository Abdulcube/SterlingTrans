import { ImageFormat } from "./subcomponent/ImageFormat";
import { TextBoxDesc } from "./subcomponent/TextBoxDesc";
import LandingPage from "../../assets/LandingPage.png";
import { TileWrapper } from "./TileWrapper";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { aboutUs } from "./constants";
export const AboutTile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TileWrapper title="About Us">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        padding={{ xs: 1, sm: 2 }}
      >
        <ImageFormat imageAlt="test image" imageSrc={LandingPage} />
        <TextBoxDesc
          title={isMobile ? undefined : "About Us"}
          description={aboutUs}
        />
      </Stack>
    </TileWrapper>
  );
};
