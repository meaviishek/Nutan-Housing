import React, { useState, useEffect } from 'react';

function CustomerDetails() {
  const baseurl = 'https://nutan-housing-backend.vercel.app/api/advisors';
  // const baseurl = 'http://localhost:5000/api/advisors'
  const [statusFilter, setStatusFilter] = useState('All');
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('advisorData');
    const Data = JSON.parse(storedData);
    const advisorId = Data.id;

    const customerData = async () => {
      try {
        const response = await fetch(`${baseurl}/${advisorId}/customers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseBody = await response.text();

        if (response.ok) {
          const data = JSON.parse(responseBody);
          setCustomers(data);
        } else {
          console.error('Failed to fetch advisor data:', responseBody);
        }
      } catch (error) {
        console.error('Error fetching advisor data:', error);
      }
    };

    customerData();
  }, []);

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());

  const handleFilterChange = (event) => setStatusFilter(event.target.value);

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Define a function to get status color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-400';
      case 'booked':
        return 'bg-yellow-100 text-yellow-800 border-yellow-400';
      case 'not-confirmed':
        return 'bg-red-100 text-red-800 border-red-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-400';
    }
  };

  return (
    <div className="mt-16">
      <div className="container mx-auto max-w-7xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">Customer Details</h2>

        {/* Search and Filter Controls */}
        <div className="flex justify-between mb-8 items-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-lg p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <select
            value={statusFilter}
            onChange={handleFilterChange}
            className="border rounded-lg p-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="All">All</option>
            <option value="booked">Booked</option>
            <option value="not-confirmed">Not Confirmed</option>
            <option value="confirmed">Confirmed</option>
          </select>
        </div>

        {/* Customer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className={`bg-white shadow-xl rounded-xl p-6 border-t-4 transition-transform transform hover:shadow-2xl hover:scale-105 ${getStatusColor(customer.status)}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary hover:text-secondary transition duration-300">
                {customer.name}
              </h3>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-phone mr-2 text-primary"></i>
                <strong>Phone:</strong> <span className="text-gray-800">{customer.phoneNumber}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <strong>Email:</strong> <span className="text-gray-800">{customer.email}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                <strong>Customer Address:</strong> <span className="text-gray-800">{customer.address}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-tag mr-2 text-primary"></i>
                <strong>Plot Number:</strong> <span className="text-gray-800">{customer.plotNumber}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-project-diagram mr-2 text-primary"></i>
                <strong>Project Name:</strong> <span className="text-gray-800">{customer.projectName}</span>
              </p>
              {/* Display booking or purchase amount based on status */}
              {customer.status === 'booked' ? (
                <p className="text-yellow-600 font-semibold">
                  Booking Amount: ₹{customer.bookingAmount}
                </p>
              ) : customer.status === 'confirmed' ? (
                <p className="text-green-600 font-semibold">
                  Purchase Amount: ₹{customer.purchaseAmount}
                </p>
              ) : null}
              <p className={`mt-4 py-2 px-4 rounded-lg border text-center font-semibold ${getStatusColor(customer.status)}`}>
                Status: {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
