import Image, { StaticImageData } from "next/image";
import heroArrow from "@/public/home/hero_arrow.svg";
import placeholder from "@/public/placeholder.svg";
import delloitLogo from "@/public/home/delloit_logo.svg";
import award from "@/public/icons/award.svg";
import heroImg from "@/public/home/hero_image.svg";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { backers } from "@/constants/partners/backers";
import { accordianData } from "@/constants/accordianData";
import DecentralizedInfrastructureSections from "@/components/home/DecentralizedInfrastructureSections";
import HighlightedHeading from "@/components/home/HighlightedHeading";
import { decentralizedMoneyCardsData } from "@/constants/decentralizedMoneyCards";
import DecentralizedMoneyCard from "@/components/home/DecentralizedMoneyCard";
import { requestToBorrowCardsData } from "@/constants/requestToBorrowCardsData";
import { inter } from "@/utils/fonts";
import RequestForm from "@/components/home/RequestForm";
import PartnersComponent from "@/components/home/PartnersComponent";
import { partners } from "@/constants/partners/partners";

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
    <div className="mx-auto flex w-fit items-center gap-6 rounded-2xl bg-[#FCB645] px-4 py-3">
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
    <div className=" relative z-50 mx-auto max-w-[1440px]">
      <div className="absolute top-0 z-[10] h-[1066px] w-full rounded-[1355px] bg-[#9E2654] blur-[150px]"></div>
      <div className="absolute right-0 top-10 z-50 h-[562px]  w-[521px] rounded-[1355px] bg-[#5A2C66] blur-[220px]"></div>
      <div className="relative z-50 mx-auto w-1/2 pt-[176px] text-center text-[72px] font-bold text-white">
        Future of Invoicing: Tokenizing Invoices as RWAs
      </div>
      <p className="relative z-50 mx-auto mt-6 w-1/2 text-center text-2xl font-normal leading-[36px] tracking-[-2%] text-white">
        Access Yield Generating Invoices as RWAs for Secure and low volatile
        Yields
      </p>
      <div className="relative z-50 mx-auto w-fit ">
        <Image
          src={heroArrow}
          alt="arrow"
          className="absolute  left-[-90%] top-[-110%]"
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
    <div className="relative mx-auto max-w-[1440px] ">
      <div className="absolute -left-[10%] top-10 z-[10] h-[562px] w-[521px] rounded-[1355px] bg-[#5A2C66] opacity-70 blur-[180px]"></div>
      <div className=" relative z-50 mx-auto mt-14 max-w-[1440px] pb-24">
        <Badge icon={delloitLogo} title="Rising Star Winner" />
        <div className="relative">
          <div className="absolute left-[12%] top-[28%]">
            <Badge
              title="Best Invoice Financing Solution 2024"
              subTitle="MEA Awards"
            />
          </div>
          <div className="absolute right-[11%] top-[35.5%]">
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
    <div className="rounded-t-2xl bg-white px-[120px] pt-8">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex w-full items-center justify-between">
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

const Backers = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1440px]">
      <div className="text-center text-xl font-semibold uppercase text-[#667085]">
        Our Backers
      </div>
      <div className="mt-8 flex justify-center gap-8">
        {backers.map((item, i) => (
          <Image src={item} alt="backer" key={i} />
        ))}
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="bg-[#F9FAFC]">
      <div className="mx-auto  mt-24 max-w-[1440px] px-[120px] py-[112px]">
        <div className="flex items-center justify-center rounded-2xl bg-video-background-gradient pt-[18px]">
          <Image src={placeholder} alt="placeholder" />
        </div>
      </div>
    </div>
  );
};

const DecentralizedMoneySection = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1440px]">
      <div className="flex items-center justify-center">
        <div className="w-1/3 text-center">
          <HighlightedHeading
            heading="Decentralized Money Marketplace for RWAs"
            vectorPos={{ right: "-8" }}
          />
        </div>
      </div>
      <div className="mx-[120px] mb-[100px] mt-16 grid grid-cols-2 gap-6">
        {decentralizedMoneyCardsData.map((card, i) => (
          <DecentralizedMoneyCard card={card} key={i} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="mt-16 rounded-full bg-[#040815] text-base font-semibold shadow-button-priamry transition active:scale-[0.97]">
          App coming soon
        </Button>
      </div>
    </div>
  );
};

const RequestToBorrow = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1440px]">
      <div className="mx-auto w-1/2 text-center text-[40px] font-bold">
        Get access to Working Capital finance to grow your businsess
      </div>
      <div className="mt-16 flex gap-11">
        <div className="grid basis-1/2 grid-cols-2 gap-2">
          {requestToBorrowCardsData.map((card, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center rounded-xl bg-borrow-card-gradient  p-6"
            >
              <div>
                <Image src={card.icon} alt={card.title} />
              </div>
              <div className="mt-7 text-center text-lg font-bold text-white">
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
      <div className="bg-white pb-[120px]">
        <StatsSection />
        <Backers />
        <VideoSection />
        <DecentralizedInfrastructureSections />
        <DecentralizedMoneySection />
        <RequestToBorrow />
      </div>
      <div className="bg-[#F9FAFC]">
        {partners.map((item, i) => (
          <PartnersComponent
            title={item.title}
            partners={item.partners}
            key={i}
          />
        ))}
      </div>
    </main>
  );
}
