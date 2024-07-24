import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMapEvents, useMap,ZoomControl, Circle  } from 'react-leaflet';

import L from 'leaflet';

const MapEventHandler = ({ setZoomLevel,setIconSize  }) => {
  useMapEvents({
      zoomend: (event) => {
          setZoomLevel(event.target.getZoom());
      // Adjust marker size based on zoom level
      const newSize = getMarkerSize(event.target.getZoom());
      setIconSize([newSize, newSize]);
        },
  });
  return null;
};
const getMarkerSize = (zoom) => {
  if(zoom===0){
    console.log("zero zero,zoom",zoom)
    return 4;
  }
// Define how the marker size should change with zoom level
// This is just an example, you can adjust the formula as needed
console.log("10, 50 - zoom * 2",Math.max(10, zoom * 4))
return Math.max(8, zoom * 4); // Minimum size 10, maximum size 50
};

  const Fetch_GeoJson_Data = () => {
const [zoomLevel, setZoomLevel] = useState(10); // Initial zoom level

  const [iconSize, setIconSize] = useState([50, 50]); // Initial icon size

     // Create a custom icon with the dynamic size
     const customIcon = new L.Icon({
      iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', // Change to your marker URL
      iconSize: iconSize,
      iconAnchor: [iconSize[0] / 2, iconSize[1]], // Anchor the icon to its center
      popupAnchor: [0, -iconSize[1] / 2], // Position the popup above the marker
  });

useEffect(()=>{
  console.log("zoomLevel",zoomLevel);
},[zoomLevel])
  return (
    <>
  <MapContainer
       center={[12.2, 80.27]} 
       zoom={zoomLevel} 
       zoomControl={false}
       style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <ZoomControl position="bottomright" />

          <Marker 
          position={[12.2, 80.27]} 
          icon={customIcon} >
                <Tooltip
                  
                >
                  hi wellcome
                </Tooltip>
            </Marker>

         <MapEventHandler setZoomLevel={setZoomLevel} setIconSize={setIconSize}/>
         <Circle
                center={[12.2, 80.27]}
                radius={250000} // Radius in meters (250 km)
                color="blue"
            />
            </MapContainer>
            )
            };
            export default Fetch_GeoJson_Data;
