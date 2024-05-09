"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import light_logo from "@/public/nav_logo.svg";
import dark_logo from "@/public/nav_logo_dark.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Hamburger from "./Hamburger";
import { MenuIcon, XIcon } from "lucide-react";

const links = [
  { name: "Lend", link: "/#RiskMitigation" },
  { name: "Borrow", link: "/#borrow" },
  { name: "About Mate", link: "/about" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
    };
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  if (pathname.indexOf("/studio") === -1) {
    return (
      <>
        <div
          className={cn(
            "fixed left-1/2 top-0 z-[999] hidden w-full -translate-x-1/2 items-center justify-between p-6 transition-all duration-500 sm:flex",
            navBg
              ? " top-1 w-[98%] rounded-xl bg-[#55122B] p-4"
              : "bg-transparent",
          )}
        >
          <Link href={"/"}>
            <Image
              src={pathname === "/" || navBg ? light_logo : dark_logo}
              alt="logo"
              width={169}
              height={32}
              className="object-[0.72px_0]"
            />
          </Link>
          <ul
            className={cn(
              "flex gap-10 text-lg font-medium",
              pathname === "/" || navBg ? "text-white" : "text-black",
            )}
          >
            {links.map((link, i) => (
              <Link href={link.link} key={link.name} className="group">
                {link.name}
                <span
                  className={cn(
                    "block h-0.5 max-w-0 transition-all duration-500 group-hover:max-w-full",
                    pathname === "/" || navBg
                      ? "bg-gradient-to-l from-white"
                      : "bg-gradient-to-l from-[#55122B]",
                  )}
                ></span>
              </Link>
            ))}
          </ul>
          <div>
            <Button className="rounded-full bg-[#040815] text-base font-semibold transition active:scale-[0.97]">
              App coming soon
            </Button>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={cn(
            "fixed left-1/2 top-0 z-[999] flex w-full -translate-x-1/2 items-center justify-between p-6 transition-all duration-500 sm:hidden",
            navBg
              ? " top-1 w-[98%] rounded-xl bg-[#55122B] p-4"
              : "bg-transparent",
          )}
        >
          <div>
            <Image
              src={pathname === "/" ? light_logo : dark_logo}
              alt="logo"
              width={169}
              height={32}
            />
          </div>
          <div onClick={() => setMobileNavToggle(!mobileNavToggle)}>
            {/* <Hamburger isOpen={mobileNavToggle} setIsOpen={setMobileNavToggle} /> */}
            {!mobileNavToggle ? (
              <MenuIcon color="white" />
            ) : (
              <XIcon color="white" />
            )}
          </div>
          <div
            className={cn(
              "absolute top-[110%] w-[90%] rounded-xl bg-black/40 p-6 backdrop-blur-lg transition-all duration-300",
              mobileNavToggle ? "h-[50dvh] opacity-100" : " h-0 opacity-0",
            )}
          >
            <ul className="flex flex-col items-start justify-center gap-10 text-left text-lg font-medium text-white">
              {links.map((link, i) => (
                <Link
                  href={link.name}
                  onClick={() => setMobileNavToggle(false)}
                  key={link.link}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
            <div>
              <Button className="mx-auto mt-8 rounded-full bg-[#040815] text-base font-semibold transition active:scale-[0.97]">
                App coming soon
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else return <></>;
};

export default Navbar;
