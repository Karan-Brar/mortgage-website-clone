import React from 'react'

const OurTeam = () => {
  return (
    <div className="relative bg-slate-50 w-full min-h-screen flex flex-col items-center justify-start gap-2 text-center text-[2rem] text-black font-libre-franklin sm:flex-col sm:items-center sm:justify-start pt-24" id="team-section">

      <div className="overflow-hidden flex flex-row py-[1.25rem] px-[2.75rem] items-center justify-center gap-4">
        <div className="relative">Meet Our Team</div>
      </div>
      <div className="flex flex-col items-center justify-between text-[1.5rem]">
        <div className="intro-card">
          <img
            className="w-4/6 xl:w-2/5"
            alt="Armaan Brar"
            src="/assets/images/armaan-brar.jpg"
          />
          <div className="intro-text">
            <b className="intro-name">Armaan Brar</b>
            <div className="intro-about">
              <p className="m-0">
                Armaan has always believed in a customer-first approach and is
                passionate about educating his clients on their mortgage
                options. Armaan like’s to work with first-time home buyers or
                new investors and expertly guides them through this competitive
                real estate market. He believes in transparency and helping
                clients make one of their biggest decisions in life.
              </p>
              <p>
                In his free time, Armaan likes to watch Sci-fi movies and
                documentaries. And also, plays professional Cricket in a local
                club!
              </p>
            </div>
          </div>
        </div>



        <div className="intro-card">
          <img
            className="intro-image"
            alt="Tracy Spooner"
            src="/assets/images/tracy-spooner.png"
          />
          <div className="intro-text">
            <b className="intro-name">Tracy Spooner</b>
            <div className="intro-about">
              <p>
                Tracy Spooner has been an Accredited Mortgage Professional in
                Winnipeg, MB since 2009. Tracy began her career at a local
                brokerage and branched off on her own in 2016 to open The
                Spooner Group.
              </p>
              <p>
                In Tracy’s free time, she enjoys spending time with her husband,
                3 daughters, 1 very spoiled grandson and a few pets. Tracy has
                recently rehabilitated 2 off-the-track racehorses and trains
                with her jumping coach several times a week.
              </p>
            </div>
          </div>
        </div>
        <div className="intro-card">
          <img
            className="intro-image"
            alt="Taylor Spooner"
            src="/assets/images/taylor-spooner.jpg"
          />
          <div className="intro-text">
            <b className="intro-title">Taylor Spooner</b>
            <div className="intro-about">
              <p >
                Taylor Spooner has achieved a lot in her first six years in the
                mortgage industry. She takes pride in being very detail-oriented
                and providing clients with honest, ethical advice. Taylor
                believes understanding each client’s long-term dreams and goals
                is of the utmost importance when planning to supply the best
                advice for today, in five years, and further into the future.
              </p>
              <p>
                Taylor is a proud momma to her son Kyngston, an avid dog lover
                with three dogs of her own, and everyone who knows her will
                agree she should have an organization blog!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam