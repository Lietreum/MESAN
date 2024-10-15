import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
  const [isOrderStatusVisible, setOrderStatusVisible] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleOrderStatusClose = () => {
    setOrderStatusVisible(false);
  };

  const handleBack = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Back button */}
      <button className="flex items-center mb-4 text-gray-700 hover:text-gray-900 transition" onClick={handleBack}>
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {/* Order card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order</h2>

        <div className="flex justify-between items-center mb-4">
          {/* Order details */}
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/0c/c0/c6/0cc0c6a5662e002a7967d7cdbf164d5c.jpg" // Ganti dengan URL gambar yang sesuai
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
            <Link to="/order/orderstatus"> {/* Link ke route OrderStatus */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Order Status
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Render the OrderStatus component when it's visible */}
      <OrderStatus show={isOrderStatusVisible} onClose={handleOrderStatusClose} />
    </div>
  );
};

export default Order;
