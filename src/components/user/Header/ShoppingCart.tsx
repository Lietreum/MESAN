import React, { useState } from "react";
import { Product } from "../../../types/types";
import { FaRegCheckCircle, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

const   ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Nasi Kuning",
      price: 6000,
      quantity: 10,
      imageUrl: "https://i.pinimg.com/736x/0d/71/f9/0d71f945c5b61e4b0bc57b9c0728f946.jpg",
    },
    // Add more products as needed
  ]);

  const [isPickUp, setIsPickUp] = useState(true);

  const handleQuantityChange = (id: number, delta: number) => {
    setProducts(
      products.map(product =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity + delta, 1) }
          : product
      )
    );
  };

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const taxes = subtotal * 0.1; // Example tax rate of 10%
  const shipping = 0; // Free shipping
  const total = subtotal + taxes + shipping;

  return (
    <div className="bg-gray-100 min-h-screen py-4">
      {/* Add padding to avoid header and bottom navigation bar */}
      <div className="container mx-auto px-4 pt-16 pb-24"> {/* Adjusted padding top and bottom */}
        {/* Back Button */}
        <Link to="/" className="text-blue-500 font-semibold mb-4 inline-block">
          &larr; Back to Home
        </Link>

        {/* Shopping Cart Header */}
        <h1 className="text-xl md:text-2xl font-semibold mb-6">Shopping Cart</h1>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
              {products.map(product => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4 last:border-b-0 last:mb-0"
                >
                  {/* Image and Product Info */}
                  <div className="flex items-center w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                      className="h-16 w-16 mr-4"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm md:text-base">
                        {product.name}
                      </span>
                      <span className="text-sm md:text-base">
                        {formatRupiah(product.price)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Total Price */}
                  <div className="flex items-center w-full md:w-1/2 justify-between md:justify-end">
                    <div className="flex items-center">
                      <button
                        className="border rounded-md py-1 px-2 md:py-2 md:px-4 mr-2"
                        onClick={() => handleQuantityChange(product.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-center w-8">{product.quantity}</span>
                      <button
                        className="border rounded-md py-1 px-2 md:py-2 md:px-4 ml-2"
                        onClick={() => handleQuantityChange(product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-sm md:text-base">
                      {formatRupiah(product.price * product.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/4">
            {/* Pick Up / Delivery Card */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Pick Up / Delivery</h2>
                <button
                  className="text-black border-2 border-slate-800 rounded-md font-semibold w-16 h-8"
                  onClick={() => setIsPickUp(!isPickUp)}
                >
                  Switch
                </button>
              </div>
              <div className="flex items-center">
                {isPickUp ? (
                  <FaRegCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaTruck className="text-blue-500 mr-2" />
                )}
                <span>{isPickUp ? "Pick Up" : "Delivery"}</span>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h2 className="text-lg font-semibold mb-2">Summary</h2>
              <div className="flex justify-between mb-1 text-sm md:text-base">
                <span>Subtotal</span>
                <span>{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between mb-1 text-sm md:text-base">
                <span>Taxes</span>
                <span>{formatRupiah(taxes)}</span>
              </div>
              <div className="flex justify-between mb-1 text-sm md:text-base">
                <span>Shipping</span>
                <span>{formatRupiah(shipping)}</span>
              </div>
              <hr className="my-1" />
              <div className="flex justify-between mb-2 text-sm md:text-base font-semibold">
                <span>Total</span>
                <span>{formatRupiah(total)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
