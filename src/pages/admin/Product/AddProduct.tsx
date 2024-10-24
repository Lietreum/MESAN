import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface AddProductModalProps {
  show: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {/* Overlay Background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal Structure */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div
          className="modal-box bg-white rounded-lg shadow-lg p-6 w-full max-w-lg md:max-w-2xl lg:max-w-3xl relative mx-auto
          max-h-screen overflow-y-auto mt-16 md:mt-20"
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <AiOutlineClose size={24} />
          </button>

          {/* Modal Title */}
          <h2 className="text-2xl font-bold text-center mb-4 text-black">
            Add New Product
          </h2>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Image</label>
              <button className="btn bg-blue-900 hover:bg-blue-500 w-full text-white outline-none">
                Select Image
              </button>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Display Case</label>
              <select className="select w-full bg-white border border-gray-300 rounded-md p-2">
                <option>Select display case</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Name Product</label>
              <input
                className="input w-full bg-white border border-gray-300 rounded-md p-2"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Price</label>
              <input
                className="input w-full bg-white border border-gray-300 rounded-md p-2"
                placeholder="Enter price"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Stock</label>
              <input
                className="input w-full bg-white border border-gray-300 rounded-md p-2"
                placeholder="Enter stock"
              />
            </div>
          </div>

          {/* Save and Close Buttons */}
          <div className="flex justify-between items-center space-x-4 mt-6">
            <button
              className="btn bg-blue-900 hover:bg-blue-500 w-1/2 text-white outline-none"
              onClick={onClose}
            >
              Save
            </button>
            <button
              className="btn bg-red-700 hover:bg-red-500 w-1/2 text-white outline-none"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
