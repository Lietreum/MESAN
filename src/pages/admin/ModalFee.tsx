import React, { useState } from "react";

interface FeeModalProps {
  onClose: () => void;
  onSave: (feeData: { amount: number; feeName: string }) => void; // Added feeName, but empty by default
}

const FeeModal: React.FC<FeeModalProps> = ({ onClose, onSave }) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const handleSubmit = () => {
    if (amount === undefined) {
      alert("Please enter an amount");
      return;
    }

    // Call the onSave method with amount (feeName is set to empty by default)
    onSave({
      amount,
      feeName: "" // Fee name is not used, so it’s an empty string
    });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay (covers outside the modal card) */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose} // Clicking the overlay closes the modal
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white p-6 rounded shadow-md w-full max-w-md z-10">
        <h2 className="text-xl font-semibold mb-4">Add Fee</h2>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter fee amount"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Fee
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeModal;
