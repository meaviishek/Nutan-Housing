
import React, { useState, useEffect } from 'react';
import { bookCustomer,confirmBooking } from '../../services/advisorservice';


function CustomerDetails() {
  // const baseurl = 'https://nutan-housing-32ig.onrender.com/api/advisors';
  const baseurl = 'http://localhost:5000/api/advisors'
  const [statusFilter, setStatusFilter] = useState('All');
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [bookingAmount, setBookingAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const openBookingPopup = (customer) => {
    setSelectedCustomer(customer);

    setSuccessMessage(''); 
  };

  useEffect(() => {
    const storedData = localStorage.getItem('advisorData');
    const Data = JSON.parse(storedData);
    const advisorId = Data.id;


    // Function to fetch customer data
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
          const fetchedData = JSON.parse(responseBody);
          setCustomers(fetchedData)
          // Check if local storage data is different from fetched data
          // const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
          // if (JSON.stringify(storedCustomers) !== JSON.stringify(fetchedData)) {
          //   // Update local storage with new data if different
          //   localStorage.setItem('customers', JSON.stringify(fetchedData));
          //   setCustomers(fetchedData);
          // } else {
          //   setCustomers(storedCustomers); // Use existing local storage data
          // }
        } else {
          console.error('Failed to fetch advisor data:', responseBody);
        }
      } catch (error) {
        console.error('Error fetching advisor data:', error);
      }
    };

    // Check if customers are in local storage
    // const storedCustomers = JSON.parse(localStorage.getItem('customers'));
    // if (storedCustomers) {
    //   setCustomers(storedCustomers); // Use data from local storage if available
    // } else {
    //   customerData(); // Fetch data if not available in local storage
    // }
    customerData()
  }, []);





  const handleBooking = async () => {
  
    try {
      const bookingData = {
        bookingAmount,
        totalAmount,
        bookingDate,
        bookingTime,
        status: 'booked',
      };
      
      const response = await bookCustomer(selectedCustomer._id,bookingData)
     
  
      if (response.status==201) {
        setCustomers((prevCustomers) =>
          prevCustomers.map((cust) =>
            cust._id === selectedCustomer._id ? { ...cust, status: 'booked', bookingAmount } : cust
          )
        );
        setSuccessMessage('Booking successful!');
        setTimeout(() => setSuccessMessage(''), 2000);
      
        // Refresh the page after a short delay to ensure smooth UX
       // Set success message
        setSelectedCustomer(null);
       
      } else {
        console.error('Failed to book customer:', response.statusText);
      }
    } catch (error) {
      console.error('Error booking customer:', error);
    }
  };





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
        return ' text-yellow-800 border-yellow-400';
      case 'not-confirmed':
        return 'bg-red-100 text-red-800 border-red-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-400';
    }
  };


  // confirm booking by advisor
  const c_booking = async (customer) => {
  
    setSuccessMessage('')
    console.log(customer)
    try{

      const data = {
       
        status: 'waiting',
      };
      
      const response = await confirmBooking(customer._id,data)
     
      if (response.status==201) {
    setCustomers((prevCustomers) =>
      prevCustomers.map((cust) =>
        cust._id === customer._id ? { ...cust, status: 'waiting' } : cust
      )
    );
    setSuccessMessage('Wait for the admin to confirm this customer');
    setTimeout(() => setSuccessMessage(''), 2000);
 
  }}catch(error){
    console.error('Error confirm:', error);
  }
  };
  
  return (
    <div className="mt-16">
      <div className="container mx-auto max-w-7xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8">Customer Details</h2>
        {successMessage && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4 text-center">
            {successMessage}
          </div>
        )}

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-8 items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Search Input */}
          <div className="w-full sm:w-2/3">
            <label className="text-gray-700 font-medium mb-1 block">Search by Name</label>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
          </div>

          {/* Status Filter */}
          <div className="w-full sm:w-1/3">
            <label className="text-gray-700 font-medium mb-1 block">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={handleFilterChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white"
            >
              <option value="All">All</option>
              <option value="booked">Booked</option>
              <option value="not-confirmed">Not Confirmed</option>
              <option value="confirmed">Confirmed</option>
            </select>
          </div>
        </div>

        {/* Customer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className={`bg-white shadow-xl rounded-xl p-6 border-t-4 transition-transform transform hover:shadow-2xl hover:scale-105 ${getStatusColor(customer.status)}`}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary  transition duration-300">
                {customer.name}
              </h3>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-phone mr-2 text-primary"></i>
                <strong>Phone:</strong> <span className="text-gray-800 pl-2">{customer.phoneNumber}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <strong>Email:</strong> <span className="text-gray-800 pl-2">{customer.email}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                <strong>Customer Address:</strong> <span className="text-gray-800 pl-2">{customer.address}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-tag mr-2 text-primary"></i>
                <strong>Plot Number:</strong> <span className="text-gray-800 pl-2">{customer.plotNumber}</span>
              </p>
              <p className="text-gray-700 mb-2 flex items-center">
                <i className="fas fa-project-diagram mr-2 text-primary"></i>
                <strong>Project Name:</strong> <span className="text-gray-800 pl-2">{customer.projectName}</span>
              </p>
              {customer.status === 'booked' ? (
                <p className="text-yellow-600 font-semibold">Booking Amount: ₹{customer.bookingAmount}</p>
              ) : customer.status === 'confirmed' ? (
                <p className="text-green-600 font-semibold">Purchase Amount: ₹{customer.purchaseAmount}</p>
              ) : null}
              <p className={`mt-4 py-2 px-4 rounded-lg border  text-center font-semibold ${getStatusColor(customer.status)}`}>
                Status: {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                {customer.status === 'not-confirmed' && (
                <button
                  onClick={() => openBookingPopup(customer)}
                  className=" ml-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                  Book Now
                </button>
              )}
              {customer.status === 'booked' && (
    <button
      onClick={()=>c_booking(customer)}
      className="ml-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-200"
    >
      Confirm
    </button>
  )}
              </p>
            
            </div>
          ))}
        </div>
      </div>

      {selectedCustomer && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-lg">
            <h3 className="text-xl font-semibold mb-4">Booking Details for {selectedCustomer.name}</h3>
            <input
              type="number"
              placeholder="Booking Amount"
              value={bookingAmount}
              onChange={(e) => setBookingAmount(e.target.value)}
              className="mb-4 w-full p-2 border"
            />
            <input
              type="number"
              placeholder="Total Amount"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              className="mb-4 w-full p-2 border"
            />
            <input
              type="date"
              placeholder="Booking Date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="mb-4 w-full p-2 border"
            />
            <input
              type="time"
              placeholder="Booking Time"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              className="mb-4 w-full p-2 border"
            />
            <button
              onClick={handleBooking}
              className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            >
              Book
            </button>
            <button
              onClick={() => setSelectedCustomer(null)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerDetails;
