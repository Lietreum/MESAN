import React from "react";
import { NotificationProps } from "../../../types/types";
import DefaultImage from "../../../assets/admin/images/cards/cards-01.png"; // Default image if no notification image is available
import { FiMessageSquare, FiCheckCircle } from "react-icons/fi"; // Importing icons

const NotificationItem: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen pt-24"> {/* Added top padding */}

      {/* Header Notification */}
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg mb-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Notifications</h2>
      </div>

      {/* Notification List */}
      <div className="w-full max-w-3xl space-y-6"> {/* Increased spacing between notifications */}
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex flex-col md:flex-row items-start p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={notification.imageUrl || DefaultImage}
                className="w-16 h-16 rounded-lg mr-4 object-cover" // Changed width and height for better appearance
                alt={notification.title || "Notification"}
              />
              <div className="flex-1 flex flex-col"> {/* Added a flex container for better alignment */}
                <div className="flex justify-between items-center mb-2"> {/* Added margin-bottom for spacing */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                    {notification.title || "Notification"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {notification.timestamp}
                  </p>
                </div>
                <p className="text-gray-600 mt-1 mb-4">{notification.message}</p> {/* Added bottom margin */}
                
                <div className="flex space-x-4 justify-end">
                  {notification.actions && notification.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.onClick}
                      className="flex items-center bg-blue-500 hover:bg-blue-600 transition-all duration-300 w-[120px] px-3 py-2 rounded-md text-white text-xs font-medium"
                    >
                      {action.label === "Reply" ? <FiMessageSquare className="mr-2" /> : <FiCheckCircle className="mr-2" />}
                      {action.label}
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
      { label: "Reply", onClick: () => console.log("Reply to message") },
      { label: "Mark as Read", onClick: () => console.log("Marked as read") },
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
