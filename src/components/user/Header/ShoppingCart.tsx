import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const ShoppingCart: React.FC = () => {
  // Example products data
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Product name",
      price: 19.99,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/150",
    },
    // Add more products as needed
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(product.quantity + delta, 1) } : product
    ));
  };

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const taxes = subtotal * 0.1; // Example tax rate of 10%
  const shipping = 0; // Free shipping
  const total = subtotal + taxes + shipping;

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4" src={product.imageUrl} alt={product.name} />
                          <span className="font-semibold">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${product.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => handleQuantityChange(product.id, -1)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">{product.quantity}</span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => handleQuantityChange(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">${(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
