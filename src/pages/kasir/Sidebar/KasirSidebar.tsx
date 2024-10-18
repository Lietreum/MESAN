import { useEffect, useRef, useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/data/mesan-removebg-preview.png";
import SidebarLinkGroup from "./SidebarLinkGroup";
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
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex flex-col h-screen w-64 bg-[#0F1E34] transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
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
                to="/kasir"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                    isActive ? "text-white" : "text-white"
                  } hover:text-blue-400`
                }
              >
                <AiOutlineAppstore size={20} />
                Dashboard
              </NavLink>
            </li>

            {/* Products Dropdown */}
            <SidebarLinkGroup activeCondition={pathname.includes("product")}>
              {(handleClick, open) => (
                <>
                  <div className="flex items-center justify-between w-full px-4 py-2 rounded-md text-white hover:bg-[#1E293B] transition">
                    {/* Topup Link */}
                    <NavLink
                      to="/kasir/topup"
                      className={({ isActive }) =>
                        `flex items-center gap-3 transition hover:text-blue-400 ${
                          isActive ? "text-blue-400" : "text-white"
                        }`
                      }
                    >
                      <GrCart size={20} />
                      Topup
                    </NavLink>

                    {/* Dropdown Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                      }}
                      className="flex items-center"
                    >
                      <AiOutlineDown
                        className={`transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown */}
                  <div className={`pl-8 pt-2 ${!open && "hidden"}`}>
                    <NavLink
                      to="/kasir/withdrawal"
                      className={({ isActive }) =>
                        `block py-2 transition hover:text-blue-400 ${
                          isActive ? "text-blue-400" : "text-white"
                        }`
                      }
                    >
                      Withdrawal
                    </NavLink>
                  </div>
                </>
              )}
            </SidebarLinkGroup>

            {/* History */}
            <li>
              <NavLink
                to="/kasir/history"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:bg-[#1E293B]`
                }
              >
                <CiMail size={20} />
                History
              </NavLink>
            </li>

            {/* Manage Accounts */}
            <li>
              <NavLink
                to="/kasir/ManageAccounts"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-white"
                  } hover:bg-[#1E293B]`
                }
              >
                <BsListTask size={20} />
                Manage Accounts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="py-4 px-6 mt-auto flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <img src={Logo4} alt="Logo 1" className="h-8 w-auto" />
          <img src={LogoC} alt="Logo 2" className="h-10 w-auto" />{" "}
          <p className="text-xs text-white opacity-60 text-center flex-grow">
            Created by SMKN 4 Bandung with support from PT. Curaweda Palagam
            Innotec
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
