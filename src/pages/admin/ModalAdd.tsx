import React, { useState } from "react";

interface AccountModalProps {
  account: { id: string; name: string; email: string; role: string }; // id is optional
  onClose: () => void;
  onSave: (account: { name: string; email: string; id: string; role: string }) => void; // id is optional
}

const AccountModal: React.FC<AccountModalProps> = ({ account, onClose, onSave }) => {
  const [name, setName] = useState(account.name || "");
  const [email, setEmail] = useState(account.email || "");

  const handleSave = () => {
    onSave({ id: account.id, name, email, role: account.role }); // Pass id if it exists
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="bg-white text-gray-900 w-full max-w-lg md:max-w-2xl rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-100 p-4 rounded-l-lg">
            <h2 className="text-lg font-semibold text-gray-600">Account</h2>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Manage Account</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md transition-colors duration-200"
              >
                {/* Close Button Icon */}
              </button>
            </div>

            {/* Profile Section */}
            <div className="mt-4">
              <div className="flex items-center">
                {/* Editable Name */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-xl font-semibold border-b border-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              {/* Account Info */}
              <div className="mt-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Email</p>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg border-b border-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-8">
                <button
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-600 hover:to-green-600 px-4 py-2 rounded-lg text-white shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
