import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../../components/kasir/SearchBar/SearchBar';
// import AccountCard from '../../../components/kasir/AccountCard/AccountCard';

// Dummy account data
const accounts = [
  { id: 1, name: 'Rendra Ramadhan', email: 'rendra@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Aji Permana', email: 'aji@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Rauma', email: 'rauma@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Ashila', email: 'ashila@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 5, name: 'Budi Santoso', email: 'budi@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Rina Melati', email: 'rina@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
];

const WithdrawalPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter accounts based on search term
  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Account Cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAccounts.map((account) => (
          <div key={account.id}>
            <Link to={`/kasir/balancewithdrawal/${account.id}`} className="block no-underline">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-black hover:shadow-lg transition-shadow duration-300 ease-in-out">
                {/* Avatar */}
                <div className="flex-shrink-0 w-14 h-14 overflow-hidden rounded-full border-2 border-black">
                  <img src={account.avatarUrl} alt={account.name} className="w-full h-full object-cover" />
                </div>
                {/* Account Info */}
                <div className="ml-4">
                  <h2 className="text-lg font-bold text-black hover:text-gray-800 transition-colors duration-200">{account.name}</h2>
                  <p className="text-sm text-gray-600">{account.email}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawalPage;
