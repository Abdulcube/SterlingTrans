// components/GoogleMap.tsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 31.9686, // Center of Texas between Houston and Dallas
  lng: -99.9018,
};

const locations = [
  { lat: 32.7767, lng: -96.797, label: "Dallas" },
  { lat: 29.7604, lng: -95.3698, label: "Houston" },
];

export const GoogleMapComponent = () => {
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
