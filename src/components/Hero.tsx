import React, { useState } from "react";

function Hero() {
  const [video, setVideo] = useState("");
  const youtube = {
    eric: "https://www.youtube.com/embed/Gn-9SRkJazs?si=Pldtl1MzEuBuv_3i",
  };
  return (
    <main>
      {video !== "" && (
        <div
          className="flex flex-col items-center justify-center h-screen w-full fixed top-0 left-0 z-[300000] bg-black/70"
          onClick={() => setVideo("")}
        >
          <div
            className="h-[80%] w-[90%] rounded-2xl bg-white/30 p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              style={{ height: "100%", width: "100%" }}
              className=" rounded-[0.5rem]"
              frameBorder={0}
              allowTransparency={true}
              src={youtube[video]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      )}
      <section className="relative flex flex-col items-center min-h-screen w-full">
        <p className="font-[300] pt-20 pb-4 text-[5rem] leading-none relative z-[200] text-center md:w-[60vw] w-[90vw]">
          Power <span className="text-gradient-2023">Generative AI</span>
          <br /> With Your Data
        </p>
        <p className="text-[1.4rem] leading-none relative z-[200] text-center md:w-[60vw] w-[90vw]">
          Make the best models with the best data. Scale Data Engine leverages
          your enterprise data, and with Scale GenAI Platform, safely unlocks
          the value of AI.
        </p>
        <img
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className="absolute top-0 left-0 duration-1000 pointer-events-none object-cover z-[100]"
          style={{ width: "100vw;" }}
          src="/public/pallets.png"
        />

        <div className="justify-center lg:pt-4 flex items-center gap-x-6">
          <a
            className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
            href="/demo"
          >
            <div className="bookdemo new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[10px]">
              Book a Demo
              <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                →
              </span>
            </div>
            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
          </a>
          <a
            className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
            href="/data-engine"
          >
            Build AI
            <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
              →
            </span>
          </a>
        </div>
        <p className="text-[1.1rem] text-neutral-400 py-8 pt-28 leading-none relative z-[200] text-center md:w-[60vw] w-[90vw]">
          Scale works with{" "}
          <span className="text-white">Generative AI Companies,</span> U.S.
          Government Agencies & Enterprises
        </p>

        <div className="flex flex-row items-end justify-between w-full py-7 mb-20">
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/cohere.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/adept.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/anthropic.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/nvidia.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/characterai.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/meta.png"
          />
          <img
            style={{ height: "20px", width: "auto" }}
            src="/public/companies/openai.png"
          />
        </div>

        <div className="flex flex-row items-end gap-10 mb-20">
          <button
            onClick={() => setVideo("eric")}
            className="events_event-card__utnzH keen-slider__slide group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01]"
          >
            <div className="flex items-center justify-start h-full transition-colors bg-[#D1AAD7]/[0.01]">
              <img
                alt="Eric Schmidt profile picture"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className=""
                src="/public/auth.png"
              />
              <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10 -ml-3 sm:ml-0">
                <p className="mb-1 text-xs font-medium sm:text-sm text-scale-lightmauve">
                  Tech Talk
                </p>
                <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl sm:leading-[111%] mb-3 sm:mb-6 lg:mb-2 line-clamp-2">
                  Navigating an AI-
                  <br />
                  Enabled Future
                </p>
                <p className="text-xs font-medium sm:text-sm text-white/60">
                  by Eric Schmidt
                </p>
              </div>
            </div>
            <div
              role="none"
              className="absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 overflow-visible md:w-4 md:h-4"
              >
                <path
                  className="transition-colors duration-150 ease-linear group-hover:fill-black"
                  d="M12.5 7.1 4.6 2.4C4 2.1 3 2.4 3 3.4v9.3c0 .6.5 1.1 1.1 1.1.2 0 .4-.1.5-.2L12.5 9c.5-.3.7-1 .4-1.5-.1-.2-.3-.3-.4-.4z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </button>
          <button
            onClick={() => setVideo("fie")}
            className="events_event-card__utnzH keen-slider__slide group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01]"
          >
            <div className="flex items-center justify-start h-full transition-colors bg-[#D1AAD7]/[0.01]">
              <img
                alt="Fei Fei Li profile picture"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className=""
                src="/public/auth2.png"
              />
              <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10 -ml-3 sm:ml-0">
                <p className="mb-1 text-xs font-medium sm:text-sm text-scale-lightmauve">
                  Tech Talk
                </p>
                <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl sm:leading-[111%] mb-3 sm:mb-6 lg:mb-2 line-clamp-2">
                  Understanding &amp; <br />
                  Interacting With The...
                </p>
                <p className="text-xs font-medium sm:text-sm text-white/60">
                  by Fei Fei Li
                </p>
              </div>
            </div>
            <div
              role="none"
              className="absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 overflow-visible md:w-4 md:h-4"
              >
                <path
                  className="transition-colors duration-150 ease-linear group-hover:fill-black"
                  d="M12.5 7.1 4.6 2.4C4 2.1 3 2.4 3 3.4v9.3c0 .6.5 1.1 1.1 1.1.2 0 .4-.1.5-.2L12.5 9c.5-.3.7-1 .4-1.5-.1-.2-.3-.3-.4-.4z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center text-center my-20">
        <p className="text-[#D1AAD7] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-sm">
          AI FOR THE ENTERPRISE
        </p>

        <h1>Generative AI Architecture</h1>
        <p className="w-[90vw] md:max-w-[50vw]">
          Whether you&apos;re building your own models or applying foundation
          models to your business, data remains the biggest bottleneck to AI.
        </p>
        <div className="font-medium rounded-xl justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] bg-custom-1 text-sm px-[30px] py-[10px]">
          Talk to a Generative AI Expert
          <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
            →
          </span>
        </div>
      </section>
    </main>
  );
}

export default Hero;
