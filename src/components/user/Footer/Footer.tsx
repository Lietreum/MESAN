import React from "react";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="pt-10 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-1/3 px-5 sm:mx-10 relative">
          <h2 className="text-3xl sm:ml-2">Categories</h2>
          <span className="bg-black dark:bg-gray-600 absolute h-0.5 w-[23.5rem] sm:w-[24rem] 2xl:w-[29rem]"></span>
          <ol className="py-3 px-2 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
            <li>Koperasi</li>
            <li>HydroFour</li>
            <li>Kantin</li>
            <li>Others</li>
          </ol>
          <span className="bg-black dark:bg-gray-600 absolute h-0.5 w-[23.5rem] sm:w-[24rem] 2xl:w-[29rem]"></span>
        </div>
        <div className="w-full sm:w-1/3 mt-5 sm:mt-0 mb-5 sm:mb-0 px-5 sm:px-0">
          <ol className="space-y-2">
            <li>
              About <span className="text-gray-800 dark:text-gray-200">us</span>
            </li>
            <hr className="border-gray-300 dark:border-gray-700" />
            <li>
              How can <span className="text-gray-800 dark:text-gray-200">we help you?</span>
            </li>
            <hr className="border-gray-300 dark:border-gray-700" />
            <li>
              With this <span className="text-gray-800 dark:text-gray-200">project</span> we want
              to strengthen the bases for the design of an application as well as the consumption of api,
              distribution of elements in the area, implementation of basic functionalities that every
              member should have
            </li>
          </ol>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 w-full text-center py-1 mt-1">
        All rights reserved <span className="px-0.5 text-gray-800 dark:text-gray-200">®</span> Developed by <span className="text-gray-800 dark:text-gray-200">XII RPL</span>
      </div>
    </footer>
  );
};

export default Footer;
