import React, { useState, useRef, useEffect } from 'react';
import { Lsvg } from '../indeximages'; // Your CAD image

const PDFviewer = () => {
    const [hoveredPlot, setHoveredPlot] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const imageRef = useRef(null);

    const plots = [
        { id: 1, x: 120, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 140, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 120, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 140, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 120, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 140, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 120, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 140, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 120, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 140, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 120, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 140, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 120, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 140, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 120, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 140, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 120, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 140, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 120, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 140, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 120, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x: 140, y: 462, width: 20, height: 17, customer: "Jane Smith" },



        { id: 1, x: 171, y: 328, width: 20, height: 17, customer: "John Doe" },
        { id: 2, x: 191, y: 328, width: 20, height: 17, customer: "Jane Smith" },
        { id: 3, x: 171, y: 345, width: 20, height: 13, customer: "John Doe" },
        { id: 4, x: 191, y: 345, width: 20, height: 13, customer: "Jane Smith" },
        { id: 5, x: 171, y: 358, width: 20, height: 13, customer: "John Doe" },
        { id: 6, x: 191, y: 358, width: 20, height: 13, customer: "Jane Smith" },
        { id: 7, x: 171, y: 371, width: 20, height: 13, customer: "John Doe" },
        { id: 8, x: 191, y: 371, width: 20, height: 13, customer: "Jane Smith" },
        { id: 9, x: 171, y: 384, width: 20, height: 13, customer: "John Doe" },
        { id: 10, x: 191, y: 384, width: 20, height: 13, customer: "Jane Smith" },
        { id: 11, x: 171, y: 397, width: 20, height: 13, customer: "John Doe" },
        { id: 12, x: 191, y: 397, width: 20, height: 13, customer: "Jane Smith" },
        { id: 13, x: 171, y: 410, width: 20, height: 13, customer: "John Doe" },
        { id: 14, x: 191, y: 410, width: 20, height: 13, customer: "Jane Smith" },
        { id: 15, x: 171, y: 423, width: 20, height: 13, customer: "John Doe" },
        { id: 16, x: 191, y: 423, width: 20, height: 13, customer: "Jane Smith" },
        { id: 17, x: 171, y: 436, width: 20, height: 13, customer: "John Doe" },
        { id: 18, x: 191, y: 436, width: 20, height: 13, customer: "Jane Smith" },
        { id: 19, x: 171, y: 449, width: 20, height: 13, customer: "John Doe" },
        { id: 20, x: 191, y: 449, width: 20, height: 13, customer: "Jane Smith" },
        { id: 21, x: 171, y: 462, width: 20, height: 17, customer: "John Doe" },
        { id: 22, x:191, y: 462, width: 20, height: 17, customer: "Jane Smith" },
        // Add more plot data here
    ];

    const handleImageLoad = () => {
        if (imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            setImageSize({ width, height });
        }
    };

    // Update image size on window resize
    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                const { width, height } = imageRef.current.getBoundingClientRect();
                setImageSize({ width, height });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleHover = (plot) => {
        setHoveredPlot(plot);
    };

    const handleMouseLeave = () => {
        setHoveredPlot(null);
    };

    // Function to calculate responsive positioning
    const calculatePosition = (plot) => {
        const originalImageWidth = 1000; // Set to your original image's width
        const originalImageHeight = 1200; // Set to your original image's height

        // Calculate relative positions based on current image size
        const xRatio = imageSize.width / originalImageWidth;
        const yRatio = imageSize.height / originalImageHeight;

        return {
            top: `${plot.y * yRatio}px`,
            left: `${plot.x * xRatio}px`,
            width: `${plot.width * xRatio}px`,
            height: `${plot.height * yRatio}px`
        };
    };

    return (
        <div className="relative">
            <img
                src={Lsvg}
                alt="CAD Plot"
                ref={imageRef}
                onLoad={handleImageLoad}
                className="w-full h-auto"
            />

            {/* Overlay Buttons for Plots */}
            {imageSize.width && plots.map(plot => (
                <div
                    key={plot.id}
                    className="absolute bg-primary border-[1px] bg-opacity-10 hover:bg-opacity-75 transition-all"
                    style={calculatePosition(plot)}
                    onMouseEnter={() => handleHover(plot)}
                    onMouseLeave={handleMouseLeave}
                ></div>
            ))}

            {/* Tooltip to show customer details on hover */}
            {hoveredPlot && (
                <div
                    className="absolute bg-white border p-2 rounded shadow-lg"
                    style={{
                        top: `${hoveredPlot.y * (imageSize.height / 1200) + hoveredPlot.height * (imageSize.height / 1200) + 10}px`,
                        left: `${hoveredPlot.x * (imageSize.width / 1000)}px`,
                    }}
                >
                    <p className="text-sm font-medium">Customer: {hoveredPlot.customer}</p>
                </div>
            )}
        </div>
    );
};

export default PDFviewer;