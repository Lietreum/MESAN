import React from 'react';
//import Products from '../../../components/admin/Product/Products';

const ProductPage: React.FC = () => {
  const handleEdit = () => {
    console.log('Edit button clicked!');
  };

  return (
    <div className="container mx-auto px-4">
      {/* Grid layout for responsive design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-105">
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
            onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
