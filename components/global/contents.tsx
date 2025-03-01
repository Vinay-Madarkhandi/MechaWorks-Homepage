import React from "react";
import Image from "next/image";

export const Contents = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-12 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-violet-900/20 to-transparent p-4 sm:p-6 rounded-xl border border-violet-900/20 backdrop-blur-sm">
        <div className="inline-block px-3 sm:px-4 py-1 bg-violet-700 text-white text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
          For Users
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Unlock Earnings</h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold"><span className="text-violet-500">$</span>100 +</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Rewards</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">10K +</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">User Community</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">50K +</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Campaigns</div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col items-center bg-black/30 p-3 sm:p-4 rounded-lg">
            <div className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Learn</div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/bx1-1.png"
                width={100}
                height={100}
                alt="Learn Img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-black/30 p-3 sm:p-4 rounded-lg">
            <div className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Engage</div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="/bx1-2.png"
                width={100}
                height={100}
                alt="Engage Img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-black/30 p-3 sm:p-4 rounded-lg xs:col-span-2 sm:col-span-1">
            <div className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Earn</div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image 
                src="/bx1-3.png" 
                width={100} 
                height={100} 
                alt="Earn Img" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a 
            href="https://mecha-works-worker-frontend.vercel.app/" 
            target="_blank"
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
          >
            Start Earning Now
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 bg-gradient-to-br from-violet-900/20 to-transparent p-4 sm:p-6 rounded-xl border border-violet-900/20 backdrop-blur-sm">
        <div className="inline-block px-3 sm:px-4 py-1 bg-violet-700 text-white text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
          For Clients
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Drive Growth & Succeed</h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">10K +</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">70K +</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Completed Task</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">100 %</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Worth Your Money</div>
          </div>
        </div>
        <div className="mb-6 sm:mb-8 flex justify-center">
          <Image 
            src="/bx2-main.jpg" 
            height={200} 
            width={500} 
            alt="Client Services" 
            className="rounded-lg w-full max-w-md object-cover h-[150px] sm:h-[180px] md:h-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <a 
            href="https://mecha-works-user-frontend.vercel.app/" 
            target="_blank"
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
          >
            Create your Campaign
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contents;
