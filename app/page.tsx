import React from "react";
import Image, { StaticImageData } from "next/image";
import heroArrow from "@/public/home/hero_arrow.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DecentralizedInfrastructureSection from "@/components/home/DecentralizedInfrastructureSection";
import HighlightedHeading from "@/components/common/HighlightedHeading";
import { decentralizedMoneyCardsData } from "@/constants/decentralizedMoneyCards";
import DecentralizedMoneyCard from "@/components/home/DecentralizedMoneyCard";
import { requestToBorrowCardsData } from "@/constants/requestToBorrowCardsData";
import { inter } from "@/utils/fonts";
import RequestForm from "@/components/home/RequestForm";
import PartnersComponent from "@/components/home/PartnersComponent";
import { partners } from "@/constants/partners/partners";
import Blogs from "@/components/home/Blogs";
import News from "@/components/home/News";
import Backers from "@/components/common/Backers";
import delloitLogo from "@/public/home/delloit_logo.svg";
import award from "@/public/icons/award.svg";
import heroImg from "@/public/home/hero_image.svg";

const Badge = ({
  icon,
  title,
  subTitle,
}: {
  icon?: StaticImageData;
  title: string;
  subTitle?: string;
}) => {
  return (
    <div className="mx-auto flex w-full items-center gap-6 rounded-2xl bg-[#FCB645] px-4 py-3 sm:w-fit">
      <div>
        <Image src={award} alt="award" />
      </div>
      <div className={cn("flex flex-col gap-4", icon && "mr-[90px]")}>
        {icon && (
          <Image src={icon} alt="delloit Logo" className="object-[1px_0]" />
        )}
        <span className="text-xl font-bold text-[#9E2654]">{title}</span>
        {subTitle && (
          <span className="text-base font-bold text-black">{subTitle}</span>
        )}
      </div>
    </div>
  );
};

const HeroPrimary = () => {
  return (
    <div className="relative z-50 mx-auto max-w-[1400px] overflow-x-clip px-8 xl:overflow-x-visible xl:px-0">
      <div className="absolute top-0 z-[10] h-[1066px] w-full rounded-[1355px] bg-[#9E2654] blur-[150px]"></div>
      <div className="absolute right-0 top-10 z-50 h-[562px]  w-[521px] rounded-[1355px] bg-[#5A2C66] blur-[220px]"></div>
      <div className="relative z-50 mx-auto pt-[176px] text-center text-[32px] font-bold text-white sm:text-[72px] xl:w-1/2">
        Future of Invoicing: Tokenizing Invoices as RWAs
      </div>
      <p className="relative z-50 mx-auto mt-6 text-center text-2xl font-normal leading-[36px] tracking-[-2%] text-white xl:w-1/2 xl:px-0">
        Access Yield Generating Invoices as RWAs for Secure and low volatile
        Yields
      </p>
      <div className="relative z-50 mx-auto w-fit ">
        <Image
          src={heroArrow}
          alt="arrow"
          className="absolute left-[-90%] top-[-110%] hidden sm:block"
        />
        <div className="mt-12 flex justify-center">
          <Button className="rounded-full bg-[#040815] text-base font-semibold transition active:scale-[0.97] ">
            App coming soon
          </Button>
        </div>
      </div>
    </div>
  );
};

