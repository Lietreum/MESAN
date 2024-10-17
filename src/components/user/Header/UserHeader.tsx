import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownUser from "../Header/Dropdown";
import LogoIcon from "../../../assets/data/mesan-removebg-preview.png";
import { ShoppingCart, Heart, Bell } from "lucide-react";
import { PiChatDotsBold } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import "../../../globalcss/index.css";

const Header: React.FC = () => {
  const [profileData, setProfileData] = useState<{ name: string } | null>(null);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }

      const result = await response.json();
      if (result && result.data) {
        setProfileData(result.data); // Store the fetched profile data
      } else {
        console.error('Unexpected response structure:', result);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData(); // Call the fetch function when the component mounts
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex w-full border-b border-slate-300 ">
    <div
      className="relative flex w-full items-center justify-between px-4 py-4 md:px-6 2xl:px-11"
      style={{ height: "70px" }}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Icon Logo Start */}
        <Link className="block flex-shrink-0 " to="/">
          <img src={LogoIcon} alt="Logo" className="icon-style" />
        </Link>

        {/* Icon Logo End */}
      </div>
      <div className="flex items-center gap-3 2xsm:gap-7 ml-auto">
        {/* Messages Icon */}
        <Link
          to="/messages"
          className="relative flex items-center justify-center"
        >
          <PiChatDotsBold className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </Link>

        <Link
          to="/order"
          className="relative flex items-center justify-center"
        >
          <LuClipboardList className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </Link>

        {/* <Link
          to="/qrscanplaceholder"
          className="relative flex items-center justify-center"
        >
          <AiOutlineScan className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </Link> */}

        <Link
          to="/notifications"
          className="relative flex items-center justify-center"
        >
          <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          {/* Optionally, add a badge or notification indicator */}
          {/* <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            10
          </span> */}
        </Link>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative flex items-center justify-center"
        >
          <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          {/* Optionally, add a badge or notification indicator */}
          {/* <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            3
          </span> */}
        </Link>

        {/* Favorite Icon */}
        <Link
          to="/favorites"
          className="relative flex items-center justify-center"
        >
          <Heart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          {/* Optionally, add a badge or notification indicator */}
          {/* <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            5
          </span> */}
        </Link>

          {/* User Area */}
          <DropdownUser profileName={profileData?.name || null} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
