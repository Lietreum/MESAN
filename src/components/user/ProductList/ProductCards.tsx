import React, { useState } from 'react';
import { Skeleton } from '@mui/material'; // Import MUI Skeleton component
import PurchaseModal from './PurchaseModal'; // Import the PurchaseModal

interface ProductCardProps {
  title: string;
  price: string;
  imgUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imgUrl }) => {
  const [loading, setLoading] = useState(true); // State to track image loading
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="relative">
      <div className="aspect-square w-full h-48 overflow-hidden"> {/* Maintain square aspect ratio with specific height */}
        {loading && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width="100%"
            height="100%"
          />
        )}
        <img
          className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-125 rounded-lg ${loading ? 'hidden' : ''}`} // Added rounded-lg for rounded edges
          src={imgUrl}
          srcSet={`${imgUrl}?w=600 600w, ${imgUrl}?w=800 800w, ${imgUrl}?w=1200 1200w`} // Responsive image sizes
          alt={title}
          onLoad={() => setLoading(false)} // Hide skeleton once the image is loaded
        />
        <button
          className="absolute bottom-2 mb-7 md:mb-5 sm:mb-5 right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800"
          onClick={handleOpenModal}
        >
          +
        </button>
      </div>
      <div className="mt-4 sm:mt-0 flex items-start justify-between"> {/* Added mt-4 for mobile and mt-0 for desktop */}
        <div>
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title={title}>
              {title}
              <span className="absolute" aria-hidden="true"></span>
            </a>
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xs font-normal sm:text-sm md:text-base">{price}</p>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal
        product={{ title, price, imgUrl }} // Replace with your actual product data type
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </article>
  );
};

export default ProductCard;
