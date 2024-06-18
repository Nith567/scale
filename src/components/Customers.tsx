import React from "react";
import pallets from "../../public/palletss.webp";

function Customers() {
  return (
    <section className="flex flex-col items-center py-[40vh] bg-[#0b030a]">
      <p className="text-[#D1AAD7] tracking-[4px] bg-white/5 rounded-full px-5 py-2 text-sm">
        CUSTOMERS{" "}
      </p>
      <p className="text-[3rem] leading-[1] w-[800px] text-center">
        We have changed the game of AI data—hear it from our customers.
      </p>
      <p className="text-[1.2rem] text-neutral-300 text-center w-[650px]">
        From RLHF to data labeling to model evaluation to enterprise apps, learn
        from experts why Scale is key to any AI strategy.
      </p>

      <div className="flex flex-col py-10 text-center bg-[#0c0411] rounded-xl">
        <p className="w-[50vw] text-center h-auto p-20  text-[1.25rem] text-neutral-100">
          "Thanks to companies like Scale, a lot of these SaaS tools are
          building intelligent capabilities into their products[...] thats a
          path for a lot of companies to get value from AI without becoming AI
          shops, which is a really formidable challenge"
        </p>
        <p className="pt-5 text-neutral-100 leading-none">Bret Taylor</p>
        <p className="text-neutral-500">Retired President & COO, Salesforce</p>
      </div>

      <div className="my-8 flex flex-row items-end justify-between"></div>

      <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
        <div className="relative">
          <img
            src={pallets.src}
            alt="pallewts"
            className="absolute -top-20 left-0"
          />
          <h1 className="relative font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] tracking-[-0.89px] font-aeonik text-center">
            <span className="inline font-light text-[4rem]">
              The future of your industry{" "}
            </span>
            <span className="highlight text-gradient-2023 font-light text-[4rem]">
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

export default Customers;
