"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-blue-900 shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full `}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col">
            <GrTechnology className="w-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            DevTech
          </h1>
        </div>
        {/* NavLink */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-white text-lg hover:text-pink-300 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* button */}
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

          {/* Theme toggler */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
