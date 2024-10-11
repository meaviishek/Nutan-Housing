import React from 'react'
import { useState } from 'react';
const customers = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 555-1234",
    email: "john.doe@example.com",

    totalPurchases: "₹500,000",
    address: "123 Elm St, Cityville",
    purchasedPlot: "Plot 12A",
    projectName: "Green Valley Heights",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 555-5678",
    email: "jane.smith@example.com",

    totalPurchases: "₹200,000",
    address: "456 Oak St, Townsville",
    purchasedPlot: "Plot 23B",
    projectName: "Sunrise Estate",
  },
  // Add more customers here
];

function CustomerDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleSearch = (event) => setSearchTerm(event.target.value.toLowerCase());

  const handleFilterChange = (event) => setStatusFilter(event.target.value);

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm);
    const matchesStatus = statusFilter === "All" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  return (
    <div className='mt-16'>  <div className="container mx-auto  max-w-7xl p-8">
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      Customer Details
    </h2>

    {/* Search and Filter Controls */}
    <div className="flex justify-between mb-8">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded-lg p-2 w-1/2 mr-4"
      />

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredCustomers.map((customer) => (
        <div
          key={customer.id}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {customer.name}
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Phone:</strong> {customer.phone}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Email:</strong> {customer.email}
          </p>
         
          <p className="text-gray-700 mb-1">
            <strong>Total Purchases:</strong> {customer.totalPurchases}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Customer Address:</strong> {customer.address}
          </p>
       
          <p className="text-gray-700 mb-1">
            <strong>Purchased Plot:</strong> {customer.purchasedPlot}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Project Name:</strong> {customer.projectName}
          </p>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default CustomerDetails