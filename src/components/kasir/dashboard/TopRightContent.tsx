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
  const shippingCost = 10;
  const couponDiscount = products.reduce((sum, product) => sum + product.quantity * product.pricePerUnit, 0) * 0.1;
  const vat = (shippingCost - couponDiscount) * 0.05;
  const total = products.reduce((sum, product) => sum + product.quantity * product.pricePerUnit, 0) + shippingCost - couponDiscount + vat;

  return (
    <div className="relative group p-4 max-w-sm mx-auto">
      {/* Hover effect */}
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border border-black"></span>

      {/* Invoice content */}
      <div className="relative z-10 bg-white border border-stroke dark:border-strokedark p-4 rounded-md">
        <div className="overflow-x-auto">
          {/* Table header */}
          <div className="grid grid-cols-12 border-b border-stroke py-2 dark:border-strokedark text-left">
            <div className="col-span-6">
              <h5 className="font-medium text-black dark:text-white">Brand</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-black dark:text-white">Qty</h5>
            </div>
            <div className="col-span-3">
              <h5 className="font-medium text-black dark:text-white">Unit Price</h5>
            </div>
          </div>

          {/* Product items */}
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-12 border-b border-stroke py-2 dark:border-strokedark text-left">
              <div className="col-span-6">
                <p className="font-medium text-black dark:text-white">{product.brandName}</p>
              </div>
              <div className="col-span-3">
                <p className="font-medium text-black dark:text-white">{product.quantity}</p>
              </div>
              <div className="col-span-3">
                <p className="font-medium text-black dark:text-white">${product.pricePerUnit}</p>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="mt-4">
            <p className="text-lg font-bold text-black dark:text-white">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
