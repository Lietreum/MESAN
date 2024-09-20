import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";
import { Link } from "react-router-dom";

interface WalletCardProps {
  balance: number;
  profileName: string;
  profileImage: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance, profileName, profileImage }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        height: "180px", // Set height as needed
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        margin: "5% 0 20px", // Add margin for spacing around the component
        borderRadius: "24px", // More rounded corners
        border: "2px solid black", // Black border
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Custom shadow
        backgroundColor: "#fff",
        position: "relative", // Needed for hover effect positioning
      }}
      className="group" // Tailwind class for group hover effects
    >
      {/* Hover Effect */}
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border border-black "></span>

      {/* Left Side: Wallet Icon and Balance */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="relative">
        <BiSolidCoinStack size={32} />
        <div>
          <h4 style={{ margin: 0 }}>Wallet</h4>
          <h2 style={{ margin: 0 }}>{balance.toLocaleString()} Point</h2>
        </div>
      </div>

      {/* Middle: Top Up Button */}
      <Link to="/TopupPlacehold" className="relative">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "10px 20px",
            borderRadius: "12px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          className="transition duration-300 ease-in-out transform hover:bg-indigo-600"
        >
          <FaPlusCircle />
          Top Up
        </button>
      </Link>

      {/* Right Side: Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="relative">
        <span>{profileName}</span>
        <img
          src={profileImage}
          alt={profileName}
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default WalletCard;
