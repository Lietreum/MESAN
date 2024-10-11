import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa'; // Import FaCoins icon
import { BiHide, BiShow } from 'react-icons/bi'; // Import BiHide and BiShow icons

const Co: React.FC = () => {
  // State to manage balance visibility
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);

  // Function to toggle balance visibility
  const toggleBalanceVisibility = () => {
    setIsBalanceHidden((prev) => !prev);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#1C2434] to-indigo-900 text-white p-10 rounded-3xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="block text-sm text-gray-200">Your Balance</span>
            <span className="text-4xl font-bold flex items-center">
              {isBalanceHidden ? (
                '● ● ● ● ● ● ● ●' // Hidden balance
              ) : (
                <>
                  <FaCoins className="mr-2" /> {/* Add FaCoins icon */}
                  Rp 169,000
                </>
              )}
            </span>
          </div>
          <div onClick={toggleBalanceVisibility} className="cursor-pointer">
            {isBalanceHidden ? (
              <BiShow className="w-8 h-8 text-white" /> // Show icon when balance is hidden
            ) : (
              <BiHide className="w-8 h-8 text-white" /> // Hide icon when balance is visible
            )}
          </div>
        </div>
        <div className="text-sm text-gray-300">User Number</div>
        <div className="text-lg font-mono tracking-wider">1230 0236 0923</div>
      </div>
    </div>
  );
};

export default Co;
