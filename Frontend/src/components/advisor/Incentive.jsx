import React, { useState, useEffect } from 'react';

function IncentiveDashboard() {
  const [customers, setCustomers] = useState([]);
  const [totalIncentive, setTotalIncentive] = useState(0);
  const baseurl = 'http://localhost:5000/api/advisors';

  useEffect(() => {
    const storedData = localStorage.getItem('advisorData');
    const Data = JSON.parse(storedData);
    const advisorId = Data.id;

    // Fetch customer data
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`${baseurl}/${advisorId}/customers`);
        const data = await response.json();
        setCustomers(data);


        const total = data.reduce((sum, customer) => {
          return sum + parseFloat(calculateIncentive(customer.purchaseAmount));
        }, 0);

        setTotalIncentive(total);

        await fetch(`${baseurl}/${advisorId}/update-incentives`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ incentives: total }),
        });
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);

  // Incentive calculation logic based on property value
  const calculateIncentive = (totalPurchases) => {
    if (totalPurchases <= 500000) return (totalPurchases * 0.04).toFixed(2);
    if (totalPurchases <= 1000000) return (totalPurchases * 0.05).toFixed(2);
    if (totalPurchases <= 2000000) return (totalPurchases * 0.06).toFixed(2);
    if (totalPurchases <= 4000000) return (totalPurchases * 0.07).toFixed(2);
    if (totalPurchases <= 8000000) return (totalPurchases * 0.08).toFixed(2);
    if (totalPurchases <= 15000000) return (totalPurchases * 0.09).toFixed(2);
    if (totalPurchases <= 30000000) return (totalPurchases * 0.10).toFixed(2);
    if (totalPurchases <= 60000000) return (totalPurchases * 0.11).toFixed(2);
    return (totalPurchases * 0.12).toFixed(2); // Maximum 12%
  };

  return (
    <div className="flex min-h-screen bg-gray-50 mt-16">
      {/* Left Side: Recent Incentives */}
      <div className="w-2/3 p-8">
        <h2 className="text-4xl font-bold text-primary mb-6">Recent Incentives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-secondary mb-2">{customer.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Property:</strong> {customer.plotNumber}, {customer.projectName}</p>
              <p className="text-gray-700 mb-1"><strong>Total Purchases:</strong> ₹{customer.purchaseAmount.toLocaleString()}</p>
              <p className="text-green-600 font-semibold">
                <i className="fas fa-coins mr-1 text-yellow-500"></i>
                Incentive Earned: ₹{calculateIncentive(customer.purchaseAmount)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Incentive Table */}
      <div className="w-1/3 bg-white p-8 shadow-lg border-l border-gray-200">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-4">Reference</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 py-2 text-left text-lg font-semibold text-orange-600">Range</th>
              <th className="border-b-2 py-2 text-right text-lg font-semibold text-orange-600">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b py-2 text-gray-700">0-5 Lac</td>
              <td className="border-b py-2 text-right text-gray-700">4%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">5-10 Lac</td>
              <td className="border-b py-2 text-right text-gray-700">5%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">10-20 Lac</td>
              <td className="border-b py-2 text-right text-gray-700">6%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">20-40 Lac</td>
              <td className="border-b py-2 text-right text-gray-700">7%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">40-80 Lac</td>
              <td className="border-b py-2 text-right text-gray-700">8%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">80-1.5 Crore</td>
              <td className="border-b py-2 text-right text-gray-700">9%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">1.5-3 Crore</td>
              <td className="border-b py-2 text-right text-gray-700">10%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">3-6 Crore</td>
              <td className="border-b py-2 text-right text-gray-700">11%</td>
            </tr>
            <tr>
              <td className="border-b py-2 text-gray-700">6 Crore & Above</td>
              <td className="border-b py-2 text-right text-gray-700">12%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-center text-orange-600 font-semibold">
          Incentive should not exceed 12%
        </p>
      </div>
    </div>
  );
}

export default IncentiveDashboard;
