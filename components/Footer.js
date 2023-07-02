import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-2 py-2 bg-white sm:py-4 sm:px-4 font-franklin">
      <Link href="/" className="">
        <p className="text-lg font-bold">Sky Mortgages</p>
      </Link>

      <div className="flex items-center justify-center text-md font-franklin text-gray-950">
        <a href="https://www.webcraft.ca/">&copy; WebCraft LLC 2023</a>
      </div>
    </div>
  );
};

export default Footer;
