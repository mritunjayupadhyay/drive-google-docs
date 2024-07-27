import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer ref={mapRef} style={{height: "100vh", width: "100vw"}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default SimpleMap;