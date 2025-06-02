"use client";
import { links } from "@/constants/AppData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [MenuOpen, setMenuOpen] = useState(false);
  // console.log(pathname)
  return (
    <>
      <div className="bg-white shadow-lg h-16 flex justify-between items-center px-5 ">
        <Link href="/" className="font-bold text-blue-950 text-2xl pl-5 md:pl-0">
          Rent Your Ride
        </Link>
        <div
          className="md:hidden flex flex-col gap-1 pr-5"
          onClick={() => setMenuOpen(!MenuOpen)}
        >
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </div>
        <div
          className={`${
            MenuOpen ? "flex flex-col absolute  w-full " : "hidden md:flex"
          } gap-5  md:flex-row  md:static top-18 bg-white md:w-auto text-center`}
        >
          {links.map((e) => (
            <div key={e.link}>
              <Link
                className={`${
                  pathname === e.link ? "text-blue-900" : "text-gray-400"
                }`}
                href={e.link}
              >
                <span>{e.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
