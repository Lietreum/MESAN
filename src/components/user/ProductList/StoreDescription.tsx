import React from 'react';

interface StoreDescriptionProps {
  storeName: string;
  storeDescription: string;
  bannerImgUrl: string;
  profileImgUrl: string;
}

const StoreDescription: React.FC<StoreDescriptionProps> = ({
  storeName,
  storeDescription,
  bannerImgUrl,
  profileImgUrl,
}) => {
  return (
    <div className="mx-auto max-w-screen-lg mt-20 sm:mt-0">
      <div
        className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${bannerImgUrl})` }}
      >
        <div className="px-4 pt-8 pb-10">
          <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <img
              className="mx-auto h-auto w-full rounded-full"
              src={profileImgUrl}
              alt={storeName}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold text-gray-800">{storeName}</h1>
          <p className="mt-2 text-gray-600">{storeDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreDescription;
