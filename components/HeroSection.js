import Image from "next/image";
import { useRef, useEffect } from "react";
import anime from "animejs";

const HeroSection = () => {
      const topDivRef = useRef(null);
      const bottomDivRef = useRef(null);

      useEffect(() => {
        const topDiv = topDivRef.current;
        const bottomDiv = bottomDivRef.current;

        const animation = anime.timeline({ duration: 500 });

        animation
          .add({
            targets: topDiv,
            translateX: ["-100%", 0],
            easing: "easeInOutSine",
          })
          .add({
            targets: bottomDiv,
            translateX: ["100%", 0],
            easing: "easeInOutSine",
          });
      }, []);
 const handleScroll = () => {
    	const targetElement = document.getElementById("contact-section");
        targetElement.scrollIntoView({ behavior: "smooth" });
 }

  return (
    <div className="w-full bg-slate-50 sm:flex font-franklin">
      <div className="sm:w-1/2 flex-col">
        <h1 className="font-bold lg:text-5xl text-3xl w-4/5 mx-auto pt-20">
          Saving You Money at Every Step.
        </h1>

        <div className="flex-col w-5/6 mx-auto my-20">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <span className="mark-text">Based in Winnipeg</span>
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

        <div className="w-4/5 mx-auto">
          <div
            className="w-3/5 sm:mx-0 mx-auto h-14 bg-blue-200 rounded-lg flex justify-center sm:mb-36 hover:cursor-pointer"
            onClick={handleScroll}
          >
            <div className="text-2xl font-bold text-slate-100 place-self-center">
              Get In touch
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 w-full bg-blue-100 mt-10 sm:mt-0 sm:py-10 py-32 relative flex justify-center items-center overflow-hidden">
        <div
          ref={topDivRef}
          className="w-20 h-20 rounded-full absolute lg:top-3 top-7 -left-9 bg-blue-200"
        ></div>
        <Image
          src="/assets/images/happy-future.jpg"
          alt="Happy Future"
          width={1400}
          height={1400}
        />
        <div
          ref={bottomDivRef}
          className="w-20 h-20 rounded-full absolute lg:bottom-3 bottom-7 -right-9 bg-red-100"
        ></div>
      </div>
    </div>
  );
}

export default HeroSection