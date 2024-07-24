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
