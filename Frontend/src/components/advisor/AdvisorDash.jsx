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
    <div className="mt-16 bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl p-8 bg-white rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Profile Info */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-8">
            {/* Profile Picture */}
            <div className="md:w-1/4 mb-4 md:mb-0 md:mr-8">
      <img
        src={advisorData.profilePicture || 'https://via.placeholder.com/200'}
        alt="Advisor Profile"
        className="rounded-full w-full h-auto"
      />
    </div>
            
            {/* Profile Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{advisorData.name}</h1>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {advisorData.email}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> {advisorData.phone}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Total Leads:</span> {advisorData.leads}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Total Sales:</span> {advisorData.totalSales}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Ongoing Deals:</span> {advisorData.ongoingDeals}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Completed Deals:</span> {advisorData.completedDeals}
              </p>
            </div>
          </div>

          {/* Badge and Incentive */}
          <div className="col-span-1 flex flex-col justify-center items-center space-y-4">
            <span className={`flex items-center px-6 py-3 text-white text-xl font-semibold rounded-full shadow-lg ${advisorData.badge === 'Gold' ? 'bg-yellow-500' : 'bg-gray-400'} hover:shadow-xl transition-shadow duration-300`}>
              <RiMedalFill size={32} className="mr-2" />
              {advisorData.badge}
            </span>
            <span className="text-xl font-semibold text-gray-800">Total Incentive: ₹{advisorData.totalIncentive.toLocaleString()}</span>
          </div>

          {/* PAN and Aadhaar Details */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">PAN:</span> {advisorData.pan}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Aadhaar:</span> {advisorData.aadhaar}
              </p>
              <a href="#edit" className="text-blue-500 hover:underline">Request Edit</a>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Performance Metrics</h2>
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
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {advisorData.recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisorDash;
