import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-3 px-3 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex right-4 items-center gap-[2px]">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Pegasis logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">MechaWorks</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-6 list-none">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Info</Link>
          </li>
          <li>
            <Link href="#">Worker info</Link>
          </li>
          <li>
            <Link href="#">Business info</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex left-4 items-center gap-4">
        <a href="http://localhost:3002/" target="_blank">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-violet-700 text-white dark:text-white flex items-center space-x-2"
          >
            <ArrowRight />
            <span>Worker</span>
          </HoverBorderGradient>
        </a>
        <a href="http://localhost:3001/" target="_blank">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <ArrowRight />
            <span>Business</span>
          </HoverBorderGradient>
        </a>
      </aside>
    </header>
  );
};

export default Navbar;
