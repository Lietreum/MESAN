import React from 'react';

interface BalanceCardProps {
  balance: number; // Pass the balance as a prop
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm mb-6 text-center" style={{ backgroundColor: '#e4e4e7' }}>
      <h2 className="text-xl font-semibold mb-2" style={{ color: '#030712' }}>Balances</h2>
      <p className="text-3xl font-bold" style={{ color: '#030712' }}>
        Rp. {balance.toLocaleString('id-ID')},00
      </p>
    </div>
  );
};

export default BalanceCard;
