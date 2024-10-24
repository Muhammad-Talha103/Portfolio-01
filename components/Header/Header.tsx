"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-20 w-full py-6 px-5 mx-auto  flex justify-between items-center border-b-[1px] border-b-main">
        <Link href='/'>
        <h1 className="md:text-3xl text-2xl font-bold">
          Muhammad <span className="text-main">Talha</span>
        </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex gap-4 font-semibold">
            {links.map((link) => (
              <li key={link.name} className="cursor-pointer group">
                <Link
                  href={link.href}
                  className={`relative inline-block ${
                    link.href === pathname &&
                    "border-b-[2px] border-main text-main "
                  }`}
                >
                  <span className="relative z-10 transition-colors group-hover:text-main">
                    {link.name}
                  </span>
                  <span
                    className={`${
                      link.href !== pathname &&
                      "absolute left-0 bottom-0 w-0 h-0.5  bg-main transition-all duration-300 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href='/contact'>
        <button className="bg-main px-8 hidden border-[1px] duration-300  hover:bg-white hover:border-[1px] hover:border-main hover:text-black   md:block py-2 rounded-full font-semibold text-white hover:bg-opacity-90 ">
          Hire Me
        </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <RxHamburgerMenu size={24} className="text-main" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      {isMobile && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isSidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          ></div>
          <nav
            className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end items-center">
              <div className=" p-4 ">
                <button onClick={toggleSidebar} aria-label="Close menu">
                  <RxCross1 size={24} className="text-main" />
                </button>
              </div>
            </div>
            <ul className="py-4 -mt-5">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="border-b border-gray-200 last:border-b-0 "
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-4 py-6 hover:bg-gray-100 transition-colors"
                    onClick={toggleSidebar}
                  >
                    <span className="font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
