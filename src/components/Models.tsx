import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { foundationData, foundationImages } from "../utils/content";

function Models() {
  const [page, setPage] = React.useState<number>(10);
  function handleMouseEnter(index: number) {
    setPage(index);
  }
  return (
    <>
      <section className="lg:flex hidden flex-col lg:flex-row items-center my-20 gap-20">
        <div className="flex flex-col items-start">
          {foundationData.map((item, index) => (
            <div
              key={item.heading}
              style={{ opacity: page === index ? 1 : page === 10 ? 1 : 0.5 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => setPage(10)}
              className="flex flex-col gap-4 mb-8 border-b border-solid border-neutral-800 leading-[1.3] transition-all cursor-pointer transform duration-300 ease-in-out"
            >
              <p className="text-[1.4rem] leading-[1]">{item.heading}</p>
              <p className="text-[1.05rem] text-neutral-400 pb-10">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <img
          src={foundationImages[page].src}
          className="h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]"
          alt="overall"
        />
      </section>

      <ModelsMobileView />
    </>
  );
}

function ModelsMobileView() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="lg:hidden block">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <div className="flex flex-col gap-4 leading-[1.3] transition-all cursor-pointer transform duration-300 ease-in-out">
              <img
                src={foundationImages[10].src}
                className="h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]my-3"
                alt="overall"
              />
              <p className="text-[1.4rem] leading-[1]">
                Enterprise GenAI Platform
              </p>
              <p className="text-[1.05rem] text-neutral-400 pb-10">
                The only full-stack GenAI Platform for your Enterprise, powered
                by the Scale Data Engine.
              </p>
            </div>
          </div>
          {foundationData.map((item, index) => (
            <div key={item.heading} className="keen-slider__slide">
              <div className="flex flex-col gap-4 leading-[1.3] transition-all cursor-pointer transform duration-300 ease-in-out">
                <img
                  src={foundationImages[index].src}
                  className="h-[400px] w-[400px] lg:h-[550px] lg:w-[550px] my-3"
                  alt="overall"
                />
                <p className="text-[1.4rem] leading-[1]">{item.heading}</p>
                <p className="text-[1.05rem] text-neutral-400 pb-10">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-6">
        {loaded && instanceRef.current && (
          <div className="flex flex-row items-center gap-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    "h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300" +
                    (currentSlide === idx
                      ? " bg-white w-4 sm:w-5 md:w-6"
                      : " bg-white/60 w-1 sm:w-1.5 md:w-2")
                  }
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Models;
