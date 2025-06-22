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
import { useGetRequest } from "../../common/Services/api";
import { useEffect } from "react";

export const HomePage = () => {
  const {data, fetchData} = useGetRequest();
  fetchData()
  useEffect(() => {
    console.log("Initial BE request: ",data)
  }, [data])
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
