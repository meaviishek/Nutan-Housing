import React from 'react'

function AdvisorDash() {
    const advisorName = 'Abhishek'
    const badge ='Gold'
    const totalIncentive='3600'

    const email='ashd@gmail.com'
    const phone='8558548499'
    const advisorData = {
        name: 'Abhishek',
        email: 'ashd@gmail.com',
        phone: '8558548499',
        badge: 'Gold',
        totalIncentive: 3600,
        pan: 'ABC123',
        aadhar: '123456789012',
        recentActivities: [
          'Successfully helped [client name] secure a home loan for their dream home.',
          'Helped [client name] with their financial planning and investment goals.',
        ],
      };
  return (
    <div className='mt-16 bg-gray-50'>
 <div className="container mx-auto p-8  min-h-screen">
  <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Profile Picture */}
    <div className="col-span-1 flex justify-center md:justify-start">
      <img
        src={advisorData.profilePicture || 'https://via.placeholder.com/200'}
        alt="Advisor Profile"
        className="rounded-full w-48 h-48 object-cover"
      />
    </div>

    {/* Main Profile Information */}
    <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contact Information */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{advisorData.name}</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span> {advisorData.email}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Phone:</span> {advisorData.phone}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Address:</span> {advisorData.address}
        </p>
        <a href="#edit" className="text-blue-500 hover:underline">Request Edit</a>
      </div>

      {/* Badge and Incentive */}
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <span className={`px-6 py-2 text-white text-xl font-semibold rounded-full ${advisorData.badge === 'Gold' ? 'bg-yellow-500' : advisorData.badge === 'Silver' ? 'bg-gray-400' : 'bg-bronze-500'}`}>
            {advisorData.badge}
          </span>
          <span className="mt-4 text-xl font-semibold">Total Incentive: ₹{advisorData.totalIncentive}</span>
        </div>
      </div>
    </div>

    {/* PAN and Aadhaar Details */}
    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">PAN and Aadhaar</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">PAN:</span> {advisorData.pan}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Aadhaar:</span> {advisorData.aadhaar}
        </p>
      </div>

      {/* Performance Metrics */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Clients Added:</span> {advisorData.clientsAdded}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Leads Converted:</span> {advisorData.leadsConverted}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Success Rate:</span> {advisorData.successRate}%
        </p>
      </div>
    </div>

    {/* Recent Activities */}
    <div className="col-span-1 md:col-span-3 mt-8">
      <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
      <ul className="list-disc list-inside">
        {advisorData.recentActivities.map((activity, index) => (
          <li key={index} className="text-gray-700">{activity}</li>
        ))}
      </ul>
    </div>
  </div>
</div>

  </div>
  
  )

}
export default AdvisorDash