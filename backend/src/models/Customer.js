
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // Added phone number
  email: { type: String, required: true }, // Added email
  aadhar:{type:String,required:true},

  address: { type: String, required: true }, // Added customer address
  plotNumber: { type: String, required: true }, // Added purchased plot
  projectName: { type: String, required: true }, // Added project name
  plotSize:{type:String,required:true},
  status: {
    type: String,
    enum: ['booked', 'not-confirmed', 'confirmed'], // Enum for predefined statuses
    default: 'not-confirmed', // Default status
  },
  bookingAmount: { type: Number, default: 0 }, // Booking amount if only booked
  purchaseAmount: { type: Number, default: 0 },
  advisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Advisor', required: true }, // Linked to advisor
  bookingDate: { type: Date }, // Date of booking
  actualDate: { type: Date, default: Date.now },
  bookingTime: { type: String },
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
 