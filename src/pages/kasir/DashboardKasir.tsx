import TopRightContent from "../../components/kasir/dashboard/TopRightContent";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import BottomRightContent from "../../components/kasir/dashboard/BottomRightContent";
import canteenData from "../../Helpers/HomePageBanner"; // Import the data

const DashboardKasir: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 p-6 h-screen bg-gradient-to-r from-blue-50 to-gray-50">
      {/* Left content (Products grid) */}
      <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-lg bg-white shadow-xl">
        {canteenData.map((canteen, index) => (
          <div key={index} className="rounded-lg bg-white shadow-lg">
            <CategoryCard data={{ name: canteen.name, img: canteen.img }} />
          </div>
        ))}
      </div>

      {/* Right content */}
      <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
        {/* Top-right content (order summary) */}
        <div className="bg-white p-4 shadow-xl rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <TopRightContent />
        </div>

        {/* Bottom-right content (payment summary) */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg rounded-lg text-white">
          <BottomRightContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardKasir;
