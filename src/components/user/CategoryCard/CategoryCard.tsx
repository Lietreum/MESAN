import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryCardProps } from '../../../types/types'; 


const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Link
      to={`product/type/${data.name.toLowerCase()}`}
      className="block"
      aria-label={`View ${data.name} products`}
    >
      <div className="relative flex h-72 w-96 cursor-pointer transition-transform duration-100 ease-in hover:scale-105 md:h-64 md:w-80">
        <img
          src={data.img}
          alt={data.name}
          className="h-full w-full rounded-lg object-cover shadow-lg filter saturate-[0.7] contrast-[1] brightness-[1]"
          loading="lazy"
        />
        <span className="absolute top-[85%] right-0 pr-2 text-white text-xl font-bold">
          {data.name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
