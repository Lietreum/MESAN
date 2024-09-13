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
        borderRadius: "16px", // Rounder corners
        border: "2px solid black", // Black border
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Custom shadow
        backgroundColor: "#fff",
      }}
    >
      {/* Left Side: Wallet Icon and Balance */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <BiSolidCoinStack size={32} />
        <div>
          <h4 style={{ margin: 0 }}>Wallet</h4>
          <h2 style={{ margin: 0 }}>{balance.toLocaleString()} Point</h2>
        </div>
      </div>

      {/* Middle: Top Up Button */}
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
      >
        <FaPlusCircle />
        Top Up
      </button>

      {/* Right Side: Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
