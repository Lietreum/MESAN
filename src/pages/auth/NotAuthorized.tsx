// src/pages/NotAuthorized.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 text-gray-800">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
        <p className="mb-4">You do not have permission to access this page.</p>
        <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
