import TopRightContent from "../../components/kasir/dashboard/TopRightContent";
import CategoryCard from "../../components/user/CategoryCard/CategoryCard";
import BottomRightContent from "../../components/kasir/dashboard/BottomRightContent";
import canteenData from "../../Helpers/HomePageBanner";  // Import the data

const DashboardKasir: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-2 p-2 h-screen">
      {/* Left content (Products grid) */}
      <div className="col-span-8 grid grid-cols-2 gap-2 border p-2 overflow-auto scrollbar-hide">
        {canteenData.map((canteen, index) => (
          <div key={index} className="border p-2">
            <CategoryCard data={{ name: canteen.name, img: canteen.img }} />
          </div>
        ))}
      </div>

      {/* Right content */}
      <div className="col-span-4 flex flex-col gap-2 p-2">
        {/* Top-right content (order summary) */}
        <div className="bg-white p-4 shadow-lg rounded border flex-1 overflow-auto scrollbar-hide">
          <TopRightContent />
        </div>

        {/* Bottom-right content (payment summary) */}
        <BottomRightContent />
      </div>
    </div>
  );
};

export default DashboardKasir;
