"use client";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
