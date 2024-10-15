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
    <div className="bg-white p-6 shadow-lg rounded-lg flex-1 overflow-auto scrollbar-hide">
      <div className="mt-4 text-blue-800"> {/* Text color changed to blue */}
        {/* Total Display */}
        <div className="mb-4">
          <p className="text-xl font-bold">
            Total: <span className="text-blue-700">Rp. 100.000</span> {/* Changed to darker blue */}
          </p>
        </div>

        {/* Cash Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-blue-800 mb-2"> {/* Label text color changed to blue */}
            Tunai:
          </label>
          <input
            type="text"
            placeholder="Masukkan Nominal"
            className="border border-gray-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm text-blue-800 bg-white" // Input text color changed to blue
            value={cash}
            onChange={handleCashChange}
          />
        </div>

        {/* Change Calculation */}
        <div className="mb-4">
          <p className="text-xl font-bold">
            Kembalian:{" "}
            <span className="text-blue-700"> {/* Change color to blue */}
              Rp. {calculateChange() >= 0 ? calculateChange() : 0}
            </span>
          </p>
        </div>

        {/* Button */}
        <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg w-full shadow-lg text-lg font-semibold">
          Selesai
        </button>
      </div>
    </div>
  );
};

export default BottomRightContent;
