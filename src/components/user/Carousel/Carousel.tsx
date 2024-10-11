import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import BannerData from '../../../Helpers/HomePageBanner';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { BannerItem } from '../../../types/types'; // Adjust the path as needed

const Carousel: React.FC = () => {
  // Responsive settings for a single large image
  const responsive = {
    0: { items: 1 },
  };

  // Prepare the carousel items with modern styling
  const items = BannerData.map((item: BannerItem) => (
    <Link to={`product/type/${item.name.toLowerCase()}`} key={item.name}>
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <img
          src={item.img}
          loading="lazy"
          alt={item.name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-0 right-0 text-center px-4">
          <h2 className="text-2xl font-bold text-white drop-shadow-md transition-opacity duration-500 hover:opacity-90">
            {item.name}
          </h2>
        </div>
      </div>
    </Link>
  ));

  return (
    <AliceCarousel
      animationType="fadeout"
      animationDuration={800}
      disableButtonsControls
      infinite
      items={items}
      touchTracking
      mouseTracking
      disableDotsControls
      autoPlay
      autoPlayInterval={3000} // Slower interval for large images
      responsive={responsive}
    />
  );
};

export default Carousel;
