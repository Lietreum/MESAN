import React from 'react';
import CardDataStats from '../../../components/CardDataStats';
import { RiEyeLine, RiMoneyDollarCircleLine, RiProductHuntLine, RiUserLine } from 'react-icons/ri'; 
import ChartOne from '../../../components/Charts/ChartOne';
import ChartTwo from '../../../components/Charts/ChartTwo';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <RiEyeLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <RiMoneyDollarCircleLine className="text-primary dark:text-white" size={20} />
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <RiProductHuntLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <RiUserLine className="text-primary dark:text-white" size={22} />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8">
          {/* Additional content can go here */}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
