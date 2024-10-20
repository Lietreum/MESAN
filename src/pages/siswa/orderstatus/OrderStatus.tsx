import React from 'react';

const OrderTracking: React.FC = () => {
  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-lg mt-20 mb-20">
      <h1 className="text-2xl font-bold mb-6">Order Tracking</h1>
      <div className="mb-4">
        <h2 className="text-sm text-gray-500">Order Details: #82314</h2>
        <p className="text-sm text-gray-500">Date: 29-08-2024</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Mobile view */}
        <div className="flex md:hidden flex-col">
          {['Pending', 'Processing', 'Ready', 'Completed'].map((status, index) => (
            <div className="flex items-center mb-6" key={index}>
              <div className={`timeline-icon rounded-full h-10 w-10 flex items-center justify-center text-white font-bold ${getColor(index)}`}>
                <span>{index + 1}</span>
              </div>
              <span className="ml-3 text-black font-semibold">{status}</span>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          {['Pending', 'Processing', 'Ready', 'Completed'].map((status, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <div className={`timeline-icon rounded-full h-10 w-10 flex items-center justify-center text-white font-bold ${getColor(index)}`}>
                  <span>{index + 1}</span>
                </div>
                <span className="ml-3 text-black font-semibold">{status}</span>
              </div>
              {index < 3 && <div className="h-0.5 bg-black flex-1 mx-3" />} {/* Updated line color to black */}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Order Items */}
      <h2 className="text-lg font-semibold mb-4 text-purple-600">Item Ordered</h2>
      <div className="border-t border-b border-gray-200 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img
            src="https://i.pinimg.com/564x/0c/c0/c6/0cc0c6a5662e002a7967d7cdbf164d5c.jpg" // Replace with actual image URL
            alt="Nasi Kuning"
            className="w-16 h-16 rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-800 truncate">Nasi Kuning</h3>
          </div>
          <div className="text-center w-16">01</div>
          <div className="text-right w-24 text-gray-800">Rp.6000</div>
        </div>
      </div>

      {/* Total Calculation */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row justify-between text-gray-700">
          <span>Subtotal</span>
          <span>Rp.6000</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-xl font-semibold text-gray-900 mt-2">
          <span>Total</span>
          <span className="text-purple-600">Rp.6000</span>
        </div>
      </div>
    </div>
  );
};

// Function to get the vibrant color for each step
const getColor = (index: number) => {
  switch (index) {
    case 0: return 'bg-red-500';    // Pending
    case 1: return 'bg-yellow-500'; // Processing
    case 2: return 'bg-blue-500';   // Ready
    case 3: return 'bg-green-500';  // Completed
    default: return 'bg-gray-300';
  }
};

export default OrderTracking;
