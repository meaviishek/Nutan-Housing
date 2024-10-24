import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  pan:{type: String,default:'Not Provided'},
  aadhar:{type: String,default:'Not Provided' },
  role: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  leads: { type: Number, default: 0 },
  sales: { type: Number, default: 0 },
  incentives: { type: Number, default: 0 },
  badge: { type: String, default: 'Bronze' },
  verified: { type: Boolean, default: false }, 
 
  customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }],

  connectedAdvisors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Advisor' }], // Child advisors
  parentAdvisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Advisor' },
}); 

// Encrypt the password before saving the user
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
}); 

const Advisor = mongoose.model('Advisor', userSchema);


export default Advisor;  
