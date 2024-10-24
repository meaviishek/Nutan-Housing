import React, { useEffect, useState } from 'react'
import { RiMedalFill } from "react-icons/ri";
import { Profile } from '..';

const AdvisorDash=()=> {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   const storedData = localStorage.getItem('advisorData');
  //   if (storedData) {
  //     const Data = JSON.parse(storedData);
  //     setAdvisorData(Data)
  //     console.log(Data.name,Data.email); // Check if data is correctly logged
  //   } else {
  //     console.error('No advisor data found in local storage');
  //   }
  // }, []);

  useEffect(() => {
    const storedData = localStorage.getItem('advisorData');
    if (storedData) {
        const Data = JSON.parse(storedData);
        setData(Data); // Set the retrieved data into state
        console.log("Data retrieved from localStorage:", Data); // Debugging log
    } else {
        console.log("No advisor data found in localStorage.");
    }
}, []); 

console.log("Rendered data:", data);
  return (
    <>
    {data ? (
    <div className="mt-16 bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl p-8 bg-white rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Profile Info */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-8">
            {/* Profile Picture */}
            <div className="md:w-1/4 mb-4 md:mb-0 md:mr-8">
      <img
        src={Profile}
        alt="Advisor Profile"
        className="rounded-full w-full h-auto"
      />
    </div>
            
            {/* Profile Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {data?.email}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> {data?.phoneNumber}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Total Leads:</span> {data?.leads}
              </p>
               <p className="text-gray-600 mb-2">
                <span className="font-semibold">Total Sales:</span> {data?.sales}
              </p> 
            
            </div>
          </div>

          {/* Badge and Incentive */}
          <div className="col-span-1 flex flex-col justify-center items-center space-y-4">
          <span className={`flex items-center px-6 py-3 text-white text-xl font-semibold rounded-full shadow-lg
  ${data?.badge === 'Platinum' ? 'bg-gray-300' : 
    data?.badge === 'Gold' ? 'bg-yellow-500' : 
    data?.badge === 'Silver' ? 'bg-gray-500' : 
    data?.badge === 'Bronze' ? 'bg-orange-500' : 'bg-gray-400'}
  hover:shadow-xl transition-shadow duration-300`}
>
              <RiMedalFill size={32} className="mr-2" />
              {data?.badge}
            </span>
            <span className="text-xl font-semibold text-gray-800">Total Incentive: ₹{data?.incentive.toLocaleString()}</span>
          </div>

          {/* PAN and Aadhaar Details */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">PAN:</span> {data?.pan}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Aadhaar:</span> {data?.aadhar}
              </p>
              <a href="#edit" className="text-blue-500 hover:underline">Request Edit</a>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Performance Metrics</h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Clients Added:</span> {data.clientsAdded}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Leads Converted:</span> {data.leadsConverted}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Success Rate:</span> {data.successRate}%
              </p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-span-1 md:col-span-3 mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
            {/* <ul className="list-disc list-inside text-gray-700 space-y-2">
              {advisorData.recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    ):( 
      <p>Loading...</p>
    )}
    </>
  );
}

export default AdvisorDash;
