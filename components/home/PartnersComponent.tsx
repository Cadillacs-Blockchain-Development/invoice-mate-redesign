import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

const PartnersComponent = ({
  title,
  partners,
}: {
  title: string;
  partners: StaticImageData[];
}) => {
  return (
    <div className="mx-auto flex  max-w-[1400px] flex-col items-center justify-center gap-8 px-8 py-24">
      <div className="text-center text-[32px] font-semibold text-[#667085]">
        {title}
      </div>
      <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-8 sm:flex lg:px-20">
        {partners.map((partner, i) => (
          <Image
            src={partner}
            alt="partner image"
            key={i}
            height={110}
            className={cn(
              "max-w-[100px] sm:max-w-[120px]",
              title === "Accessing 53K + Businesses through our B2B Partners" &&
                i === 10 &&
                "object-[1px_0] invert",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
