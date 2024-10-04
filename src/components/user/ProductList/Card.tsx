import { Plus } from 'lucide-react';
import React, { useState, useEffect } from "react";
import { ProductListCard } from "../../../types/types";

// Product List with Rupiah prices
const products: ProductListCard[] = [
  {
    id: 1,
    title: 'Nasi Goreng',
    price: 'Rp.15.000',
    imageUrl: 'https://i.pinimg.com/564x/a2/a1/aa/a2a1aa02d183d6151427a97a99a15511.jpg',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    type: "yesTopping",
  },
  {
    id: 2,
    title: 'Seblak',
    price: 'Rp.10.000',
    imageUrl: 'https://i.pinimg.com/736x/1d/27/5d/1d275d02f38bef5a4ffe63cb83720d85.jpg',
    altText: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    type: "yesTopping",

  },
  {
    id: 3,
    title: 'Gorengan',
    price: 'Rp.1.000',
    imageUrl: 'https://i.pinimg.com/564x/69/98/e7/6998e7c9c175a39bc5f7eac7d0696534.jpg',
    altText: 'Person using a pen to cross a task off a productivity paper card.',
    type: "yesTopping",

  },
  {
    id: 4,
    title: 'Batagor',
    price: 'Rp.5.000',
    imageUrl: 'https://i.pinimg.com/564x/b4/27/9a/b4279a9dc7fbe09c12a49d3ea98ca71c.jpg',
    altText: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    type: "noTopping",

  },
];

// Modal component
const PurchaseModal: React.FC<{
  product: ProductListCard | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [, setSelectedOption] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  // Function to handle quantity change
  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(prev - 1, 1)));
  };

  // Extract the numeric value from the product price and calculate total price based on quantity
  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
  const totalPrice = numericPrice * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-t-lg p-6 w-full max-w-lg shadow-xl relative transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 left-4 text-black text-xl font-bold"
          onClick={onClose}
        >
          X
        </button>

        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <h2 className="text-xl font-bold text-black ml-8">Custom purchase</h2>
          <p className="text-lg font-bold text-black">{`Rp.${totalPrice.toLocaleString("id-ID")}`}</p>
        </div>

        {/* Product Title */}
        <div className="my-4">
          <h3 className="text-lg font-semibold text-black">{product.title}</h3>
        </div>

        {/* Options Section */}
        {product.type === "yesTopping" && (
          <div className="my-4">
            <p className="font-semibold text-sm mb-1 text-black">
              Topping <span className="text-red-500 text-xs">*Must be selected</span>
            </p>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  name="Topping"
                  value="Pake"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                Pake
              </label>
              <span className="text-gray-500 text-sm">Free</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center text-black">
                <input
                  type="radio"
                  name="Topping"
                  value="Tidak Pake"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="mr-2"
                />
                Tidak Pake
              </label>
              <span className="text-gray-500 text-sm">Free</span>
            </div>
          </div>
        )}

        {/* Notes Section */}
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
          placeholder="Add notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>

        {/* Quantity Control */}
        <div className="flex items-center justify-between my-4">
          <p className="font-semibold text-black">Purchase amount</p>
          <div className="flex items-center">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-l-md"
              onClick={() => handleQuantityChange(false)}
            >
              -
            </button>
            <span className="mx-4 text-black">{quantity}</span>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded-r-md"
              onClick={() => handleQuantityChange(true)}
            >
              +
            </button>
          </div>
        </div>

        {/* Confirm Purchase Button */}
        <button
          className="w-full bg-black text-white py-3 rounded-md mt-4"
          onClick={() => {
            // Handle purchase confirmation logic here
          }}
        >
          Rp.{totalPrice.toLocaleString("id-ID")}
        </button>
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductListCard & { onPlusClick: () => void }> = ({
  title,
  price,
  imageUrl,
  altText,
  onPlusClick,
}) => (
  <div className="relative group block w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
    <div className="w-full h-64 overflow-hidden bg-gray-200">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-xl font-bold text-gray-900">{price}</p>
    </div>
    <div
      className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer"
      onClick={onPlusClick}
    >
      <Plus className="text-gray-900 w-6 h-6" />
    </div>
  </div>
);

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductListCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: ProductListCard) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onPlusClick={() => openModal(product)}
            />
          ))}
        </div>
      </div>
      <PurchaseModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProductGrid;
