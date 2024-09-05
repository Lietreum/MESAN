import { CircleUser, Home, Settings, Wallet, Bell } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; 
import koperasiLogo from "../../../assets/Pavicon/koperasiLogo.png";

const BottomNavigation: React.FC = () => {
  return (
    <div>
      {/* Header with Icon at Top Left and Notification Icon at Top Right */}
      <div className="fixed top-0 left-0  z-50 w-full h-16 bg-white dark:bg-gray-700 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-600">
        {/* Icon Image at Top Left */}
        <Link to="/" className="flex items-center">
          <img
            src={koperasiLogo} 
            alt="Logo"
            className="w-8 h-auto"
          />
        </Link>

          {/* Notification Icon at Top Right */}
          <Link to="/notifications" className="flex items-center">
          <Bell className="w-6 h-6 text-gray-700 dark:text-white" />
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <NavButton label="Home" icon={<Home />} to="/" />
          <NavButton label="Wallet" icon={<Wallet />} to="/wallet" />
          <NavButton label="Settings" icon={<Settings />} to="/settings"/>
          <NavButton label="Profile" icon={<CircleUser />} to="/profile"/>
        </div>
      </div>
    </div>
  );
};

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  to?: string; // Optional to attribute for navigation
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, to }) => {
  return to ? (
    <Link
      to={to}
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {icon}
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        {label}
      </span>
    </Link>
  ) : (
    <button
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    >
      {icon}
      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
        {label}
      </span>
    </button>
  );
};

export default BottomNavigation;
