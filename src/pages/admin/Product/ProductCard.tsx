import React, { useState } from 'react';
import { ImPencil } from "react-icons/im";; // Import ikon pensil
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

  // Contoh data produk
  const products = [
    {
      id: 1,
      name: "Nasi Kuning",
      price: 6000,
      stock: 30,
      imageUrl: "https://i.pinimg.com/564x/0c/c0/c6/0cc0c6a5662e002a7967d7cdbf164d5c.jpg"
    },
    {
      id: 2,
      name: "Nasi Rames",
      price: 12000,
      stock: 12,
      imageUrl: "https://i.pinimg.com/736x/b6/31/f3/b631f359151c68d76cfcc588872a30f6.jpg"
    },
    {
      id: 3,
      name: "Air Mineral",
      price: 3000,
      stock: 40,
      imageUrl: "https://i.pinimg.com/564x/29/ef/98/29ef98b4c173cc8c15c14917a5f27e9a.jpg"
    },
    {
      id: 4,
      name: "Kopi Sachet",
      price: 3000,
      stock: 50,
      imageUrl: "https://i.pinimg.com/564x/d6/d4/4b/d6d44b1d6c3790e9a278568234ba0b09.jpg"
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Grid layout untuk desain responsif */}
      <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Products
          </h2> <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-cyan-950">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 hover:opacity-90"
            />
            <div className="mt-4 text-lg text-white font-semibold">{product.name}</div>
            <div className="text-white">Rp{product.price.toLocaleString()}</div>
            <div className="text-green-500">{product.stock} Stok</div>
            <div className="flex justify-end mt-2">
              <button 
                className="flex items-center justify-center w-8 h-8 text-black bg-slate-300 w-25 rounded-lg hover:bg-blue-600" 
                onClick={handleEdit}
              >
                <ImPencil/>
              </button>
            </div>
          </div>
        ))}

        {/* Tombol untuk menambah produk */}
        <div className="flex items-center justify-center p-4 border border-dashed border-gray-400 rounded-lg bg-white">
          <button 
            className="flex flex-col items-center justify-center w-full h-full text-gray-500"
            onClick={handleAddProductClick}
          >
            <span className="text-3xl">+</span>
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Modal untuk menambah produk */}
      <AddProductModal show={showAddModal} onClose={handleCloseAddModal} />
      {/* Modal untuk mengedit produk */}
      <EditProductModal show={showEditModal} onClose={handleCloseEditModal} />
    </div>
  );
};

export default ProductPage;
