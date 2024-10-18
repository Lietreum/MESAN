import React from 'react';
import SearchBar from '../../../components/kasir/SearchBar/SearchBar';
import AccountCard from '../../../components/kasir/AccountCard/AccountCard';
import BalanceCard from '../../../components/kasir/BalanceCard/BalanceCardKasir';

// Define types for the account data
type Account = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
};

// Sample account data
const accounts: Account[] = [
  { id: 1, name: 'Rendra Ramadhan', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Aji Permana', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Rauma', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Ashila', email: '222*****@smkn4bdg.sch.id', avatarUrl: 'https://via.placeholder.com/50' },
];

const DashboardPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  // Example balance amount
  const balance = 10000000; 

  const filteredAccounts = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Balance Card */}
      <BalanceCard balance={balance} />

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Account Cards */}
      <div className="space-y-4 mt-4">
        {filteredAccounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
