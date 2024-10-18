import React, { useState } from "react";

const BottomRightContent: React.FC = () => {
  const [cash, setCash] = useState<string>(""); // State to manage the input value

  const handleCashChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCash(event.target.value);
  };

  const calculateChange = () => {
    const total = 100000;
    const cashAmount = parseInt(cash) || 0;
    return cashAmount - total;
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex-1 overflow-auto">
      <div className="mt-4 text-gray-900"> {/* Use a darker gray for main text */}
        {/* Total Display */}
        <div className="mb-4">
          <p className="text-2xl font-bold">
            Total: <span className="text-black">Rp. 100.000</span> {/* Use black for total */}
          </p>
        </div>

        {/* Cash Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Tunai:
          </label>
          <input
            type="text"
            placeholder="Masukkan Nominal"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition shadow-sm text-gray-900 bg-gray-100" // Light gray background for the input
            value={cash}
            onChange={handleCashChange}
          />
        </div>

        {/* Change Calculation */}
        <div className="mb-4">
          <p className="text-xl font-bold">
            Kembalian:{" "}
            <span className="text-black">
              Rp. {calculateChange() >= 0 ? calculateChange() : 0}
            </span>
          </p>
        </div>

        {/* Button */}
        <button className="mt-4 bg-black text-white py-3 px-4 rounded-lg w-full shadow-lg text-lg font-semibold hover:bg-gray-800 transition duration-200">
          Selesai
        </button>
      </div>
    </div>
  );
};

export default BottomRightContent;
