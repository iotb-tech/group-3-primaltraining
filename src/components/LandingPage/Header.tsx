"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav>
        <div
          id="header"
          className="fixed top-0 left-0 z-50 w-full h-[80px] border-b border-black bg-[#E9ECFF]"
        >
          <div className="max-w-[1484px] mx-auto h-full p-4 flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/icons/logo.svg"
                  alt="PrimalTraining Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain"
                />
              </div>

              <p className="font-instrument font-bold text-lg md:text-xl text-black tracking-tighter">
                PrimalTraining
              </p>
            </div>

            <ul className="hidden md:flex md:justify-center md:items-center md:gap-10">
              <li className="font-geist-mono text-black">
                {/* <a href="#home">HOME</a> */}
                <Link href="/" className="font-geist-mono text-black">
                  HOME
                </Link>
              </li>
              <Link href="/about" className="font-geist-mono text-black">
                ABOUT
              </Link>
              <li className="font-geist-mono text-black">
                <Link href="/reserve-your-spot">
                  <button className="bg-[#808CFD] px-4 py-2 rounded-md cursor-pointer hover:bg-[#000000] hover:text-white">
                    RESERVE YOUR SPOT
                  </button>
                </Link>
              </li>
            </ul>

            <button
              id="menu-btn"
              onClick={toggleMenu}
              className="relative z-50 text-3xl font-light cursor-pointer md:hidden focus:outline-none"
            >
              <Image
                id="menu-icon"
                src={isOpen ? "/icons/minus.svg" : "/icons/plus.svg"}
                alt={isOpen ? "Minus Icon" : "Plus Icon"}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      <div
        id="mobile-menu"
        className={`fixed top-[80px] left-0 z-40 w-full flex-col justify-center bg-white border-b border-black md:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-black font-geist-mono">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex h-[68px] items-center border-b border-black px-6 text-2xl"
            >
              HOME
            </a>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="flex h-[68px] items-center border-b border-black px-6 text-2xl"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/reserve-your-spot"
              onClick={() => setIsOpen(false)}
              className="flex h-[76px] items-center bg-[#808CFD] px-6 text-2xl text-white"
            >
              RESERVE YOUR SPOT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
