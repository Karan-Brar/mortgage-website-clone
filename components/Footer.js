import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-2 py-2 bg-slate-50 sm:py-4 sm:px-4 font-franklin">
      <Link href="/" className="">
        <p className="text-lg font-bold">Sky Mortgages</p>
      </Link>

      <Link
        className="flex items-center justify-center text-lg font-franklin text-gray-650"
        href="https://www.webcraft.ca/"
      >
        Made by Webcraft
      </Link>
    </div>
  );
};

export default Footer;
