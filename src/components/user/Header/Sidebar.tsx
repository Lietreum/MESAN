import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="drawer">
      {/* Drawer toggle checkbox */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content area */}
      <div className="drawer-content">
        {/* Hamburger Icon Button to open the drawer */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          {/* Hamburger icon using three spans */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          </div>
        </label>
        {/* Page content goes here */}
      </div>

      {/* Sidebar content */}
      <div className="drawer-side">
        {/* Overlay to close the sidebar when clicked outside */}
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar menu items */}
        <ul className="menu bg-white text-base-content h-screen w-80 p-4">
          {/* Full height sidebar with h-screen */}
          <li>
            <a href="#">Sidebar Item 1</a>
          </li>
          <li>
            <a href="#">Sidebar Item 2</a>
          </li>
          {/* Additional sidebar items can be added here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
