import { Box } from "@mui/material";
import {
  AboutTile,
  ContactTile,
  FleetTile,
  LocationsTile,
  ReviewTile,
  ServiceTile,
} from "../../components";
import { MapsTile } from "../../components/Maps/MapsTile";

export const HomePage = () => {
  return (
    <Box>
      <AboutTile />
      <ServiceTile />
      <LocationsTile />
      <MapsTile/>
      <FleetTile />
      <ReviewTile />
      <ContactTile />
    </Box>
  );
};
