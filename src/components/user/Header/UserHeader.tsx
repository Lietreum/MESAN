import React from "react";
import { Link } from "react-router-dom";
import DropdownUser from "../Header/Dropdown";
import LogoIcon from "../../../assets/Pavicon/koperasiLogo.png";
import Sidebar from "./Sidebar";
import { ShoppingCart, Heart, Bell } from "lucide-react";
import { Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Sidebar Component with Hamburger Icon */}
          <Sidebar />

          {/* Icon Logo Start */}
          <Link className="block flex-shrink-0 " to="/">
            <img
              src={LogoIcon}
              alt="Logo"
              className="mr-3 flex-none w-[4.5rem] overflow-hidden "
            />
          </Link>
          <Typography> Mesan </Typography>
          {/* Icon Logo End */}
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7 ml-auto">
          {/* Cart Icon */}
          <Link
            to="/notifications"
            className="relative flex items-center justify-center"
          >
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            {/* Optionally, add a badge or notification indicator */}
            <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
              10
            </span>
          </Link>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center"
          >
            <ShoppingCart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            {/* Optionally, add a badge or notification indicator */}
            <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
              3
            </span>
          </Link>

          {/* Favorite Icon */}
          <Link
            to="/favorites"
            className="relative flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            {/* Optionally, add a badge or notification indicator */}
            <span className="absolute top-0 right-0 block w-3.5 h-3.5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
              5
            </span>
          </Link>

          {/* User Area */}
          <DropdownUser />
        </div>
      </div>
    </nav>
  );
};

export default Header;
