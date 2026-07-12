import React from "react";
import Image from "next/image";

const Header = () => {
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
                <a href="#home">HOME</a>
              </li>
              <li className="font-geist-mono text-black">
                <a href="#about">ABOUT</a>
              </li>
              <li className="font-geist-mono text-black">
                <a href="#reserve-your-spot">
                  <button className="bg-[#808CFD] px-4 py-2 rounded-md cursor-pointer hover:bg-[#000000] hover:text-white">
                    RESERVE YOUR SPOT
                  </button>
                </a>
              </li>
            </ul>

            <button
              id="menu-btn"
              className="relative z-50 text-3xl font-light cursor-pointer md:hidden focus:outline-none"
            >
              <Image
                id="menu-icon"
                src="/icons/plus.svg"
                alt="Plus Icon"
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
        className="fixed top-[80px] left-0 z-40 hidden w-full flex-col justify-center bg-white border-b border-black md:hidden"
      >
        <ul className="flex flex-col text-black font-geist-mono">
          <li>
            <a
              href="#home"
              className="flex h-[68px] items-center border-b border-black px-6 text-4xl"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex h-[68px] items-center border-b border-black px-6 text-4xl"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#reserve-your-spot"
              className="flex h-[76px] items-center bg-[#808CFD] px-6 text-4xl text-white"
            >
              RESERVE YOUR SPOT
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
