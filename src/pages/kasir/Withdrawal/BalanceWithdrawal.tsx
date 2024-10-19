import React, { useState } from "react";
import Modal from "./ModalSuccess"; // Import the Modal component

const BalanceWithdrawal: React.FC = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawalAmount(e.target.value);
  };

  const handleWithdrawal = () => {
    if (withdrawalAmount) {
      // Simulate a withdrawal process here
      console.log(`Withdrawing: ${withdrawalAmount}`);

      // Show success modal
      setIsModalOpen(true);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl shadow-md max-w-2xl mx-auto">
      {/* Profile and Info Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg shadow">
        <div className="flex items-center">
          {/* Profile Image */}
          <div className="bg-blue-200 rounded-full p-1">
            <img src="ZEKE" alt="Profile" className="rounded-full w-16 h-16" />
          </div>
          <div className="ml-2 sm:ml-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Pak Atep</h2>
          </div>
        </div>

        {/* Product and Profit Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-0">
          {/* Total Product */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg">
            <div className="bg-yellow-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3M9 12h6"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-2">2.450</h3>
            <p className="text-sm text-gray-500">Total Product</p>
          </div>

          {/* Total Profit */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg">
            <div className="bg-yellow-400 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3M9 12h6"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-2">RP 2.500.00</h3>
            <p className="text-sm text-gray-500">Total Profit</p>
          </div>
        </div>
      </div>

      {/* Input Field for Withdrawal Amount */}
      <input
        type="text"
        value={withdrawalAmount}
        onChange={handleInputChange}
        placeholder="Jumlah Penarikan"
        className="w-full mt-6 px-4 py-3 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
      />

      {/* Withdrawal Button */}
      <button
        className="w-full mt-8 bg-black text-white py-3 rounded-lg text-lg shadow btn hover:bg-slate-700"
        onClick={handleWithdrawal}
      >
        Balance Withdrawal
      </button>

      {/* Modal for Successful Withdrawal */}
      {isModalOpen && (
        <Modal
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
};

export default BalanceWithdrawal;
