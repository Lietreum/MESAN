import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaSortAmountDown, FaSortAmountUp, FaEllipsisV } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AccountModal from "./ModalAdd";
import DeleteModal from "./DeleteModal";
import AccountInfoModal from "./AccountInfoModal";

interface Account {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
}

const initialAccount: Account = {
  id: "",
  name: "",
  email: "",
  password: "",
  role: "",
};

const ManageAccount: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<Account>(initialAccount);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [newAccountModalOpen, setNewAccountModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [accountToDelete, setAccountToDelete] = useState<Account>(initialAccount);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api-mesan.curaweda.com/admin/users');
        if (!response.ok) {
          throw new Error("Error fetching accounts");
        }
        const data: Account[] = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
        alert("Failed to fetch accounts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const createAccount = async (account: Omit<Account, 'id'>) => {
    if (!account.name || !account.email || !account.password) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api-mesan.curaweda.com/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(account),
      });

      if (!response.ok) {
        throw new Error("Error creating account");
      }

      const newAccount = await response.json();
      setAccounts([...accounts, newAccount]);
      setNewAccountModalOpen(false);
      alert("Account created successfully!");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateAccount = async (account: Account) => {
    if (!account.id) {
      alert("Account ID is missing.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://api-mesan.curaweda.com/admin/update/${account.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(account),
      });

      if (!response.ok) {
        throw new Error("Error updating account");
      }

      const updatedAccount = await response.json();
      setAccounts(accounts.map((a) => (a.id === account.id ? updatedAccount : a)));
      alert("Account updated successfully!");
    } catch (error) {
      console.error("Error updating account:", error);
      alert("Failed to update account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteAccount = async () => {
    if (!accountToDelete.id) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://api-mesan.curaweda.com/admin/delete/${accountToDelete.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error deleting account");
      }

      setAccounts(accounts.filter((a) => a.id !== accountToDelete.id));
      setDeleteModalOpen(false);
      setAccountToDelete(initialAccount);
      alert("Account deleted successfully!");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  const filteredAccounts = accounts
  .filter((account) => {
    // Ensure account is valid and has defined name/email
    return (
      (account.name && typeof account.name === 'string' && 
        account.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (account.email && typeof account.email === 'string' && 
        account.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  })
  .sort((a, b) => {
    // Ensure both names are valid before comparing
    const nameA = a.name || ''; // Fallback to empty string
    const nameB = b.name || ''; // Fallback to empty string

    return sortAsc ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });


  const openNewAccountModal = () => {
    setNewAccountModalOpen(true);
    setSelectedAccount(initialAccount);
  };

  const openEditAccountModal = (account: Account) => {
    setSelectedAccount(account);
    setNewAccountModalOpen(true);
  };

  const confirmDeleteAccount = (account: Account) => {
    setAccountToDelete(account);
    setDeleteModalOpen(true);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setAccountToDelete(initialAccount);
  };

  const openInfoModal = (account: Account) => {
    setSelectedAccount(account);
    setInfoModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search and Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <FaSearch className="text-gray-600" />
          <input
            type="text"
            placeholder="Find account"
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full sm:w-80 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort and Add Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleSort}
            className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
          >
            <span>Sort by</span>
            {sortAsc ? (
              <FaSortAmountUp className="text-gray-700" />
            ) : (
              <FaSortAmountDown className="text-gray-700" />
            )}
          </button>

          <button
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md space-x-2 hover:bg-blue-700 transition duration-200"
            onClick={openNewAccountModal}
          >
            <AiOutlinePlus />
            <span>Add Account</span>
          </button>
        </div>
      </div>

      {/* Accounts Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <p>Loading accounts...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="relative p-4 border border-gray-300 rounded-md flex flex-col items-center bg-white shadow-lg transition duration-200 hover:shadow-xl"
            >
              {/* Three Dots Menu Icon */}
              <div className="absolute top-2 right-2">
                <FaEllipsisV
                  className="text-gray-600 cursor-pointer"
                  onClick={() => openEditAccountModal(account)}
                />
              </div>
              <div className="bg-gray-200 rounded-full p-3 mb-4">
                <FaUser className="text-gray-800 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {account.name}
              </h3>
              <p className="text-gray-600">{account.email}</p>
              <p className="text-gray-600">{account.role}</p>

              <div className="mt-4 flex space-x-3">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => openInfoModal(account)}
                >
                  View
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => confirmDeleteAccount(account)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {newAccountModalOpen && (
        <AccountModal
          account={selectedAccount}
          onClose={() => setNewAccountModalOpen(false)}
          onSave={selectedAccount.id ? updateAccount : createAccount}
        />
      )}
  
      {deleteModalOpen && (
        <DeleteModal
          accountName={accountToDelete.name}
          onConfirm={deleteAccount}
          onCancel={cancelDelete}
        />
      )}

      {infoModalOpen && (
        <AccountInfoModal
          account={selectedAccount}
          onClose={() => setInfoModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ManageAccount;
