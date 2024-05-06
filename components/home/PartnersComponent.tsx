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
          <Image src={partner} alt="partner image" key={i} />
        ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
