import React from "react";
import gpt from "../../public/case/gpt.webp";
import db from "../../public/case/db.webp";
import scale from "../../public/case/scale.webp";
import mountain from "../../public/case/mountain.webp";
import map from "../../public/case/us.webp";
import claude from "../../public/case/claud.webp";
import reddit from "../../public/case/reddit.webp";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function CaseStudy() {
  const data = [
    { src: gpt.src, title: "Blog", content: "Why is ChatGPT so good?" },
    { src: db.src, title: "Guide", content: "Guide to data annotation" },
    { src: scale.src, title: "Customer Case Study", content: "Goodcall" },
    // {
    //   src: mountain.src,
    //   title: "Guide",
    //   content: "Diffusion Models: A Practical Guide",
    // },
    // {
    //   src: map.src,
    //   title: "Dataset",
    //   content: "Open Dataset: Ukraine Damage Identification",
    // },
    // {
    //   src: claude.src,
    //   title: "Blog",
    //   content: "Meet Claude: Anthropic's rival to ChatGPT",
    // },
    // {
    //   src: reddit.src,
    //   title: "Dataset",
    //   content: "Open Dataset: Agreement/Disagreement Dataset of ...",
    // },
  ];
  return (
    <section className="flex flex-col items-center py-[20vh] bg-[#0b030a]">
      <p className="text-[#D1AAD7] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-sm">
        LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL{" "}
      </p>
      <p className="text-[3rem] leading-[1]">Case Studies & Resources</p>
      <p className="text-[1.2rem] text-neutral-300 text-center w-[600px]">
        We've worked with the world's leading AI teams for years, and delivered
        more high-quality data than anybody else.
      </p>

      <div className="flex flex-row items-end gap-7 leading-none h-full">
        {data.map((ele, i) => (
          <a
            key={i}
            className="flex flex-col gap-2  text-white h-[200px] w-[400px]"
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
