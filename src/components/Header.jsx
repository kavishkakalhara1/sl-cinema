import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold ">SL</span>
          <span className="hidden px-2 py-1 text-2xl font-bold rounded-lg sm:inline bg-amber-500">
            CINEMA
          </span>
        </Link>
      </div>
    </div>
  );
}
