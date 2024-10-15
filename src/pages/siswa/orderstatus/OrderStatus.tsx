import React from 'react';

const OrderTracking: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Tracking</h1>
      <div className="mb-4">
        <h2 className="text-sm text-gray-500">Order Details: #82314</h2>
        <p className="text-sm text-gray-500">Date: 29-08-2024</p>
      </div>

{/* Progress Stepper */}
<ul className="timeline mb-6 justify-center">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end">
      <span className="text-black">Pending</span>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end">
      <span className="text-black">Processing</span>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end">
      <span className="text-black">Ready</span>
      <p className="text-sm text-gray-500">Pick up in Canteen</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end">
      <span className="text-black">Completed</span>
      <p className="text-sm text-gray-500">Order Complete</p>
    </div>
  </li>
</ul>


      {/* Order Items */}
      <h2 className="text-lg font-semibold mb-4 text-purple-600">Item Ordered</h2>
      <div className="border-t border-b border-gray-200 py-4">
        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/0c/c0/c6/0cc0c6a5662e002a7967d7cdbf164d5c.jpg" // Replace with actual image URL
            alt="Nasi Kuning"
            className="w-16 h-16 rounded-lg mr-4"
          />
          <div className="flex-1">
            <h3 className="text-gray-800">Nasi Kuning</h3>
          </div>
          <div className="text-center w-16">01</div>
          <div className="text-right w-24 text-gray-800">Rp.6000</div>
        </div>
      </div>

      {/* Total Calculation */}
      <div className="mt-4">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>Rp.6000</span>
        </div>
        <div className="flex justify-between text-xl font-semibold text-gray-900 mt-2">
          <span>Total</span>
          <span className="text-purple-600">Rp.6000</span>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
