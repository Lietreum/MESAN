import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-dark-900">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100">404</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Page Not Found</p>
                <p className="text-gray-500 dark:text-gray-400 mt-4">The page you are looking for doesn't exist or has been moved.</p>
                <a
                    href="/"
                    className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
