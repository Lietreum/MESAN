import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";


interface WalletCardProps {
  balance: number;
  profileName: string;
  profileImage: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance, profileName, profileImage }) => {
  return (
    <div className="max-w-2xl mx-auto mt-24">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-between p-5">
        {/* Wallet Information Section */}
        <div className="flex flex-col gap-3">
          {/* Wallet Icon and Text */}
          <div className="flex items-center gap-2">
            <BiSolidCoinStack  className="w-6 h-6 text-gray-700" />
            <p className="text-xl font-bold text-gray-700">Wallet</p>
          </div>
          {/* Balance Display */}
          <div>
            <p className="text-2xl font-bold text-gray-900">{balance.toLocaleString()} Points</p>
          </div>
        </div>

        {/* Top-Up Button Section */}
        <div className="flex items-center justify-center gap-4 px-10">
          <button className="flex flex-col items-center text-center">
            <FaPlusCircle className="w-9 h-9 text-black" />
            <span className="mt-1 text-gray-600">Top Up</span>
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-end gap-4 px-10">
        <p className="text-lg font-medium text-gray-700">{profileName}</p>
          <img
            src={profileImage}
            alt={profileName}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
