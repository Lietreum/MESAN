import { useState } from "react";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gray-100 px-4 py-3 relative">
      <div className="mx-auto flex max-w-3xl items-center justify-center">
        <p className="text-center text-sm font-medium text-gray-900">
          New to Mesan?{" "}
          <a
            href="https://mesan-about.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block underline sm:inline-block text-blue-600 hover:text-blue-800"
          >
            Learn more about us here!
          </a>
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-2 text-gray-500 hover:text-gray-700"
          aria-label="Dismiss announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9.293l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Announcement;
