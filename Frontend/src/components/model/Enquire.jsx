import React from 'react'

function Enquire({closeEnq}) {
  return (

    <div>
       <div  className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg">
  <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
 
      
      <button onClick={closeEnq} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
      <div id="login-form" className="block">
    <h2 className="text-2xl font-bold mb-4">Enquire Now</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your Name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number *</label>
        <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your phone number" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your address" />
      </div>
      <button type="submit" className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300">
        Submit
      </button>
    </form>
    </div>
    </div>
  </div>
</div>
  )
}

export default Enquire