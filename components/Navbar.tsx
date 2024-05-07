"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import light_logo from "@/public/nav_logo.svg";
import dark_logo from "@/public/nav_logo_dark.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Hamburger from "./Hamburger";
import { MenuIcon, XIcon } from "lucide-react";

const links = [
  { name: "Land", link: "" },
  { name: "Borrow", link: "" },
  { name: "About Mate", link: "/about" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  console.log(mobileNavToggle);
  return (
    <>
      <div className="absolute top-0 z-[999] hidden w-full justify-between bg-transparent p-6 sm:flex">
        <div>
          <Image
            src={pathname === "/" ? light_logo : dark_logo}
            alt="logo"
            width={169}
            height={32}
          />
        </div>
        <ul
          className={cn(
            "flex gap-10 text-lg font-medium",
            pathname === "/" ? "text-white" : "text-black",
          )}
        >
          {links.map((link, i) => (
            <Link href={link.link} key={i}>
              {link.name}
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
      <div className="absolute top-0 z-[999] flex w-full items-center justify-between bg-transparent p-6 transition sm:hidden">
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
            "absolute top-[100%] w-[90%] rounded-xl bg-black/40 p-6 backdrop-blur-lg transition-all duration-300",
            mobileNavToggle ? "h-[50dvh] opacity-100" : " h-0 opacity-0",
          )}
        >
          <ul className="flex flex-col items-start justify-center gap-10 text-left text-lg font-medium text-white">
            {links.map((link, i) => (
              <Link
                href={link.link}
                onClick={() => setMobileNavToggle(false)}
                key={i}
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
};

export default Navbar;
