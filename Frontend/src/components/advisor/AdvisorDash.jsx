import React from 'react'
import { RiMedalFill } from "react-icons/ri";

function AdvisorDash() {
  const advisorData = {
    name: 'Abhishek',
    email: 'ashd@gmail.com',
    phone: '8558548499',
    badge: 'Gold',
    totalIncentive: 3600,
    pan: 'ABC123',
    aadhaar: '123456789012',
    clientsAdded: 12,
    leadsConverted: 8,
    successRate: 66,
    recentActivities: [
      'Successfully helped [client name] secure a home loan for their dream home.',
      'Assisted [client name] with their financial planning and investment goals.',
      'Closed a deal worth ₹25 Lakhs for [client name].',
      'Converted 2 leads in the last quarter.',
    ],
    leads: 5,
    totalSales: '₹50,000',
    ongoingDeals: 3,
    completedDeals: 7,
  };

  return (
    <div className="mt-16 bg-gray-50">
     <div className="mt-16 bg-gray-50">
      <div className="container mx-auto p-8 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Profile Info */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{advisorData.name}</h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {advisorData.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> {advisorData.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Total Leads:</span> {advisorData.leads}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Total Sales:</span> {advisorData.totalSales}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Ongoing Deals:</span> {advisorData.ongoingDeals}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Completed Deals:</span> {advisorData.completedDeals}
            </p>
          </div>

          {/* Badge and Incentive */}
          <div className="col-span-1 flex flex-col justify-center items-center">
            <span className={`px-4 py-3 flex text-white text-xl font-semibold rounded-full ${advisorData.badge === 'Gold' ? 'bg-yellow-500' : 'bg-gray-400'}`}>
              <RiMedalFill size={32} className="mr-1" />
              {advisorData.badge} 
            </span>
            <span className="mt-6 text-xl font-semibold">Total Incentive: ₹{advisorData.totalIncentive}</span>
          </div>

          {/* PAN and Aadhaar Details */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">PAN:</span> {advisorData.pan}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Aadhaar:</span> {advisorData.aadhaar}
              </p>
              <a href="#edit" className="text-blue-500 hover:underline">Request Edit</a>
            </div>

            {/* Performance Metrics */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Clients Added:</span> {advisorData.clientsAdded}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Leads Converted:</span> {advisorData.leadsConverted}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Success Rate:</span> {advisorData.successRate}%
              </p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-span-1 md:col-span-3 mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="list-disc list-inside text-gray-700">
              {advisorData.recentActivities.map((activity, index) => (
                <li key={index} className="mb-2">{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdvisorDash;
