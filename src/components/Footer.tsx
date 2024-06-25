import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 pt-20">
      <div className="grid grid-cols-2 gap-10 lg:flex lg:flex-row justify-between text-[1.01rem] py-10 text-neutral-400 leading-none">
        <div className="flex flex-col gap-4">
          <p className="font-semibold lg:text-base text-sm">PRODUCTS</p>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Scale Data Engine
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            {" "}
            Scale GenAI Platform
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Scale Donovan
          </a>

          <p className="font-semibold lg:text-base text-sm pt-5">GOVERNMENT</p>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Defense
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Federal
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Public Sector
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold lg:text-base text-sm">COMPANY</p>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            About
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Careers
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Security
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Terms
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Privacy
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold lg:text-base text-sm">RESOURCES</p>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Blog
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Customers
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Events
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Open Datasets
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Documentation
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Guides
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Community
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            AI Readiness Report 2024
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#" className="font-semibold lg:text-base text-sm">
            GUIDES
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Data Labeling
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            ML Model Training
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Diffusion Models
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Guide to AI for eCommerce
          </a>
          <a href="#" className="lg:text-sm text-xs hover:text-white ">
            Computer Vision Applications
          </a>
          <a
            href="https://scale.com/guides/large-language-models"
            className="lg:text-sm text-xs hover:text-white "
          >
            Large Language Models
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold lg:text-base text-sm">CONTACT</p>
          <a
            href="mailto:sales@scale.com"
            className="lg:text-sm text-xs hover:text-white "
          >
            sales@scale.com
          </a>
          <a
            href="mailto:support@scale.com"
            className="lg:text-sm text-xs hover:text-white "
          >
            support@scale.com
          </a>
          <a
            href="mailto:careers@scale.com"
            className="lg:text-sm text-xs hover:text-white "
          >
            careers@scale.com
          </a>
          <a
            href="mailto:press@scale.com"
            className="lg:text-sm text-xs hover:text-white "
          >
            press@scale.com
          </a>

          <div className="flex flex-row items-end gap-4">
            <a href="https://x.com/scale_ai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
                className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
              >
                <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z"></path>
              </svg>
            </a>

            <a href="https://www.facebook.com/scaleapi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
              >
                <path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/scaleai">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
              >
                <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex py-4 gap-4 flex-col items-start lg:flex-row pt-4 border-solid border-t border-t-neutral-700 justify-between lg:text-sm text-xs hover:text-white  text-neutral-500">
        <p>Copyright © 2024 Scale AI, Inc. All rights reserved.</p>
        <a target="_blank" href="https://scale.com/legal/terms">
          Terms of Use & Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
