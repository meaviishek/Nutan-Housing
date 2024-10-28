import { useNavigate } from 'react-router-dom';
import { AiOutlineMenuFold } from 'react-icons/ai'
import { Link,NavLink } from 'react-router-dom'
import { Logo } from '..'
import { useState } from 'react';
function AdHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
      // Clear user session data
      localStorage.clear();
      // localStorage.removeItem('token');
      // localStorage.removeItem('advisorData') // Remove the token
      // setAdvisor(null); // Clear advisor data
      navigate('/'); // Redirect to home page
      window.location.reload(); // Redirect to login page (or your desired route)
    };


  
  return (
    <>
    <div>
        <header className="fixed top-0 left-0  w-full bg-[#fafaf960] shadow-md z-50 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        {/* Logo */}
        <Link to='/'>
          <div className="flex items-center">
            <img src={Logo} alt="Nutan Housing Finance" className="md:w-20 md:h-10 w-14 h-8" />
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
          <button className="bg-yellow-200 text-gray-900 px-3 py-2 rounded-md hover:bg-yellow-500 hover:text-white ">
          <Link to='/advisor/create-lead'>
            Create Lead</Link>
          </button>
          <button onClick={handleLogout}  className="px-4 hover:scale-105 transition-all duration-500 py-2 bg-red-800 hover:bg-red-500 text-gray-50 rounded-md flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
        Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mt-2">
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
        
          <button onClick={toggleMenu} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-yellow-600">
          <Link to='/advisor/create-lead'>
    Create Lead</Link>
          </button>
          <button onClick={handleLogout}  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-yellow-600">
          
        Logout
          </button>
        </div>
      </div>
    </header>


   

    </div>
  

    </>
  )
}

export default AdHeader