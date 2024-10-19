import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // For smooth transitions

interface AccountModalProps {
  onClose: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ onClose }) => {
  const [name, setName] = useState("Pak Atep");
  const [email, setEmail] = useState("222*****.pedagang@smkn4bdg.schl.id");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="bg-white text-gray-900 w-full max-w-lg md:max-w-2xl rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-100 p-4 rounded-l-lg">
            <h2 className="text-lg font-semibold text-gray-600">Account</h2>
          </div>

          {/* Main Content */}
          <div className="w-3/4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Manage Account</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Section */}
            <div className="mt-4">
              <div className="flex items-center">
                {/* Profile Image */}
                <img
                  src="https://via.placeholder.com/64"
                  alt="Profile"
                  className="w-16 h-16 rounded-full border border-gray-300 hover:ring-2 hover:ring-blue-400 transition-shadow duration-200"
                />
                <div className="ml-4">
                  {/* Editable Name */}
                  <Transition
                    show={isEditingName}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setIsEditingName(false)}
                      className="text-xl font-semibold border-b border-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                  </Transition>
                  {!isEditingName && (
                    <h3
                      className="text-xl font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-300"
                      onClick={() => setIsEditingName(true)}
                    >
                      {name}
                    </h3>
                  )}
                </div>
              </div>

              {/* Account Info */}
              <div className="mt-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Email</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => setIsEditingEmail(true)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h1m0 4v-4m0 0H6m0 0v4M6 9h12"
                      />
                    </svg>
                  </div>
                  <Transition
                    show={isEditingEmail}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setIsEditingEmail(false)}
                      className="text-lg border-b border-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                  </Transition>
                  {!isEditingEmail && (
                    <p
                      className="text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300"
                      onClick={() => setIsEditingEmail(true)}
                    >
                      {email}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Password</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={() => alert("Change Password Clicked")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h1m0 4v-4m0 0H6m0 0v4M6 9h12"
                      />
                    </svg>
                  </div>
                  <p className="text-lg flex items-center">
                    *********
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 w-5 h-5 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h1m0 4v-4m0 0H6m0 0v4M6 9h12"
                      />
                    </svg>
                  </p>
                </div>

                {/* Change Password Button */}
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 px-4 py-2 rounded-lg text-white shadow-lg transition-all duration-300 transform hover:scale-105">
                  Change Password
                </button>
              </div>

              {/* Done Button */}
              <div className="flex justify-end mt-8">
                <button
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-600 hover:to-green-600 px-4 py-2 rounded-lg text-white shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={onClose}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
