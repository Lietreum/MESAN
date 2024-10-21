import React, { useEffect, useState } from "react";
import AccountModal from "./ModalAdd"; // Ensure the import path is correct

interface User {
  id: string;
  name: string;
  email: string;
}

const ManageAccount: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // Fetch the current admin ID
  const fetchCurrentAdminId = async () => {
    try {
      const response = await fetch("https://api-mesan.curaweda.com/auth/current-user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include your token if needed
        },
      });
      const data = await response.json();
      setCurrentUserId(data.id); // Set the current user's ID
    } catch (error) {
      console.error("Failed to fetch current user ID", error);
    }
  };

  // Fetch all users except the currently logged-in admin
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api-mesan.curaweda.com/users");
      const data = await response.json();
      const filteredUsers = data.filter((user: User) => user.id !== currentUserId);
      setUsers(filteredUsers);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchCurrentAdminId();
  }, []);

  useEffect(() => {
    if (currentUserId) {
      fetchUsers();
    }
  }, [currentUserId]);

  const handleSave = async (user: { name: string; email: string; id?: string }) => {
    if (editingUser) {
      // Update existing user
      await fetch(`https://api-mesan.curaweda.com/users/${editingUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    } else {
      // Create new user
      await fetch("https://api-mesan.curaweda.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    }

    setShowModal(false);
    setEditingUser(null);
    fetchUsers(); // Refresh user list
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleDeleteUser = async (userId: string) => {
    await fetch(`https://api-mesan.curaweda.com/users/${userId}`, {
      method: "DELETE",
    });
    fetchUsers(); // Refresh user list after deletion
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Accounts</h1>
      <button
        onClick={handleAddUser}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Add New Account
      </button>
      <div className="bg-white rounded shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <AccountModal
          account={editingUser || { name: "", email: "" }}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ManageAccount;
