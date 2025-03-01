"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Post Data Labeling Tasks for Your Business",
    description:
      "Welcome to a platform where your business needs meet skilled workers. As a business owner, you can post data-labeling tasks tailored to your specific requirements. Whether you're a startup, enterprise, or research organization, our platform provides you with a secure, efficient, and cost-effective way to get your data labeled by workers worldwide. All you need is clear instructions and quality standards to ensure you receive the accurate results your business demands.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-900 to-violet-800 rounded-xl shadow-2xl overflow-hidden border border-violet-500/30">
        <div className="relative h-full flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-violet-300">Post Tasks</h3>
            <p className="text-sm bg-black/30 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Get your data labeled by global talent</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Global Workforce, Quality Results",
    description:
      "Access a diverse pool of skilled workers from around the world. Our platform connects your business with dedicated individuals ready to tackle your data labeling needs. Whether you need image annotation, text categorization, or data classification—our workers deliver quality results from various global locations. With our platform, you can scale your data processing needs without the overhead of hiring full-time staff.",
    content: (
      <div className="h-full w-full rounded-xl overflow-hidden shadow-2xl group">
        <div className="relative w-full h-full transform transition-all duration-500 group-hover:scale-105">
          <Image
            src="/ds-main.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="ds-main"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-center">
            <div className="text-center p-6 transform transition-all duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-2xl font-bold mb-3 text-white">Global Talent</h3>
              <p className="text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block">Access workers worldwide, anytime</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Pay with Cryptocurrency",
    description:
      "Simplify your payment process with cryptocurrency transactions! For every completed task, you pay workers directly using cryptocurrency. Whether it's Bitcoin, Ethereum, or another supported crypto, your payments are processed securely and transparently. This eliminates international payment barriers and reduces transaction fees compared to traditional banking methods. With crypto payments, you can efficiently manage micro-payments for individual tasks while maintaining complete financial transparency.",
    content: (
      <div className="h-full w-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/crypto-pattern.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative h-full flex items-center justify-center p-6">
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Crypto Payments</h3>
            <p className="text-sm bg-black/20 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Efficient, global, and transparent transactions</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Streamlined Task Management",
    description:
      "Our platform is designed to make posting and managing tasks effortless. Create detailed task specifications with clear instructions and examples to ensure workers understand your requirements. Set fair pricing based on task complexity and monitor progress in real-time. Our quality control system allows you to review submissions, provide feedback, and approve work that meets your standards. This streamlined process ensures you receive high-quality labeled data while maintaining complete control over your projects.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/flow-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Easy Management</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Post, track, and approve tasks efficiently</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Powerful Analytics and Insights",
    description:
      "Gain valuable insights from comprehensive analytics dashboards that track your project's progress and performance. Monitor completion rates, quality scores, and worker efficiency to optimize your data labeling strategy. Our platform provides detailed reports on task completion times, accuracy metrics, and cost analysis to help you make data-driven decisions. These powerful insights allow you to refine your instructions, identify bottlenecks, and maximize the return on your investment.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-700 to-fuchsia-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/data-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:scale-105">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Data Insights</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Comprehensive analytics for informed decisions</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Scale Your Data Processing",
    description:
      "Whether you need 100 or 100,000 items labeled, our platform scales to meet your business requirements. Distribute large datasets across multiple workers to accelerate completion times without sacrificing quality. Our flexible system allows you to adjust your workforce size based on project urgency and budget constraints. With our scalable solution, you can handle data processing needs of any size while maintaining consistent quality standards.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/scale-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:translate-y-[-8px]">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Scalable Solutions</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Handle projects of any size efficiently</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Start Posting Tasks Today",
    description:
      "Take the first step toward efficient data labeling for your business. Creating an account is quick and straightforward—simply register, set up your business profile, and start posting tasks. Whether you need data labeled for machine learning, content moderation, or market research, our platform connects you with skilled workers ready to deliver quality results that drive your business forward.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-2xl overflow-hidden">
        <div className="h-full flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 bg-[url('/start-pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 transform transition-all duration-300 hover:scale-110">
            <div className="mb-4 mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Get Started</h3>
            <p className="text-sm bg-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">Simple setup, immediate access to workers</p>
          </div>
        </div>
      </div>
    ),
  },
];
export function Client() {
  return (
    <div className="p-10 scroll-smooth">
      <StickyScroll content={content} />
    </div>
  );
}

//
