import React from "react";
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";

function Navbar() {
  return (
    <header className="flex flex-col">
      <nav className="flex flex-row items-center justify-between border-solid border-b border-b-neutral-800 pb-5">
        <div>Scale</div>
        <Nav />
        <MobileNav />
        <div className="flex-row hidden lg:flex items-center h-full gap-3">
          <a
            className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
            href="/demo"
          >
            <div className="bookdemo font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-none text-sm px-[30px] py-[12px]">
              Book a Demo
              <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                →
              </span>
            </div>
            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
          </a>

          <button className="whitespace-nowrap">Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
