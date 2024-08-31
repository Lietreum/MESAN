import React from "react";
import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  productName: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, productName, price }) => {
  return (
    <div className="relative mx-auto my-8 max-w-2xl rounded-lg border border-gray-900 bg-transparent p-6 md:flex">
      <img
        src={image}
        alt="Product Image"
        className="mb-4 h-40 w-full rounded-md object-cover md:mb-0 md:mr-4 md:w-1/3"
      />
      <div className="md:flex-1">
        <h2 className="mb-2 text-2xl font-bold">{productName}</h2>
        <div className="flex items-center mb-4">
          <p className="text-gray-700 text-xl font-semibold">{price}</p>
          <button className="ml-4 bg-blue-500 text-white py-1 px-3 rounded-md flex items-center justify-center">
            +
          </button>
        </div>
      </div>
      <div className="absolute bottom-2 right-2">
        <Heart className="w-6 h-6 text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

const FavoriteCards: React.FC = () => {
  const products = [
    {
      image: "https://via.placeholder.com/150",
      productName: "Product One",
      price: "$49.99",
    },
    {
        image: "https://via.placeholder.com/150",
        productName: "Product Two",
      price: "$29.99",
    },
    {
        image: "https://via.placeholder.com/150",
        productName: "Product Three",
      price: "$39.99",
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          productName={product.productName}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FavoriteCards;
