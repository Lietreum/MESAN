import React, { useState } from "react";
import { ImPencil } from "react-icons/im";
import AddProductModal from "./AddProduct";
import EditProductModal from "./EditProduct";

const ProductPage: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Handler untuk menambah produk
  const handleAddProductClick = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  // Handler untuk mengedit produk
  const handleEdit = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  // Contoh data produk
  const products = [
    {
      id: 1,
      name: "Nasi Kuning",
      price: 6000,
      stock: 30,
      imageUrl:
        "https://i.pinimg.com/564x/0c/c0/c6/0cc0c6a5662e002a7967d7cdbf164d5c.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-black mb-8 text-center tracking-wide">
        Barang anda
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden"
          >
            <figure className="overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">
                Rp{product.price.toLocaleString()}
              </p>
              <p className="text-green-500 font-medium">
                {product.stock} in Stock
              </p>

              <div className="card-actions justify-end mt-4">
                <button
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center transition-colors duration-300"
                  onClick={handleEdit}
                >
                  <ImPencil className="mr-2" /> Edit Product
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Tombol untuk menambah produk */}
        {/* Add Product Card */}
        <div className="card bg-gray-100 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl overflow-hidden flex items-center justify-center">
          <button
            className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 transition-colors duration-300 p-6"
            onClick={handleAddProductClick}
          >
            <span className="text-5xl mb-2">+</span>
            <span className="font-semibold text-lg">Add Product</span>
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
