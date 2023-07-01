import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full bg-slate-50 sm:flex font-franklin">
      <div className="sm:w-1/2 flex-col">
        <h1 className="font-bold sm:text-5xl text-3xl w-4/5 mx-auto my-16">
          Saving You Money at Every Step.
        </h1>

        <div className="flex-col w-5/6 mx-auto my-24">
          <div className="mark-point">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="mark-text">Quick Approval on your mortgage</span>
          </div>

          <div className="mark-point">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="mark-text">Your mortgage will close on time</span>
          </div>

          <div className="mark-point">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </span>
            <span className="mark-text">
              Efficent and Transparent Communication
            </span>
          </div>
        </div>

        <div className='w-4/5 mx-auto'>
          <div className="flex justify-center w-3/5 mx-auto bg-blue-200 rounded-lg sm:mx-0 h-14 sm:mb-36 hover:cursor-pointer">
            <div className="text-2xl font-bold text-white place-self-center">
              Get In touch
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 bg-blue-100">
        {/* <div className="sm:mt-28">
              <Image
              src="/assets/images/happy-couple.jpg"
              alt="happy-couple"
              width={1200}
              height={120}
            />
            </div> */}
      </div>
    </div>
  );
}

export default HeroSection