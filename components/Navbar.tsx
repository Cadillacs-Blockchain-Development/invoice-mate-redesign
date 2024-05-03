import Image from "next/image";
import React from "react";
import logo from "@/public/nav_logo.svg";
import { Button } from "./ui/button";

const links = [
  { name: "Land", link: "" },
  { name: "Borrow", link: "" },
  { name: "About Mate", link: "" },
];
const Navbar = () => {
  return (
    <div className="bg-transparent absolute z-[999] top-0 w-full flex justify-between p-6">
      <div>
        <Image src={logo} alt="logo" width={169} height={32} />
      </div>
      <ul className="flex gap-10 text-white font-medium text-lg">
        {links.map((link, i) => (
          <li key={i}>{link.name}</li>
        ))}
      </ul>
      <div>
        <Button className="bg-[#040815] rounded-full font-semibold text-base active:scale-[0.97] transition">
          App coming soon
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
