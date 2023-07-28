import { useState } from "react";

const testimonials = [
  "A fairly stress-free process. Their guidance in navigating the mortgage market was invaluable. Grateful for their support",
  "Flexible solutions saved me money. Went above and beyond to meet my financial goals. Highly satisfied!",
  "Transparent communication and timely updates gave me peace of mind. Trustworthy and reliable. Highly recommended",
];

const clientNames = ["Jean Paul", "Ramandeep Singh", "Neil Santos"];

const Testimonials = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setCurrentTextIndex(
        prevIndex => (prevIndex + 1) % testimonials.length
      );
    }, 500);

    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  };

  return (
    <section
      className="bg-blue-100 font-franklin flex flex-col justify-center duration-1000 transition-all"
      id="customer-reviews"
    >
      <h1 className="py-10 mx-auto font-bold w-fit heading text-white">
        Customer Reviews
      </h1>
      <div className="w-4/5 mx-auto rounded-md lg:w-2/5 bg-slate-50">
        <div
          className={`flex flex-col items-center justify-center  ease-in duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-5 sm:text-2xl text-lg font-semibold">
            "{testimonials[currentTextIndex]}"
          </div>
          <div className="pb-5 sm:text-2xl text-md">
            - {clientNames[currentTextIndex]}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center mt-10 cursor-pointer animate-bounce text-white"
        onClick={() => {
          setFadeIn(false);
          handleClick();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-20 h-20 stroke-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </section>
  );
};
export default Testimonials;
