import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Globe } from "../data/globe";

export function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-around px-4 py-10 md:py-0">
      {/* Left Content - Shows first on mobile */}
      <div className="w-full mt-10 md:w-1/2 order-1 md:order-1 transform translate-y-0 md:translate-y-[-20px] transition-transform duration-300">
        <div className="flex flex-col p-4 md:p-6 lg:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex flex-col gap-4 md:gap-6 lg:gap-8">
            <span>Looking For</span>
            <span>More Ways To Earn</span>
            <span>
              <span className="text-violet-900">M</span>
              <span className="text-violet-800">O</span>
              <span className="text-violet-700">N</span>
              <span className="text-violet-600">E</span>
              <span className="text-violet-500">Y</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-8 text-gray-300 dark:text-gray-300">
            Join us on an exciting journey today.
          </p>
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <a href="https://mecha-works-worker-frontend.vercel.app/" target="_blank"><HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-violet-700 text-white dark:text-white flex items-center space-x-2 px-4 py-2 text-sm sm:text-base"
            >
              <span>Earn More!</span>
            </HoverBorderGradient></a>
          </div>
        </div>
      </div>
      
      {/* Right Content - Shows second on mobile */}
      <div className="w-full mt-10 md:w-1/2 max-w-[700px] mb-8 md:mb-0 order-2 md:order-2 transform translate-y-0 md:translate-y-[20px] transition-transform duration-300">
        <Globe />
      </div>
    </div>
  );
}

export default Hero;
