import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-white-400 dark:bg-gray-900 py-10 px-5">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">
        <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Categories</h2>
          <span className="block h-0.5 bg-black dark:bg-gray-600 mb-4 sm:mb-6 mx-auto sm:mx-0"></span>
          <ol className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-start">
            <li className="text-gray-800 dark:text-gray-200">Koperasi</li>
            <li className="text-gray-800 dark:text-gray-200">HydroFour</li>
            <li className="text-gray-800 dark:text-gray-200">Kantin</li>
            <li className="text-gray-800 dark:text-gray-200">Others</li>
          </ol>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 text-center py-2 mt-6">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          All rights reserved <span className="px-1 text-gray-800 dark:text-gray-200">®</span> Developed by <span className="font-bold text-gray-800 dark:text-gray-200">7 people</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
