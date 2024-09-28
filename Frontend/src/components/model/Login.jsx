import { useState } from "react";

function Login({closeLogin}) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <div  className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg p-2">
  <div className="bg-white p-8 rounded-lg w-full max-w-md relative transition-all duration-700 ease">
 
    <button onClick={closeLogin} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

  
    <div className="flex justify-center mb-8">
      <button id="login-tab" onClick={() => setIsLogin(true)} className={`${isLogin?'bg-yellow-500':'bg-yellow-200'} text-white px-4 py-2 rounded-t-md mr-1 focus:outline-none`}>Login</button>
      <button id="signup-tab" onClick={() => setIsLogin(false)} className={`${isLogin?'bg-yellow-200':'bg-yellow-500'} text-gray-800 px-4 py-2 rounded-t-md focus:outline-none`}>Sign Up</button>
    </div>

  {isLogin ? (
    <div id="login-form" className="">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Password</label>
          <input type="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your password" />
          <a href="#" id="forgotPasswordLink" className=" text-sm  text-yellow-700">Forgot Password?</a>
        </div>
       
        <button type="submit" className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300">
          Login
        </button>
      </form>
      <div className="mt-2" >
      <h1 className="text-center ">or</h1>
    <div id="g_id_onload"
         data-client_id="YOUR_CLIENT_ID.apps.googleusercontent.com"
         data-callback="handleCredentialResponse">
    </div>
    <div className="g_id_signin" data-type="standard"></div>

    
    </div>
  </div>
  ):(
    
    <div id="signup-form" className="">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Name*</label>
          <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your Name" />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Email*</label>
          <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Phone Number*</label>
          <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Enter your phone Number" />
        </div>
        <div className="mb-3">
          <label  className="block mb-2 font-medium text-gray-600">Select Role</label>
        <select id="options" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="" disabled selected>Choose an option</option>
            <option value="option1">Advisor</option>
           
        </select>
        </div>


        <div className="mb-3">
          <label className="block mb-2 text-gray-700">Password</label>
          <input type="password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Create a password" />
        </div>
        <button type="submit" className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300">
          Sign Up
        </button>
      </form>
    </div>
  
  
  )}
  </div>
</div>

    </div>
  )
}

export default Login