import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./KasirProductCard";

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
  imgUrl: string;
  type: TokoTypes;  // Updated to use TokoTypes enum
  tokoName: string;
  quantity: number;
  tokoId: string;
};

// Updated mock product data to include store types
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store A",
    type: TokoTypes.Kantin,  // Using TokoTypes enum
    quantity: 100,
    tokoId: "12345",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store B",
    type: TokoTypes.Hydro,   // Using TokoTypes enum
    quantity: 50,
    tokoId: "67890",
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    imgUrl: "https://via.placeholder.com/150",
    tokoName: "Store C",
    type: TokoTypes.Koperasi, // Using TokoTypes enum
    quantity: 200,
    tokoId: "54321",
  },
];

const ProductPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const decodedType = decodeURIComponent(type || "").toLowerCase();

  // Map decodedType to the enum values
  const filteredProducts = dummyProducts.filter((product) => 
    product.type.toLowerCase() === decodedType
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
