  import React from 'react';

  interface DeleteConfirmationModalProps {
    accountName: string;
    onConfirm: () => void;
    onCancel: () => void;
  }

  const DeleteModal: React.FC<DeleteConfirmationModalProps> = ({ accountName, onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-md shadow-lg w-96">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Delete Account</h2>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete the account "<span className="font-semibold">{accountName}</span>"?
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={onCancel} // Cancel deletion
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={onConfirm} // Confirm deletion
            >
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default DeleteModal;
