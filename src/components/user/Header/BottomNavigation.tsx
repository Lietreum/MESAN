import { CircleUser, Home, Settings, Wallet } from "lucide-react";
import React from "react";

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <NavButton label="Home" icon={<Home />} />
        <NavButton label="Wallet" icon={<Wallet />} />
        <NavButton label="Settings" icon={<Settings />} />
        <NavButton label="Profile" icon={<CircleUser />} />
      </div>
    </div>
  );
};

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon }) => {
  return (
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
