import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

// Definisi props untuk komponen OrderStatus
interface OrderStatusProps {
  show: boolean;
  onClose: () => void;
}

// Komponen OrderStatus
const OrderStatus: React.FC<OrderStatusProps> = ({ show, onClose }) => {
  if (!show) return null; // Jangan tampilkan modal jika `show` false

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
        <span className="close text-red-500 cursor-pointer" onClick={onClose}>&times;</span>
        <h2 className="text-xl font-semibold mb-4">Status Pesanan</h2>
        <p>Status pesanan Anda saat ini adalah: Dalam Proses</p>
      </div>
    </div>
  );
};

// Komponen Order
const Order: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Back button */}
      <div className="flex items-center text-gray-600 mb-6 cursor-pointer">
        <FaArrowLeft className="mr-2" />
        <span className="text-lg font-semibold">Back</span>
      </div>

      {/* Order card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order</h2>

        <div className="flex justify-between items-center mb-4">
          {/* Order details */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/a2/a1/aa/a2a1aa02d183d6151427a97a99a15511.jpg" // Ganti dengan URL gambar yang sesuai
              alt="Nasi Kuning"
              className="w-20 h-20 rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-600">Kantin Ibu Kosim</h3>
              <p className="text-gray-600">Nasi Kuning</p>
              <p className="text-gray-600">Rp.6000</p>
              <p className="text-gray-600">1 menu</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">
              View QR Order
            </button>
            <Link to="/order/orderstatus">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Order Status
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
