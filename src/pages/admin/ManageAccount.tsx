import React, { useState } from "react";
import { FaSearch, FaUser, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

type Account = {
  name: string;
  email: string;
};

const accounts: Account[] = [
  { name: "Pak Atep", email: "222****.pedagang@smkn4bdg.schi.id" },
  { name: "Bu Kosim", email: "222****.pedagang@smkn4bdg.schi.id" },
  { name: "Bu Iin", email: "222****.pedagang@smkn4bdg.schi.id" },
];

const ManageAccount: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const filteredAccounts = accounts
    .filter((account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaSearch className="text-gray-600" />
          <input
            type="text"
            placeholder="Find account"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full sm:w-80 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort and Layout Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSort}
            className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
          >
            <span>Sort by</span>
            {sortAsc ? <FaSortAmountUp className="text-gray-700" /> : <FaSortAmountDown className="text-gray-700" />}
          </button>

          {/* Add Account Button */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md space-x-2 hover:bg-blue-700 transition duration-200">
            <AiOutlinePlus />
            <span>Add Account</span>
          </button>
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccounts.map((account, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md flex flex-col items-center bg-white shadow-lg transition duration-200 hover:shadow-xl"
          >
            <div className="bg-gray-200 rounded-full p-3 mb-4">
              <FaUser className="text-gray-800 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{account.name}</h3>
            <p className="text-sm text-gray-600">{account.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccount;
