import React from "react";
import openAI from "../../public/companies/openai.png";
import adept from "../../public/companies/adept.png";
import meta from "../../public/companies/meta.png";
import cohere from "../../public/companies/cohere.png";
import anthropic from "../../public/companies/anthropic.png";

function AIProviders() {
  const companies = [openAI, adept, meta, cohere, anthropic];
  return (
    <div className="w-full flex text-center lg:text-sm text-xs flex-col items-center gap-5 tracking-[4px] py-20">
      <p>GENERATIVE AI PROVIDERS WE PARTNER WITH:</p>
      <div className="flex flex-row items-end justify-between gap-7">
        <div className="relative flex overflow-x-hidden flex-row gap-10">
          <div className="py-12 animate-marquee flex flex-row gap-10">
            {companies.map((company, index) => (
              <div
                key={index + 1000}
                className="rounded-xl p-10 h-20 w-[180px] lg:h-28 lg:w-[230px] flex items-center justify-center border border-white/20"
              >
                <img src={company.src} alt="company" />
              </div>
            ))}
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 flex flex-row">
            {companies.map((company, index) => (
              <div
                key={index + 1000}
                className="rounded-xl p-10 h-20 w-[180px] lg:h-28 lg:w-[230px] mx-5 flex items-center justify-center border border-white/20"
              >
                <img src={company.src} alt="company" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIProviders;
