"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const CTA = () => {
  const pathname = usePathname();
  if (pathname.indexOf("/studio") === -1) {
    return (
      <div className="relative mx-auto mt-24 flex min-h-[570px] w-full items-center justify-center overflow-hidden bg-[#55122B] px-6 lg:px-0 ">
        <div className="absolute top-1/3 z-10 h-[1066px] w-full rounded-full bg-[#9E2654] blur-[150px]"></div>
        <div className="relative z-50 flex  items-center justify-center">
          <div className="flex flex-col items-center justify-center sm:max-w-[60%]">
            <div className="mt-6 text-center text-[40px] font-bold text-white ">
              Get Access to Secure and Low Volatile Yields
            </div>
            <div className="mt-6 text-center text-xl text-[#DBDEE4]">
              Transforming Inefficient Invoices into On-chain Financing
              Instruments via Know Your Invoice (KYI)
            </div>
            <Button className="mt-6 rounded-full bg-white text-center text-base  font-semibold text-[#8F1F48] transition hover:bg-white/80 active:scale-[0.97]">
              App coming soon
            </Button>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default CTA;
