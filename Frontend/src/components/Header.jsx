import React from 'react'
import { Link,NavLink } from "react-router-dom";
import { Logo } from '.'
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#8c8c8c51] shadow-md z-50 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to='/'>
        <div className="flex items-center">
          <img src={Logo} alt="Nutan Housing Finance" className="w-16 h-10" />
          <h1 className="ml-3 text-xl font-bold text-primary">Nutan Housing Finance</h1>
        </div>
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <NavLink to="/" className={({isActive})=> `p-1 lg:px-2   rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> `p-1 lg:px-2   rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>About Us</NavLink>
          <NavLink to="/projects" className={({isActive})=> `p-1 lg:px-2  rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Projects</NavLink>
          <NavLink to="/career" className={({isActive})=> `p-1 lg:px-2 rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Careers</NavLink>
          <NavLink to="/blogs" className={({isActive})=> `p-1 lg:px-2   rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=> `p-1 lg:px-2   rounded  ${isActive ? 'text-primary' : 'text-gray-100 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Contact Us</NavLink>
        </nav>

        {/* Enquire & Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-yellow-200 text-yellow-600 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white animate-bounce">
            Enquire Now
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-secondary hover:text-yellow-600">
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Use a burger menu icon here */}
          <button className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

  )
}

export default Header