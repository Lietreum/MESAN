import React from 'react';

type NotificationProps = {};

const Notification: React.FC<NotificationProps> = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-3xl p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">Mark all as read</button>
      </div>

      {/* Notification Items */}
      <div className="w-full max-w-3xl space-y-4">
        {/* Heart Notification */}
        <div className="flex items-center p-4 bg-white rounded-md shadow-md">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center">
            {/* Replace with Heart Icon */}
            ❤
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-indigo-700">James Doe</span> favorited an{' '}
              <span className="font-semibold text-indigo-700">item</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
          </div>
        </div>

        {/* Group Notification */}
        <div className="flex items-center p-4 bg-white rounded-md shadow-md">
          <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
            {/* Replace with Group Icon */}
            👥
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-green-700">Sash</span> added you to the group:{' '}
              <span className="font-semibold text-green-700">UX Designers</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700 ml-4">
            {/* Replace with Close Icon */}
            ✖
          </button>
        </div>

        {/* Post Notification */}
        <div className="flex items-center p-4 bg-white rounded-md shadow-md">
          <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center">
            {/* Replace with Post Icon */}
            📝
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800">
              <span className="font-semibold text-yellow-700">Sarah</span> posted in the thread:{' '}
              <span className="font-semibold text-yellow-700">Update gone wrong</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
          </div>
        </div>

        {/* Storage Notification */}
        <div className="flex items-center p-4 bg-red-100 rounded-md shadow-md">
          <div className="flex-shrink-0 w-10 h-10 bg-red-200 text-red-700 rounded-full flex items-center justify-center">
            {/* Replace with Storage Icon */}
            🛑
          </div>
          <div className="ml-4 flex-1 flex justify-between items-center">
            <p className="text-sm text-red-700">Low on storage: 2.5/32GB remaining</p>
            <p className="text-xs text-red-500">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
