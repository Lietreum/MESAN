import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineMenuFold, AiFillProduct } from "react-icons/ai";
import { IoChatboxEllipses } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import Logo from "../../../assets/data/mesan-removebg-preview.png";
import Logo4 from "../../../assets/data/Logo SMKN 4 Transparent.png";
import LogoC from "../../../assets/data/curaweda_ui.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLElement | null>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === "true"
  );

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebar.current &&
        trigger.current &&
        !sidebar.current.contains(event.target as Node) &&
        !trigger.current.contains(event.target as Node) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen, setSidebarOpen]);

  // Close sidebar on `Esc` key press
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (sidebarOpen && event.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscPress);
    return () => document.removeEventListener("keydown", handleEscPress);
  }, [sidebarOpen, setSidebarOpen]);

  // Save sidebar expanded state to localStorage
  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex flex-col h-screen w-80 bg-[#0F1E34] transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center px-10 py-0 bg-[#0F1E34]">
        <NavLink to="#">
          <img src={Logo} alt="Logo" className="w-50 h-auto" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="lg:hidden"
        >
          <AiOutlineMenuFold size={24} className="text-white" />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col flex-grow overflow-y-auto">
        <nav className="mt-6">
          <h3 className="mb-4 px-6 text-sm font-semibold text-white opacity-50">
            MENU
          </h3>

          <ul className="space-y-2">
            <li>
              <NavLink
                to="/pedagang"
                className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                  pathname === "/pedagang" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                }`}
              >
                <AiOutlineAppstore size={20} />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pedagang/product"
                className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                  pathname === "/pedagang/product" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                }`}
              >
                <AiFillProduct size={20} />
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pedagang/messages"
                className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                  pathname === "/pedagang/messages" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                }`}
              >
                <IoChatboxEllipses size={20} />
                Messages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pedagang/incoming-orders"
                className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                  pathname === "/pedagang/incoming-orders" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                }`}
              >
                <TiDocumentText size={20} />
                Incoming Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="mt-auto flex items-center space-x-4 px-6 py-4 bg-[#0F1E34]">
        <img src={Logo4} alt="Logo SMKN 4" className="h-8" />
        <img src={LogoC} alt="Curaweda Logo" className="h-10" />
        <p className="text-xs text-white opacity-60 text-center flex-grow">
          Created by SMKN 4 Bandung with support from PT. Curaweda Palagam Innotec
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
