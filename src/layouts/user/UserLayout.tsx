import React, { ReactNode } from 'react';
import Header from "../../components/user/Header/UserHeader";
import Footer from '../../components/user/Footer/Footer';
import Offer from '../../components/user/Footer/Offer';

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-x-hidden min-h-screen flex flex-col">
      {/* Sticky Header Wrapper */}
      <div className="sticky overflow-visible top-0 z-50 bg-white dark:bg-boxdark-2 "> {/* Ensure background is applied */}
        <Header />
      </div>

      {/* Main content area */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Offer Section */}
      <Offer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
