import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface WalletCardProps {
  balance: number;
  profileName: string;
  profileImage: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance, profileName, profileImage }) => {
  const [coinCount, setCoinCount] = useState(1);

  useEffect(() => {
    if (balance > 0) {
      setCoinCount(balance >= 3 ? 3 : balance);
    }
  }, [balance]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wallet-card-container bg-white border border-white shadow-lg relative overflow-hidden w-full max-w-[1000px] h-[180px] md:h-[180px] md:flex md:justify-between md:items-center p-5 rounded-lg my-5 transition-shadow duration-300" // Updated border color to white
    >
      {/* Mobile Layout (flex-col) */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full">
        {/* Top: Wallet Icon and Balance */}
        <div className="flex flex-col items-center md:flex-row md:gap-2 gap-1 mb-4 md:mb-0">
          <div className="coin-container relative">
            {coinCount === 1 ? (
              <BiSolidCoinStack size={32} color="#2979FF" />
            ) : (
              <div className="coin-stack relative">
                <BiSolidCoinStack size={32} color="#2979FF" />
                {coinCount > 1 && <BiSolidCoinStack size={28} color="#2979FF" className="absolute top-[4px]" />}
                {coinCount > 2 && <BiSolidCoinStack size={24} color="#2979FF" className="absolute top-[8px]" />}
              </div>
            )}
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-gray-500 text-sm md:text-base">Wallet Balance</h4>
            <h2 className="text-black font-bold text-xl md:text-2xl">{balance.toLocaleString()} Points</h2>
          </div>
        </div>

        {/* Middle: Top Up Button with Black/White Hover Effect */}
        <Link to="/TopupPlacehold" className="my-2">
          <button
            className="bg-black text-white font-semibold py-2 px-5 rounded-md flex items-center gap-2 transition-all hover:bg-white hover:text-black border border-black"
          >
            <FaPlusCircle size={20} />
            Top Up
          </button>
        </Link>

        {/* Bottom: Profile Section */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-2 gap-1">
          <span className="text-gray-700 font-medium text-lg">{profileName}</span>
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white shadow-lg shadow-black/20"> {/* Updated border color to white */}
            <img
              src={profileImage}
              alt={profileName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WalletCard;
