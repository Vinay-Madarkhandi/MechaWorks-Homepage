import Image from "next/image";
import Navbar from "@/components/global/navbar";
import { Hero } from "@/components/global/hero";
import { Worker } from "@/components/global/worker";
import { Contents } from "@/components/global/contents";
import { Client } from "@/components/global/client";
import Footer from "@/components/global/footer";

export default function Home() {
  return (
    <main className=" max-xl:hidden ">
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Contents />
      </section>
      <section>
        <h1 className="text-center mt-20 text-7xl">
          <span className="text-violet-900">W</span>
          <span className="text-violet-800">o</span>
          <span className="text-violet-700">r</span>
          <span className="text-violet-600">k</span>
          <span className="text-violet-500">e</span>
          <span className="text-violet-400">r</span>
          <span> </span>
          Side Info
        </h1>
        <Worker />
      </section>
      <section>
        <h1 className="text-center mt-20 text-7xl">
          <span className="text-violet-900">C</span>
          <span className="text-violet-800">l</span>
          <span className="text-violet-700">i</span>
          <span className="text-violet-600">e</span>
          <span className="text-violet-500">n</span>
          <span className="text-violet-400">t</span>
          <span> </span>
          Side Info
        </h1>
        <Client />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
