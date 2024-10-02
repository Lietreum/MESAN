import React from "react";
import TopRightContent from "../../components/kasir/dashboard/TopRightContent";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import BottomRightContent from "../../components/kasir/dashboard/BottomRightContent";

const DashboardKasir = () => {
  return (
    <div className="grid grid-cols-12 gap-2 p-2 h-screen">
      {/* Left content (Products grid) */}
      <div className="col-span-8 grid grid-cols-2 gap-2 border p-2 overflow-auto scrollbar-hide">
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Kosim", img: "image1" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Sumyati", img: "image2" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Afika", img: "image3" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Irma", img: "image4" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Enok", img: "image5" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Pak Iwan", img: "image6" }} />
        </div>
        <div className="border p-2">
          <CategoryCard data={{ name: "Kantin Ibu Lina", img: "image7" }} />
        </div>
      </div>

      {/* Right content */}
      <div className="col-span-4 flex flex-col gap-2 p-2">
        {/* Top-right content (order summary) */}
        <div className="bg-white p-4 shadow-lg rounded border flex-1 overflow-auto scrollbar-hide">
          <TopRightContent />
        </div>

        {/* Bottom-right content (payment summary) */}
        <BottomRightContent /> {/* Use the PaymentSummary component */}
      </div>
    </div>
  );
};

export default DashboardKasir;
