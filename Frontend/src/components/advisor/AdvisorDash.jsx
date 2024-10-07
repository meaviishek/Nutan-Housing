import React from 'react'

function AdvisorDash() {
    const advisorName = 'Abhishek'
    const badge ='Gold'
    const totalIncentive='3600'

    const email='ashd@gmail.com'
    const phone='8558548499'

  return (
    <div className='mt-16'>
    <div className="flex justify-center md:p-8">
      <div className="bg-white shadow-sm rounded-lg md:max-w-7xl w-full p-2 md:p-6">
        
        {/* Profile Header */}
        <div className="flex  justify-between items-center">
          {/* Left Section: Advisor Name and Contact Details */}
          <div className="flex flex-col mb-4 sm:mb-0 text-sm md:text-base">
            <h1 className="text-base md:text-2xl font-bold text-gray-800">{advisorName}</h1>
            <p className="text-xs md:text-sm text-gray-600"><span className="font-semibold">{email}</span></p>
            <p className="text-xs md:text-sm text-gray-600"><span className="font-semibold">{phone}</span></p>
            <a href="#edit" className="text-blue-500 hover:underline mt-1 text-xs">Request Edit</a>
          </div>
  
          {/* Center Section: Badge */}
          <div className="my-4 md:my-0 text-center">
            <h2 className="text-xs md:text-xl font-semibold">Badge</h2>
            <p className="mt-2 text-base md:text-3xl font-bold text-primary">{badge}</p>
          </div>
  
          {/* Right Section: Total Incentive */}
          <div className="flex flex-col text-right">
            <h2 className="text-xs md:text-xl font-semibold">Total Incentive</h2>
            <p className="mt-2 text-base md:text-3xl font-bold">₹{totalIncentive}</p>
          </div>
        </div>
  
        {/* Additional Content Section */}
     
      </div>
    
    </div>
    <div className="mt-10">
        <div className='container mx-2 md:mx-auto max-w-7xl '>
          <h2 className="text-2xl font-semibold mb-4">Additional Content</h2>
          <p className="text-gray-700">Here you can add any additional content relevant to the advisor's profile...</p>
        </div>
        </div>
  </div>
  
  )
}

export default AdvisorDash