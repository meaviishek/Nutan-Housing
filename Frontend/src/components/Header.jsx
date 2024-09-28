import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '.'; // Replace with your logo import

const Header = ({openLogin,openEnq}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <header className="fixed top-0 left-0  w-full bg-[#fafaf9a7] shadow-md z-50 backdrop-blur-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to='/'>
          <div className="flex items-center">
            <img src={Logo} alt="Nutan Housing Finance" className="md:w-16 md:h-10 w-14 h-8" />
            <h1 className="md:ml-3 ml-1 text-lg lg:text-2xl font-bold text-primary">NUTAN HOUSING FINANCE</h1>
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex text-sm space-x-4 font-semibold ">
          <NavLink to="/" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>About Us</NavLink>
          <NavLink to="/projects" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Projects</NavLink>
          <NavLink to="/career" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Careers</NavLink>
          <NavLink to="/blogs" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive})=> `p-1 lg:px-2 rounded ${isActive ? 'text-primary' : 'text-gray-900 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>Contact Us</NavLink>
        </nav>

        {/* Enquire & Login Buttons (Desktop only) */}
        <div className="hidden md:flex space-x-4">
          <button onClick={openEnq} className="bg-yellow-200 text-gray-900 px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-white animate-bounce">
            Enquire Now
          </button>
          <button onClick={openLogin} className="px-4 hover:scale-105 transition-all duration-500 py-2 bg-primary hover:bg-yellow-500 text-gray-50 rounded-xl flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
        Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slide from Right */}
      <div className={`fixed md:hidden top-0 h-screen right-0 w-64 bg-[#aaa9a9db] p-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <NavLink to="/" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          About Us
        </NavLink>
        <NavLink to="/projects" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Projects
        </NavLink>
        <NavLink to="/career" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Careers
        </NavLink>
        <NavLink to="/blogs" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Blog
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu} className={({isActive})=> `block p-2 rounded ${isActive ? 'text-primary' : 'text-gray-800 hover:bg-yellow-200 hover:text-gray-700 transition-colors duration-300'}`}>
          Contact Us
        </NavLink>

        {/* Enquire & Login Buttons in Mobile Menu */}
        <div className="flex flex-col space-y-4 mt-6">
          <button onClick={openEnq} className="bg-yellow-200 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">
            Enquire Now
          </button>
          <button onClick={openLogin}  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-secondary hover:text-yellow-600">
    Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
