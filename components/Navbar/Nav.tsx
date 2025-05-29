"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import ThemeToogoler from "../Helper/ThemeToogoler";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <div
      className={`transition-all duration-200 fixed w-full h-[12vh] z-[100] ${
        navBg ? "bg-blue-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="w-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            SoftNest
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-white text-lg hover:text-pink-300 font-semibold transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Buttons and icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
          >
            <span
              className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm
    bg-gradient-to-br from-purple-600 to-blue-500"
            ></span>

            <span
              className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br
    from-blue-500 to-purple-600"
            ></span>

            <span
              className="absolute inset-0 w-full h-full mt-0.5 ml-0.5 rounded opacity-50 bg-gradient-to-br
    from-purple-600 to-blue-500 filter group-active:opacity-75 z-[-1]"
            ></span>

            <span
              className="absolute inset-0 w-full h-full rounded transition-all duration-200 ease-out shadow-xl
    bg-gradient-to-br from-purple-600 to-blue-500 filter group-active:opacity-0 group-hover:blur-sm z-[-2]"
            ></span>

            <span className="relative z-10">Create Account</span>
          </a>

          <ThemeToogoler />

          <HiBars3BottomRight
            onClick={() => setMobileMenuOpen(true)}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-[75vw] max-w-xs bg-blue-900 shadow-lg transform transition-transform duration-300 ease-in-out z-[110] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-blue-700">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
              <GrTechnology className="w-6 text-white" />
            </div>
            <h1 className="text-xl text-white font-bold">SoftNest</h1>
          </div>
          <HiXMark
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 cursor-pointer text-white"
          />
        </div>

        <nav className="flex flex-col mt-8 space-y-6 px-6">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl font-semibold hover:text-pink-300 transition"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="#"
            className="mt-6 px-5 py-3 bg-gradient-to-br from-purple-600 to-blue-500 rounded text-white font-semibold text-center"
          >
            Create Account
          </a>
        </nav>
      </div>

      {/* Overlay background */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-[105]"
        />
      )}
    </div>
  );
};

export default Nav;
