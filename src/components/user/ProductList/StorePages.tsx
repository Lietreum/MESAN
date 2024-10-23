import React from 'react';
import StoreDescription from './StoreDescription';
import ProductCard from './ProductCards';
import BannerImg from "../../../assets/data/WhatsApp Image 2024-09-13 at 9.36.18 AM.jpeg"
import MesanImg from "../../../assets/data/mesan.png"

const StorePage: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-10">
      <StoreDescription
        storeName="Kantin Bu Kosim"
        storeDescription="Kantin ini menjual beberapa makanan dan minuman yang enak dan murah"
        bannerImgUrl={BannerImg}
        profileImgUrl={MesanImg}
      />

      <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
        <ProductCard
          title="Nasi Goreng"
          price="Rp 15.000"
          imgUrl="https://i.pinimg.com/564x/a2/a1/aa/a2a1aa02d183d6151427a97a99a15511.jpg"
        />
        <ProductCard
          title="Gorengan"
          price="Rp 1.000"
          imgUrl="https://i.pinimg.com/564x/69/98/e7/6998e7c9c175a39bc5f7eac7d0696534.jpg"
        />
      </main>
    </div>
  );
};

// Wrap StorePage with React.memo
const MemoizedStorePage = React.memo(StorePage);

export default MemoizedStorePage;
