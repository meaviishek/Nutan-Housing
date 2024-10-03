import React, { useState } from 'react';
import { Lsvg } from '../indeximages';


const PDFviewer = () => {
    const [hoveredPlot, setHoveredPlot] = useState(null);

    const plots = [
        { id: 1, x: 180, y: 580, width: 31, height: 31, customer: "John Doe" },
        { id: 2, x: 212, y: 580, width: 31, height: 31, customer: "Jane Smith" },
        { id: 3, x: 180, y: 610, width: 31, height: 26, customer: "John Doe" },
        { id: 4, x: 212, y: 610, width: 31, height: 26, customer: "Jane Smith" },
        { id: 5, x: 180, y: 635, width: 31, height: 24, customer: "John Doe" },
        { id: 6, x: 212, y: 635, width: 31, height: 24, customer: "Jane Smith" },
        { id: 7, x: 180, y: 660, width: 31, height: 24, customer: "John Doe" },
        { id: 8, x: 212, y: 660, width: 31, height: 24, customer: "Jane Smith" },
        { id: 9, x: 180, y: 680, width: 31, height: 24, customer: "John Doe" },
        { id: 10, x: 212, y: 680, width: 31, height: 24, customer: "Jane Smith" },
        { id: 11, x: 180, y: 705, width: 31, height: 24, customer: "John Doe" },
        { id: 12, x: 212, y: 705, width: 31, height: 24, customer: "Jane Smith" },
        { id: 13, x: 180, y: 730, width: 31, height: 24, customer: "John Doe" },
        { id: 14, x: 212, y: 730, width: 31, height: 24, customer: "Jane Smith" },
        { id: 15, x: 180, y: 750, width: 31, height: 24, customer: "John Doe" },
        { id: 16, x: 212, y: 750, width: 31, height: 24, customer: "Jane Smith" },
        { id: 17, x: 180, y: 775, width: 31, height: 24, customer: "John Doe" },
        { id: 18, x: 212, y: 775, width: 31, height: 24, customer: "Jane Smith" },
        { id: 19, x: 180, y: 795, width: 31, height: 24, customer: "John Doe" },
        { id: 20, x: 212, y: 795, width: 31, height: 24, customer: "Jane Smith" },
        { id: 21, x: 180, y: 820, width: 31, height: 31, customer: "John Doe" },
        { id: 22, x: 212, y: 820, width: 31, height: 31, customer: "Jane Smith" },
        // Add more plot data here
    ];

    const handleHover = (plot) => {
        setHoveredPlot(plot);
    };

    const handleMouseLeave = () => {
        setHoveredPlot(null);
    };

    return (
        <div className="relative">
            <img src={Lsvg} alt="CAD Plot" className="w-full h-auto" />

            {/* Overlay Buttons for Plots */}
            {plots.map(plot => (
                <div
                    key={plot.id}
                    className="absolute bg-primary border-[1px] bg-opacity-10 hover:bg-opacity-75 transition-all"
                    style={{
                        top: `${plot.y}px`,
                        left: `${plot.x}px`,
                        width: `${plot.width}px`,
                        height: `${plot.height}px`,
                    }}
                    onMouseEnter={() => handleHover(plot)}
                    onMouseLeave={handleMouseLeave}
                ></div>
            ))}

            {/* Tooltip to show customer details on hover */}
            {hoveredPlot && (
                <div
                    className="absolute bg-white border p-2 rounded shadow-lg"
                    style={{
                        top: `${hoveredPlot.y + hoveredPlot.height + 10}px`,
                        left: `${hoveredPlot.x}px`,
                    }}
                >
                    <p className="text-sm font-medium">Customer: {hoveredPlot.customer}</p>
                </div>
            )}
        </div>
    );
};

export default PDFviewer;
