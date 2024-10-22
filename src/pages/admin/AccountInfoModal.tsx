import React from 'react';

interface AccountInfoModalProps {
  account: {
    name: string;
    email: string;
    role: string;
  };
  onClose: () => void; // Function to close the modal
}

const AccountInfoModal: React.FC<AccountInfoModalProps> = ({ account, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="space-y-2">
          <p><strong>Name:</strong> {account.name}</p>
          <p><strong>Email:</strong> {account.email}</p>
          <p><strong>Role:</strong> {account.role}</p>
        </div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Close
        </button>
      </div>
    </div>
  );
};

export default AccountInfoModal;
