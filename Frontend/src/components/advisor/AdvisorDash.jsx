import React from 'react'

function AdvisorDash() {
    const advisorName = 'Abhishek'
    const badge ='Gold'
    const totalIncentive='3600'
    const workProgress='50'
    const email='ashd@gmail.com'
    const phone='8558548499'

  return (
    <div className='mt-16'>
     <div className="  flex justify-center  p-8">
      <div className="bg-white shadow-sm rounded-lg max-w-7xl w-full p-6">
        
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800">{advisorName}</h1>
            <p className="text-sm text-gray-600">Email: <span className="font-semibold">{email}</span></p>
            <p className="text-sm text-gray-600">Phone: <span className="font-semibold">{phone}</span></p>
            <a href="#edit" className="text-blue-500 hover:underline mt-1">Request Edit</a>
          </div>
          <div className="my-4 sm:my-0">
            <h2 className="text-xl font-semibold">Your Badge</h2>
            <p className="mt-2 text-3xl font-bold text-primary">{badge}</p>
          </div>
          <div className="flex flex-col text-right">
            <h2 className="text-xl font-semibold">Total Incentive Earned</h2>
            <p className="mt-2 text-3xl font-bold">₹{totalIncentive}</p>
          </div>
        </div>

       
     


       
      </div>
    
    </div>
    <div className="mt-10">
        <div className='justify-center max-w-7xl container mx-auto'>
          <h2 className="text-2xl font-semibold mb-4">Additional Content</h2>
          <p className="text-gray-700">Here you can add any additional content relevant to the advisor's profile...</p>
        </div>
        </div>
    </div>
  )
}

export default AdvisorDash