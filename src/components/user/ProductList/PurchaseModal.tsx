import React, { useEffect, useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

// Define the Product interface
interface Product {
  title: string;
  price: string;
  imgUrl: string;
  type?: string;
}

// Custom hook to detect clicks outside of a component
const useClickOutside = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
};

// Modal component
const PurchaseModal: React.FC<{
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ product, isOpen, onClose }) => {
  const [quantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);

  // Close modal when clicking outside of it
  useClickOutside(modalRef, onClose);

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

  // Add scroll to close functionality for mobile
  const handleTouchStart = (e: TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY.current > 100) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    } else {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  // Extract the numeric value from the product price and calculate total price based on quantity
  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);
  const totalPrice = numericPrice * quantity;

  // Function to toggle favorite state with animation
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Framer Motion animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "100%" },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <motion.div
        ref={modalRef}
        className="bg-white rounded-t-lg p-6 w-full max-w-lg shadow-xl relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.35, ease: "easeInOut" }} // Slower animation
      >
        {/* Product Image */}
        <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
          <img
            src={product.imgUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Title */}
        <div className="my-4">
          <h3 className="text-lg font-semibold text-black">{product.title}</h3>
        </div>

        {/* Price and Favorite Section */}
        <div className="flex justify-between items-center border-gray-300">
          <p className="text-lg font-bold text-black">{`Rp.${totalPrice.toLocaleString("id-ID")}`}</p>

          {/* Favorit Button with Animated Heart Icon */}
          <button
            className="flex items-center ml-4 focus:outline-none transition-transform duration-300 ease-in-out transform"
            onClick={toggleFavorite}
          >
            <FaHeart
              className={`text-2xl transition-colors duration-300 ease-in-out ${
                isFavorite ? "text-red-500" : "text-gray-400"
              }`}
            />
            <span className="font-bold text-black ml-1">Favorit</span>
          </button>
        </div>

        {/* Confirm Purchase Button */}
        <button
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md mt-4"
          onClick={() => {
            // Handle purchase confirmation logic here
          }}
        >
          Tambah Pembelian
        </button>
      </motion.div>
    </div>
  );
};

export default PurchaseModal;
