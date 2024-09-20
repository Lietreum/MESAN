import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

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
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Find account"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-80 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Sort and Add Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSort}
            className="flex items-center space-x-1 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <span>Sort by</span>
            {sortAsc ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}
          </button>

          {/* Add Account Button */}
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 space-x-2">
            <AiOutlinePlus />
            <span>Add Account</span>
          </button>
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccounts.map((account, index) => (
          <AccountCard key={index} account={account} />
        ))}
      </div>
    </div>
  );
};

type AccountCardProps = {
  account: Account;
};

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <div className="relative p-4 border rounded-lg flex flex-col items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white transition transform hover:scale-105 hover:shadow-lg duration-300">
      {/* User Icon */}
      <div className="absolute -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
        <FaUser className="text-indigo-600 text-3xl" />
      </div>

      {/* Account Info */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">{account.name}</h3>
        <p className="text-sm">{account.email}</p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-indigo-800 opacity-0 hover:opacity-90 flex items-center justify-center rounded-lg transition-opacity duration-300">
        <button className="text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ManageAccount;
