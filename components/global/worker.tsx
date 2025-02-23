"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Earn Crypto by Labeling Data",
    description:
      "Welcome to a platform where your skills meet opportunity. As a worker, you can earn cryptocurrency by participating in data-labeling tasks tailored to your expertise. Whether you're a student, freelancer, or someone looking to generate income online, our platform provides you with a secure, flexible, and rewarding way to contribute to exciting projects from businesses worldwide. All you need is attention to detail and a willingness to meet the quality standards set by the task requirements.",
    content: (
      <div className="h-full w-full bg-cyan-500 flex items-center justify-center text-white">
        Earn Cryptocurrency by Labeling Data with Precision
      </div>
    ),
  },
  {
    title: "Flexible Work, Global Reach",
    description:
      "Work at your convenience, from anywhere in the world. Our platform allows you to choose tasks that match your interests and skill level. You can label images, annotate text, or categorize data—all from the comfort of your home. With no strict schedules or office requirements, you’re in complete control of your work-life balance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ds-main.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="ds-main"
        />
      </div>
    ),
  },
  {
    title: "Get Paid in Cryptocurrency",
    description:
      "Say hello to instant and transparent payments! For every task you complete, you earn micro-payments in cryptocurrency. Whether it's Bitcoin, Ethereum, or another supported crypto, your earnings are deposited directly into your account as soon as your work is reviewed and approved. This ensures you get rewarded for your efforts promptly, without the delays and complications of traditional banking. With crypto payments, you also have the flexibility to convert your earnings or save them as an investment.",
    content: (
      <div className="h-full w-full bg-orange-500 flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Simple and Rewarding Process",
    description:
      "Our platform is designed to make your experience as a worker seamless and enjoyable. Once you sign up, you can explore a variety of tasks posted by businesses. Each task includes clear instructions and specific requirements, ensuring you know exactly what to do. As you complete tasks accurately, you not only earn crypto but also build your reputation on the platform. Higher ratings open doors to better-paying and more complex tasks, allowing you to grow and earn more over time.",
    content: (
      <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white">
        Simple and Rewarding Process
      </div>
    ),
  },
  {
    title: "Grow Your Skills and Unlock Opportunities",
    description:
      "Every task you complete is a chance to learn something new and refine your skills. From understanding data-labeling techniques to mastering attention to detail, you gain valuable experience that can benefit you in other areas of life. Our platform also encourages workers to aim for accuracy and consistency, which helps improve their standing in the community. As you perform better, you gain access to exclusive tasks and higher rewards, ensuring your growth is recognized and rewarded.",
    content: (
      <div className="h-full w-full bg-purple-500 flex items-center justify-center text-white">
        Simple and Rewarding Process
      </div>
    ),
  },
  {
    title: "Join a Community of Earners",
    description:
      "By joining our platform, you become part of a vibrant, global community of workers. Collaborate with like-minded individuals, share tips, and celebrate milestones together. We value every worker's contribution and strive to create an environment that fosters trust, learning, and growth. No matter where you are in the world, you’ll find support and encouragement to succeed.",
    content: (
      <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white">
        Simple and Rewarding Process
      </div>
    ),
  },
  {
    title: "Start Earning Today",
    description:
      "Take the first step toward earning cryptocurrency while contributing to meaningful projects. Signing up is quick and easy—simply create an account, complete your profile, and start exploring tasks. Whether you’re looking for a side hustle or a steady income stream, our platform offers endless opportunities to achieve your goals.",
    content: (
      <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white">
        Simple and Rewarding Process
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