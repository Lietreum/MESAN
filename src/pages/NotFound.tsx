import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-2xl mt-4">Oops! Page not found.</h2>
        <p className="mt-2 mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-white text-purple-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
