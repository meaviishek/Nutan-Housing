import React, { useState } from 'react';

// Updated advisor hierarchy with additional details
const advisorTree = {
  id: 1,
  name: "Advisor A",
  incentive: "₹2,000,000",
  leads: 50,
  badge: "Platinum",
  subordinates: [
    {
      id: 2,
      name: "Advisor B",
      incentive: "₹1,000,000",
      leads: 30,
      badge: "Gold",
      subordinates: [],
    },
    {
      id: 3,
      name: "Advisor C",
      incentive: "₹1,500,000",
      leads: 40,
      badge: "Silver",
      subordinates: [
        {
          id: 4,
          name: "Advisor D",
          incentive: "₹500,000",
          leads: 20,
          badge: "Bronze",
          subordinates: [],
        },
      ],
    },
  ],
};

// Function to get badge color
const getBadgeColor = (badge) => {
  switch (badge) {
    case 'Platinum':
      return 'bg-blue-400 text-white';
    case 'Gold':
      return 'bg-yellow-400 text-black';
    case 'Silver':
      return 'bg-gray-300 text-black';
    case 'Bronze':
      return 'bg-orange-400 text-black';
    default:
      return 'bg-gray-200 text-black';
  }
};

// Recursive component to render the tree
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false); // Start with nodes closed

  return (
    <li className="relative">
      <div
        className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {node.subordinates.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        )}
        <div className={`ml-2 rounded-full px-4 py-1 text-lg ${getBadgeColor(node.badge)}`}>{node.badge}</div>
        <span className="ml-4 text-xl font-bold">{node.name}</span>
      </div>

      {/* Display additional details */}
      <div className={`ml-8 ${isOpen ? 'block' : 'hidden'} text-base md:text-lg`}>
        <p>Incentive: {node.incentive}</p>
        <p>Total Leads: {node.leads}</p>
      </div>

      {isOpen && node.subordinates.length > 0 && (
        <ul className="ml-8 mt-2">
          {node.subordinates.map((subordinate) => (
            <TreeNode key={subordinate.id} node={subordinate} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Tree = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl"> {/* Set a maximum width for the tree */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Advisor Team Structure</h1>
        <ul className="ml-12"> {/* Increased left margin */}
          <TreeNode node={advisorTree} />
        </ul>
      </div>
    </div>
  );
};

export default Tree;
