import { useState } from 'react';

const plotLayout = [
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45],
  [46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55],
  [56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65],
  [66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75],
  [76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85],
  [86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95],
  [96, 97, 98, 99, 100],
];

const Plot = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  const handleClick = (plot) => {
    setSelectedPlot(plot);
  };

  const closeModal = () => {
    setSelectedPlot(null);
  };

  return (
    <div className="container mx-auto  p-4 mt-24">
      {/* Render grid layout */}
      <div className="grid grid-cols-5 gap-4">
        {plotLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-4">
            {row.map((plot) => (
              <button
                key={plot}
                onClick={() => handleClick(plot)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Plot {plot}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for displaying customer details */}
      {selectedPlot && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg font-bold mb-4">Customer Details for Plot {selectedPlot}</h2>
            <p>Here are the details for customer in Plot {selectedPlot}...</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plot;
