"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  "A fairly stress-free process. Their guidance in navigating the mortgage market was invaluable. Grateful for their support",
  "Flexible solutions saved me money. Went above and beyond to meet my financial goals. Highly satisfied!",
  "Transparent communication and timely updates gave me peace of mind. Trustworthy and reliable. Highly recommended",
];

const clientNames = [
    "John Doe",
    "David Letterman",
    "Mellisa Rye"
]

const Testimonials = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const textRef = useRef(null); 
    const clientRef = useRef(null);

      const handleClick = () => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      };

  return (
    <div className="font-franklin bg-blue-100">
      <h1 className="font-bold w-fit mx-auto py-10 heading">
        Customer Reviews
      </h1>
      <div className="sm:w-4/5 lg:w-2/5 w-5/6 bg-slate-50 mx-auto sm:rounded-full rounded-lg">
        <div className="w-5/6 mx-auto py-5 sm:text-xl text-lg" ref={textRef}>
        "{testimonials[currentTextIndex]}"
        </div>
        <div className="w-fit mx-auto text-lg pb-5" ref={clientRef}>
          <span className="text-red-100">- </span>
          {clientNames[currentTextIndex]}
        </div>
      </div>
      <div
        className="animate-bounce flex justify-center mt-10 cursor-pointer"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
