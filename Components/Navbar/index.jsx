"use client";

import React, { useState } from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import styles from "./style.module.css";

const menuItems = [
  { title: "0 800 750 643", href: "/", icon: IoMdArrowDropdown },
  { title: "ПРО НАС", href: "/aboutUs", icon: IoMdArrowDropdown },
  { title: "ЦЕНЫ", href: "#" },
  { title: "КОНТАКТЫ", href: "/contacts" },
  { title: "БЛОГ", href: "#" },
  { title: "ВИДЕО", href: "#" },
  { title: "ВОПРОСЫ", href: "#" },
];

const Navbar = ({ onMenuToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onMenuToggle) onMenuToggle(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 py-4 px-4 md:px-8 flex items-center justify-between shadow-md transition-colors duration-300 ${
        isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image className="h-8 w-auto" src={Logo} alt="Signy Logo" width={530} />
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center absolute md:relative top-16 md:top-auto left-0 right-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 z-50`}
          style={{ flexDirection: isOpen ? "column" : "row" }}
        >
          {menuItems.map((item, id) => (
            <Link key={id} href={item.href} className="text-sm text-gray-700 flex items-center">
              {item.title}
              {item.icon && <item.icon className="ml-1" />}
            </Link>
          ))}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <button className="border rounded-full w-3/10 mx-auto px-6 py-1 border-blue-500">
              <Link href="#">ВХОД</Link>
            </button>
            <button className="bg-blue-500 text-white w-3/10 mx-auto rounded-full px-4 py-1">
              <Link href="#">РЕГИСТРАЦИЯ</Link>
            </button>
          </div>
          <div className="text-sm text-gray-700 flex items-center">
            РУС <IoMdArrowDropdown className="ml-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;