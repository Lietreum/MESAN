import React, { useState } from 'react';

const AddProductPage: React.FC = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [stock, setStock] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    console.log('Save button clicked!');

  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Products</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Picture Input */}
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2">
            Picture <span className="text-red-500">*</span> <span className="text-sm text-gray-500">(160 × 160 Pixel / Ratio 1 : 1)</span>
          </label>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700" onClick={() => console.log('Picture button clicked!')}>
            Picture
          </button>
        </div>

        {/* Stock Input */}
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2">
            Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white text-black"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        {/* Product Name Input */}
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2">
            Name Products <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg bg-white text-black"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full p-3 border rounded-lg bg-white text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            className="px-6 py-2 text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
