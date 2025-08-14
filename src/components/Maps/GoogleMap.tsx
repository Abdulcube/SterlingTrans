// components/GoogleMap.tsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMediaQuery, useTheme } from "@mui/material";

const center = {
  lat: 31.9686, // Center of Texas between Houston and Dallas
  lng: -99.9018,
};

const locations = [
  { lat: 32.7767, lng: -96.797, label: "Dallas" },
  { lat: 29.7604, lng: -95.3698, label: "Houston" },
];

export const GoogleMapComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerStyle = {
    width: "100%",
    height: isMobile ? "300px" : "400px",
    borderRadius: "8px",
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {locations.map((location, idx) => (
          <Marker
            key={idx}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
