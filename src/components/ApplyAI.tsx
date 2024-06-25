import React, { useState } from "react";
import applyai from "../../public/applyai.webp";
import applyai2 from "../../public/applyai-2.webp";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ApplyAI() {
  return (
    <section className="flex text-center gap-3 flex-col items-center">
      <p className="text-[#D1AAD7] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-xs lg:text-sm">
        APPLY AI
      </p>
      <p className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
        Generative AI Applications
      </p>
      <p className="text-center mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
        Easily Apply AI to your most challenging use cases with pre-built
        applications that harness the power of customized LLMs.
      </p>

      <div className="hidden lg:flex flex-row my-3 items-end gap-6 w-full">
        <ScaleDonovan />
        <ScaleEnterprise />
      </div>

      <ModelsMobileView />
    </section>
  );
}

function ScaleDonovan() {
  return (
    <div className="flex gap-4 flex-col h-[350px]  w-[80vw] items-start rounded-xl border hover:border-blue-950 border-neutral-800 overflow-hidden pt-5 pl-5  lg:w-1/2">
      <p className="tracking-[4px] rounded-full py-2 text-sm">
        SCALE ENTERPRISE GENAI PLATFORM
      </p>
      <p className="text-[1.5rem] text-nowrap">AI for the Enterprise</p>
      <div className="flex flex-row justify-end w-full">
        <img
          src={applyai2.src}
          className="h-[250px] w-auto object-cover object-center"
        />
      </div>
    </div>
  );
}

function ScaleEnterprise() {
  return (
    <div className="flex gap-4 flex-col h-[350px] items-start rounded-xl border hover:border-blue-950 border-neutral-800 overflow-hidden pt-5 pl-5 w-[80vw] lg:w-1/2">
      <p className="tracking-[4px] rounded-full py-2 text-sm">
        SCALE ENTERPRISE GENAI PLATFORM
      </p>
      <p className="text-[1.5rem] text-nowrap">AI for the Enterprise</p>
      <div className="flex flex-row justify-end w-full">
        <img
          src={applyai2.src}
          className="h-[250px] w-auto object-cover object-center"
        />
      </div>
    </div>
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
      <div className="navigation-wrapper w-[80vw]">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide mr-6">
            <ScaleDonovan />
          </div>

          <div className="keen-slider__slide">
            <ScaleEnterprise />
          </div>
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

export default ApplyAI;
