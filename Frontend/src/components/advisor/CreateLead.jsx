import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateLead() {
  const navigate = useNavigate(); // Use navigate instead of history
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Created:', leadData);
    // Navigate back to the advisor page after submission
    navigate('/advisor/dashboard');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData({ ...leadData, [name]: value });
  };

  return (
    <div className='mt-16'>
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-lg"> {/* Increased width here */}
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Create New Lead</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"> {/* Increased gap between columns */}
            
            {/* Customer Name */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={leadData.customerName}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg" // Adjusted padding and font size
                placeholder="Enter customer name"
              />
            </div>

            {/* Customer Mobile */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Customer Mobile</label>
              <input
                type="tel"
                name="customerMobile"
                value={leadData.customerMobile}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
                placeholder="Enter customer mobile number"
              />
            </div>

            {/* Customer Email */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Customer Email</label>
              <input
                type="email"
                name="customerEmail"
                value={leadData.customerEmail}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
                placeholder="Enter customer email"
              />
            </div>

            {/* Customer Address */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Customer Address</label>
              <textarea
                name="customerAddress"
                value={leadData.customerAddress}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
                placeholder="Enter customer address"
              />
            </div>

            {/* Customer Aadhaar */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Customer Aadhaar No.</label>
              <input
                type="text"
                name="customerAadhaar"
                value={leadData.customerAadhaar}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
                placeholder="Enter Aadhaar number"
              />
            </div>

            {/* Plot Name Dropdown */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Project Name</label>
              <select
                name="plotName"
                value={leadData.plotName}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
              >
                <option value="" disabled>Select Project name</option>
                <option value="Plot A">Nutan(Rajgir)</option>
               
              </select>
            </div>

            {/* Plot No */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Plot No.</label>
              <input
                type="text"
                name="plotNo"
                value={leadData.plotNo}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
                placeholder="Enter plot number"
              />
            </div>

            {/* Plot Size */}
            <div>
              <label className="block text-gray-700 text-base sm:text-lg">Plot Size (sq.ft.)</label>
              <select
                name="pltsize"
                value={leadData.plotSize}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-3 text-base sm:text-lg"
              >
                <option value="" disabled>Select Plot Size</option>
                <option value="Plot A">900 Sq. feet</option>
                <option value="Plot A">1200 Sq. feet</option>
               
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => navigate('/advisor/dashboard')}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg text-base sm:text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-base sm:text-lg"
            >
              Create Lead
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateLead;
