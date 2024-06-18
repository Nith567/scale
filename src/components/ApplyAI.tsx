import React from "react";
import applyai from "../../public/applyai.webp";
import applyai2 from "../../public/applyai-2.webp";

function ApplyAI() {
  return (
    <section className="flex text-center flex-col items-center">
      <p className="text-[#6a87b5] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-sm">
        APPLY AI
      </p>
      <p className="text-[3rem] leading-[1]">Generative AI Applications</p>
      <p className="text-[1.2rem] text-neutral-300 max-w-[600px]">
        Easily Apply AI to your most challenging use cases with pre-built
        applications that harness the power of customized LLMs.
      </p>

      <div className="flex flex-row items-end gap-6">
        <div className="flex flex-col max-h-[330px] items-start rounded-xl border hover:border-blue-950 border-neutral-800 overflow-hidden pt-5 pl-5 w-1/2">
          <p className="tracking-[4px] rounded-full py-2 text-sm">
            SCALE DONOVAN
          </p>
          <p className="text-[1.5rem] text-nowrap">
            AI-Powered Decision-Making for Defense
          </p>

          <img
            src={applyai.src}
            height={200}
            className="h-[200px] w-auto object-cover object-center"
          />
        </div>

        <div className="flex flex-col max-h-[330px] items-start rounded-xl border hover:border-blue-950 border-neutral-800 overflow-hidden pt-5 pl-5 w-1/2">
          <p className="tracking-[4px] rounded-full py-2 text-sm">
            SCALE ENTERPRISE GENAI PLATFORM
          </p>
          <p className="text-[1.5rem] text-nowrap">AI for the Enterprise</p>

          <img
            src={applyai2.src}
            className="h-[200px] w-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default ApplyAI;
