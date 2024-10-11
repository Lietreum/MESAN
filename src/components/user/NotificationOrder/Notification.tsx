import React from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { PesananProps } from "../../../types/types";
import Pesanan from "../../../Helpers/NotificationData";
import Kosim from "../../../assets/data/WhatsApp Image 2024-09-13 at 9.36.18 AM.jpeg"

const OrderItem: React.FC<PesananProps> = ({ PesananList = Pesanan }) => {
  // Mengambil userId dari URL menggunakan useParams
  const { userId } = useParams<"userId">();
  
  // Konversi userId dari string menjadi number, jika ada
  const numericUserId = userId ? Number(userId) : undefined;

  // Filter daftar pesanan berdasarkan userId yang ada di URL
  const filteredPesanan = numericUserId !== undefined
    ? PesananList.filter(pesanan => pesanan.userId === numericUserId)
    : [];

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">

      {/* Notification Items */}
      <div className="w-full max-w-3xl space-y-4">
        {filteredPesanan.length > 0 ? (
          filteredPesanan.map((pesanan) => (
            <div key={pesanan.orderId} className="flex items-center p-4 bg-white rounded-md shadow-md max-h-[30vh]">
              <div className="mr-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row-reverse",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div style={{ marginLeft: "5px" }}>
                    <IoIosArrowForward size={24} />
                  </div>
                  <p className="text-xs ml-[40px] text-gray-500">
                    <span className="font-semibold text-indigo-700">
                      {pesanan.storeName}
                    </span>{" "}
                    <span className="font-semibold">Order</span>
                  </p>
                </div>
                <img
                  src={pesanan.imageUrl}
                  className="w-[80px] h-[80px] ml-[30px] mt-3 rounded-[12px]"
                  alt={pesanan.storeName}
                />
              </div>

              <div className="flex-1">
                <div>
                  <p className="text-xs text-gray-500 text-right mr-6 mt-8">
                    <span className="font-normal text-xs text-right mr-[30px]">
                      {pesanan.foodName}
                    </span>
                    <span className="font-normal text-xs text-right mr-[30px]">
                      :
                    </span>
                    <span className="font-normal mr-[40px]">Rp.{pesanan.price}</span>
                  </p>
                  <p className="font-normal text-xs text-right mr-[65px] mt-1">
                    {pesanan.quantity} menu
                  </p>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button className="bg-[#3B82F6] w-[180px] px-4 py-2 rounded-md ml-[135px]">
                    <p className="text-white font-light text-xs">View QR Order</p>
                  </button>
                  <button className="bg-[#3B82F6] w-[175px] px-4 py-2 rounded-md">
                    <p className="text-white font-light text-xs">View Order Status</p>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-3xl p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order</h2>
      </div>

      {/* Notification Items */}
      <div className="w-full max-w-3xl space-y-4">
        {/* Post Notification */}

        <div className="flex items-center p-4 bg-white rounded-md shadow-md max-h-[30vh]">
          <div className="mr-4">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"row-reverse",
                whiteSpace:"nowrap"
              }}
            >
              <div
              style={{
                marginLeft: '5px',
              }}> 
              <IoIosArrowForward size={24} />
              </div>
              <p className="text-xs ml-[40px] text-gray-500">
                <span className="font-semibold text-indigo-700">
                  Kantin Kosim
                </span>{" "}
                <span className="font-semibold ">Order</span>
              </p>
            </div>
            <img
              src={Kosim}
              className="w-[80px] h-[80px] ml-[30px] mt-3 rounded-[12px]"
              alt="Kosim"
            />
          </div>

          <div className="flex-1 ">
            <div>
            <p className="text-xs text-gray-500 text-right mr-6">
            <span className="font-normal text-xs text-right mr-[30px]">Nasi Kuning </span>
            <span className="font-normal text-xs text-right mr-[30px]">: </span>
            <span className="font-normal mr-[40px] ">Rp.6000</span>
            </p>
            <p className="font-normal text-xs text-right mr-[65px] mt-1">1 menu</p>
            </div>

            <div className="flex space-x-4 " >
              <button className="bg-[#3B82F6] w-[180px] px-4 py-2 rounded-md ml-[135px] ">
                <p className="text-white font-light text-xs">View QR Order</p>
              </button>
              <button className="bg-[#3B82F6] w-[175px]  px-4 py-2 rounded-md ">
                <p className="text-white font-light text-xs">View Order Status</p>
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </div>
        )}
      </div>
    </div>
  );
};

export default OrderItem;