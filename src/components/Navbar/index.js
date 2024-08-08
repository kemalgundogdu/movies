import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useCategory } from "../../context/CategoryContext";

export default function Navbar() {
  const { categorys } = useCategory();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <div className="antialiased bg-gray-100">
        <div className="w-full text-gray-700 bg-white">
          <div className="flex flex-col mx-auto md:items-center md:justify-between md:flex-row">
            <div className="flex flex-row items-center justify-between py-4">
              <NavLink
                to="/"
                className="whitespace-nowrap text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"
              >
                Movie List
              </NavLink>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
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
              className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row z-10 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <NavLink
                to="/movies"
                className="whitespace-nowrap px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
              >
                Son Filmler
              </NavLink>
              <NavLink
                to="/tvshows"
                className="whitespace-nowrap px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
              >
                Son Diziler
              </NavLink>
              <div
                className="relative"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="whitespace-nowrap flex flex-row text-gray-900 bg-gray-100 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                >
                  <span>Kategoriler</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${
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
                  <div className="absolute right-0 md:-right-2 w-full md:max-w-screen-sm origin-top-right">
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {categorys.map((genre) => (
                          <NavLink
                            key={genre.id}
                            to={`/genre/${genre.id}`}
                            className="flex row items-start rounded-lg bg-transparent p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                          >
                            <div>
                              <p className="font-semibold">{genre.name}</p>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <NavLink
                to="/artists"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
              >
                Sanatçılar
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
