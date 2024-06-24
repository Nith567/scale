import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        className="justify-between text-[1.01rem] py-10 text-neutral-400 leading-none"
      >
        <div className="flex flex-col gap-4">
          <p className="font-semibold">PRODUCTS</p>
          <p className="text-sm">Scale Data Engine</p>
          <p className="text-sm"> Scale GenAI Platform</p>
          <p className="text-sm">Scale Donovan</p>

          <p className="font-semibold pt-5">GOVERNMENT</p>
          <p className="text-sm">Defense</p>
          <p className="text-sm">Federal</p>
          <p className="text-sm">Public Sector</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">COMPANY</p>
          <p className="text-sm">About</p>
          <p className="text-sm">Careers</p>
          <p className="text-sm">Security</p>
          <p className="text-sm">Terms</p>
          <p className="text-sm">Privacy</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">RESOURCES</p>
          <p className="text-sm">Blog</p>
          <p className="text-sm">Customers</p>
          <p className="text-sm">Events</p>
          <p className="text-sm">Open Datasets</p>
          <p className="text-sm">Documentation</p>
          <p className="text-sm">Guides</p>
          <p className="text-sm">Community</p>
          <p className="text-sm">AI Readiness Report 2024</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">GUIDES</p>
          <p className="text-sm">Data Labeling</p>
          <p className="text-sm">ML Model Training</p>
          <p className="text-sm">Diffusion Models</p>
          <p className="text-sm">Guide to AI for eCommerce</p>
          <p className="text-sm">Computer Vision Applications</p>
          <p className="text-sm">Large Language Models</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-semibold">CONTACT</p>
          <p className="text-sm">sales@scale.com</p>
          <p className="text-sm">support@scale.com</p>
          <p className="text-sm">careers@scale.com</p>
          <p className="text-sm">press@scale.com</p>

          <div className="flex flex-row items-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
            >
              <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
            >
              <path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
            >
              <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex py-4 flex-row items-end pt-4 border-solid border-t border-t-neutral-700 justify-between text-sm text-neutral-500">
        <p>Copyright © 2024 Scale AI, Inc. All rights reserved.</p>
        <p>Terms of Use & Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
