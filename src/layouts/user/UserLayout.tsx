import React, { ReactNode } from 'react';
import Header from "../../components/user/Header/UserHeader";
import CategoriesDropdown from '../../components/user/Categories/CategoriesList';
import Breadcrumbs from '../../components/user/Breadcrumbs/userBreadcrumbs';
import SalesBanner from '../../components/user/SalesBanner/userBanner';
// import ProductList from '../../components/user/ProductList/ProductList';
import Footer from '../../components/user/Footer/Footer';

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* <!-- ===== Header Start ===== --> */}
        <Header />
        {/* <!-- ===== Header End ===== --> */}

        {/* <!-- ===== Breadcrumbs and Categories Start ===== --> */}
        <div className="flex justify-between items-center px-4 md:px-6 2xl:px-10 py-4">
          <Breadcrumbs />
          <CategoriesDropdown />
        </div>
        {/* <!-- ===== Breadcrumbs and Categories End ===== --> */}

        {/* <!-- ===== Sales Banner Start ===== --> */}
        <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-4">
          <SalesBanner />
        </div>
        {/* <!-- ===== Sales Banner End ===== --> */}

        {/* <!-- ===== Products Section Start ===== --> */}
        <div className="flex-grow">
          {children}
        </div>
        {/* <!-- ===== Products Section End ===== --> */}

        {/* <!-- ===== Footer Start ===== --> */}
        <Footer />
        {/* <!-- ===== Footer End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default UserLayout;
