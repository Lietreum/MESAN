import React, { ReactNode } from 'react';
import Header from "../../components/user/Header/UserHeader";
// import ProductList from '../../components/user/ProductList/ProductList';
import Footer from '../../components/user/Footer/Footer';
import Offer from '../../components/user/Footer/Offer';


const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex flex-col min-h-screen overflow">
        {/* <!-- ===== Header Start ===== --> */}
        <Header sidebarOpen={undefined} setSidebarOpen={function (arg0: boolean): void {
          throw new Error('Function not implemented.');
        } } />
        {/* <!-- ===== Header End ===== --> */}

        {/* <!-- ===== Sales Banner Start ===== --> */}
        {/* <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10 py-4">
          <SalesBanner />
        </div> */}
        {/* <!-- ===== Sales Banner End ===== --> */}

        {/* <!-- ===== Products Section Start ===== --> */}
        <div className="flex-grow">
          {children}
        </div>
        {/* <!-- ===== Products Section End ===== --> */}

          <Offer/>
        {/* <!-- ===== Footer Start ===== --> */}
        <Footer />
        {/* <!-- ===== Footer End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default UserLayout;
