import Image from "next/image";
import React from "react";
import logo from "@/public/nav_logo.svg";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const links = [
  { name: "Land", link: "" },
  { name: "Borrow", link: "" },
  { name: "About Mate", link: "" },
];
const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 z-[999] hidden w-full justify-between bg-transparent p-6 sm:flex">
        <div>
          <Image src={logo} alt="logo" width={169} height={32} />
        </div>
        <ul className="flex gap-10 text-lg font-medium text-white">
          {links.map((link, i) => (
            <li key={i}>{link.name}</li>
          ))}
        </ul>
        <div>
          <Button className="rounded-full bg-[#040815] text-base font-semibold transition active:scale-[0.97]">
            App coming soon
          </Button>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="absolute top-0 z-[999] flex w-full items-center justify-between bg-transparent p-6 sm:hidden">
        <div>
          <Image src={logo} alt="logo" width={169} height={32} />
        </div>
        {/* <ul className="flex gap-10 text-lg font-medium text-white">
          {links.map((link, i) => (
            <li key={i}>{link.name}</li>
          ))}
        </ul>
        <div>
          <Button className="rounded-full bg-[#040815] text-base font-semibold transition active:scale-[0.97]">
            App coming soon
          </Button>
        </div> */}
        <MenuIcon color="white" />
      </div>
    </>
  );
};

export default Navbar;
