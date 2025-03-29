// import { useEffect, useState } from "react";
import { GoogleMapComponent } from "./GoogleMap";
import { TileWrapper } from "../Content";

export const MapsTile = () => {

  return (
    <TileWrapper>
      {/* <h1>Maps</h1>
      <h2>{index}</h2> */}
      <GoogleMapComponent />
    </TileWrapper>
  );
};
