import React, { useState } from 'react';
import { BiHide } from "react-icons/bi";
import { FaCoins } from "react-icons/fa"; // Import FaCoins icon
import { useNavigate } from 'react-router-dom'; 

const PaymentOptions: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const navigate = useNavigate();

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  const handleContinue = () => {
    if (selectedMethod) {
      // Navigate to the Countdown page with the selected payment method
      navigate('/Countdown'); // Change this line to navigate to Countdown
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-lg transition-all">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#1C2434] to-indigo-900 text-white p-10 rounded-3xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="block text-sm text-gray-200">Your Balance</span>
              <span className="text-4xl font-bold flex items-center">
                {isBalanceHidden ? (
                  '● ● ● ● ● ● ● ●'
                ) : (
                  <>
                    <FaCoins className="mr-2" /> {/* Add FaCoins icon */}
                    Rp 169,000
                  </>
                )}
              </span>
            </div>
            <div onClick={toggleBalanceVisibility} className="cursor-pointer">
              <BiHide className="w-8 h-8 text-white" /> 
            </div>
          </div>
          <div className="text-sm text-gray-300">User Number</div>
          <div className="text-lg font-mono tracking-wider">1230 0236 0923</div>
        </div>

        {/* White Box Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Choose Payment Method</h2>
          
          {/* Payment Methods */}
          <div className="space-y-4">
            {['DANA', 'GoPay', 'BCA', 'BRI', 'Mandiri'].map((method) => (
              <button
                key={method}
                onClick={() => handleSelectMethod(method)}
                className={`flex items-center w-full px-4 py-3 rounded-lg shadow-lg transform transition-transform 
                  ${selectedMethod === method ? 'bg-blue-500 scale-105 border-2 border-blue-500' : 'bg-white hover:bg-blue-50 border border-gray-200'}`}
              >
                <img src={`https://via.placeholder.com/40?text=${method}`} alt={method} className="w-10 h-10 mr-4" />
                <span className={`text-lg font-semibold transition-all ${selectedMethod === method ? 'text-white' : 'text-gray-700'}`}>{method}</span>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-8">
            <button
              onClick={handleContinue} 
              className={`w-full py-3 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#1C2434] to-indigo-900 transition-all
                ${selectedMethod ? 'hover:bg-gray-800 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
              disabled={!selectedMethod}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
