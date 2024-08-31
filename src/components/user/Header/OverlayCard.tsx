import React from 'react';
// import { QRCode } from 'react-qr-svg'; // Import a QR code library of your choice
import { IoIosQrScanner } from "react-icons/io";

const OverlayCard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-80 bg-white shadow-lg rounded-lg p-4 space-y-4">
        {/* QR Scan Card */}
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center rounded-md mb-4">
          <IoIosQrScanner /> 
          </div>
          <p className="text-lg font-semibold">Please scan the QR below</p>
          <div className="mt-4 text-center">
            <p className="text-sm">Please make payment before</p>
            <p className="text-lg font-semibold">12:30 PM</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Click here after payment</button>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="text-center text-lg font-semibold mb-4">Order Details</div>
          <ul className="flex flex-col space-y-2">
            <li className="flex justify-between">
              <span className="font-medium">No Order:</span>
              <span>12345</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Phone Number:</span>
              <span>(123) 456-7890</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Total Order:</span>
              <span>$50.00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Tax:</span>
              <span>$5.00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Total:</span>
              <span>$55.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;