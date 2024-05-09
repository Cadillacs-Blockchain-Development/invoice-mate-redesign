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
import HighlightedHeading from "../common/HighlightedHeading";

const DecentralizedInfrastructureSection = () => {
  const [index, setIndex] = useState(0);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <div className="mx-auto mt-24 max-w-[1400px] px-10 xl:px-0">
      <div className="flex flex-col gap-8 xl:flex-row xl:gap-[92px]">
        <div className="xl:basis-1/2">
          <HighlightedHeading
            heading="Decentralized Infrastructure for Invoice Financing"
            vectorPos={{ right: -4 }}
          />
        </div>
        <div className="text-xl text-[#596780] xl:basis-1/2 ">
          Verified & Risk Scored invoices are converted into financial
          instruments that enable secure and attractive short term loan
          prepositions for on-chain investors.
        </div>
      </div>
      {/* Accordion */}
      <div className="mt-16 flex flex-col gap-8 xl:flex-row xl:gap-[92px]">
        <div className="basis-1/2">
          <Accordion
            type="single"
            collapsible
            defaultValue={accordianData[0].title}
          >
            {accordianData.map((item, i) => (
              <AccordionItem value={item.title} key={item.title}>
                <AccordionTrigger
                  onClick={() => {
                    setIndex(i);
                    if (index !== i) {
                      setIsImgLoaded(false);
                    }
                  }}
                >
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex size-[50px] items-center justify-center rounded-xl bg-[#9E2654]">
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <span className="basis-[90%] text-left text-xl font-semibold text-[#040815] sm:text-2xl ">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col pl-[68px] xl:flex-row">
                    <div>
                      {item.data.map((data, idx) => (
                        <div
                          key={idx}
                          className="mb-8 text-base font-bold text-[#040815]"
                        >
                          <span>{(idx + 1).toString()}.</span>
                          <span>{data.heading}: </span>
                          <span
                            className="font-normal text-[#596780]"
                            dangerouslySetInnerHTML={{
                              __html: data.desc.replace(
                                /\*\*(.*?)\*\*/g,
                                "<strong>$1</strong>",
                              ),
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      className={cn(
                        "block transition xl:hidden",
                        index === i ? "h-full" : "h-0",
                      )}
                    >
                      <div className="">
                        <Image
                          className={cn(
                            "opacity-0 transition-opacity",
                            isImgLoaded && "opacity-100",
                          )}
                          src={accordianData[index].img}
                          alt="accordion info"
                          onLoad={() => setIsImgLoaded(true)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden h-[692px] w-[582px] basis-1/2 items-center justify-center rounded-xl bg-[#F3F5F7] p-14 xl:flex">
          <div className="">
            <Image
              className={cn(
                "opacity-0 transition-opacity",
                isImgLoaded && "opacity-100",
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

export default DecentralizedInfrastructureSection;
