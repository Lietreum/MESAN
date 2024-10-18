import React from 'react';
import { useNavigate } from 'react-router-dom';

const BalanceWithdrawal: React.FC = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleButtonClick = () => {
    // Arahkan ke halaman BalanceWithdrawalDetail
    navigate('/balance-withdrawal-detail');
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md max-w-2xl mx-auto">
      {/* Profile and Info Section */}
      <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          {/* Profile Image */}
          <div className="bg-blue-200 rounded-full p-1">
            <img
              src="https://i.pinimg.com/564x/c6/7e/c5/c67ec5e9d8ad04793db80887b8bde66c.jpg"
              alt="Profile"
              className="rounded-full w-16 h-16"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-700">Pak Atep</h2>
          </div>
        </div>

        {/* Product and Profit Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Total Product */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg">
            <div className="bg-yellow-400 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M9 12h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">2.450</h3>
            <p className="text-sm text-gray-500">Total Product</p>
          </div>

          {/* Total Profit */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg">
            <div className="bg-yellow-400 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M9 12h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">RP 2.500.00</h3>
            <p className="text-sm text-gray-500">Total Profit</p>
          </div>
        </div>
      </div>

      {/* Withdrawal Button */}
      <button 
        className="w-full mt-8 bg-black text-white py-3 rounded-lg text-lg shadow btn hover:bg-slate-700" 
        onClick={handleButtonClick} // Event handler saat tombol diklik
      >
        Balance Withdrawal
      </button>
    </div>
  );
};

export default BalanceWithdrawal;
