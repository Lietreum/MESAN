import { Plus } from 'lucide-react';
import React, { useState, useEffect } from "react";

// Define a type for the product
interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Earthen Bottle',
    price: '$48',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    title: 'Nomad Tumbler',
    price: '$35',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    altText: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    title: 'Focus Paper Refill',
    price: '$89',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    altText: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    title: 'Machined Mechanical Pencil',
    price: '$35',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    altText: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

// Modal component

// Ensure the Product interface is imported or defined in the same file
interface Product {
  id: number;
  title: string;
  price: string; // Price should be a string in format like "Rp.50000"
  imageUrl: string;
  altText: string;
}

const PurchaseModal: React.FC<{
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the body when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to reset overflow style when component unmounts
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
      {/* Modal container with slide-up animation */}
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
          <p className="text-lg font-bold text-black">{`Rp.${totalPrice.toLocaleString(
            "id-ID"
          )}`}</p>
        </div>

        {/* Product Title */}
        <div className="my-4">
          <h3 className="text-lg font-semibold text-black">{product.title}</h3>
        </div>

        {/* Options Section */}
        <div className="my-4">
          <p className="font-semibold text-sm mb-1 text-black">
            Sambal <span className="text-red-500 text-xs">*Must be selected</span>
          </p>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="sambal"
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
                name="sambal"
                value="Tidak Pake"
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-2"
              />
              Tidak Pake
            </label>
            <span className="text-gray-500 text-sm">Free</span>
          </div>
        </div>

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



const ProductCard: React.FC<Product & { onPlusClick: () => void }> = ({
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
    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer" onClick={onPlusClick}>
      <Plus className="text-gray-900 w-6 h-6" />
    </div>
  </div>
);

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
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
