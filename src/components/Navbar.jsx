import React, { useState } from "react";
import logo from "../assets/logo.png"; // Assuming logo.png is in the assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const headerConfig = {
    bgColor: "#ffffff",
    textColor: "#000000",
    logo: logo,
    menus: [
      { name: "Home", link: "#" },
      { name: "About", link: "#" },
      {
        name: "Contact",
        subMenu: [
          { name: "Email Us", link: "#" },
          { name: "Call Us", link: "#" },
        ],
      },
      { name: "Careers", link: "#" },
    ],
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: headerConfig.bgColor,
        color: headerConfig.textColor,
      }}
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-16">
        <div className="p-4 flex flex-row items-center justify-between">
          <a href="#">
            <img src={headerConfig.logo} className="h-12" alt="Logo" />
          </a>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={toggleNavbar}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {headerConfig.menus.map((menu, index) =>
            menu.subMenu ? (
              <div key={index} className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg space-x-1 md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
                >
                  <span>{menu.name}</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 transition-transform duration-200 transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-10 text-black">
                    <div className="px-2 py-2 rounded-md shadow">
                      {menu.subMenu.map((subMenu, subIndex) => (
                        <a
                          key={subIndex}
                          className="block px-4 py-2 text-sm font-semibold text-black rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                          href={subMenu.link}
                        >
                          {subMenu.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:outline-none focus:shadow-outline"
                href={menu.link}
              >
                {menu.name}
              </a>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
