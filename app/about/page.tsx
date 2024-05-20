import Image from "next/image";
import React from "react";
import statsImg from "@/public/about/about_stats.svg";
import HighlightedHeading from "@/components/common/HighlightedHeading";
import Backers from "@/components/common/Backers";
import { aboutTeamData } from "@/constants/aboutTeamData";
import headingVector from "@/public/about/heading_vector.svg";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { Dribbble, LucideLinkedin, Twitter } from "lucide-react";
import { officesData } from "@/constants/officesData";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="container mx-auto">
      <div className="my-24 flex flex-col items-center justify-center"></div>
      <div className="text-center  text-[32px] font-bold text-[#040815] sm:text-[40px]">
        About the Company
      </div>
      <p className="mx-auto text-center text-xl text-[#667085] lg:max-w-[54%]">
        Transforming traditional invoices into tokenized RWAs to unlock growth
        and investment opportunities.
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="my-24 bg-[#F9FAFC]">
      <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-24 px-6 py-24 sm:px-20 lg:flex-row">
        <div className="flex items-center justify-center rounded-xl bg-[#F3F5F7] px-8 py-32 sm:basis-1/2">
          <Image src={statsImg} alt="journey" />
        </div>
        <div className="self-start sm:basis-1/2">
          <div className="hidden lg:block">
            <HighlightedHeading
              heading="We’re only just getting started on our journey"
              vectorPos={{ right: 10 }}
            />
          </div>
          <div className="block lg:hidden">
            <HighlightedHeading
              heading="We’re only just getting started on our journey"
              vectorPos={{ right: 10 }}
              vectorHidden
            />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-[40px] font-semibold text-[#B4285C] sm:text-6xl">
                100K+
              </div>
              <div className="mt-3 text-lg font-medium text-[#101828]">
                Invoices tokenized
              </div>
            </div>
            <div>
              <div className="text-[40px] font-semibold  text-[#B4285C] sm:text-6xl">
                $200M+
              </div>
              <div className="mt-3 text-lg font-medium text-[#101828]">
                Worth Invoices Tokenized
              </div>
            </div>
            <div>
              <div className="text-[40px] font-semibold  text-[#B4285C] sm:text-6xl">
                53000+
              </div>
              <div className="mt-3 text-lg font-medium text-[#101828]">
                Businesses in Pipeline
              </div>
            </div>
            <div>
              <div className="text-[40px] font-semibold  text-[#B4285C] sm:text-6xl">
                0
              </div>
              <div className="mt-3 text-lg font-medium text-[#101828]">
                Bad Debts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  return (
    <div className="container mx-auto mt-24 px-6 py-24 sm:px-0">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <span className="relative text-[40px] font-bold text-[#040815]">
          <Image
            src={headingVector}
            alt="star"
            className="absolute left-[-46%] top-[-100%] hidden sm:block"
          />
          Meet the Team
          <Image
            src={headingVector}
            alt="star"
            className="absolute bottom-[-50%] right-[-40%] hidden scale-90 sm:block"
          />
        </span>
        <p className="mx-auto text-center text-xl text-[#667085] lg:max-w-[50%]">
          InvoiceMate Core Team - Unique Blend of RWA Tokenization, DeFi, and
          Conventional Finance Expertise.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 lg:grid-cols-4">
        {aboutTeamData.map((data, i) => (
          <div
            key={data.name}
            className={cn("flex flex-col flex-wrap gap-6", inter.className)}
          >
            <Image src={data.image} alt={data.name} />
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-[#101828]">
                {data.name}
              </span>
              <span className="text-lg text-[#9E2654]">{data.title}</span>
            </div>
            <div className="flex gap-5">
              <div>
                <Twitter color="#98A2B3" />
              </div>
              <Link href={data.links.linkedin} target="_blank">
                <LucideLinkedin color="#98A2B3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
const About = () => {
  return (
    <div className="">
      <Heading />
      <Stats />
      <Backers />
      <MeetTheTeam />
      <Offices />
    </div>
  );
};

export default About;
