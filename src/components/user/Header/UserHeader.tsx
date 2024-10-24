import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownUser from "../Header/Dropdown";
import LogoIcon from "../../../assets/data/mesan-removebg-preview.png";
import { ShoppingCart, Heart, Bell } from "lucide-react";
import { PiChatDotsBold } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import SearchBar from "../SearchBar/NavSearchInput"; // Updated search bar component import

const Header: React.FC = () => {
  const [profileData, setProfileData] = useState<{ name: string } | null>(null);

  const fetchProfileData = async () => {
    try {
      const response = await fetch("https://api-mesan.curaweda.com/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }

      const result = await response.json();
      if (result && result.data) {
        setProfileData(result.data); // Store the fetched profile data
      } else {
        console.error("Unexpected response structure:", result);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-300">
      <div
        className="relative flex w-full items-center justify-between px-4 py-4 md:px-6 2xl:px-11"
        style={{ height: "70px" }}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="block flex-shrink-0" to="/">
            <img src={LogoIcon} alt="Logo" className="icon-style" />
          </Link>
        </div>


        {/* Search Bar Section */}
        <div className="flex-grow px-6">
          <SearchBar />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <Link
            to="/messages"
            className="relative flex items-center justify-center"
          >
            <div className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <PiChatDotsBold className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Link>

          <Link
            to="/order"
            className="relative flex items-center justify-center"
          >
            <div className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <LuClipboardList className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Link>

          <Link
            to="/notifications"
            className="relative flex items-center justify-center"
          >
            <div className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center justify-center"
          >
            <div className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Link>

          <Link
            to="/favorites"
            className="relative flex items-center justify-center"
          >
            <div className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <Heart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </div>
          </Link>
          {/* User Dropdown */}
          <DropdownUser profileName={profileData?.name || null} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
