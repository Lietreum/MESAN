import React from 'react';
import CardDataStats from '../../../components/admin/CardDataStats';
import { RiEyeLine, RiMoneyDollarCircleLine, RiProductHuntLine, RiUserLine } from 'react-icons/ri';
import ChartOne from '../../../components/admin/Charts/ChartOne';
import ChartTwo from '../../../components/admin/Charts/ChartTwo';

const PedagangDashboard: React.FC = () => {
  return (
    <>
      {/* Section for displaying card stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-6 2xl:gap-7.5">
        <CardDataStats title="Total views" total="Rp. 48.000" rate="0.43%" levelUp>
          <RiEyeLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="Rp. 52.000" rate="4.35%" levelUp>
          <RiMoneyDollarCircleLine className="text-primary dark:text-white" size={20} />
        </CardDataStats>
        <CardDataStats title="Total Product" total="Rp. 34.000" rate="2.59%" levelUp>
          <RiProductHuntLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Users" total="Rp. 92.000" rate="0.95%" levelDown>
          <RiUserLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
      </div>

      {/* Section for displaying charts */}
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 2xl:mt-7.5 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-6">
          <ChartOne />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <ChartTwo />
        </div>
        <div className="col-span-12 xl:col-span-8">
          {/* Additional content or chart can be placed here if needed */}
        </div>
      </div>
    </>
  );
};

export default PedagangDashboard;
