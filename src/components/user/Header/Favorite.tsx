import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { ProductCardProps } from '../../../types/types'; 

// Fixing the ProductCard component to use types correctly
const ProductCard: React.FC<ProductCardProps> = ({ storeName, products }) => {
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="relative mx-auto my-8 max-w-2xl rounded-lg border border-white bg-white shadow-lg p-6 md:flex flex-col sm:w-full sm:p-4"> {/* Updated border color and added shadow */}
      {/* Store Name Header */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">{storeName}</h3>

      {/* List of products under the store */}
      <div className="flex flex-col gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.productName}
              className="w-16 h-16 object-cover rounded-md sm:w-12 sm:h-12"
            />

            {/* Product Name, Price and Button */}
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-xl font-semibold sm:text-lg">{product.productName}</h2>
                <p className="text-gray-700 text-lg font-semibold sm:text-base">
                  {formatRupiah(product.price)}
                </p>
              </div>

              {/* Add Button */}
              <button className="ml-4 bg-blue-500 text-white py-1 px-3 rounded-md flex items-center justify-center sm:px-2">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Favorite Icon */}
      <div className="absolute top-2 right-2">
        <Heart className="w-6 h-6 text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

const FavoriteCards: React.FC = () => {
  const usdToIdr = 15000;

  const stores = [
    {
      storeName: "Store A",
      products: [
        { image: "https://i.pinimg.com/564x/ee/ca/be/eecabed96fda864cf6f6f76441a260d5.jpg", productName: "Martabak Telur", price: 0.333333 * usdToIdr },
        { image: "https://i.pinimg.com/564x/b4/27/9a/b4279a9dc7fbe09c12a49d3ea98ca71c.jpg", productName: "Nasi Goreng", price: 0.5 * usdToIdr },
      ],
    },
    // Add more stores as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-4">
      <div className="container mx-auto px-4 pt-16 pb-24"> {/* Adjusted padding top and bottom */}
        {/* Back Button */}
        <Link to="/" className="text-blue-500 font-semibold mb-4 inline-block">
          &larr; Back to Home
        </Link>

        {/* Favorite Cards Header */}
        <h1 className="text-xl md:text-2xl font-semibold mb-6">Favorite Stores</h1>

        {stores.map((store, index) => (
          <ProductCard
            key={index}
            storeName={store.storeName} // Pass storeName as prop
            products={store.products} // Pass the list of products
            image={""} productName={""} price={0}        
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCards;
