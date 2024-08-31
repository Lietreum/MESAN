import React from "react";

const QRScanCard: React.FC = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center">
          {/* QR Code Scan Area */}
          <div className="w-full h-72 bg-gray-200 border-4 border-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">QR Code Scan Area</p>
          </div>
          {/* Text Prompts */}
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold mb-2">Please scan the QR code below</p>
            <p className="text-sm text-gray-600">Please make payment before</p>
            <p className="text-sm font-semibold text-red-500">12:34 PM</p>
          </div>
          {/* Action Button */}
          <button className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600">
            Click here after payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRScanCard;
