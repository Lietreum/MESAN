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
    <div className="w-64 h-72 bg-gray-900 shadow-lg rounded-xl p-4">
      <div className="flex flex-col h-full">
        <div className="relative h-40 w-full mb-2">
          <div className="absolute flex flex-col top-0 right-0 p-1">
            <button className="transition ease-in duration-300 bg-gray-800 hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-6 h-6 text-center p-1">
              <FaHeart className="h-4 w-4" />
            </button>
          </div>
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex-auto justify-evenly">
          <div className="flex flex-wrap">
            <div className="w-full flex-none text-xs flex items-center text-gray-600">
              <span className="text-gray-400">{sellerName}</span>
            </div>
            <div className="flex items-center w-full justify-between min-w-0">
              <h2 className="text-sm mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate">
                {productName}
              </h2>
            </div>
          </div>
          <div className="text-lg text-white font-semibold mt-1">{price}</div>
          <div className={`flex items-center text-white text-sm px-2.5 py-1 ml-36 rounded-lg ${inStock ? 'bg-green-400' : 'bg-red-400'}`}>
            {inStock ? 'INSTOCK' : 'OUT OF STOCK'}
          </div>
          <div className="flex space-x-2 text-xs font-medium justify-start mt-2">
            <button
              onClick={onEdit}
              className="transition ease-in duration-300 inline-flex items-center text-xs font-medium mb-2 md:mb-0 bg-purple-500 px-3 py-1 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600"
            >
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;