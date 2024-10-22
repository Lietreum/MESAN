import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./KasirProductCard"; // Assuming this is your product card component
import TopRightContent from "../../../components/kasir/dashboard/TopRightContent"; // Imported TopRightContent
import BottomRightContent from "../../../components/kasir/dashboard/BottomRightContent"; // Imported BottomRightContent
import DefaultImage from "../../../assets/data/Kantin_ph.png"; // Fallback image for products

// Define enum for store types
enum TokoTypes {
  Kantin = "Kantin",
  Hydro = "Hydro",
  Koperasi = "Koperasi",
}

// Updated Product type to include quantity and tokoId
type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string | null;  // Allow imgUrl to be nullable
  type: TokoTypes;
  tokoName: string;
  quantity: number;
  tokoId: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    imgUrl: null, // No image, will fall back to DefaultImage
    tokoName: "Store A",
    type: TokoTypes.Kantin,
    quantity: 100,
    tokoId: "12345",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store B",
    type: TokoTypes.Hydro,
    quantity: 50,
    tokoId: "67890",
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store C",
    type: TokoTypes.Koperasi,
    quantity: 200,
    tokoId: "54321",
  },
];

const ProductPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const decodedType = decodeURIComponent(type || "").toLowerCase();

  // State for storing filtered products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filter the products by the decoded type
    const filtered = dummyProducts.filter(
      (product) => product.type.toLowerCase() === decodedType
    );
    setFilteredProducts(filtered);
  }, [decodedType]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 h-screen overflow-hidden">
      {/* Left Section - Product Cards */}
      <div
        id="scroll-container"
        className={`w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto h-full transition-all duration-300 scrollbar-hide`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              data={{
                ...product,
                imgUrl: product.imgUrl || DefaultImage, // Use default image if imgUrl is missing
              }}
            />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>

      {/* Right Section - Payment Summary and Invoice Content */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 h-full overflow-auto scrollbar-hide">
        {/* Top Right Content - Payment Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-grow">
          <TopRightContent />
        </div>

        {/* Bottom Right Content - Invoice Summary */}
        <div className="bg-white shadow-md rounded-lg p-4 flex-grow">
          <BottomRightContent />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
