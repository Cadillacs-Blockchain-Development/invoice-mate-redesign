import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Backers = ({
  backers,
}: {
  backers: {
    image: string;
  }[];
}) => {
  return (
    <div className="container mx-auto mt-24">
      <div className="text-center text-xl font-semibold uppercase text-[#667085]">
        Our Backers
      </div>
      <div className="mt-8 flex justify-center gap-8">
        <Marquee autoFill>
          {backers.map((item, i) => (
            <Image
              src={item.image}
              alt="backer"
              key={i}
              className="mr-4"
              height={110}
              width={160}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Backers;
