import React from "react";
import { NotificationProps } from "../../../types/types";
import DefaultImage from "../../../assets/admin/images/cards/cards-01.png"; // Gambar default jika tidak ada gambar notifikasi

const NotificationItem: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">

      {/* Header Notification */}
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Notifications</h2>
      </div>

      {/* Notification List */}
      <div className="w-full max-w-3xl space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={notification.imageUrl || DefaultImage}
                className="w-[60px] h-[60px] rounded-lg mr-4 object-cover"
                alt={notification.title || "Notification"}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {notification.title || "Notification"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {notification.timestamp}
                  </p>
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>

                <div className="flex space-x-4 mt-3 justify-end">
                  {notification.actions && notification.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-[100px] px-3 py-2 rounded-md text-white text-xs font-medium"
                    >
                      {action.label === "View" ? "Balas" : "Tandai sudah dibaca"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500">
            No notifications available.
          </div>
        )}
      </div>
    </div>
  );
};

// Example notification data
const notifications = [
  {
    id: 1,
    title: "Makanan Sudah Jadi",
    imageUrl: "https://i.pinimg.com/736x/d7/6e/96/d76e96c4e9d3d09b901ad66e606615ec.jpg",
    message: "Dek, makanannya mau diambil atau dianterin?",
    timestamp: "2 minutes ago",
    actions: [
      { label: "Balas", onClick: () => console.log("Balas message") },
      { label: "Tandai Sudah Dibaca", onClick: () => console.log("Tandai sudah dibaca") },
    ],
  },
  {
    id: 2,
    title: "Ibu Kosim",
    imageUrl: "https://i.pinimg.com/564x/49/fa/27/49fa27b9c0c2199db0177e0817e5f5ef.jpg",
    message: "Pake pedes ga??",
    timestamp: "1 hour ago",
    actions: [
      { label: "Balas", onClick: () => console.log("Balas message") },
      { label: "Tandai Sudah Dibaca", onClick: () => console.log("Tandai sudah dibaca") },
    ],
  },
  {
    id: 3,
    title: "Pak Atep",
    imageUrl: "https://i.pinimg.com/736x/3a/a5/f9/3aa5f94a30c0902a1c71ac34c4cb5bf8.jpg",
    message: "Belum dibayar yaa",
    timestamp: "Yesterday",
    actions: [
      { label: "Balas", onClick: () => console.log("Balas message") },
      { label: "Tandai Sudah Dibaca", onClick: () => console.log("Tandai sudah dibaca") },
    ],
  },
  {
    id: 4,
    title: "Thank You",
    imageUrl: "https://i.pinimg.com/564x/99/db/d2/99dbd27d6400f7e6045a911c9c60bf8c.jpg",
    message: "Makasih udah pesan disini",
    timestamp: "Today at 10 AM",
    actions: [
      { label: "Balas", onClick: () => console.log("Balas message") },
      { label: "Tandai Sudah Dibaca ", onClick: () => console.log("Tandai sudah dibaca") },
    ],
  },
];

// Main App Component
const App: React.FC = () => {
  return (
    <div>
      <NotificationItem notifications={notifications} />
    </div>
  );
};

export default App;
