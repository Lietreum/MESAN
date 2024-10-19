import React from "react";
import { useParams, Link } from "react-router-dom";
import { PesananProps } from "../../../types/types";
import Pesanan from "../../../Helpers/NotificationData";

const OrderItem: React.FC<PesananProps> = ({ PesananList = Pesanan }) => {
  const { userId } = useParams<"userId">();
  const numericUserId = userId ? Number(userId) : undefined;
  const filteredPesanan =
    numericUserId !== undefined
      ? PesananList.filter((pesanan) => pesanan.userId === numericUserId)
      : [];

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="w-full max-w-3xl mb-6">
        <Link to="/" className="text-blue-500 font-semibold mb-4 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Order</h1>
      </div>

      {/* Notification Items */}
      <div className="w-full max-w-3xl space-y-6">
        {filteredPesanan.length > 0 ? (
          filteredPesanan.map((pesanan) => (
            <div
              key={pesanan.orderId}
              className="flex flex-col md:flex-row items-start p-4 bg-white rounded-md shadow-md space-y-6 md:space-y-0 md:space-x-4"
            >
              {/* Left Section: Image & Store */}
              <div className="flex items-center mb-2 md:mb-0 md:mr-4">
                <img
                  src={pesanan.imageUrl}
                  className="w-24 h-24 rounded-lg mr-4" // Increased image size for better visibility
                  alt={pesanan.storeName}
                />
                <div>
                  <p className="text-base text-gray-500">
                    <span className="font-semibold text-indigo-700">
                      {pesanan.storeName}
                    </span>{" "}
                    Order
                  </p>
                </div>
              </div>

              {/* Right Section: Details & Actions */}
              <div className="flex-1 flex flex-col items-center md:items-end">
                <div className="w-full mb-4">
                  <p className="text-base text-gray-500 text-right">
                    <span>{pesanan.foodName}</span> :{" "}
                    <span>{`Rp.${pesanan.price}`}</span>
                  </p>
                  <p className="text-sm text-gray-500 text-right">
                    {pesanan.quantity} menu
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                  <button className="bg-blue-500 text-white text-base px-4 py-3 rounded-md mb-2 w-full md:w-auto hover:bg-blue-600 transition duration-200">
                    View QR Order
                  </button>
                  <button className="bg-blue-500 text-white text-base px-4 py-3 rounded-md w-full md:w-auto hover:bg-blue-600 transition duration-200">
                    View Order Status
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No orders found for this user.
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
