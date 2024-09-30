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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Find account"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-80 border rounded-md"
          />
        </div>

        {/* Sort and Layout Buttons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleSort}
              className="flex items-center space-x-1 px-4 py-2 border rounded-md"
            >
              <span>Sort by</span>
              {sortAsc ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </button>
          </div>

          {/* Add Account Button */}
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md space-x-2">
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
            className="p-4 border rounded-md flex flex-col items-center bg-gradient-to-r from-indigo-500 to-blue-700 text-white"
          >
            <div className="bg-white rounded-full p-3 mb-4">
              <FaUser className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold">{account.name}</h3>
            <p className="text-sm">{account.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccount;
