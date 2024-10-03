import React, { useState } from 'react';
import { Lsvg } from '../indeximages'; // Import your SVG image

const PDFviewer = () => {
    // const [hoveredPlot, setHoveredPlot] = useState(null);
    const plots = [
      { id: 1, title: 'c-223', coords: '72,232,84,241', customer: 'John Doe' },
      { id: 2, title: 'c-222', coords: '83,244,73,251', customer: 'Jane Smith' },
      { id: 3, title: 'c-221', coords: '71,252,83,261', customer: 'Robert Brown' }
    ];
  
    // const handleMouseEnter = (plot) => {
    //   setHoveredPlot(plot);
    // };
  
    // const handleMouseLeave = () => {
    //   setHoveredPlot(null);
    // };
  
    return (
      <div className="relative">
       
        <img src={Lsvg} useMap="#image-map"  />

     <map name="image-map">
     {/* <area target="_self" alt="c-223" title="c-223" href="" coords="72,232,84,241" shape="rect"/> */}
      {  
     
        plots.map((plt)=>(
            <area 
            key={plt.id}
            target='_self'
            alt={plt.title}
            href=''
            coords={plt.coords}
            shape='rect'

            />

        ))

      }



    </map>
  
       
        {/* {hoveredPlot && (
          <div className="absolute bg-white p-2 border rounded shadow-lg z-50"
               style={{
                 top: '10px',  // Adjust tooltip position as needed
                 left: '10px',
               }}>
            <p>Customer: {hoveredPlot.customer}</p>
          </div>
        )} */}
      </div>
    );
  };
  

export default PDFviewer;
