import React from "react";
import { Heart } from "lucide-react";
import { ProductCardProps } from '../../../types/types'; // Make sure the path is correct

const ProductCard: React.FC<ProductCardProps> = ({ image, productName, price }) => {
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

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
          <p className="text-gray-700 text-xl font-semibold">{formatRupiah(price)}</p>
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
  // Conversion rate from USD to IDR (1 USD = 15,000 IDR)
  const usdToIdr = 15000;

  const products = [
    {
<<<<<<< HEAD
      image: "https://i.pinimg.com/564x/ee/ca/be/eecabed96fda864cf6f6f76441a260d5.jpg",
      productName: "Martabak Telur",
      price: 0.333333 * usdToIdr, // Konversi dolar ke rupiah
    },
    {
      image: "https://i.pinimg.com/564x/b4/27/9a/b4279a9dc7fbe09c12a49d3ea98ca71c.jpg",
      productName: "Batagor",
      price: 0.333333 * usdToIdr, // Konversi dolar ke rupiah
    },
    {
      image: "https://i.pinimg.com/564x/a2/4c/d5/a24cd5106510c99bccb6c79567fc82b0.jpg",
      productName: "Seblak",
      price: 0.6666666 * usdToIdr, // Konversi dolar ke rupiah
=======
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      productName: "Product One",
      price: 49.99 * usdToIdr, // Convert USD to IDR
    },
    {
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      productName: "Product Two",
      price: 29.99 * usdToIdr, // Convert USD to IDR
    },
    {
      image: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      productName: "Product Three",
      price: 39.99 * usdToIdr, // Convert USD to IDR
>>>>>>> 675c5db116c815b01e4ff36c873e8508e67319fd
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
