import React, { useState } from 'react';
import AddProductModal from './AddProduct'; 
import EditProductModal from './EditProduct';

const ProductPage: React.FC = () => {

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 

  const handleAddProductClick = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleEdit = () => {
    setShowEditModal(true); 
  };

  return (
    <div className="container mx-auto px-4">
      {/* Add Product Button */}
      <div className="flex justify-end my-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded transition-color duration-300 hover:bg-blue-600"
          onClick={handleAddProductClick}
        >
          Add Product
        </button>
      </div>

      {/* Grid layout untuk desain responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Contoh item produk */}
        {[...Array(9)].map((_, index) => ( 
          <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" 
              alt="Seblak" 
              className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 hover:opacity-90"
            />
            <div className="mt-4 text-lg font-bold">Seblak</div>
            <div className="text-gray-600">$240.00</div>
            <div className="text-green-500">In Stock</div>
            <button 
              className="mt-2 px-4 py-2 text-white bg-blue-500 rounded transition-colors duration-300 hover:bg-blue-600" 
              onClick={handleEdit} 
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Modal untuk menambah produk */}
      <AddProductModal show={showAddModal} onClose={handleCloseAddModal} />
      {/* Modal untuk mengedit produk */}
      <EditProductModal show={showEditModal} onClose={handleCloseEditModal} />
    </div>
  );
};

export default ProductPage;
