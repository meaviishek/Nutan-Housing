import Advisor from '../models/Advisor.js';
import Customer from '../models/Customer.js';
import Enquire from '../models/Enquire.js';  // Ensure to include the .js extension
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
// Advisor Signup
export const registerAdvisor = async (req, res) => {  // Change to export
  const { name, email, phoneNumber,role, password } = req.body;

  try {
    const existingAdvisor = await Advisor.findOne({ email });

    if (existingAdvisor) {
      return res.status(400).json({ message: 'Advisor already exists' });
    }

    const advisor = new Advisor({ name, email, phoneNumber,role, password });

    await advisor.save();

   

    res.status(201).json({
      advisor: {
        id: advisor._id,
        name: advisor.name,
        email: advisor.email,
        phoneNumber:advisor.phoneNumber,
        leads:advisor.leads,
        role: advisor.role,
        sales: advisor.sales,
        branchAdvisor: advisor.branchAdvisor,
        badges: advisor.badge
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Advisor Login
export const loginAdvisor = async (req, res) => {
  const { email, password } = req.body;

  // Input validation (basic example, can be enhanced)
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  try {
    // Find advisor by email
    const advisor = await Advisor.findOne({ email });

    // Check if the advisor exists
    if (!advisor) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the advisor is verified
    if (!advisor.verified) {
      return res.status(403).json({ message: 'Account not verified. Please contact admin.' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, advisor.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Password' });
    }

    // Generate a token
    const token = jwt.sign({ advisorId: advisor._id}, process.env.JWT_SECRET, { expiresIn: '1800s' });


    // Send a successful response with advisor details and token
    res.status(200).json({
      token,
      advisor: {
        id: advisor._id,
        name: advisor.name,
        email: advisor.email,
        phoneNumber:advisor.phoneNumber,
        pan:advisor.pan,
        aadhar:advisor.aadhar,
        role: advisor.role,
        leads:advisor.leads,
        sales: advisor.sales,

        incentive:advisor.incentives,
        badge: advisor.badge,
        customers: advisor.customers,
        connectedAdvisors:advisor.connectedAdvisors , // Child advisors
         parentAdvisor:advisor.parentAdvisor
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};


export const getAdvisorData = async (req, res) => {
  try {
    
    // Fetch the advisor's data using the ID from the token (req.advisorId)
    const advisor = await Advisor.findById(req.advisorId).select('-password'); // Exclude password

    if (!advisor) {
      return res.status(404).json({ error: 'Advisor not found' });
    }

    res.status(200).json(advisor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch advisor data' });
  }
};



//create new lead 
export const createlead=async(req,res)=>{
  const { name, phoneNumber, email,aadhar, address, plotNumber, projectName,plotSize, advisor:advisorId} = req.body;

  try {
    const existingCustomer= await Customer.findOne({ email });
    if(existingCustomer){
      return res.status(400).json({message:'Customer already exists use different email'})
    }
    const advisor = await Advisor.findById(advisorId)
    const customer = new Customer({
      name,
      phoneNumber,
      email,
      aadhar,
      address,
      plotNumber,
      projectName,
      plotSize,
      advisor: advisor._id // Link to the advisor
    });
   
    advisor.leads += 1;
    advisor.sales += 1;
    await advisor.save();
    await customer.save();
   
    await Advisor.findByIdAndUpdate(advisor._id, {
      $push: { customers: customer._id }
    });

    res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create customer' });
  }
};


//get customer details
export const getCustomers=async (req,res)=>{
  try {
   
    const advisorId = req.params.advisorId || req.user.advisorId; // If using JWT

    // Fetch all customers under this advisor
    const customers = await Customer.find({ advisor: advisorId });
    // const customers = await Customer.find().populate('advisor', 'name email phoneNumber');
    
    // Send the fetched customer data as a JSON response
    res.status(200).json(customers);
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ message: 'Failed to retrieve customers', error: error.message });
  }
}






//google login 
export const googleLogin=async(req,res)=>{

  const { tokenId } = req.body;

  if (!tokenId) {
    return res.status(400).json({ message: 'Token ID is required' });
  }

  try{

 const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email,name } = ticket.getPayload(); // Extract email and other profile details

    // Check if the advisor exists in your database
    const advisor = await Advisor.findOne({ email });

    if (!advisor) {
      return res.status(400).json({ message: 'Advisor does not exist, access denied' });
    }

    // Generate JWT for the advisor
    const token = jwt.sign(
      { advisorId: advisor._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return the advisor's data and JWT

    res.status(200).json({
      token,
      advisor: {
        id: advisor._id,
        name: advisor.name,
        email: advisor.email,
        phoneNumber:advisor.phoneNumber,
        leads:advisor.leads,
        pan:advisor.pan,
        aadhar:advisor.aadhar,
        role: advisor.role,
        sales: advisor.sales,
        incentive:advisor.incentives,
        badge: advisor.badge,
        customers: advisor.customers,
        connectedAdvisors:advisor.connectedAdvisors , // Child advisors
         parentAdvisor:advisor.parentAdvisor
      }
    });
  }catch(error){
    res.status(500).json({message:'Your email is not vaild ',error})
  }
}




export const updateIncentive= async (req, res) => {
  const { advisorId } = req.params;
  const { incentives } = req.body;

  try {
    const advisor = await Advisor.findById(advisorId);

    if (!advisor) {
      return res.status(404).json({ message: 'Advisor not found' });
    }

    // Update the advisor's total incentives
    advisor.incentives = incentives;
    await advisor.save();

    res.status(200).json({ message: 'Incentives updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating incentives', error });
  }
}


//enquaries 
export const enquariesForm=async (req, res) => {
  const { name, phoneNumber, address } = req.body;

  try {
    // Create a new enquiry
    const newEnquiry = new Enquire({
      name,
      phoneNumber,
      address,
    });

    // Save enquiry to the database
    await newEnquiry.save();

    // Send response
    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
}


//update book
export const updatebook=async(req,res)=>{
  
    const { customerId } = req.params;
    const { bookingAmount, totalAmount, bookingDate, bookingTime, status } = req.body;
  
    try {
      const customer = await Customer.findById(customerId);
      if (!customer) return res.status(404).json({ message: 'Customer not found' });
  
      customer.bookingAmount = bookingAmount;
      customer.purchaseAmount = totalAmount;
      customer.status = status;
      customer.bookingDate = bookingDate;
      customer.bookingTime = bookingTime;
  
      await customer.save();
      res.status(201).json({ message: 'booking successfully' });
     
     
    } catch (error) {
      console.error('Booking error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }