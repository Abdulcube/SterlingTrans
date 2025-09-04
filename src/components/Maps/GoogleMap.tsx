// components/GoogleMap.tsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 31.27, // Center of Texas between Houston and Dallas
  lng: -96.08,
};

const locations = [
  { lat: 32.7767, lng: -96.797, label: "Dallas" },
  { lat: 29.7604, lng: -95.3698, label: "Houston" },
];

export const GoogleMapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY || ""}
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
