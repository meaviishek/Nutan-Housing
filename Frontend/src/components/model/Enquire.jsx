import React, { useState } from 'react';
import { submitEnquiry } from '../../services/advisorservice';
function Enquire({ closeEnq }) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('')
    setLoading(true);

    try {
      const response = await submitEnquiry(formData);
      console.log(response)
      if (response) {
        setIsSubmitted(true); // Show success message
        setFormData({ name: '', phoneNumber: '', address: '' }); // Reset form
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button onClick={closeEnq} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-green-500">Our team will reach out to you shortly.</p>
          </div>
        ) : (
          <div id="login-form" className="block">
            <h2 className="text-2xl font-bold mb-4">Enquire Now</h2>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="w-full bg-gold text-white px-4 py-2 rounded-md shadow-lg bg-primary hover:bg-yellow-500 transition duration-300"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Enquire;
