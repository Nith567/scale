import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import pallets from "../../public/palletss.png";
import { customerImages, reviews } from "../utils/content";

function Customers() {
  return (
    <section className="flex flex-col gap-4 items-center py-24 bg-[#0b030a]">
      <p className="text-[#D1AAD7] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-xs lg:text-sm">
        CUSTOMERS
      </p>
      <p className="font-aeonik leading-snug lg:leading-[1.25] text-[30px] text-center md:text-4xl lg:text-4.5xl [text-wrap:balance]">
        We have changed the game of AI data—hear it from our customers.
      </p>
      <p className="text-center mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
        From RLHF to data labeling to model evaluation to enterprise apps, learn
        from experts why Scale is key to any AI strategy.
      </p>

      <ModelsMobileView />

      <div className="max-w-[760px] py-20 w-fit space-y-6 lg:space-y-10 mx-auto">
        <div className="relative">
          <img
            src={pallets.src}
            alt="pallewts"
            className="absolute -top-20 left-0"
          />
          <h1 className="relative text-[46px] font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] tracking-[-0.89px] font-aeonik text-center">
            <span className="inline font-light">
              The future of your industry{" "}
            </span>
            <span className="highlight text-gradient-2023 font-light">
              starts&nbsp;here.
            </span>
          </h1>
        </div>
        <div className="justify-center lg:pt-4 flex items-center gap-x-6">
          <a
            className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
            href="/demo"
          >
            <div className="bookdemo new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
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
      </div>
    </section>
  );
}

function ModelsMobileView() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="flex items-center flex-col">
      <div className="navigation-wrapper lg:w-[90vw] w-[85vw]">
        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, ind) => (
            <div className="keen-slider__slide" key={ind}>
              <div className="flex flex-col py-10 text-center custom-shadows rounded-xl">
                <p className="w-full lg:w-[70%] mx-auto text-center h-auto p-5 lg:p-20  text-[1.25rem] text-neutral-100">
                  "{review.content}"
                </p>
                <p className="pt-5 text-neutral-100 leading-none">
                  {review.author}
                </p>
                <p className="text-neutral-500">
                  {review.designation}, {review.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-6">
        {loaded && instanceRef.current && (
          <div className="flex flex-row items-center gap-2 lg:gap-0 lg:justify-between lg:w-[800px]">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <>
                  <button
                    key={idx}
                    className={
                      idx === currentSlide ? "opacity-100" : "opacity-20"
                    }
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                  >
                    <img
                      className="invert max-h-10 object-cover object-center max-w-[70%]"
                      src={customerImages[idx]}
                    />
                  </button>
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "lg:hidden block h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300" +
                      (currentSlide === idx
                        ? " bg-white w-4 sm:w-5 md:w-6"
                        : " bg-white/60 w-1 sm:w-1.5 md:w-2")
                    }
                  ></button>
                </>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Customers;
