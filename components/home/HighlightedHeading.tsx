import Image from "next/image";
import React from "react";
import decentalized_section_vector from "@/public/home/decentalized_section_vector.svg";
import { cn } from "@/lib/utils";

const HighlightedHeading = ({
  heading,
  vectorPos,
}: {
  heading: string;
  vectorPos?: { top?: string; right?: string };
}) => {
  return (
    <div className="text-[#040815] text-[40px] w-fit font-bold relative">
      {heading}
      <div
        className={"absolute"}
        style={{
          top: vectorPos?.top ? vectorPos?.top + "%" : "-30%",
          right: vectorPos?.right ? vectorPos?.right + "%" : "-2%",
        }}
      >
        <Image
          src={decentalized_section_vector}
          alt="decentalized_section_vector"
        />
      </div>
    </div>
  );
};

export default HighlightedHeading;
