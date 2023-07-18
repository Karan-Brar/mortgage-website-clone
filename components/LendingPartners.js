import React from "react";
import Image from "next/image";

const LendingPartners = () => {
  return (
    <div className="font-franklin bg-slate-50">
      <h1 className="pt-10 mx-auto font-bold w-fit heading !text-2xl">
        Various Lending Partners
      </h1>
      <div className="grid grid-cols-2 grid-rows-3 pb-5 mt-10 gap-y-12 sm:gap-x-0 gap-x-2 sm:grid-cols-3 sm:grid-rows-2 sm:mt-12">
        <div>
          <Image
            src="/assets/images/home-trust.png"
            alt="Home Trust Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden mt-5 partner-logo sm:block"
          />
          <Image
            src="/assets/images/home-trust.png"
            alt="Home Trust Logo"
            width={120}
            height={120}
            quality={75}
            className="partner-logo sm:hidden"
          />
        </div>

        <div>
          <Image
            src="/assets/images/first-national.png"
            alt="First National Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden mt-5 partner-logo sm:block"
          />
          <Image
            src="/assets/images/first-national.png"
            alt="First National Logo"
            width={120}
            height={120}
            quality={75}
            className="partner-logo sm:hidden"
          />
        </div>

        <div>
          <Image
            src="/assets/images/scotiabank.png"
            alt="Scotiabank Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden partner-logo sm:block"
          />
          <Image
            src="/assets/images/scotiabank.png"
            alt="Scotiabank Logo"
            width={120}
            quality={75}
            height={120}
            className="partner-logo sm:hidden"
          />
        </div>

        <div>
          <Image
            src="/assets/images/cmls.png"
            alt="CMLS Financial Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden mt-3 partner-logo sm:block"
          />
          <Image
            src="/assets/images/cmls.png"
            alt="CMLS Financial Logo"
            width={160}
            height={160}
            quality={75}
            className="mt-3 partner-logo sm:hidden"
          />
        </div>

        <div>
          <Image
            src="/assets/images/rfa.png"
            alt="RFA Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden partner-logo sm:block"
          />
          <Image
            src="/assets/images/rfa.png"
            alt="RFA Logo"
            width={120}
            height={120}
            quality={75}
            className="partner-logo sm:hidden"
          />
        </div>

        <div>
          <Image
            src="/assets/images/marathon-mortgages.png"
            alt="Marathon Mortgages Logo"
            width={160}
            height={160}
            quality={75}
            className="hidden partner-logo sm:block"
          />
          <Image
            src="/assets/images/marathon-mortgages.png"
            alt="Marathon Mortgages Logo"
            width={120}
            height={120}
            quality={75}
            className="partner-logo sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default LendingPartners;
