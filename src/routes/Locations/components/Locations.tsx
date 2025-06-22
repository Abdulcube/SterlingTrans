import { ImageFormat, TextBoxDesc, TileWrapper } from "../../../components";

import Dallas from "../../../assets/Dallas.jpeg";
import Houston from "../../../assets/Houston.jpeg";
import { MapsTile } from "../../../components/Maps/MapsTile";
import { Stack } from "@mui/material";
export const Locations = () => {
  return (
    <>
      <TileWrapper>
        <Stack direction="row" spacing={3} alignItems="center" padding={2}>
          <ImageFormat imageAlt="test image" imageSrc={Dallas} />
          <TextBoxDesc
            title="Houston, TX"
            description="Servicing the Houston area with top-notch transportation services. 
            Flights in and out of George Bush Intercontinental Airport (IAH) and William P. Hobby Airport (HOU).
            We are also available for local events, weddings, and corporate transportation."
            route="contact"
            button="Contact Us"
          />
        </Stack>
      </TileWrapper>
      <TileWrapper>
        <Stack direction="row" spacing={3} alignItems="center" padding={2}>
          <ImageFormat imageAlt="test image" imageSrc={Houston} />
          <TextBoxDesc
            title="Dallas, TX"
            description="Servicing the Dallas Fort Worth area with top-notch transportation services.
            Flights in and out of Dallas/Fort Worth International Airport (DFW) and Dallas Love Field Airport (DAL).
            We are also available for local events, weddings, and corporate transportation."
            route="contact"
            button="Contact Us"

          />
        </Stack>
      </TileWrapper>

      <MapsTile />
    </>
  );
};
