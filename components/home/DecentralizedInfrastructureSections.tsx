"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordianData } from "@/constants/accordianData";
import { cn } from "@/lib/utils";
import HighlightedHeading from "./HighlightedHeading";

const DecentralizedInfrastructureSections = () => {
  const [index, setIndex] = useState(0);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <div className="mt-24 max-w-[1440px] mx-auto">
      <div className="flex gap-[92px]">
        <div className="basis-1/2">
          <HighlightedHeading heading="Decentralized Infrastructure for Invoice Financing" />
        </div>
        <div className="basis-1/2 text-[#596780] text-xl ">
          Verified & Risk Scored invoices are converted into financial
          instruments that enable secure and attractive short term loan
          prepositions for on-chain investors.
        </div>
      </div>
      {/* Accordion */}
      <div className="flex gap-[92px] mt-16">
        <div className="basis-1/2">
          {accordianData.map((item, i) => (
            <Accordion
              type="single"
              collapsible
              key={i}
              defaultValue={accordianData[0].title}
            >
              <AccordionItem value={item.title}>
                <AccordionTrigger
                  onClick={() => {
                    setIndex(i);
                    if (index !== i) {
                      setIsImgLoaded(false);
                    }
                  }}
                >
                  <div className="flex items-center gap-4 justify-start">
                    <div className="bg-[#9E2654] rounded-xl size-[50px] flex justify-center items-center">
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <span className="text-[#040815] text-2xl font-semibold ">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-[68px]">
                    {item.data.map((data, idx) => (
                      <div
                        key={idx}
                        className="font-bold text-base text-[#040815] mb-8"
                      >
                        <span>{(idx + 1).toString()}.</span>
                        <span>{data.heading}:</span>
                        <span className="text-[#596780] font-normal">
                          {data.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="basis-1/2 bg-[#F3F5F7] p-14 rounded-xl h-[692px] w-[582px] flex justify-center items-center">
          {/* Apply CSS transition for smooth image change */}
          <div className="">
            <Image
              className={cn(
                "opacity-0 transition-opacity",
                isImgLoaded && "opacity-100"
              )}
              src={accordianData[index].img}
              alt="accordion info"
              onLoad={() => setIsImgLoaded(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecentralizedInfrastructureSections;
