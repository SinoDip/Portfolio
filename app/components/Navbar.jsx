"use client";

import { assets, mobilaNavItems, navItems } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ">
        <Image src={assets.header_bg_color} alt="" className=" w-full"></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logosino_dark : assets.logosino}
            alt=""
            className="w-28 cursor-pointer mr-14 transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6" // Added hover animation
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap lg:gap-8 rounded-full px-12 py-3 transition duration-500 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="transition-transform duration-200 hover:scale-110"
            >
              {" "}
              {/* Added hover:scale-110 */}
              <Link className="font-Ovo" href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="relative group"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 transition-transform duration-300 group-hover:rotate-180"
            />
          </button>

          <a
            href="#contact"
            className="hidden duration-200 lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 transition-all ease-in-out hover:scale-105 hover:shadow-lg  "
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            />
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="lg:hidden text-black dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu  */}
        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="flex flex-col md:hidden bg-white dark:bg-darkTheme absolute top-14 pt-8 left-0 w-full shadow-navShadowWhite dark:shadow-navShadowBlack py-4 px-6 space-y-4">
            {mobilaNavItems.map((item, index) => (
              <li key={index} className="group">
                <Link
                  href={item.link}
                  className="relative block"
                  onClick={handleNavLinkClick}
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <button className="border border-black dark:border-white px-3 py-2 rounded-xl hover:bg-black hover:text-white hover:duration-500">
              <a href="/#contact">Contact Me </a>
            </button>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
