import Image from "next/image";
import React from "react";
import decentalized_section_vector from "@/public/home/decentalized_section_vector.svg";
import { cn } from "@/lib/utils";

const HighlightedHeading = ({
  heading,
  vectorPos,
  vectorHidden,
}: {
  heading: string;
  vectorPos?: { top?: number; right?: number };
  vectorHidden?: boolean;
}) => {
  return (
    <div className="relative w-fit text-[32px] font-bold text-[#040815] sm:text-[40px]">
      {heading}
      <div
        className="absolute hidden sm:block"
        style={{
          top: vectorPos?.top ? vectorPos?.top + "%" : "-30%",
          right: vectorPos?.right ? vectorPos?.right + "%" : "-2%",
        }}
      >
        <Image
          src={decentalized_section_vector}
          alt="decentalized_section_vector"
          className={cn(vectorHidden && "hidden")}
        />
      </div>
    </div>
  );
};

export default HighlightedHeading;
