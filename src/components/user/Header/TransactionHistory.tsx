import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa"; // Icons for top-up and expenses

// Define transaction type
type Transaction = {
  id: number;
  date: string;
  storeName: string;
  topUpHistory?: { type: string; amount: number }[];
  expenseHistory?: { type: string; amount: number }[];
};

// Example order items with top-up and expense history
const transactions: Transaction[] = [
  {
    id: 1,
    date: "28 August 2024",
    storeName: "Kantin Ibu Kosim",
    topUpHistory: [{ type: "Top Up", amount: 100000 }],
    expenseHistory: [{ type: "Expense", amount: 10000 }],
  },
  {
    id: 2,
    date: "27 August 2024",
    storeName: "Kantin Ibu Afika",
    expenseHistory: [{ type: "Expense", amount: 7500 }],
  },
  {
    id: 3,
    date: "26 August 2024",
    storeName: "Kantin Ibu Kosim",
    expenseHistory: [{ type: "Expense", amount: 3000 }],
  },
];

const OrderHistory: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50"> {/* Increased padding for top and bottom */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header for History Transaction */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4 md:mb-0"> {/* Added bottom margin for mobile */}
            History Transaction
          </h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm transition-all duration-200 hover:bg-gray-100">
              Date
            </button>
            <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm transition-all duration-200 hover:bg-gray-100">
              Service
            </button>
          </div>
        </div>

        {/* Transaction List */}
        {transactions.map((item) => (
          <div
            key={item.id}
            className={`mb-6 p-4 md:p-6 bg-white rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <FaWallet className="text-gray-500" size={28} />
                <div>
                  <p className="font-semibold text-lg md:text-xl">{item.storeName}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>

              <div>
                {/* Show total top-up and expense (Swapped Position) */}
                {item.topUpHistory && (
                  <p className="text-green-600 font-bold">
                    +Rp{item.topUpHistory.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                  </p>
                )}
                {item.expenseHistory && (
                  <p className="text-red-600 font-bold">
                    -Rp{item.expenseHistory.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            {/* Expandable section for more details */}
            {openItemId === item.id && (
              <div className="mt-4 bg-gray-50 p-4 rounded-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Transaction Details</h3>
                <ul className="space-y-2">
                  {/* Show top-up first */}
                  {item.topUpHistory?.map((history, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-green-500 text-md font-medium"
                    >
                      <FaArrowUp className="text-green-500" />
                      <p className="ml-2">{history.type}:</p>
                      <p>+Rp{history.amount.toLocaleString()}</p>
                    </li>
                  ))}
                  {/* Show expenses after top-up */}
                  {item.expenseHistory?.map((history, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-red-500 text-md font-medium"
                    >
                      <FaArrowDown className="text-red-500" />
                      <p className="ml-2">{history.type}:</p>
                      <p>-Rp{history.amount.toLocaleString()}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Summary of income and expenses (Swapped Position) */}
        <div className="mt-8 flex flex-col md:flex-row justify-between bg-white p-4 md:p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <FaArrowUp className="text-green-500" size={28} />
            <p className="font-semibold text-lg md:text-xl">Income: Rp100.000</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <FaArrowDown className="text-red-500" size={28} />
            <p className="font-semibold text-lg md:text-xl">Expense: Rp21.500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
