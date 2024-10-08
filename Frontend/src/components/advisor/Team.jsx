import React from 'react';

const advisorTree = {
  id: 1,
  name: "Senior Advisor",
  role: "Level 1",
  incentive: "₹1,000,000",
  badge: "Gold",
  subordinates: [
    {
      id: 2,
      name: "Mid-level Advisor 1",
      role: "Level 2",
      incentive: "₹500,000",
      badge: "Silver",
      subordinates: [
        {
          id: 4,
          name: "Junior Advisor 1",
          role: "Level 3",
          incentive: "₹200,000",
          badge: "Bronze",
        },
        {
          id: 5,
          name: "Junior Advisor 2",
          role: "Level 3",
          incentive: "₹150,000",
          badge: "Bronze",
        },
      ],
    },
    {
      id: 3,
      name: "Mid-level Advisor 2",
      role: "Level 2",
      incentive: "₹300,000",
      badge: "Silver",
      subordinates: [
        {
          id: 6,
          name: "Junior Advisor 3",
          role: "Level 3",
          incentive: "₹100,000",
          badge: "Bronze",
        },
      ],
    },
  ],
};

function Team() {
  const renderTree = (node) => (
    <div className="flex flex-col items-center">
      {/* Advisor Card */}
      <div className="advisor-card bg-white shadow-lg p-4 rounded-lg border border-gray-300 w-full max-w-xs text-center mb-6 transition-transform duration-300 transform hover:scale-105">
        
        <h3 className="text-sm md:text-lg font-bold text-primary">{node.name}</h3>
        <p className="text-xs md:text-sm text-gray-600">{node.role}</p>
        <p className="text-xs md:text-sm text-green-600">Incentive: {node.incentive}</p>
        <p className="text-xs md:text-sm text-yellow-600">Badge: {node.badge}</p>
      </div>

      {/* Render subordinates */}
      {node.subordinates && node.subordinates.length > 0 && (
        <div className="flex justify-center space-x-4">
          {node.subordinates.map((subordinate) => (
            <div key={subordinate.id} className="flex flex-col items-center">
              <div className="h-6 w-0.5 bg-gray-400 mx-auto" /> {/* Line to connect */}
              {renderTree(subordinate)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-16 bg-gray-50 py-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Team Structure
      </h2>
      <div className="flex justify-center">{renderTree(advisorTree)}</div>
    </div>
  );
}

export default Team;
