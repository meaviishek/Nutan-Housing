import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLead } from '../../services/advisorservice';

function CreateLead() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [leadData, setLeadData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    aadhar: '',
    projectName: '',
    plotNumber: '',
    plotSize: '',
  });

  useEffect(() => {
    const advisorData = localStorage.getItem('advisorData');
    if (advisorData) {
      const parsedData = JSON.parse(advisorData);
      setLeadData((prevData) => ({
        ...prevData,
        advisor: parsedData.id
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Check if any required fields are empty
    const isFieldEmpty = Object.values(leadData).some((value) => value === '');
    if (isFieldEmpty) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const response = await createLead(leadData);
      console.log('Lead created:', response);
      setSuccessMessage('Lead created successfully');
      setLeadData({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        aadhar: '',
        projectName: '',
        plotNumber: '',
        plotSize: '',
      });
    } catch (err) {
      setErrorMessage(err.message || 'Lead creation failed');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="mt-16">
      <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-lg">
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

          <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Create New Lead</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={leadData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter customer name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Customer Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={leadData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter customer mobile number"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Customer Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={leadData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter customer email"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Customer Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={leadData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter customer address"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Customer Aadhaar No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="aadhar"
                  value={leadData.aadhar}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter Aadhaar number"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectName"
                  value={leadData.projectName}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                >
                  <option value="" disabled>Select Project name</option>
                  <option value="Nutan Villa(Rajgir)">Nutan Villa(Rajgir)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Plot No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="plotNumber"
                  value={leadData.plotNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                  placeholder="Enter plot number"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-base sm:text-lg">
                  Plot Size (sq.ft.) <span className="text-red-500">*</span>
                </label>
                <select
                  name="plotSize"
                  value={leadData.plotSize}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-3 text-base sm:text-lg"
                >
                  <option value="" disabled>Select Plot Size</option>
                  <option value="1200 Sq. feet">1200 Sq. feet</option>
                  <option value="1600 Sq. feet">1600 Sq. feet</option>
                </select>
              </div>
            </div>

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
