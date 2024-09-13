import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { ProductProps } from '../../../types/types'; // Adjust the path as needed

const ProductCard: React.FC<ProductProps> = ({
  sellerName,
  productName,
  price,
  imageUrl,
  inStock,
  onEdit,
}) => {
  return (
    <div className="relative w-72 h-96 bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="flex flex-col h-full">
        {/* Image Section with subtle hover effect */}
        <div className="relative h-48 w-full mb-4 rounded-2xl overflow-hidden">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-full object-cover rounded-2xl transform transition-all duration-500 ease-in-out hover:scale-110"
          />
          <button className="absolute top-3 right-3 bg-gray-700 bg-opacity-70 hover:bg-pink-500 p-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            <FaHeart className="text-white h-5 w-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex-auto text-center">
          <h3 className="text-sm font-medium text-gray-400">{sellerName}</h3>
          <h2 className="text-lg font-bold text-white mb-1 truncate">{productName}</h2>
          <div className="text-2xl font-extrabold text-green-400 mb-3">{price}</div>

          {/* Stock Status */}
          <div
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
              inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {inStock ? 'INSTOCK' : 'OUT OF STOCK'}
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onEdit}
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
