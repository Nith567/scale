import React from "react";

function MobileNav() {
  const [displayNav, setDisplayNav] = React.useState(false);
  return (
    <nav className="block relative lg:hidden">
      <button
        onClick={() => setDisplayNav(true)}
        className="flex flex-col gap-1"
      >
        <div className="h-0.5 w-6 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
        <div className="h-0.5 w-6 bg-white"></div>
      </button>
      {displayNav && (
        <div className="absolute bg-black rounded-xl overflow-hidden text-white text-xs flex flex-col gap-8 top-0 -right-[2.5vw] w-[95vw] z-[300] min-h-[40vh]">
          <div className="flex flex-col gap-4 px-5">
            <div className="flex flex-row text-neutral-400 items-center justify-between">
              <span>PRODUCTS</span>{" "}
              <div
                onClick={() => setDisplayNav(false)}
                className="flex items-center justify-center w-6 h-6 bg-neutral-600 rounded-full cursor-pointer"
              >
                <svg width="8" height="8" viewBox="0 0 12 12">
                  <rect
                    width="15.3125"
                    height="1.48871"
                    transform="matrix(0.701055 -0.713108 0.701055 0.713108 0 10.9385)"
                    fill="#fff"
                  ></rect>
                  <rect
                    width="15.3125"
                    height="1.48871"
                    transform="matrix(0.701055 0.713108 -0.701055 0.713108 1.26514 0)"
                    fill="#fff"
                  ></rect>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/engine.png"
                    className="h-[16px] w-[16px]"
                  />
                  Scale Data Engine
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/genai.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Generative AI
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/gov.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Government
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/automotive.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Automotive
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/donovan.png"
                    className="h-[16px] w-[16px]"
                  />
                  Scale Donovan
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/platform.png"
                    className="h-[16px] w-[16px]"
                  />
                  Scale GenAI Platform
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/evaluation.png"
                    className="h-[16px] w-[16px]"
                  />
                  Scale Evaluation
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/devs.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Model Developers
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/public.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Public Sector
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/enterprise.png"
                    className="h-[16px] w-[16px]"
                  />
                  For Enterprise
                </p>
              </div>
            </div>
          </div>

          {/* GOVERNMENT */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>GOVERNMENT</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/gov.png"
                    className="h-[16px] w-[16px]"
                  />
                  Defence Data Engine
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/public-sector.png"
                    className="h-[16px] w-[16px]"
                  />
                  Public Sector Generative AI
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/federal.png"
                    className="h-[16px] w-[16px]"
                  />
                  Federal
                </p>
              </div>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>RESOURCES</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/about.svg"
                    className="h-[16px] w-[16px]"
                  />
                  About
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/guides.svg"
                    className="h-[16px] w-[16px]"
                  />
                  Guides
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/careers.svg"
                    className="h-[16px] w-[16px]"
                  />
                  Careers
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/ai-readiness-report.svg"
                    className="h-[16px] w-[16px]"
                  />
                  AI Readiness Report 2024
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/blog.svg"
                    className="h-[16px] w-[16px]"
                  />
                  Blog
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/events.svg"
                    className="h-[16px] w-[16px]"
                  />
                  Events
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/documentation.svg"
                    className="h-[16px] w-[16px]"
                  />
                  Documentation
                </p>
              </div>
            </div>
          </div>

          {/* CUSTOMERS */}
          <div className="flex flex-col gap-4 px-5">
            <div className="flex text-neutral-400 flex-row items-center justify-between">
              <span>CUSTOMERS</span>{" "}
            </div>

            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/open-ai.png"
                    className="h-[16px] w-[16px]"
                  />
                  Open AI{" "}
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/toyota.png"
                    className="h-[16px] w-[16px]"
                  />
                  Toyota
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/flexport.png"
                    className="h-[16px] w-[16px]"
                  />
                  Flexport
                </p>
                <p className="flex flex-row items-center gap-3">
                  See All Customers
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/microsoft.png"
                    className="h-[16px] w-[16px]"
                  />
                  Microsoft
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/brex.png"
                    className="h-[16px] w-[16px]"
                  />
                  Brex
                </p>
                <p className="flex flex-row items-center gap-3">
                  <img
                    src="/public/nav/opensea.png"
                    className="h-[16px] w-[16px]"
                  />
                  OpenSea
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-3 flex flex-row items-center justify-evenly">
            <a
              className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
              href="/demo"
            >
              <div className="bookdemo new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-xs px-[20px] py-[9px]">
                Book a Demo
                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                  →
                </span>
              </div>
              <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
            </a>{" "}
            <button>Log In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNav;
