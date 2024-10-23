// import React from 'react';

// interface StoreData {
//   name: string;
//   img: string;
// }

// interface CategoryCardProps {
//   data: StoreData;
// }

// const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
//   return (
//     <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
//       <a
//         href="#"
//         className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
//       >
//         <img
//           src={data.img}
//           loading="lazy"
//           alt={data.name}
//           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
//         />
//       </a>
//       <div className="flex flex-col gap-2">
//         <h2 className="text-xl font-bold text-gray-800">
//           <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">
//             {data.name}
//           </a>
//         </h2>
//       </div>
//     </article>
//   );
// };

// export default CategoryCard;
