import React from 'react';

interface Product {
  brandName: string;
  quantity: number;
  pricePerUnit: number;
}

const products: Product[] = [
  { brandName: 'Techno', quantity: 1, pricePerUnit: 200 },
  { brandName: 'Vivo', quantity: 3, pricePerUnit: 300 },
  { brandName: 'Samsung', quantity: 1, pricePerUnit: 1300 },
  { brandName: 'Apple', quantity: 2, pricePerUnit: 1200 },
  // Add more products if needed
];

const Invoice: React.FC = () => {
  // Calculate the total without shipping cost, discount, or VAT
  const total = products.reduce((sum, product) => sum + product.quantity * product.pricePerUnit, 0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-3xl font-bold text-center text-gradient mb-6">Invoice</h2>
      <div className="overflow-x-auto">
        {/* Table header */}
        <div className="grid grid-cols-12 border-b border-gray-300 py-2 text-left">
          <div className="col-span-6">
            <h5 className="font-semibold text-gray-700">Brand</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-semibold text-gray-700">Qty</h5>
          </div>
          <div className="col-span-3">
            <h5 className="font-semibold text-gray-700">Unit Price</h5>
          </div>
        </div>

        {/* Product items with hidden scrollbar when not scrolling */}
        <div className="max-h-64 overflow-y-auto scrollbar-hidden"> {/* Adjust height as needed */}
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-12 border-b border-gray-200 py-4 text-left hover:bg-gray-100 transition duration-200">
              <div className="col-span-6">
                <p className="text-gray-800 font-medium">{product.brandName}</p>
              </div>
              <div className="col-span-3">
                <p className="text-gray-800 font-medium">{product.quantity}</p>
              </div>
              <div className="col-span-3">
                <p className="text-gray-800 font-medium">${product.pricePerUnit}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-6 text-gray-800">
          <div className="flex justify-between text-lg text-indigo-600 font-bold pt-4">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
