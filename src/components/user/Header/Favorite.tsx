import React from "react";
import { Heart } from "lucide-react";
import { ProductCardProps } from '../../../types/types'; // Ensure correct path to types

// ProductCard component to display each store and its products
const ProductCard: React.FC<ProductCardProps> = ({ storeName, products }) => {
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="relative mx-auto my-8 max-w-2xl rounded-lg border border-gray-900 bg-transparent p-6 md:flex flex-col">
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
              className="w-16 h-16 object-cover rounded-md"
            />

            {/* Product Name, Price and Button */}
            <div className="flex justify-between w-full items-center">
              <div>
                <h2 className="text-xl font-semibold">{product.productName}</h2>
                <p className="text-gray-700 text-lg font-semibold">{formatRupiah(product.price)}</p>
              </div>

              {/* Add Button */}
              <button className="ml-4 bg-blue-500 text-white py-1 px-3 rounded-md flex items-center justify-center">
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
  // Conversion rate from USD to IDR (1 USD = 15,000 IDR)
  const usdToIdr = 15000;

  const stores = [
    {
      storeName: "Store A",
      products: [
        { image: "https://i.pinimg.com/564x/ee/ca/be/eecabed96fda864cf6f6f76441a260d5.jpg", productName: "Martabak Telur", price: 0.333333 * usdToIdr },
        { image: "https://i.pinimg.com/564x/b4/27/9a/b4279a9dc7fbe09c12a49d3ea98ca71c.jpg", productName: "Nasi Goreng", price: 0.5 * usdToIdr },
      ],
    },
    {
      storeName: "Store B",
      products: [
        { image: "https://i.pinimg.com/564x/ee/ca/be/eecabed96fda864cf6f6f76441a260d5.jpg", productName: "Batagor", price: 0.333333 * usdToIdr },
        { image: "https://i.pinimg.com/564x/b4/27/9a/b4279a9dc7fbe09c12a49d3ea98ca71c.jpg", productName: "Sate", price: 0.75 * usdToIdr },
      ],
    },
    {
      storeName: "Store C",
      products: [
        { image: "https://i.pinimg.com/564x/a2/4c/d5/a24cd5106510c99bccb6c79567fc82b0.jpg", productName: "Seblak", price: 0.6666666 * usdToIdr },
        { image: "https://i.pinimg.com/564x/a2/4c/d5/a24cd5106510c99bccb6c79567fc82b0.jpg", productName: "Mie Goreng", price: 0.4 * usdToIdr },
      ],
    },
    {
      storeName: "Store D",  // Added new store
      products: [
        { image: "https://i.pinimg.com/564x/c2/6d/29/c26d29e07d792416ad3d229f528ab1c7.jpg", productName: "Martabak Manis", price: 0.6 * usdToIdr },
        { image: "https://i.pinimg.com/564x/c2/6d/29/c26d29e07d792416ad3d229f528ab1c7.jpg", productName: "Cilok", price: 0.25 * usdToIdr },
      ],
    },
    {
      storeName: "Store E",  // Added new store
      products: [
        { image: "https://i.pinimg.com/564x/72/5c/e5/725ce5e7177a778f53c76327c72cdb7e.jpg", productName: "Pempek", price: 0.45 * usdToIdr },
        { image: "https://i.pinimg.com/564x/72/5c/e5/725ce5e7177a778f53c76327c72cdb7e.jpg", productName: "Roti Bakar", price: 0.3 * usdToIdr },
      ],
    },
  ];

  return (
    <div>
      {stores.map((store, index) => (
        <ProductCard
          key={index}
          storeName={store.storeName} // Pass storeName as prop
          products={store.products} // Pass the list of products
          image={""} productName={""} price={0}        />
      ))}
    </div>
  );
};

export default FavoriteCards;
