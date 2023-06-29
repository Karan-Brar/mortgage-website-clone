import React from 'react'
import Image from 'next/image';

const LendingPartners = () => {
  return (
    <div className="font-franklin bg-slate-50">
      <h1 className="font-bold sm:text-5xl text-3xl w-fit mx-auto mt-12">
        Various Lending Partners
      </h1>
      <div className="grid gap-y-12 sm:gap-x-0 gap-x-2 sm:grid-cols-3 grid-cols-2 sm:grid-rows-2 grid-rows-3 mt-16">
        <div>
          <Image
            src="/assets/images/home-trust.png"
            alt="Home Trust Logo"
            width={160}
            height={160}
            className="partner-logo"
          />
        </div>

        <div>
          <Image
            src="/assets/images/first-national.png"
            alt="First National Logo"
            width={160}
            height={160}
            className="partner-logo mt-5"
          />
        </div>

        <div>
          <Image
            src="/assets/images/scotiabank.png"
            alt="Scotiabank Logo"
            width={160}
            height={160}
            className="partner-logo"
          />
        </div>

        <div>
          <Image
            src="/assets/images/cmls.png"
            alt="CMLS Financial Logo"
            width={160}
            height={160}
            className="partner-logo mt-3"
          />
        </div>

        <div>
          <Image
            src="/assets/images/rfa.png"
            alt="RFA Logo"
            width={160}
            height={160}
            className="partner-logo"
          />
        </div>

        <div>
          <Image
            src="/assets/images/marathon-mortgages.png"
            alt="Marathon Mortgages Logo"
            width={160}
            height={160}
            className="partner-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default LendingPartners