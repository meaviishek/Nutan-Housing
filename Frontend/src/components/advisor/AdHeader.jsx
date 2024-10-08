import { AiOutlineMenuFold } from 'react-icons/ai'
import { Link,NavLink } from 'react-router-dom'
import { Logo } from '..'
import { useState } from 'react';
function AdHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store form data
  const [leadData, setLeadData] = useState({
    customerName: '',
    customerMobile: '',
    customerEmail: '',
    customerAddress: '',
    customerAadhaar: '',
    plotName: '',
    plotNo: '',
    plotSize: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Created:', leadData);
    setIsModalOpen(false); // Close modal after submission
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData({ ...leadData, [name]: value });
  };

  
  return (
    <>
    <div>
        <header className="fixed top-0 left-0  w-full bg-[#fafaf9] shadow-md z-50 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        {/* Logo */}
        <Link to='/advisor/dashboard'>
          <div className="flex items-center">
            <img src={Logo} alt="Nutan Housing Finance" className="md:w-20 md:h-12 w-14 h-8" />
            <h1 className="text-lg lg:text-2xl ml-2 mt-[5px] font-semibold text-primary font-poppins">NUTAN HOUSING FINANCE</h1>
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex  space-x-3  ">
          <NavLink to="/advisor/dashboard" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}> Profile</NavLink>
          <NavLink to="/advisor/incentive" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Incentive</NavLink>
          <NavLink to="/advisor/team" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Team</NavLink>
          <NavLink to="/advisor/customer-details" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Customer Details</NavLink>

        </nav>

        {/* Enquire & Login Buttons (Desktop only) */}
        <div className="hidden md:flex space-x-4">
          
          <button onClick={()=>setIsModalOpen(true)}   className="px-4 hover:scale-105 transition-all duration-500 py-2 bg-primary hover:bg-yellow-500 text-gray-50 rounded-xl flex items-center gap-2">
         
        Create Lead
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none mr-2">
            <AiOutlineMenuFold size={24}/>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slide from Right */}
      <div className={`fixed md:hidden top-0 h-screen right-0 w-64 bg-[#dfdfdff6] p-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NavLink to="/advisor/dashboard" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Profile
        </NavLink>
        <NavLink to="/advisor/incentive" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Incentive
        </NavLink>
        <NavLink to="/advisor/team" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Team
        </NavLink>
        <NavLink to="/advisor/customer-details" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Customer Details
        </NavLink>
      
    

        {/* Enquire & Login Buttons in Mobile Menu */}
        <div className="flex flex-col space-y-4 mt-6">
        
          <button onClick={()=>setIsModalOpen(true)}   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-secondary hover:text-yellow-600">
    Create Lead
          </button>
        </div>
      </div>
    </header>


   

    </div>
    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Create New Lead</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer Name */}
              <div>
                <label className="block text-gray-700">Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={leadData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter customer name"
                />
              </div>

              {/* Customer Mobile */}
              <div>
                <label className="block text-gray-700">Customer Mobile</label>
                <input
                  type="tel"
                  name="customerMobile"
                  value={leadData.customerMobile}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter customer mobile number"
                />
              </div>

              {/* Customer Email */}
              <div>
                <label className="block text-gray-700">Customer Email</label>
                <input
                  type="email"
                  name="customerEmail"
                  value={leadData.customerEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter customer email"
                />
              </div>

              {/* Customer Address */}
              <div>
                <label className="block text-gray-700">Customer Address</label>
                <textarea
                  name="customerAddress"
                  value={leadData.customerAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter customer address"
                />
              </div>

              {/* Aadhaar Number */}
              <div>
                <label className="block text-gray-700">Customer Aadhaar No.</label>
                <input
                  type="text"
                  name="customerAadhaar"
                  value={leadData.customerAadhaar}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter Aadhaar number"
                />
              </div>

              {/* Plot Name Dropdown */}
              <div>
                <label className="block text-gray-700">Plot Name</label>
                <select
                  name="plotName"
                  value={leadData.plotName}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                >
                  <option value="" disabled>Select plot name</option>
                  <option value="Plot A">Plot A</option>
                  <option value="Plot B">Plot B</option>
                  <option value="Plot C">Plot C</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Plot No. */}
              <div>
                <label className="block text-gray-700">Plot No.</label>
                <input
                  type="text"
                  name="plotNo"
                  value={leadData.plotNo}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter plot number"
                />
              </div>

              {/* Plot Size */}
              <div>
                <label className="block text-gray-700">Plot Size (sq.ft.)</label>
                <input
                  type="number"
                  name="plotSize"
                  value={leadData.plotSize}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2"
                  placeholder="Enter plot size"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                >
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </>
  )
}

export default AdHeader