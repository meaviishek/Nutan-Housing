import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { advisorLogin, advisorSignup } from "../../services/advisorservice";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Login({ closeLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // Separate state for login and signup
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'advisor'
  });

  // Update login data on input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Update signup data on input change
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const { email, password } = loginData;
      const response = await advisorLogin({ email, password });

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('advisorData', JSON.stringify(response.advisor));
        // Store token
        setSuccessMessage('Login successful!');
        closeLogin();  // Close modal
        navigate('/advisor/dashboard');  // Redirect to dashboard
      } else {
        setErrorMessage('Login failed: Token not received.');
      }
    } catch (error) {
      setErrorMessage(error.message || 'Login failed');
    }finally {
      setIsLoading(false); // Stop loading
    }
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous messages
    setSuccessMessage(''); // Clear previous success messages

    try {
      const response = await advisorSignup(signupData); // Use signupData here
      console.log('Signup successful:', response);
      setSuccessMessage('Signup successful! Please wait till you verified'); // Set success message
    } catch (error) {
      setErrorMessage(error.message || 'Signup failed');
    }
  };


const handleSuccess=async(response)=>{
// const API_URL = 'http://localhost:5000/api/advisors'


  try{
    const res = await axios.post('https://nutan-housing-32ig.onrender.com/api/advisors/googleauth', { tokenId:response.credential });
    const { token, advisor } = res.data;
    
    // Save the token and advisor details (e.g., in localStorage)
    localStorage.setItem('token', token);
    console.log(token)

    localStorage.setItem('advisorData', JSON.stringify(advisor));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Redirect or perform actions after successful login
    navigate('/advisor/dashboard');
  }catch (error) {
    console.error('Google login failed:', error);
  }

}

const errorMsg=(error)=>{
  console.log('Google Login Error',error)
}
 
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg p-2">
        <div className="bg-white p-8 rounded-lg w-full max-w-md relative transition-all duration-700 ease">
          <button
            onClick={closeLogin}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
          >
            {/* Close button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex justify-center mb-8">
            <button
              id="login-tab"
              onClick={() => {
                setIsLogin(true);
                setLoginData({ email: '', password: '' }); // Reset login form data
                setErrorMessage(''); // Clear previous error messages
                setSuccessMessage(''); // Clear previous success messages
              }}
              className={`${isLogin ? 'bg-yellow-500' : 'bg-yellow-200'} text-white px-4 py-2 rounded-t-md mr-1 focus:outline-none`}
            >
              Login
            </button>
            <button
              id="signup-tab"
              onClick={() => {
                setIsLogin(false);
                setSignupData({ name: '', email: '', phoneNumber: '', password: '', role: 'advisor' }); // Reset signup form data
                setErrorMessage(''); // Clear previous error messages
                setSuccessMessage(''); // Clear previous success messages
              }}
              className={`${isLogin ? 'bg-yellow-200' : 'bg-yellow-500'} text-gray-800 px-4 py-2 rounded-t-md focus:outline-none`}
            >
              Sign Up
            </button>
          </div>

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>} {/* Success message */}

          {isLogin ? (
            <div id="login-form">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email} // Use loginData here
                    onChange={handleLoginChange} // Use handleLoginChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-2 relative">
                  <label className="block mb-1 text-gray-700">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginData.password} // Use loginData here
                    onChange={handleLoginChange} // Use handleLoginChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your password"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" size={20} />
                    ) : (
                      <FaEye className="text-gray-500" size={20} />
                    )}
                  </div>
                  <a href="#" className="text-sm text-yellow-700">
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300"
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin loader mr-2"></div> Logging in...
                    </div>
                  ) : "Login"}
                </button>
              </form>
              <div className="mt-2">
                <h1 className="text-center">or</h1>
                {/* Google Sign-In Button Here */}
                <div className="flex items-center justify-center ">
    <button className="hover:scale-105 transition duration-500 ">
      
        <GoogleLogin onSuccess={handleSuccess} onError={errorMsg} />
    </button>
</div>
              </div>
            </div>
          ) : (
            <div id="signup-form">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Sign Up</h2>
              <form onSubmit={handleSignup}>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={signupData.name} // Use signupData here
                    onChange={handleSignupChange} // Use handleSignupChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={signupData.email} // Use signupData here
                    onChange={handleSignupChange} // Use handleSignupChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-gray-700">Phone Number*</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={signupData.phoneNumber} // Use signupData here
                    onChange={handleSignupChange} // Use handleSignupChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your phone Number"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1 font-medium text-gray-600">Select Role</label>
                  <select
                    name="role"
                    value={signupData.role} // Use signupData here
                    onChange={handleSignupChange} // Use handleSignupChange here
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="advisor">Advisor</option>
                    {/* You can add more role options here if needed */}
                  </select>
                </div>
                <div className="mb-2 relative">
                  <label className="block mb-1 text-gray-700">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={signupData.password} // Use signupData here
                    onChange={handleSignupChange} // Use handleSignupChange here
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Enter your password"
                    required
                  />
                  <div
                    className="absolute mt-6 inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" size={20} />
                    ) : (
                      <FaEye className="text-gray-500" size={20} />
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
