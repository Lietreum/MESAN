import React, { useEffect, useState } from 'react';
import TopRightContent from "../../components/kasir/dashboard/TopRightContent";
import KasirCategoryCard from "./StoreKasir/KasirCategoryCard";
import BottomRightContent from "../../components/kasir/dashboard/BottomRightContent";
import DefaultImage from '../../assets/data/Kantin_ph.png'; // Assuming you have a default image for missing images

interface Store {
  tokoId: string;
  name: string;
  img?: string | null;
  tokoType: string;
}

const MainContent: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Fetch stores from your API
    const fetchStores = async () => {
      try {
        const response = await fetch('https://api-mesan.curaweda.com/store'); // TAH TAH TAH PEW PEW
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error('Error fetching store data:', error);
      }
    };

    fetchStores();
  }, []); // Fetch stores once on component mount

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
        {stores.map((store) => (
          <KasirCategoryCard 
            key={store.tokoId} 
            data={{ 
              tokoId: store.tokoId, 
              name: store.name, 
              img: store.img || DefaultImage, // Use default image if img is missing
              tokoType: store.tokoType 
            }} 
          />
        ))}
      </div>

      {/* Right Section - Payment Summary and Checkout */}
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

export default MainContent;
