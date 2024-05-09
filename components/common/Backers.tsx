import { backers } from "@/constants/partners/backers";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Backers = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1400px]">
      <div className="text-center text-xl font-semibold uppercase text-[#667085]">
        Our Backers
      </div>
      <div className="mt-8 flex justify-center gap-8">
        <Marquee autoFill>
          {backers.map((item, i) => (
            <Image src={item} alt="backer" key={i} className="mr-4" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Backers;
