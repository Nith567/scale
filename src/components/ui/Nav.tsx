// @ts-nocheck

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <NavigationMenu.Root className="relative lg:flex hidden z-[10000] w-full justify-center flex-row ">
      <NavigationMenu.List className="center m-0 flex list-none flex-row rounded-[6px] bg-black">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Products{" "}
            <CaretDownIcon
              className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="w-full data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 sm:w-auto">
            <ul className="m-0 grid list-none p-[22px] sm:w-[800px] sm:grid-flow-col grid-rows-4">
              <div className="flex flex-row items-center">
                <img src="/public/nav/engine.png" className="h-12 w-12"></img>
                <ListItem
                  className="text-white"
                  title="Scale Data Engine"
                  href="/primitives/docs/overview/introduction"
                >
                  <p className="leading-none text-neutral-500">
                    Data for training models
                  </p>
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/genai.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Generative AI"
                  href="/primitives/docs/overview/getting-started"
                >
                  <p className="leading-none text-neutral-500">
                    Supervised fine-tuning and RLHF
                  </p>
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/gov.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Government"
                  href="/primitives/docs/guides/styling"
                >
                  <p className="leading-none text-neutral-500">
                    High quality data for public sector
                  </p>{" "}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/automotive.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Automotive"
                  href="/primitives/docs/guides/animation"
                >
                  <p className="leading-none text-neutral-500">
                    Unlock L2 to L5 autonomy
                  </p>{" "}
                </ListItem>
              </div>

              <div className="flex flex-row items-center">
                <img src="/public/nav/donovan.png" className="h-12 w-12"></img>
                <ListItem
                  className="text-white"
                  title="Scale Donovon"
                  href="/primitives/docs/overview/accessibility"
                >
                  <p className="leading-none text-neutral-500">
                    Platform for Government AI
                  </p>{" "}
                </ListItem>
              </div>

              <div className="flex flex-row items-center">
                <img src="/public/nav/platform.png" className="h-12 w-12"></img>
                <ListItem
                  className="text-white"
                  title="Scale GenAI Platform"
                  href="/primitives/docs/overview/releases"
                >
                  <p className="leading-none text-neutral-500">
                    Full stack generatibe
                  </p>{" "}
                </ListItem>
              </div>

              <div></div>
              <div></div>

              <div className="flex flex-row items-center">
                <img
                  src="/public/nav/evaluation.png"
                  className="h-12 w-12"
                ></img>
                <ListItem
                  className="text-white"
                  title="Scale Evaluation"
                  href="/primitives/docs/overview/introduction"
                >
                  <p className="leading-none text-neutral-500">
                    Evaluation of AI models and applications
                  </p>
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/devs.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Model Developers"
                  href="/primitives/docs/overview/getting-started"
                >
                  <p className="leading-none text-neutral-500">
                    Model evaluation and model teaming
                  </p>
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/public.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Public Sector"
                  href="/primitives/docs/guides/styling"
                >
                  <p className="leading-none text-neutral-500">
                    Evaluation for AI systems
                  </p>{" "}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/enterprise.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="For Automotive"
                  href="/primitives/docs/guides/animation"
                >
                  <p className="leading-none text-neutral-500">
                    Evaluation for monitoring for Enterprise AI apps
                  </p>{" "}
                </ListItem>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11  focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Government{" "}
            <CaretDownIcon
              className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 right-0 w-full sm:w-auto">
            <ul className="m-0 text-white grid list-none leading-none relative p-[22px] w-[250px] grid-rows-3 justify-start">
              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/gov.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="Defence"
                  href="/primitives/docs/overview/introduction"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/federal.png" className="h-8 w-8"></img>
                <ListItem
                  className="text-white"
                  title="Federal"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>
              <div className="ml-6 flex flex-row items-center">
                <img
                  src="/public/nav/public-sector.png"
                  className="h-8 w-8"
                ></img>
                <ListItem
                  className="text-white"
                  title="Public"
                  href="/primitives/docs/guides/styling"
                >
                  {""}
                </ListItem>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white  focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Customers{" "}
            <CaretDownIcon
              className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none p-[22px] sm:w-[800px] sm:grid-flow-col grid-rows-5">
              <ListItem
                className="text-neutral-500"
                title="Generative AI"
                href="/primitives/docs/overview/introduction"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/introduction"
              >
                Open AI
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/getting-started"
              >
                Cohere
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/guides/styling"
              >
                Adept
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/guides/animation"
              >
                Nvidia
              </ListItem>

              <ListItem
                className="text-neutral-500"
                title="US Government"
                href="/primitives/docs/overview/accessibility"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/accessibility"
              >
                US Army
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                US Air Force
              </ListItem>

              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Defence Innovation Unit
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                CDAO
              </ListItem>
              <ListItem
                className="text-neutral-500"
                title="Enterprises"
                href="/primitives/docs/overview/releases"
              >
                {""}
              </ListItem>

              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Microsoft
              </ListItem>

              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Meta
              </ListItem>

              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                GM
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Nvidia
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                GAFG
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Chegg
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                Howard Hughes
              </ListItem>
              <ListItem
                className="text-white"
                title=""
                href="/primitives/docs/overview/releases"
              >
                BCG
              </ListItem>
            </ul>
            <div className="font-medium p-5 whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
              See all customers{" "}
              <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                →
              </span>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-violet11  focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Resources{" "}
            <CaretDownIcon
              className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 right-0 w-full sm:w-auto">
            <ul className="m-0 text-white grid list-none leading-none p-[22px] w-[500px] grid-rows-7 justify-end">
              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/about.svg" className="h-6 w-6"></img>
                <ListItem
                  className="text-white"
                  title="About"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/blog.svg" className="h-6 w-6"></img>
                <ListItem
                  className="text-white"
                  title="Blog"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/guides.svg" className="h-6 w-6"></img>
                <ListItem
                  className="text-white"
                  title="Guides"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/events.svg" className="h-6 w-6"></img>
                <ListItem
                  className="text-white"
                  title="Events"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img src="/public/nav/careers.svg" className="h-6 w-6"></img>
                <ListItem
                  className="text-white"
                  title="Careers"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img
                  src="/public/nav/documentation.svg"
                  className="h-6 w-6"
                ></img>
                <ListItem
                  className="text-white"
                  title="Documentation"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>

              <div className="ml-6 flex flex-row items-center">
                <img
                  src="/public/nav/ai-readiness-report.svg"
                  className="h-6 w-6"
                ></img>
                <ListItem
                  className="text-white"
                  title="AI readiness Report 2024"
                  href="/primitives/docs/overview/getting-started"
                >
                  {""}
                </ListItem>
              </div>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-black" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-black transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Nav;
