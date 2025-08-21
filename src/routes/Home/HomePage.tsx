import { Box } from "@mui/material";
import {
  AboutTile,
  FleetTile,
  HeroSection,
  LocationsTile,
  ReviewTile,
  ServiceTile,
} from "../../components";
import { MapsTile } from "../../components/Maps/MapsTile";
import { CTABanner } from "../../common/BookBanner";
import { useGetRequest } from "../../common/Services/api";
import { useEffect } from "react";

export const HomePage = () => {
  const { data, fetchData } = useGetRequest();
  fetchData();
  useEffect(() => {
    console.log("Initial BE request: ", data);
  }, [data]);
  return (
    <Box>
      <HeroSection />
      <AboutTile />
      <ServiceTile />
      <LocationsTile />
      <MapsTile />
      <FleetTile />
      <ReviewTile />
      <Box sx={{ my: { xs: 4, sm: 5 } }}>
        <CTABanner />
      </Box>
    </Box>
  );
};
