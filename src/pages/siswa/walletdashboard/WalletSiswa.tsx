import React from 'react';
import { MdFastfood } from "react-icons/md"; // Import the icon
import { MdAttachMoney, MdCalendarToday } from "react-icons/md"; // Icons for money and date

// Define the types for transactions
interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
}

const Dashboard: React.FC = () => {
  const balance: number = 15000000;
  const userName: string = "Azka Dafin Aldrik";
  const cardNumber: string = "1234 5678 91011";
  const income: number = 30000;
  const expense: number = 23000;

  // Transactions array
  const transactions: Transaction[] = [
    { id: 1, title: "Nasi Kuning", amount: 5000, date: "17 September 2024" },
    { id: 2, title: "Batagor", amount: 8000, date: "12 September 2024" },
    { id: 3, title: "Top Up", amount: 30000, date: "16 September 2024" },
    { id: 4, title: "Cimol Bojot", amount: 10000, date: "11 September 2024" },
  ];

  // Inline styles
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const balanceCardStyle = {
    backgroundColor: '#12192D',
    color: 'white',
    padding: '50px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  };

  const balanceInfoStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const userNameStyle = {
    margin: '7px 0',
    fontSize: '1rem',
  };

  const cardNumberStyle = {
    margin: '7px 0',
    fontSize: '1rem',
  };

  const balanceActionsStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    gap: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#67A6FF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const expenseButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#FF6767',
  };

  const transactionsHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '27px'
  };

  const viewAllButtonStyle = {
    backgroundColor: '#67A6FF',
    color: 'white',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.1rem',
    cursor: 'pointer',
  };

  const transactionsListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const transactionCardStyle = {
    backgroundColor: '#F3F4F6',
    padding: '15px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
  };

  const iconCircleStyle = {
    width: '65px',
    height: '65px',
    backgroundColor: '#12192D',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const transactionInfoStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const transactionTitleStyle = {
    margin: '0',
    fontSize: '1.4rem',
  };

  const transactionAmountDateStyle = {
    margin: '5px 0',
    fontSize: '1rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      {/* Balance Section */}
      <div style={balanceCardStyle}>
        <div style={balanceInfoStyle}>
          <h3>Saldo</h3>
          <h1>Rp {balance.toLocaleString()}</h1>
          <p style={userNameStyle}>{userName}</p>
          <p style={cardNumberStyle}>{cardNumber}</p>
        </div>
        <div style={balanceActionsStyle}>
          <button style={buttonStyle}>+ Rp {income.toLocaleString()}</button>
          <button style={expenseButtonStyle}>- Rp {expense.toLocaleString()}</button>
        </div>
      </div>

      {/* Transactions Section */}
      <div style={transactionsHeaderStyle}>
        <h3>Latest Transactions</h3>
        <button style={viewAllButtonStyle}>View All</button>
      </div>

      <div style={transactionsListStyle}>
        {transactions.map((transaction) => (
          <div key={transaction.id} style={transactionCardStyle}>
            <div style={iconCircleStyle}>
              {(transaction.title === "Nasi Kuning" || transaction.title === "Batagor" || transaction.title === "Cimol Bojot") ? (
                <MdFastfood style={{ fontSize: '1.7rem' }} />
              ) : (
                <MdAttachMoney style={{ fontSize: '1.7rem' }} />
              )}
            </div>
            <div style={transactionInfoStyle}>
              <h4 style={transactionTitleStyle}>{transaction.title}</h4>
              <p style={transactionAmountDateStyle}>
                <MdAttachMoney /> Rp {transaction.amount.toLocaleString()}
              </p>
              <p style={transactionAmountDateStyle}>
                <MdCalendarToday /> {transaction.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;