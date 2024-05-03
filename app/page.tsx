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
    <div className="bg-[#FCB645] w-fit rounded-2xl mx-auto flex gap-6 items-center px-4 py-3">
      <div>
        <Image src={award} alt="award" />
      </div>
      <div className={cn("flex flex-col gap-4", icon && "mr-[90px]")}>
        {icon && (
          <Image src={icon} alt="delloit Logo" className="object-[1px_0]" />
        )}
        <span className="text-[#9E2654] text-xl font-bold">{title}</span>
        {subTitle && (
          <span className="text-black text-base font-bold">{subTitle}</span>
        )}
      </div>
    </div>
  );
};

const HeroPrimary = () => {
  return (
    <div className=" max-w-[1440px] mx-auto relative z-50">
      <div className="bg-[#9E2654] w-full h-[1066px] absolute top-0 blur-[150px] rounded-[1355px] z-[10]"></div>
      <div className="bg-[#5A2C66] w-[521px] h-[562px] absolute top-10  right-0 blur-[220px] rounded-[1355px] z-50"></div>
      <div className="pt-[176px] w-1/2 mx-auto text-center text-white font-bold text-[72px] relative z-50">
        Future of Invoicing: Tokenizing Invoices as RWAs
      </div>
      <p className="w-1/2 mx-auto text-center text-white text-2xl font-normal mt-6 leading-[36px] tracking-[-2%] relative z-50">
        Access Yield Generating Invoices as RWAs for Secure and low volatile
        Yields
      </p>
      <div className="relative w-fit mx-auto z-50 ">
        <Image
          src={heroArrow}
          alt="arrow"
          className="top-[-110%]  left-[-90%] absolute"
        />
        <div className="flex justify-center mt-12">
          <Button className="bg-[#040815] rounded-full font-semibold text-base active:scale-[0.97] transition ">
            App coming soon
          </Button>
        </div>
      </div>
    </div>
  );
};

const HeroSecondary = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto ">
      <div className="bg-[#5A2C66] w-[521px] h-[562px] absolute top-10 -left-[10%] blur-[180px] rounded-[1355px] z-[10] opacity-70"></div>
      <div className=" max-w-[1440px] mx-auto relative z-50 pb-24 mt-14">
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
    <div className="bg-white rounded-t-2xl pt-8 px-[120px]">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-center justify-between">
            <span className="text-[#58142D] text-[32px] font-bold ">
              $201,983,748
            </span>
            <span className="text-[#58142D] text-base font-medium">
              Assets Tokenized
            </span>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-[#58142D] text-[32px] font-bold ">
              $6,192,129
            </span>
            <span className="text-[#58142D] text-base font-medium ">
              Assets Financed
            </span>
          </div>
          <div className="flex flex-col items-center justify-between">
            <span className="text-[#58142D] text-[32px] font-bold ">$0</span>
            <span className="text-[#58142D] text-base font-medium ">
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
    <div className="mt-24 max-w-[1440px] mx-auto">
      <div className="uppercase text-center text-[#667085] font-semibold text-xl">
        Our Backers
      </div>
      <div className="flex justify-center gap-8 mt-8">
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
      <div className="mt-24  max-w-[1440px] mx-auto px-[120px] py-[112px]">
        <div className="bg-video-background-gradient flex justify-center items-center pt-[18px] rounded-2xl">
          <Image src={placeholder} alt="placeholder" />
        </div>
      </div>
    </div>
  );
};

const DecentralizedMoneySection = () => {
  return (
    <div className="mt-24 max-w-[1440px] mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-1/3 text-center">
          <HighlightedHeading
            heading="Decentralized Money Marketplace for RWAs"
            vectorPos={{ right: "-8" }}
          />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-[#55122B]">
      <HeroPrimary />
      <HeroSecondary />
      <div className="bg-white">
        <StatsSection />
        <Backers />
        <VideoSection />
        <DecentralizedInfrastructureSections />
        <DecentralizedMoneySection />
      </div>
    </main>
  );
}
