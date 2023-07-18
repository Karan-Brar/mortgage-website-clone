import { useState } from "react";
import Image from "next/image";

const questions = [
  "What mortgage options are available to you?",
  "How much can you borrow?",
  "What are the current interest rates?",
];

const answers = [
  "We have access to a wide range of mortgage options from various lenders. We can provide you with information and guidance on different mortgage types such as fixed-rate mortgages, adjustable-rate mortgages, FHA loans, VA loans, jumbo loans, and more. We will assess your specific financial situation and goals to recommend the most suitable mortgage options tailored to your needs.",
  "We will evaluate your financial profile, including your income, credit history, and debt-to-income ratio, to determine your borrowing capacity. We have a deep understanding of lenders' criteria and can help you navigate through the qualification process. We will work with you to explore different loan scenarios and provide a clear picture of the maximum loan amount you can secure, empowering you to make informed decisions about your home purchase.",
  "We stay up-to-date with the latest market trends and interest rate fluctuations. We have access to real-time information on interest rates from multiple lenders. We will keep you informed about the current interest rates and help you understand how they impact your mortgage options. Whether the rates are rising, falling, or stabilizing, we will provide guidance on when to lock in a favorable rate to optimize your mortgage terms and potentially save you money over the long term.",
];

const images = ["couple-home.jpg", "advice.jpg", "interest-rates.jpg"];

const MortgageWiki = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleClick = () => {
    setTimeout(() => {
      setCurrentTextIndex(
        prevIndex => (prevIndex + 1) % questions.length
      );
    }, 500);

    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  };

  return (
    <section className="font-franklin bg-slate-50" id="q-a">
      <h1 className="py-8 mx-auto font-bold w-fit heading">
        We've got Answers
      </h1>
      <div className="w-4/5 mx-auto rounded-md lg:w-2/5 bg-slate-100">
        <Image
          src={`/assets/images/${images[currentTextIndex]}`}
          alt="Buying a home"
          width={700}
          height={700}
          quality={75}
        />
        <div
          className={`flex flex-col items-center ease-in duration-300 ${fadeIn ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="px-10 py-5 text-lg font-semibold">
            {questions[currentTextIndex]}
          </div>
          <div className="px-10 pb-10 text-md">
            {answers[currentTextIndex]}
          </div>
        </div>
      </div>

      <div
        className="flex justify-center mt-6 cursor-pointer animate-bounce animate-soundcoun "
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

export default MortgageWiki;
