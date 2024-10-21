import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../../components/kasir/SearchBar/SearchBar';

// Dummy account data
const accounts = [
  { id: 1, name: 'Rendra Ramadhan', email: 'rendra@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/7a/36/52/7a3652ad70c3e617f5086e2dd04e03a9.jpg' },
  { id: 2, name: 'Aji Permana', email: 'aji@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/79/e4/8f/79e48ffbbe51db6f479cb22d815b72e2.jpg' },
  { id: 3, name: 'KingVaz', email: 'faza@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/21/4b/d4/214bd46a4a974c7e59117f39e02c3a04.jpg' },
  { id: 4, name: 'Rakan Danendra', email: 'rakan@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/236x/06/09/15/060915179628388d01cdf3d0e71c24a4.jpg' },
  { id: 5, name: 'Abdan Salhari', email: 'abdan@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/236x/af/33/61/af33612ce6cc79659d085b769de6e768.jpg' },
  { id: 6, name: 'Ridho Pratama', email: 'ridho@smkn4bdg.sch.id', avatarUrl: 'https://i.pinimg.com/564x/01/6f/cd/016fcda7f09781c94453a6aad619fb6f.jpg' },
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
