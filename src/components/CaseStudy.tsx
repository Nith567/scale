import React from "react";
import gpt from "../../public/case/gpt.webp";
import db from "../../public/case/db.webp";
import scale from "../../public/case/scale.webp";
import mountain from "../../public/case/mountain.webp";
import map from "../../public/case/us.webp";
import claude from "../../public/case/claud.webp";
import reddit from "../../public/case/reddit.webp";
import { useKeenSlider, type KeenSliderPlugin } from "keen-slider/react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

function CaseStudy() {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        perView: "auto",
        spacing: 30,
      },
      loop: false,
      rubberband: false,
      vertical: false, // Set to false for horizontal scrolling
    },
    [WheelControls]
  );
  const data = [
    { src: gpt.src, title: "Blog", content: "Why is ChatGPT so good?" },
    { src: db.src, title: "Guide", content: "Guide to data annotation" },
    { src: scale.src, title: "Customer Case Study", content: "Goodcall" },
    {
      src: mountain.src,
      title: "Guide",
      content: "Diffusion Models: A Practical Guide",
    },
    {
      src: map.src,
      title: "Dataset",
      content: "Open Dataset: Ukraine Damage Identification",
    },
    {
      src: claude.src,
      title: "Blog",
      content: "Meet Claude: Anthropic's rival to ChatGPT",
    },
    {
      src: reddit.src,
      title: "Dataset",
      content: "Open Dataset: Agreement/Disagreement Dataset of ...",
    },
  ];
  return (
    <section className="flex flex-col gap-3 text-center items-center my-[10vh] bg-[#0b030a]">
      <p className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-center text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-lg md:rounded-full p-3">
        <span>LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL</span>
      </p>
      <p className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
        Case Studies & Resources
      </p>
      <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
        We've worked with the world's leading AI teams for years, and delivered
        more high-quality data than anybody else.
      </p>

      <div
        ref={ref}
        className="scroll__h keen-slider !overflow-visible pt-1 opacity-100 visible cursor-grab"
      >
        {data.map((ele, i) => (
          <a
            key={i}
            className="keen-slider__slide  flex flex-col text-white  gap-2 max-w-[300px] min-w-[300px] lg:max-w-[400px] lg:min-w-[400px] group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01]"
          >
            <img src={ele.src} />
            <p className="text-sm leading-none text-pink-300">{ele.title}</p>
            <p className="text-[1.5rem] leading-none text-white">
              {ele.content}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;
