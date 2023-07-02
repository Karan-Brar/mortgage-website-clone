import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DropDown from "./NavigationBarParts/DropDown";

export default function NavigationBar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    // Desktop Nav
    <nav className="w-full p-3 flex flex-between justify-between sm:px-7 font-franklin">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <Image
          src="/assets/images/main-logo.png"
          alt="Main Logo"
          width={50}
          height={50}
          className="object-contain logo_img self-center"
        /> */}
        <p className="text-lg font-bold self-center">Sky Mortgages</p>
      </Link>
      {/* Desktop Nav */}
      <DropDown/>

      {/* Mobile Nav */}
      <div className="relative flex sm:hidden z-10 self-center">
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
};
