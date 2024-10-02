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
    <div className="bg-blue-100 p-4 shadow-lg rounded border flex-1 overflow-auto scrollbar-hide">
      <div className="mt-4">
        <p>Total: Rp. 100000</p>
        <p>
          Tunai:{" "}
          <input
            type="text"
            placeholder="Masukkan Nominal"
            className="border p-2 w-full"
            value={cash}
            onChange={handleCashChange}
          />
        </p>
        <p>Kembalian: Rp. {calculateChange() >= 0 ? calculateChange() : 0}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full">
          Selesai
        </button>
      </div>
    </div>
  );
};

export default BottomRightContent;
