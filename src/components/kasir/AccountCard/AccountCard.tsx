import React from 'react';

type Account = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
};

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <div
      className="flex items-center p-4 rounded-lg shadow-sm border border-gray-200"
      style={{ backgroundColor: "#e4e4e7" }}
    >
      <img
        src={account.avatarUrl}
        alt={account.name}
        className="h-12 w-12 rounded-full object-cover mr-4"
      />
      <div>
        <h1 className="text-lg font-semibold" style={{ color: "#030712" }}>
          {account.name}
        </h1>
        <p className="text-sm" style={{ color: "#030712" }}>
          {account.email}
        </p>
      </div>
    </div>
  );
};

export default AccountCard;
