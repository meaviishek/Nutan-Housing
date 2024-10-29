import React, { useEffect, useState } from 'react';
import { RiMedalFill } from "react-icons/ri";
import { Profile } from '..';

const AdvisorDash = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('advisorData');
    if (storedData) {
      const Data = JSON.parse(storedData);
      setData(Data);
      console.log("Data retrieved from localStorage:", Data);
    } else {
      console.log("No advisor data found in localStorage.");
    }
  }, []);

  return (
    <>
      {data ? (
        <div className="mt-16 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl p-6 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              
              {/* Profile Info */}
              <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                
                {/* Profile Picture */}
                <div className="hidden md:flex  md:w-1/4 mb-4 md:mb-0 md:mr-8">
      <img
        src={Profile}
        alt="Advisor Profile"
        className="rounded-full w-full h-auto"
      />
    </div>

                {/* Profile Details */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Email:</span> {data.email}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Phone:</span> {data.phoneNumber}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Total Leads:</span> {data.leads}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Total Sales:</span> {data.sales}
                  </p>
                </div>
              </div>

              {/* Badge and Incentive */}
              <div className="col-span-1 flex flex-col justify-center items-center space-y-4">
                <span
                  className={`flex items-center px-6 py-3 text-white text-xl font-semibold rounded-full shadow-lg transition-shadow duration-300
                    ${data?.badge === 'Platinum' ? 'bg-gray-300' : 
                      data?.badge === 'Gold' ? 'bg-yellow-500' : 
                      data?.badge === 'Silver' ? 'bg-gray-500' : 
                      data?.badge === 'Bronze' ? 'bg-orange-500' : 'bg-gray-400'}
                    hover:shadow-xl`}
                >
                  <RiMedalFill size={32} className="mr-2" />
                  {data?.badge}
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  Total Incentive: <span className='text-green-600 text-xl'>₹{data?.incentive}</span> 
                </span>
              </div>

              {/* Personal Information & Performance Metrics */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h2>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">PAN:</span> {data.pan}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Aadhaar:</span> {data.aadhar}
                  </p>
                  <a href="#edit" className="text-blue-500 hover:underline">Request Edit</a>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h2>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Clients Added:</span> {data.clientsAdded}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Leads Converted:</span> {data.leadsConverted}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Success Rate:</span> {data.successRate}%
                  </p>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="col-span-1 md:col-span-3 mt-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent Activities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {data?.recentActivities?.length ? data.recentActivities.map((activity, index) => (
                    <li key={index} className="pl-4">{activity}</li>
                  )) : (
                    <p className="text-gray-500">No recent activities available.</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default AdvisorDash;
