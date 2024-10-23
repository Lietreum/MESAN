import React, { useEffect, useState } from "react";

// Define the Product interface
interface Product {
  title: string;
  price: string;
  type?: string; // Optional, add more fields as necessary
}

// Modal component
const PurchaseModal: React.FC<{
  product: Product | null;
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
        className={`bg-white rounded-t-lg p-6 w-full max-w-lg shadow-xl relative transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
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

export default PurchaseModal;
