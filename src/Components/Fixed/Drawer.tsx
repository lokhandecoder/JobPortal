import React from "react";

function Drawer({ isOpen, toggleDrawer }: any) {
  return (
    <div className="relative ">
      <button
        className="relative inset-0 bg-black opacity-50 w-full h-full cursor-default z-10"
        onClick={toggleDrawer}
        style={{ display: isOpen ? "block" : "none" }}
      ></button>
      <div
        className={`fixed top-20 left-0 h-full bg-white w-64 shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="px-4 py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Menu</h1>
            <button className="focus:outline-none" onClick={toggleDrawer}>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="mt-4">
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Menu Item 1
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Menu Item 2
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Menu Item 3
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
