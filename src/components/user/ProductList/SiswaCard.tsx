// import { Plus, Search } from 'lucide-react';
// import React, { useState } from "react";
// import { ProductListCard } from "../../../types/types";
// import { Skeleton } from '@mui/material'; 
// import PurchaseModal from './PurchaseModal'; 

// // 
// const products: ProductListCard[] = [
//   {
//     id: 1,
//     title: 'Nasi Goreng',
//     price: 'Rp.15.000',
//     imageUrl: 'https://i.pinimg.com/564x/a2/a1/aa/a2a1aa02d183d6151427a97a99a15511.jpg',
//     altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     type: "yesTopping",
//   }
//   // .....
// ];

// // ProductCard component remains unchanged
// const ProductCard: React.FC<ProductListCard & { onPlusClick: () => void }> = ({
//   title,
//   price,
//   imageUrl,
//   altText,
//   onPlusClick,
// }) => {
//   const [loading, setLoading] = useState(true); // Loading state for images

//   return (
//     <div className="relative group block w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105" style={{ height: '400px' }}> {/* Set a fixed height */}
//       <div className="w-full h-64 overflow-hidden bg-gray-200">
//         {loading && (
//           <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: 2 }} /> // Skeleton loading
//         )}
//         <img
//           srcSet={`${imageUrl}?w=600 600w, ${imageUrl}?w=800 800w, ${imageUrl}?w=1200 1200w`} // Responsive image sizes
//           sizes="(max-width: 600px) 600px, (max-width: 900px) 800px, 1200px" // Define size rules for images
//           loading="lazy"
//           alt={altText}
//           className={`w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75 ${loading ? 'opacity-0' : 'opacity-100'}`} // Control opacity based on loading
//           onLoad={() => setLoading(false)} // Hide skeleton once image loads
//         />
//       </div>
//       <div className="p-4 flex flex-col justify-between h-full"> {/* Flex to ensure consistent height */}
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//           <p className="mt-1 text-xl font-bold text-gray-900">{price}</p>
//         </div>
//         <div
//           className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer"
//           onClick={onPlusClick}
//         >
//           <Plus className="text-gray-900 w-6 h-6" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductGrid: React.FC = () => {
//   const [selectedProduct, setSelectedProduct] = useState<ProductListCard | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const openModal = (product: ProductListCard) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   // Filter products based on the search query
//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-light-gray-100"> {/* Changed to light gray background */}
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="relative mb-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
//           />
//           <div className="absolute right-3 top-2.5">
//             <Search className="text-gray-500" />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-10 sm:gap-x-10 lg:grid-cols-3 lg:gap-y-12 lg:gap-x-12">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               {...product}
//               onPlusClick={() => openModal(product)} // Pass the product to the modal
//             />
//           ))}
//         </div>

//         {/* Purchase Modal */}
//         <PurchaseModal
//           product={selectedProduct}
//           isOpen={isModalOpen}
//           onClose={closeModal}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;
