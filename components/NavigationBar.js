import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DropDown from "./NavigationBarParts/DropDown";

export default function NavigationBar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    // Desktop Nav
    <nav className="flex justify-between w-full p-3 flex-between sm:px-12 sm:py-5 font-franklin bg-slate-50 lg:sticky lg:top-0 z-10 drop-shadow-lg">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/mortgage-fox-text-4.png"
          alt="Main Logo"
          width={250}
          height={250}
          className="hidden sm:block"
        />
        <Image
          src="/assets/images/mortgage-fox-text-4.png"
          alt="Main Logo"
          width={200}
          height={200}
          className="sm:hidden"
        />
        {/* <p className="self-center text-lg font-bold">Sky Mortgages</p> */}
      </Link>
      {/* Desktop Nav */}
      <DropDown />

      {/* Mobile Nav */}
      <div className="relative z-10 flex self-center lg:hidden">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {toggleDropdown && (
            <DropDown
              desktopMode={false}
              onClick={() => setToggleDropdown(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
