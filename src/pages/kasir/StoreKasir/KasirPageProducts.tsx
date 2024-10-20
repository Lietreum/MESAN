import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./KasirProductCard";

// Define the Product type inline
type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  type: string;
  tokoName: string;
};

// Mock product data
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store A",
    type: "Type 1",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store B",
    type: "Type 2",
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store C",
    type: "Type 1",
  },
];

const ProductPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const decodedType = decodeURIComponent(type || "").toLowerCase();

  // Filter products by the decoded category type
  const filteredProducts = dummyProducts.filter(
    (product) => product.type.toLowerCase() === decodedType
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductPage;
