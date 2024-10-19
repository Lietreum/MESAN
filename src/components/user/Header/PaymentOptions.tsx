import React, { useState } from 'react';
import { BiHide } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Import images manually
import DANA from '../../../assets/admin/images/payment/Dana.png';
import GoPay from '../../../assets/admin/images/payment/Gopay.png';
import BCA from '../../../assets/admin/images/payment/BCA.png';
import BRI from '../../../assets/admin/images/payment/BRI.png';
import BNI from '../../../assets/admin/images/payment/BNI.png';

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
      navigate('/Countdown');
    }
  };

  // List of payment methods with corresponding images
  const paymentMethods = [
    { name: 'DANA', image: DANA },
    { name: 'GoPay', image: GoPay },
    { name: 'BCA', image: BCA },
    { name: 'BRI', image: BRI },
    { name: 'BNI', image: BNI },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-lg transition-all">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-[#1C2434] to-indigo-900 text-white p-6 md:p-10 rounded-t-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div>
              <span className="block text-sm text-gray-200">Your Balance</span>
              <span className="text-3xl md:text-4xl font-bold flex items-center">
                {isBalanceHidden ? (
                  '● ● ● ● ● ● ● ●'
                ) : (
                  <>
                    <FaCoins className="mr-2" />
                    Rp 169,000
                  </>
                )}
              </span>
            </div>
            <div onClick={toggleBalanceVisibility} className="cursor-pointer mt-4 md:mt-0 hover:text-gray-300 transition-colors duration-200">
              <BiHide className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-sm text-gray-300">User Number</div>
          <div className="text-lg font-mono tracking-wider">1230 0236 0923</div>
        </div>

        {/* White Box Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Choose Your Payment Method</h2>
          
          {/* Payment Methods */}
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <button
                key={method.name}
                onClick={() => handleSelectMethod(method.name)}
                className={`flex items-center w-full px-4 py-3 rounded-lg shadow-lg transition-transform 
                  ${selectedMethod === method.name ? 'bg-blue-500 scale-105 border-2 border-blue-500' : 'bg-white hover:bg-blue-50 border border-gray-200'}`}
              >
                <img src={method.image} alt={method.name} className="w-10 h-10 mr-4" />
                <span className={`text-lg font-semibold transition-all ${selectedMethod === method.name ? 'text-white' : 'text-gray-700'}`}>{method.name}</span>
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
