import { Plus } from 'lucide-react';
import React from 'react';

// Define a type for the product
interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  altText: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Earthen Bottle',
    price: '$48',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    title: 'Nomad Tumbler',
    price: '$35',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    altText: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    title: 'Focus Paper Refill',
    price: '$89',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    altText: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    title: 'Machined Mechanical Pencil',
    price: '$35',
    imageUrl: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    altText: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

const ProductCard: React.FC<Product> = ({ title, price, imageUrl, altText }) => (
  <a href="#" className="relative group block w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
  <div className="w-full h-64 overflow-hidden bg-gray-200">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
    />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-1 text-xl font-bold text-gray-900">{price}</p>
  </div>
  <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
    <Plus className="text-gray-900 w-6 h-6" />
  </div>
</a>
);


const ProductGrid: React.FC = () => (
  <div className="bg-transparent">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            altText={product.altText} id={0}          />
        ))}
      </div>
    </div>
  </div>
);

export default ProductGrid;
