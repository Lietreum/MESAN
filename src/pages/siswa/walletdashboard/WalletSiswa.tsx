import React from 'react';
import { MdFastfood, MdAttachMoney, MdCalendarToday } from "react-icons/md"; // Import the icons

// Define the types for transactions
interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
}

const BalanceCard: React.FC<{
  balance: number;
  userName: string;
  cardNumber: string;
  income: number;
  expense: number;
}> = ({ balance, userName, cardNumber, income, expense }) => (
  <div className="bg-[#12192D] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between mb-8">
    <div className="flex flex-col">
      <h3 className="text-lg md:text-xl">Saldo</h3>
      <h1 className="text-2xl md:text-3xl">Rp {balance.toLocaleString()}</h1>
      <p className="my-2 text-base">{userName}</p>
      <p className="my-2 text-base">{cardNumber}</p>
    </div>
    <div className="flex flex-col justify-center gap-4 mt-4 md:mt-0">
      <button className="bg-[#67A6FF] text-white py-2 px-5 rounded-md">+ Rp {income.toLocaleString()}</button>
      <button className="bg-[#FF6767] text-white py-2 px-5 rounded-md">- Rp {expense.toLocaleString()}</button>
    </div>
  </div>
);

const TransactionCard: React.FC<Transaction> = ({ title, amount, date }) => (
  <div className="bg-[#F3F4F6] p-4 rounded-xl flex items-center gap-6">
    <div className="w-16 h-16 bg-[#12192D] rounded-full flex justify-center items-center text-white">
      {title === "Nasi Kuning" || title === "Batagor" || title === "Cimol Bojot" ? (
        <MdFastfood className="text-3xl" />
      ) : (
        <MdAttachMoney className="text-3xl" />
      )}
    </div>
    <div className="flex flex-col">
      <h4 className="m-0 text-xl">{title}</h4>
      <p className="m-1 text-base text-gray-600">
        <MdAttachMoney /> Rp {amount.toLocaleString()}
      </p>
      <p className="m-1 text-base text-gray-600">
        <MdCalendarToday /> {date}
      </p>
    </div>
  </div>
);

const TransactionsList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {transactions.map((transaction) => (
      <TransactionCard key={transaction.id} {...transaction} />
    ))}
  </div>
);

const Dashboard: React.FC = () => {
  const balance: number = 15000000;
  const userName: string = "Azka Dafin Aldrik";
  const cardNumber: string = "1234 5678 91011";
  const income: number = 30000;
  const expense: number = 23000;

  const transactions: Transaction[] = [
    { id: 1, title: "Nasi Kuning", amount: 5000, date: "17 September 2024" },
    { id: 2, title: "Batagor", amount: 8000, date: "12 September 2024" },
    { id: 3, title: "Top Up", amount: 30000, date: "16 September 2024" },
    { id: 4, title: "Cimol Bojot", amount: 10000, date: "11 September 2024" },
  ];

  return (
    <div className="p-5 md:p-10 lg:p-12 font-sans mt-12 mb-12 md:mt-4 md:mb-4"> {/* Increased margins for mobile */}
      {/* Balance Section */}
      <BalanceCard
        balance={balance}
        userName={userName}
        cardNumber={cardNumber}
        income={income}
        expense={expense}
      />

      {/* Transactions Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl">Latest Transactions</h3>
        <button className="bg-[#67A6FF] text-white py-2 px-4 rounded-md">View All</button>
      </div>
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default Dashboard;
