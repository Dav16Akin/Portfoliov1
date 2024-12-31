"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { linksData } from "@/constants/data";
import { ModeToggle } from "./ModeToggle";
import { Button } from "../ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <Popover
        className={`${
          scrollPosition > 0 ? "shadow bg-opacity-100 transition-all duration-100 dark:bg-black bg-white " : "shadow-none"
        } flex items-center w-full fixed z-50 px-8 py-4 justify-between`}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12">
            <Image src="/assets/pic.jpg" alt="david's picture" height={45} width={45} className="object-cover rounded-full w-12 h-12"/>
          </div>
          <Link href="/">
            <h1>DAVID_AKIN.</h1>
          </Link>
        </div>

        <div className="flex max-sm:hidden items-center gap-8">
          <div className="flex items-center gap-8 font-normal">
            {linksData.map((data) => (
              <div key={data.label}>
                <Link href={data.link}>{data.label}</Link>
              </div>
            ))}
          </div>

          <Link href="mailto:akindav16@gmail.com">
            <Button className="dark:text-white text-black">Contact me</Button>
          </Link>

          <div>{typeof window !== "undefined" && <ModeToggle />}</div>
        </div>
      </Popover>
    </>
  );
};

export default Navbar;
