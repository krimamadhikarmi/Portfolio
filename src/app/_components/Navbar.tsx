"use client";
import Link from "next/link";
import { NavLink } from "./NavLink";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import {MenuOverlay} from './MenuOverlay';

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Services",
      path: "#services",
    },
    {
      title: "Projects",
      path: "#my projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 h-20 bg-[#121212]  shadow-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-16 py-2">
        <Link
          href={"/"}
          className="cursor-pointer text-2xl md:text-3xl text-blue-200 font-semibold"
        >
          K
          <span className=" text-2xl md:text-3xl text-blue-300 font-semibold">
            M
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/>:null}
    </nav>
  );
}