const HeroSecondary = () => {
  return (
    <div
      className="relative mx-auto max-w-[1400px] overflow-x-clip sm:overflow-x-visible"
      id="heroSecondary"
    >
      <div className="absolute -left-[10%] top-10 z-[10] h-[562px] w-[521px] rounded-[1355px] bg-[#5A2C66] opacity-70 blur-[180px]"></div>
      <div className="relative z-50 mx-auto mt-14 max-w-[1400px] pb-24">
        <div className="mx-auto w-[94%] sm:w-full">
          <Badge icon={delloitLogo} title="Rising Star Winner" />
        </div>
        <div className="mx-auto mt-2 flex w-[94%] flex-col gap-2 sm:hidden">
          <Badge
            title="Best Invoice Financing Solution 2024"
            subTitle="MEA Awards"
          />
          <Badge title="Best Blockchain Startup" subTitle="GB Tech Awards" />
        </div>
        <div className="relative">
          <div className="absolute left-[8%] top-[18%] hidden sm:block  xl:left-[12%] xl:top-[28%]">
            <Badge
              title="Best Invoice Financing Solution 2024"
              subTitle="MEA Awards"
            />
          </div>
          <div className="absolute right-[11%] top-[48%] hidden sm:block xl:right-[11%] xl:top-[35.5%]">
            <Badge title="Best Blockchain Startup" subTitle="GB Tech Awards" />
          </div>
          <Image src={heroImg} alt="hero Img" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="rounded-t-2xl bg-white px-10  pt-8 xl:px-[120px]">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <div className="flex flex-col items-center justify-between">
            <span className="text-[32px] font-bold text-[#58142D] ">
              $201,983,748
            </span>
            <span className="text-base font-medium text-[#58142D]">
              Assets Tokenized
            </span>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-[32px] font-bold text-[#58142D] ">
              $6,192,129
            </span>
            <span className="text-base font-medium text-[#58142D] ">
              Assets Financed
            </span>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-[32px] font-bold text-[#58142D] ">$0</span>
            <span className="text-base font-medium text-[#58142D] ">
              Bad Debts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="mx-auto mt-24 h-auto max-w-[1400px] px-10 py-[112px] xl:px-[120px]">
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-video-background-gradient p-2 sm:p-[18px]">
          <iframe
            className="h-full w-full rounded-2xl"
            src="https://www.youtube.com/embed/HSc7glBp2Bs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; aulg:toplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const DecentralizedMoneySection = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1400px] px-10 xl:px-0">
      <div className="flex items-center justify-center">
        <div className="text-center xl:w-1/3">
          <HighlightedHeading
            heading="Decentralized Money Marketplace for RWAs"
            vectorPos={{ right: -8 }}
          />
        </div>
      </div>
      <div className="mx-10 mb-[100px] mt-16 grid grid-cols-1 gap-6 xl:mx-[120px] xl:grid-cols-2">
        {decentralizedMoneyCardsData.map((card, i) => (
          <DecentralizedMoneyCard card={card} key={card.title} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-full bg-[#040815] text-base font-semibold shadow-button-priamry transition active:scale-[0.97]">
          App coming soon
        </Button>
      </div>
    </div>
  );
};

const RequestToBorrow = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1400px] px-6 xl:px-0" id="borrow">
      <div className="mx-auto text-center text-[40px] font-bold xl:w-1/2">
        Get access to Working Capital finance to grow your business
      </div>
      <div className="mt-16 flex flex-col gap-11 xl:flex-row">
        <div className="grid basis-1/2 grid-cols-2 gap-2">
          {requestToBorrowCardsData.map((card, i) => (
            <div
              key={card.title}
              className="flex aspect-square flex-col items-center justify-center rounded-xl bg-borrow-card-gradient p-6"
            >
              <div>
                <Image src={card.icon} alt={card.title} />
              </div>
              <div
                className={cn(
                  "mt-7 text-center font-bold text-white sm:text-xl",
                  i === 3 && "text-sm sm:text-xl",
                )}
              >
                {card.title}
              </div>
            </div>
          ))}
        </div>
        <div className={`${inter.className} flex basis-1/2 flex-col`}>
          <div className="text=[#101828] text-4xl font-semibold">
            Request To Borrow
          </div>
          <div className="mt-12 h-full">
            <RequestForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <main className="bg-[#55122B] ">
      <HeroPrimary />
      <HeroSecondary />
      <div className="bg-white">
        <StatsSection />
        <Backers />
        <VideoSection />
        <DecentralizedInfrastructureSection />
        <DecentralizedMoneySection />
        <RequestToBorrow />
        <div className="mt-24 bg-[#F9FAFC]">
          {partners.map((item, i) => (
            <PartnersComponent
              title={item.title}
              partners={item.partners}
              key={item.title}
            />
          ))}
        </div>
        <News />
        <Blogs />
      </div>
    </main>
  );
}
