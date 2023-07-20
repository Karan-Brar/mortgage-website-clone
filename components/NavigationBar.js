import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DropDown from "./NavigationBarParts/DropDown";

import PhoneDropDown from "./NavigationBarParts/PhoneDropDown";

export default function NavigationBar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [phoneDropdown, setPhoneDropDown] = useState(false);
  return (
    // Desktop Nav
    <div className="sticky top-0 z-10">
      <nav className="flex justify-between w-full p-3 flex-between sm:px-12 sm:py-5 font-franklin bg-slate-50 sticky top-0 z-10 drop-shadow-lg">
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
        </Link>

        <div className="flex flex-row">
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

          <div className="relative z-10 flex self-center ml-5 cursor-pointer">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                color="#007FFF"
                className="bi bi-telephone-fill color-blue"
                viewBox="0 0 16 16"
                onClick={() => setPhoneDropDown((prev) => !prev)}
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>

              {phoneDropdown && (
                <PhoneDropDown
                  onClick={() => setToggleDropdown(false)}
                />
              )}
            </div>
          </div>
          {/* <span className="p-3 flex text-lg text-blue-200 font-bold items-center w-fit rounded-lg ml-5 hidden sm:block justify-center">
            (431) 997-1277
          </span> */}
        </div>
      </nav>
    </div>
  );
}
