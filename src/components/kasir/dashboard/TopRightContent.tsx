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
];

const Invoice: React.FC = () => {
  // Calculate the total without shipping cost, discount, or VAT
  const total = products.reduce((sum, product) => sum + product.quantity * product.pricePerUnit, 0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Invoice</h2>
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

        {/* Product items */}
        {products.map((product, index) => (
          <div key={index} className="grid grid-cols-12 border-b border-gray-200 py-2 text-left">
            <div className="col-span-6">
              <p className="text-gray-700">{product.brandName}</p>
            </div>
            <div className="col-span-3">
              <p className="text-gray-700">{product.quantity}</p>
            </div>
            <div className="col-span-3">
              <p className="text-gray-700">${product.pricePerUnit}</p>
            </div>
          </div>
        ))}

        {/* Summary Section */}
        <div className="mt-6 text-gray-800">
          <div className="flex justify-between text-lg text-blue-600 font-bold  pt-2">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
