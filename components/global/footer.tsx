"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-[#0D0D0D] text-gray-300 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="Pegasis logo"
              className="rounded-lg shadow-sm w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
            />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">MechaWorks</p>
          </a>
          <div className="text-base sm:text-lg">
            Engage • <span className="text-purple-600">Grow</span> • Succeed
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16">
          <div>
            <div className="text-white font-semibold mb-3 sm:mb-4">For Workers</div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Tasks
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Users Center
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Communities
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Payout
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-3 sm:mb-4">For Business</div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Create Task
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Payment
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Communities
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Insight
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
            <div className="text-white font-semibold mb-3 sm:mb-4">Contact Us</div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Mail
              </a>
              <a
                href="#"
                className="text-sm sm:text-base hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <div>@MechaWorks 2024-2025</div>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
