"use client";

import { useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { name: "How it Works", path: "/works" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative top-0 h-16">
      <div className="fixed top-0 w-full bg-[#010f18]/80 backdrop-blur-md text-white flex items-center justify-between px-6 py-4 shadow-lg z-50">
        {/* Logo */}
        <Link href={"/"}>
          {" "}
          <div className="leading-tight">
            <h1 className="text-4xl font-bold museo tracking-wide">urdu.</h1>
            <h2 className="text-[10px] mont tracking-[2px] text-gray-300">
              CAREER BOT
            </h2>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-10 text-gray-100  museo px-10 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="relative text-lg font-medium transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#04d9ff] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white"
          onClick={handleNav}
          aria-label="Toggle menu"
        >
          {nav ? <RxCross2 size={32} /> : <HiBars3BottomRight size={32} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed top-0 left-0 w-72 h-screen bg-[#010f18] shadow-xl flex flex-col gap-6 px-8 py-24 museo"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
               
                   
                    <Link
                      href={link.path}
                      onClick={() => setNav(false)}
                      className="block text-lg font-medium text-gray-200 hover:text-[#04d9ff] transition"
                    >
                      {link.name}
                    </Link>
                  
                </motion.div>
              ))}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
