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
  const [fadeIn, setFadeIn] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

    }, 500);
    setTimeout(() => {
      setFadeIn(true);
    }, 500)


  };


  //opacity-0
  return (
    <div className="bg-blue-100 font-franklin">
      <h1 className="py-10 mx-auto text-3xl font-bold sm:text-5xl w-fit">
        Customer Reviews
      </h1>
      <div className="sm:w-2/5 bg-slate-50 mx-auto sm:rounded-full">
        <div className="w-4/6 mx-auto py-5 text-xl" ref={textRef}>
        "{testimonials[currentTextIndex]}"
        </div>
        <div className="w-fit mx-auto text-lg pb-5" ref={clientRef}>
          <span className="text-red-100">- </span>
          {clientNames[currentTextIndex]}
        </div>
      </div>

      <div
        className="flex justify-center mt-10 cursor-pointer animate-bounce animate-soundcoun "
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
    </div >
  );
};

export default Testimonials;
