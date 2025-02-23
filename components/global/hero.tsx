import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Globe } from "../data/globe";
import { WavyBackground } from "../ui/wavy-background";

export function Hero() {
  return (
    <div className=" w-auto h-autp flex items-center justify-around">
      {/* left Content */}
      <div>
        <div className=" flex flex-col p-10 ">
          <h1 className="text-7xl font-bold flex flex-col gap-8">
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
          <p className="text-lg lg:text-xl mt-8 text-gray-300 dark:text-gray-300">
            Join us on an exciting journey today.
          </p>
          <div className=" mt-10">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-violet-700 text-white dark:text-white flex items-center space-x-2"
            >
              <span>Earn More!</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
      {/* Right Content */}
      <div className=" w-[700px] mt-20">
        <Globe />
      </div>
    </div>
  );
}

export default Hero;

/* 65ef10226bbd1609bb9c2996_astrosight 1 */
