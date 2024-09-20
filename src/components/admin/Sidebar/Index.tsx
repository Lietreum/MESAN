import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Logo from "../../../assets/data/mesan-removebg-preview.png";
import { AiOutlineAppstore, AiOutlineMenuFold, AiOutlineDown } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GrCart, GrInbox } from "react-icons/gr";

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
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex flex-col h-screen w-64 bg-[#0F1E34] transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center px-10 py-0 bg-[#0F1E34]">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-50 h-auto" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <AiOutlineMenuFold size={24} className="text-white" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col flex-grow overflow-y-auto">
        <nav className="mt-6">
          <h3 className="mb-4 px-6 text-sm font-semibold text-white opacity-50">
            MENU
          </h3>

          <ul className="flex flex-col space-y-2 px-4">
            {/* Dashboard */}
            <li>
              <NavLink
                to="/admin"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                  pathname === "/admin" ? "bg-[#1E293B]" : ""
                }`}
              >
                <AiOutlineAppstore size={20} />
                Dashboard
              </NavLink>
            </li>

            {/* Products Dropdown */}
            <SidebarLinkGroup activeCondition={pathname.includes("product")}>
              {(handleClick, open) => (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                    className={`flex items-center justify-between w-full gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                      pathname.includes("product") ? "bg-[#1E293B]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <GrCart size={20} />
                      Products
                    </div>
                    <AiOutlineDown
                      className={`transition-transform duration-200 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`pl-8 pt-2 ${!open && "hidden"}`}
                  >
                    <NavLink
                      to="/admin/product"
                      className={({ isActive }) =>
                        `block py-2 text-white transition hover:text-blue-400 ${
                          isActive ? "text-blue-400" : ""
                        }`
                      }
                    >
                      Products
                    </NavLink>
                  </div>
                </>
              )}
            </SidebarLinkGroup>

            {/* Messages */}
            <li>
              <NavLink
                to="/admin/messages"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                  pathname.includes("messages") ? "bg-[#1E293B]" : ""
                }`}
              >
                <GrInbox size={20} />
                Messages
              </NavLink>
            </li>

            {/* Incoming Orders */}
            <li>
              <NavLink
                to="/admin/incoming-orders"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                  pathname.includes("incoming-orders") ? "bg-[#1E293B]" : ""
                }`}
              >
                <GrCart size={20} />
                Incoming Orders
              </NavLink>
            </li>

            {/* Profile */}
            <li>
              <NavLink
                to="/profile"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                  pathname.includes("profile") ? "bg-[#1E293B]" : ""
                }`}
              >
                <CiUser size={20} />
                Profile
              </NavLink>
            </li>

            {/* Settings */}
            <li>
              <NavLink
                to="/settings"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition ${
                  pathname.includes("settings") ? "bg-[#1E293B]" : ""
                }`}
              >
                <FaCog size={20} />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="py-4 px-6 mt-auto">
        <p className="text-xs text-white opacity-60 text-center">
          Created by SMKN 4 Bandung with support from PT. Curaweda Palagam Innotec
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
