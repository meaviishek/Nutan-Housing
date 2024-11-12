// services/advisorService.js
import axios from 'axios';
import { RiThreadsFill } from 'react-icons/ri';

const API_URL = 'https://nutan-housing-32ig.onrender.com/api/advisors';
// const API_URL = 'http://localhost:5000/api/advisors'
// Advisor signup API call
export const advisorSignup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

// Advisor login API call
export const advisorLogin = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data); 
  
    return response.data; // Return user data
  } catch (error) {
    throw new Error(error.response.data.message || 'Signup failed');
  }
};


//createLead
export const createLead = async (leaddata)=>{
  try{
    const response=await axios.post(`${API_URL}/create-lead`, leaddata);
    return response.leaddata
  }catch(err){
    throw err.response.leaddata
  }
};


//google login



//enquaries
export const submitEnquiry = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/enquaries`, data);
    return response.data; // Return the response data
  } catch (err) {
    throw err.response.data; // Throw the error response data
  }
};


//bookcustomer
export const bookCustomer= async (customerId,bookingData)=>{
  try{
    const response =await axios.post(`${API_URL}/customers/${customerId}/book`,bookingData)
  return response
  }catch(err){
    throw err.response
  }

}

//confirm booking
export const confirmBooking =async(customerId,data)=>{
  try{
    const response = await axios.post(`${API_URL}/customers/${customerId}/confirmbook`,data)
    return response
  }catch(err){
    throw err.response
  }
}