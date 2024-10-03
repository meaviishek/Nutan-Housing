import React, { useState } from 'react';
import { Lsvg } from '../indeximages';

const ImageMap = () => {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const plots = [
    { id: 'c-223', title: 'c-223', coords: '72,232,84,241', customer: 'John Doe' },
    { id: 'c-222', title: 'c-222', coords: '83,244,73,251', customer: 'Jane Smith' },
    { id: 'c-221', title: 'c-221', coords: '71,252,83,261', customer: 'Robert Brown' }
  ];

  const handleMouseEnter = (plot) => {
    setHoveredPlot(plot);
  };

  const handleMouseLeave = () => {
    setHoveredPlot(null);
  };

  return (
    <div className="relative">
      {/* Display Image */}
      <img src={Lsvg} alt="Plot Map" useMap="#image-map"  />

      {/* Image Map */}
      <map name="image-map">
        {plots.map((plot) => (
          <area
            key={plot.id}
            alt={plot.title}
            title={plot.title}
            coords={plot.coords}
            shape="rect"
            href="#"
            onMouseEnter={() => handleMouseEnter(plot)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </map>

      {/* Tooltip for hovered plot */}
      {hoveredPlot && (
        <div className="absolute bg-white p-2 border rounded shadow-lg z-50"
             style={{
               top: '10px',  // Adjust tooltip position as needed
               left: '10px',
             }}>
          <p>Customer: {hoveredPlot.customer}</p>
        </div>
      )}
    </div>
  );
};

export default ImageMap;
