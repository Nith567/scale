import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Nav = () => {
  return (
    <NavigationMenu.Root className="relative z-[10000] flex w-full justify-center flex-row ">
      <NavigationMenu.List className="center m-0 flex list-none flex-row rounded-[6px] bg-black">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-white focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Products{" "}
            <CaretDownIcon
              className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
              <ListItem
                className="text-white"
                title="Scale Data Engine"
                href="/primitives/docs/overview/introduction"
              >
                <p className="leading-none">Data for training models</p>
              </ListItem>
              <ListItem
                className="text-white"
                title="For Generative AI"
                href="/primitives/docs/overview/getting-started"
              >
                <p className="leading-none">Supervised fine-tuning and RLHF</p>
              </ListItem>
              <ListItem
                className="text-white"
                title="For Government"
                href="/primitives/docs/guides/styling"
              >
                <p className="leading-none">
                  High quality data for public sector
                </p>{" "}
              </ListItem>
              <ListItem
                className="text-white"
                title="For Automotive"
                href="/primitives/docs/guides/animation"
              >
                <p className="leading-none">Unlock L2 to L5 autonomy</p>{" "}
              </ListItem>
              <ListItem
                className="text-white"
                title="Scale Donovon"
                href="/primitives/docs/overview/accessibility"
              >
                <p className="leading-none">Platform for Government AI</p>{" "}
              </ListItem>
              <ListItem
                className="text-white"
                title="Scale GenAI Platform"
                href="/primitives/docs/overview/releases"
              >
                <p className="leading-none">Full stack generatibe</p>{" "}
              </ListItem>
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
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid gap-4 cursor-pointer list-none gap-x-[10px] p-[22px] whitespace-nowrap leading-none sm:max-w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <a>Defence</a>
              <a>Federal</a>
              <a>Public</a>
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
            <ul className="m-0 text-white grid list-none leading-none p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-5">
              <ListItem
                className="text-white"
                title="Open AI"
                className="text-white"
                href="/primitives/docs/overview/introduction"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="Cohere"
                href="/primitives/docs/overview/getting-started"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="Adept"
                href="/primitives/docs/guides/styling"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="Nvidia"
                href="/primitives/docs/guides/animation"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="US Army"
                href="/primitives/docs/overview/accessibility"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="US Air Force"
                href="/primitives/docs/overview/releases"
              >
                {""}
              </ListItem>

              <ListItem
                className="text-white"
                title="Defence Innovation Unit"
                href="/primitives/docs/overview/releases"
              >
                {""}
              </ListItem>
              <ListItem
                className="text-white"
                title="CDAO"
                href="/primitives/docs/overview/releases"
              >
                {""}
              </ListItem>
            </ul>
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
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 flex flex-col gap-4 cursor-pointer list-none gap-x-[10px] p-[22px] whitespace-nowrap leading-none sm:max-w-[600px] ">
              <a>About </a>
              <a>Blog</a>
              <a>Guides</a>
              <a>Events</a>
              <a>Careers</a>
              <a>Documentation</a>
              <a>AI readiness Report 2024</a>
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
