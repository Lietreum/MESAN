import React, { useEffect, useState } from 'react';
import TopRightContent from "../../components/kasir/dashboard/TopRightContent";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import BottomRightContent from "../../components/kasir/dashboard/BottomRightContent";
import canteenData from "../../Helpers/HomePageBanner"; 

const MainContent: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 450); // Fades scrollbar after 0.45 seconds of inactivity
    };

    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 h-screen overflow-hidden">
      {/* Left Section - Store Cards */}
      <div
        id="scroll-container"
        className={`w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-auto h-full transition-all duration-300 ${
          isScrolling ? 'scrollbar-visible' : 'scrollbar-hidden'
        }`}
      >
        {canteenData.map((store, index) => (
          <CategoryCard key={index} data={store} />
        ))}
      </div>

      {/* Right Section - Payment Summary and Checkout */}
      <div className="w-full md:w-1/3 flex flex-col gap-4">
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

export default MainContent;
