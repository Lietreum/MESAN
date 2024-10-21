import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./ModalSuccess"; // Import the Modal component
import { GiProfit } from "react-icons/gi"; // Icon for profit
import { AiFillSignal } from "react-icons/ai"; // Icon for product

// Dummy account data
const accounts = [
  { id: 1, name: 'Rendra Ramadhan', email: 'rendra@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/7a/36/52/7a3652ad70c3e617f5086e2dd04e03a9.jpg' },
  { id: 2, name: 'Aji Permana', email: 'aji@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/79/e4/8f/79e48ffbbe51db6f479cb22d815b72e2.jpg' },
  { id: 3, name: 'KingVaz', email: 'faza@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/enabled_hi/564x/21/4b/d4/214bd46a4a974c7e59117f39e02c3a04.jpg' },
  { id: 4, name: 'Rakan Danendra', email: 'rakan@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/236x/06/09/15/060915179628388d01cdf3d0e71c24a4.jpg' },
  { id: 5, name: 'Abdan Salhari', email: 'abdan@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/236x/af/33/61/af33612ce6cc79659d085b769de6e768.jpg' },
  { id: 6, name: 'Ridho Pratama', email: 'ridho@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/01/6f/cd/016fcda7f09781c94453a6aad619fb6f.jpg' },
];

const BalanceWithdrawal: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the account ID from the URL
  const account = accounts.find((acc) => acc.id === parseInt(id || "")); // Find the matching account
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility

  if (!account) {
    return <div>Account not found</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawalAmount(e.target.value);
  };

  const handleWithdrawal = () => {
    if (withdrawalAmount) {
      console.log(`Withdrawing: ${withdrawalAmount}`);
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
            <img src={account.avatarUrl} alt="Profile" className="rounded-full w-16 h-16" />
          </div>
          <div className="ml-2 sm:ml-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{account.name}</h2>
          </div>
        </div>

        {/* Product and Profit Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4 sm:mt-0">
          {/* Total Product */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg transition-all hover:shadow-xl hover:bg-gray-100">
            <div className="bg-yellow-400 p-2 rounded-full">
              <AiFillSignal className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-2">Rp 2.500</h3>
            <p className="text-sm text-gray-500">Total Product</p>
          </div>

          {/* Total Profit */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-lg transition-all hover:shadow-xl hover:bg-gray-100">
            <div className="bg-yellow-400 p-2 rounded-full">
              <GiProfit className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-2">Rp 2.500</h3>
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
          onClose={() => setIsModalOpen(false)} // Closes modal when onClose is triggered
        />
      )}
    </div>
  );
};

export default BalanceWithdrawal;
