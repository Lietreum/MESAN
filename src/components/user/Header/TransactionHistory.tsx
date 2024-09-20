import React, { useState } from "react";
import { OrderItem } from "../../../types/types";


const orderItems: OrderItem[] = [
  {
    id: 1,
    image: "https://pagedone.io/asset/uploads/1705474950.png",
    title: "Apple Airpods Pro",
    color: "White",
    price: "Rp25.000",
    quantity: 2,
    deliveryDate: "23rd March 2021",
    topUpHistory: ["+500 Credit on 23rd March 2021"],
  },
  // Add more items if needed
];

const OrderHistory: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="main-data p-8 sm:p-14 bg-gray-50 rounded-3xl">
          <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-16">Order History</h2>
          <div className="grid grid-cols-8 pb-9">
            <div className="col-span-8 lg:col-span-4">
              <p className="font-medium text-lg leading-8 text-indigo-600">Product </p>
            </div>
            <div className="col-span-1 max-lg:hidden">
              <p className="font-medium text-lg leading-8 text-gray-600 text-center">Harga </p>
            </div>
            <div className="col-span-1 max-lg:hidden flex items-center justify-center">
              <p className="font-medium text-lg leading-8 text-gray-600">Jumlah </p>
            </div>
            <div className="col-span-2 max-lg:hidden">
              <p className="font-medium text-lg leading-8 text-gray-500">Estimasi </p>
            </div>
          </div>
          
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="box p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto"
              onClick={() => handleItemClick(item.id)}
            >
              <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  className="max-lg:w-auto max-sm:mx-auto rounded-xl"
                />
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                  {item.title}
                </h5>
                <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">{item.color}</p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                <p className="font-semibold text-xl leading-8 text-black">{item.price}</p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center ">
                <p className="font-semibold text-xl leading-8 text-indigo-600 text-center">{item.quantity}</p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                <p className="font-semibold text-xl leading-8 text-black">{item.deliveryDate}</p>
              </div>

              {openItemId === item.id && (
                <div className="topup-history p-8 rounded-3xl bg-gray-100 max-lg:max-w-xl max-lg:mx-auto mt-4">
                  <h3 className="font-manrope font-semibold text-2xl leading-9 text-black mb-4">Top-Up History</h3>
                  <ul>
                    {item.topUpHistory.map((history, index) => (
                      <li key={index} className="font-medium text-lg leading-8 text-indigo-600">{history}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
