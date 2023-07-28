import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between w-full px-5 py-10 bg-slate-200 sm:py-10 sm:px-12 font-franklin drop-shadow-lg">
      <div>
        <Link href="/" className="">
          <Image
            src="/assets/images/logo-main-2.svg"
            alt="Main Logo"
            width={150}
            height={150}
            className="hidden sm:block"
          />
          <Image
            src="/assets/images/mortgage-fox-text-4.png"
            alt="Main Logo"
            width={130}
            height={130}
            className="sm:hidden"
          />
        </Link>
        <div className="font-franklin mt-3 font-semibold text-sm sm:text-lg">
          (431) 997-1277
        </div>
        <div className="font-franklin font-semibold text-sm sm:text-lg">
          armaan.mortgage@gmail.com
        </div>
        <div className="font-franklin font-semibold text-sm sm:text-lg">
          278 Marion St, Winnipeg, MB R2H 0T7
        </div>

        <div className="flex flex-row mt-4">
          <Link
            href="https://instagram.com/mortgagesbyarmaan?igshid=MTIzZWMxMTBkOA=="
            className="mr-4"
          >
            <Image
              priority
              quality={100}
              width={30}
              height={30}
              src="/assets/icon/instagram.png"
              className="h-fit w-fit"
            />
          </Link>

          <Link
            href="https://www.facebook.com/armaanpreetbrarmortgage?mibextid=LQQJ4d"
            className=""
          >
            <Image
              priority
              quality={30}
              width={30}
              height={30}
              src="/assets/icon/facebook.png"
            />
          </Link>
        </div>
      </div>

      <Link
        className="flex items-end justify-center text-sm sm:text-lg font-franklin text-gray-650 hover:font-bold"
        href="https://www.webcraft.ca/"
      >
        Made by Webcraft
      </Link>
    </div>
  );
};

export default Footer;
