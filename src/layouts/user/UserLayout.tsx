import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from "../../components/user/Header/UserHeader";
import Footer from '../../components/user/Footer/Footer';
import BottomNavigation from "../../components/user/Header/BottomNavigation";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define media queries
  const isDesktop = useMediaQuery({ minWidth: 1024 });  
  const isMobile = useMediaQuery({ maxWidth: 1023 });   
  
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-x-hidden min-h-screen flex flex-col">
      {/* Sticky Header Wrapper for Desktop */}
      {isDesktop && (
        <div className="overflow-visible top-0 z-50 bg-black ">
          <Header />
        </div>
      )}

      {/* Bottom Navigation for Mobile */}
      {isMobile && (
        <div className="sticky bottom-0 z-50 w-full">
          <BottomNavigation />
        </div>
      )}

      {/* Main content area */}
      <div className="flex-grow">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
