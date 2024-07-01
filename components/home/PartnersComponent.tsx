import { cn } from "@/lib/utils";
import { Partner } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import React from "react";

const PartnersComponent = ({
  title,
  partners,
}: {
  title: string;
  partners: string[];
}) => {
  return (
    <div className="container mx-auto  flex flex-col items-center justify-center gap-8 px-8 py-24">
      <div className="text-center text-[32px] font-semibold text-[#667085]">
        {title}
      </div>
      <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-8 sm:flex lg:px-20">
        {partners.map((partner, i: React.Key | null | undefined) => (
          <div key={i} className="relative h-[110px] w-[110px]">
            <Image
              src={partner}
              alt="partner image"
              fill
              className={cn(
                "max-w-[100px] sm:max-w-[120px]",
                title === "Accessing 53K + Businesses through our B2B Partners",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
