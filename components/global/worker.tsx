"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Earn Crypto by Labeling Data",
    description:
      "Welcome to a platform where your skills meet opportunity. As a worker, you can earn cryptocurrency by participating in data-labeling tasks tailored to your expertise. Whether you're a student, freelancer, or someone looking to generate income online, our platform provides you with a secure, flexible, and rewarding way to contribute to exciting projects from businesses worldwide. All you need is attention to detail and a willingness to meet the quality standards set by the task requirements.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/crypto-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:scale-105">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Earn Crypto</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Label data and get paid in cryptocurrency</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Flexible Work, Global Reach",
    description:
      "Work at your convenience, from anywhere in the world. Our platform allows you to choose tasks that match your interests and skill level. You can label images, annotate text, or categorize data—all from the comfort of your home. With no strict schedules or office requirements, you're in complete control of your work-life balance.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/globe-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Work Anywhere</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Choose your hours, work globally</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Get Paid in Cryptocurrency",
    description:
      "Say hello to instant and transparent payments! For every task you complete, you earn micro-payments in cryptocurrency. Whether it's Bitcoin, Ethereum, or another supported crypto, your earnings are deposited directly into your account as soon as your work is reviewed and approved. This ensures you get rewarded for your efforts promptly, without the delays and complications of traditional banking. With crypto payments, you also have the flexibility to convert your earnings or save them as an investment.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/bitcoin-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:rotate-3">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Crypto Payments</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Fast, secure, and transparent rewards</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Simple and Rewarding Process",
    description:
      "Our platform is designed to make your experience as a worker seamless and enjoyable. Once you sign up, you can explore a variety of tasks posted by businesses. Each task includes clear instructions and specific requirements, ensuring you know exactly what to do. As you complete tasks accurately, you not only earn crypto but also build your reputation on the platform. Higher ratings open doors to better-paying and more complex tasks, allowing you to grow and earn more over time.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/process-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:scale-110">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Easy Process</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Clear instructions, immediate feedback</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Grow Your Skills and Unlock Opportunities",
    description:
      "Every task you complete is a chance to learn something new and refine your skills. From understanding data-labeling techniques to mastering attention to detail, you gain valuable experience that can benefit you in other areas of life. Our platform also encourages workers to aim for accuracy and consistency, which helps improve their standing in the community. As you perform better, you gain access to exclusive tasks and higher rewards, ensuring your growth is recognized and rewarded.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/growth-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Skill Growth</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Learn while earning, unlock better opportunities</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Join a Community of Earners",
    description:
      "By joining our platform, you become part of a vibrant, global community of workers. Collaborate with like-minded individuals, share tips, and celebrate milestones together. We value every worker's contribution and strive to create an environment that fosters trust, learning, and growth. No matter where you are in the world, you'll find support and encouragement to succeed.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-600 to-rose-500 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/community-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:scale-105">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Global Community</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Connect, collaborate, and grow together</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Start Earning Today",
    description:
      "Take the first step toward earning cryptocurrency while contributing to meaningful projects. Signing up is quick and easy—simply create an account, complete your profile, and start exploring tasks. Whether you're looking for a side hustle or a steady income stream, our platform offers endless opportunities to achieve your goals.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/start-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Begin Now</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Simple signup, immediate opportunities</p>
          </div>
        </div>
      </div>
    ),
  },
];
export function Worker() {
  return (
    <div className="p-10 scroll-smooth">
      <StickyScroll content={content} />
    </div>
  );
}

// 