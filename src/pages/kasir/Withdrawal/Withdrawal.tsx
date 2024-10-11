import React from 'react';
import SearchBar from '../../../components/kasir/SearchBar/SearchBar';
import AccountCard from '../../../components/kasir/AccountCard/AccountCard';

const accounts = [
  { id: 1, name: 'Rendra Ramadhan', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Aji Permana', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Rauma', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Ashila', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
];

const WithdrawalPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const balance = 10000000; // Example balance

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header with Balance */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Balance: Rp {balance.toLocaleString('id-ID')}</h2>
      </div>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Account Cards */}
      <div className="space-y-4">
        {filteredAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default WithdrawalPage;
