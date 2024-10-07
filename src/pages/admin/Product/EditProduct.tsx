import React, { useEffect } from 'react';

interface EditProductModalProps {
  show: boolean;
  onClose: () => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ show, onClose }) => {
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
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>

      {/* Modal Structure */}
      <dialog id="my_modal_2" className="modal fixed inset-0 z-50 flex items-start justify-center" open>
        <div
          className="modal-box bg-white rounded-lg shadow-lg p-8 w-[600px] space-y-6"
          style={{ marginTop: '10%', marginLeft: '15%' }} // Custom position
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-black-600">Edit Product</h2>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Image</label>
              <button className="btn bg-[#A0D8EF] hover:bg-opacity-80 w-1/2 text-white outline-none">
                Select Image
              </button>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Display Case</label>
              <select className="select w-full bg-white border border-gray-300 rounded-md">
                <option>Select display case</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Name Product</label>
              <input className="input w-full bg-white border border-gray-300" placeholder="Enter name" />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Price</label>
              <input className="input w-full bg-white border border-gray-300" placeholder="Enter price" />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1">Stock</label>
              <input className="input w-full bg-white border border-gray-300" placeholder="Enter stock" />
            </div>
          </div>

          {/* Save and Close Buttons */}
          <div className="flex justify-between items-center space-x-4 mt-6">
            <button
              className="btn bg-[#A0D8EF] hover:bg-opacity-80 w-1/2 text-white outline-none"
              onClick={onClose} 
            >
              Save
            </button>
            <button
              className="btn bg-white hover:bg-gray-200 w-1/2 text-gray-700 outline-none"
              onClick={onClose} 
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Form untuk menutup modal */}
        <form method="dialog" className="modal-backdrop" onClick={onClose}>
          <button type="button">Close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditProductModal;
