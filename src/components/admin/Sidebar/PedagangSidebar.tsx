import { useEffect, useRef, useState } from "react";
import { AiOutlineAppstore, AiOutlineMenuFold, AiFillProduct } from "react-icons/ai";

import { IoChatboxEllipses } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/data/mesan-removebg-preview.png";
import Logo4 from "../../../assets/data/Logo SMKN 4 Transparent.png";
import LogoC from "../../../assets/data/curaweda_ui.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLElement | null>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        ref={sidebar}
        className={`fixed left-0 top-0 z-9999 flex flex-col h-screen w-64 bg-[#0F1E34] transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center px-10 py-0 bg-[#0F1E34]">
          <NavLink to="/merchant">
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

        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="mt-6">
            <h3 className="mb-4 px-6 text-sm font-semibold text-white opacity-50">MENU</h3>

            <ul className="space-y-2">
              {/* Existing Menu Items */}
              <li>
                <NavLink
                  to="/merchant"
                  className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                    pathname === "/merchant" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                  }`}
                >
                  <AiOutlineAppstore size={20} />
                  Dashboard
                </NavLink>
              </li>

              {/* Additional Menu Items from the second sidebar */}
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

              {/* Add other NavLinks for other menu items as needed */}
            </ul>
          </nav>
        </div>

        <div className="mt-auto flex items-center space-x-4 px-6 py-4 bg-[#0F1E34] z-50">
          <img src={Logo4} alt="Logo SMKN 4" className="h-8" />
          <img src={LogoC} alt="Curaweda Logo" className="h-10" />
          <p className="text-xs text-white opacity-60 text-center flex-grow">
            Created by SMKN 4 Bandung with support from PT. Curaweda Palagam Innotec
          </p>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        ref={sidebar}
        className="hidden lg:flex flex-col h-screen w-64 bg-[#0F1E34]"
      >
        <div className="flex items-center justify-center px-10 py-0 bg-[#0F1E34]">
          <NavLink to="/merchant">
            <img src={Logo} alt="Logo" className="w-50 h-auto" />
          </NavLink>
        </div>

        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="mt-6">
            <h3 className="mb-4 px-6 text-sm font-semibold text-white opacity-50">MENU</h3>

            <ul className="space-y-2">
              {/* Existing Menu Items */}
              <li>
                <NavLink
                  to="/merchant"
                  className={`flex items-center gap-3 px-6 py-2 text-white rounded-md transition-colors duration-200 ${
                    pathname === "/merchant" ? "bg-[#1E293B]" : "hover:bg-[#1E293B]"
                  }`}
                >
                  <AiOutlineAppstore size={20} />
                  Dashboard
                </NavLink>
              </li>

              {/* Additional Menu Items from the second sidebar */}
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

              {/* Add other NavLinks for other menu items as needed */}
            </ul>
          </nav>
        </div>

        <div className="mt-auto flex items-center space-x-4 px-6 py-4 bg-[#0F1E34] z-50">
          <img src={Logo4} alt="Logo SMKN 4" className="h-8" />
          <img src={LogoC} alt="Curaweda Logo" className="h-10" />
          <p className="text-xs text-white opacity-60 text-center flex-grow">
            Created by SMKN 4 Bandung with support from PT. Curaweda Palagam Innotec
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
