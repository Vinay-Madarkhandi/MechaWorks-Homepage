"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed right-0 left-0 top-0 py-3 px-3 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Pegasis logo"
          className="shadow-sm w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[50px] lg:h-[50px]"
        />
        <p className="text-xl sm:text-2xl md:text-3xl font-bold">MechaWorks</p>
      </aside>
      
      {/* Desktop Navigation */}
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-3 lg:gap-6 list-none">
          <li>
            <Link href="#hero" className="hover:text-violet-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="#contents" className="hover:text-violet-400 transition-colors">Info</Link>
          </li>
          <li>
            <Link href="#worker" className="hover:text-violet-400 transition-colors">Worker info</Link>
          </li>
          <li>
            <Link href="#client" className="hover:text-violet-400 transition-colors">Business info</Link>
          </li>
          <li>
            <Link href="#footer" className="hover:text-violet-400 transition-colors">Contact us</Link>
          </li>
        </ul>
      </nav>
      
      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button 
          className="text-white p-2 focus:outline-none" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg md:hidden border-b border-neutral-900 z-50">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            <li>
              <Link href="#hero" className="block py-2 hover:text-violet-400 transition-colors" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="#contents" className="block py-2 hover:text-violet-400 transition-colors" onClick={toggleMenu}>Info</Link>
            </li>
            <li>
              <Link href="#worker" className="block py-2 hover:text-violet-400 transition-colors" onClick={toggleMenu}>Worker info</Link>
            </li>
            <li>
              <Link href="#client" className="block py-2 hover:text-violet-400 transition-colors" onClick={toggleMenu}>Business info</Link>
            </li>
            <li>
              <Link href="#footer" className="block py-2 hover:text-violet-400 transition-colors" onClick={toggleMenu}>Contact us</Link>
            </li>
            <li className="flex flex-col sm:hidden space-y-3 pt-2">
              <a href="https://mecha-works-worker-frontend.vercel.app/" target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="dark:bg-black bg-violet-700 text-white dark:text-white flex items-center justify-center space-x-2 text-sm px-3 py-2 w-full"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Worker</span>
                </HoverBorderGradient>
              </a>
              <a href="https://mecha-works-user-frontend.vercel.app/" target="_blank">
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 text-sm px-3 py-2 w-full"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Business</span>
                </HoverBorderGradient>
              </a>
            </li>
          </ul>
        </div>
      )}
      
      <aside className="hidden sm:flex items-center gap-2 md:gap-4">
        <a href="https://mecha-works-worker-frontend.vercel.app/" target="_blank" className="scale-90 md:scale-100">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-violet-700 text-white dark:text-white flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 py-1 md:px-3 md:py-2"
          >
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            <span>Worker</span>
          </HoverBorderGradient>
        </a>
        <a href="https://mecha-works-user-frontend.vercel.app/" target="_blank" className="scale-90 md:scale-100">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1 md:space-x-2 text-xs md:text-sm px-2 py-1 md:px-3 md:py-2"
          >
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            <span>Business</span>
          </HoverBorderGradient>
        </a>
      </aside>
    </header>
  );
};

export default Navbar;
