import { officesData } from "@/constants/officesData";
import { inter } from "@/utils/fonts";
import React from "react";

const Offices = () => {
  return (
    <div className="mx-auto max-w-[1440px] pt-24">
      <div className="flex flex-col gap-8 lg:flex-row">
        {officesData.map((data, i) => (
          <div key={data.location} className={inter.className}>
            <div className="flex-1 text-center  text-xl font-semibold text-[#101828]">
              {data.location}
            </div>
            <div className="mx-auto mt-3 flex-1 text-center text-[#667085]">
              {data.address}
            </div>
            <div className="mt-5 flex-1 text-center  font-semibold text-[#9E2654]">
              {data.mobile}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offices;
