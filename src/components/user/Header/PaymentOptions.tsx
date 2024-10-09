import React, { useState } from 'react';
import { BiHide } from "react-icons/bi";
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
      navigate(`/${selectedMethod}`); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-5xl bg-transparent rounded-3xl overflow-hidden transition-all">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#1C2434] to-indigo-900 text-white p-10 rounded-3xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="block text-sm text-gray-200">Your Balance</span>
              <span className="text-4xl font-bold">
                {isBalanceHidden
                  ? '● ● ● ● ● ● ● ●' 
                  : 'Rp 169,000'}
              </span>
            </div>

            {/* Icon to toggle balance visibility */}
            <div onClick={toggleBalanceVisibility} className="cursor-pointer">
              <BiHide className="w-8 h-8 text-white" /> 
            </div>
          </div>
          <div className="text-sm text-gray-300">User Number</div>
          <div className="text-lg font-mono tracking-wider">1230 0236 0923</div>
        </div>

        {/* White Box Content */}
        <div className="bg-white p-6 rounded-b-3xl mt-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Choose Payment Method</h2>
          
          {/* E-Wallet Methods */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-500 mb-3">E-Wallet</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleSelectMethod('DANA')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all 
                  ${selectedMethod === 'DANA' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
              >
                <img src="https://via.placeholder.com/40?text=DANA" alt="DANA" className="w-8 h-8 mr-4" />
                <span className="text-lg font-medium text-gray-700">DANA</span>
              </button>

              <button
                onClick={() => handleSelectMethod('GoPay')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all 
                  ${selectedMethod === 'GoPay' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
              >
                <img src="https://via.placeholder.com/40?text=GoPay" alt="GoPay" className="w-8 h-8 mr-4" />
                <span className="text-lg font-medium text-gray-700">GoPay</span>
              </button>
            </div>
          </div>

          {/* Bank Transfer Methods */}
          <div>
            <h3 className="text-sm text-gray-500 mb-3">Bank Transfer</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleSelectMethod('BCA')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all 
                  ${selectedMethod === 'BCA' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
              >
                <img src="https://via.placeholder.com/40?text=BCA" alt="BCA" className="w-8 h-8 mr-4" />
                <span className="text-lg font-medium text-gray-700">BCA</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
              <button
                onClick={() => handleSelectMethod('BCA')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all 
                  ${selectedMethod === 'BCA' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
              >
                <img src="https://via.placeholder.com/40?text=BCA" alt="BCA" className="w-8 h-8 mr-4" />
                <span className="text-lg font-medium text-gray-700">BCA</span>
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleSelectMethod('BCA')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all 
                  ${selectedMethod === 'BCA' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}
              >
                <img src="https://via.placeholder.com/40?text=BCA" alt="BCA" className="w-8 h-8 mr-4" />
                <span className="text-lg font-medium text-gray-700">BCA</span>
              </button>
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
