import React, { ReactNode } from "react";
import Header from "../../components/user/Header/UserHeader";
// import Footer from "../../components/user/Footer/Footer";
import BottomNavigation from "../../components/user/Header/BottomNavigation";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Sticky Header for Desktop (md: 768px, lg: 1024px) */}
      <div className="hidden lg:block overflow-visible top-0 z-50 bg-white">
        <Header />
      </div>

      {/* Bottom Navigation for Mobile (up to md: 768px) */}
      <div className="lg:hidden sticky bottom-0 z-50 w-full">
        <BottomNavigation />
      </div>

      {/* Main content area */}
      <div className="flex-grow bg-white px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        {children}
      </div>

      {/* Footer */}
      <div className="bg-white">
        {/* Footer content goes here */}
      </div>
    </div>
  );
};

export default UserLayout;
