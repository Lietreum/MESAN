import React from "react";

const StockNotification: React.FC = () => {
  return (
    <div className="fixed top  w-80 bg-gray-800  p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">Low Stock Alert</p>
      </div>
      <div className="mt-2 flex items-center">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl">
          !
        </div>
        <div className="ml-3">
          <p className="text-sm">Product XYZ is running low on stock.</p>
          <p className="text-xs text-gray-400">Updated 10 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default StockNotification;
