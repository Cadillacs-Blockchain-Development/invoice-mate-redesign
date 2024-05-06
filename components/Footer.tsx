import footerLinks from "@/constants/footerLinks";
import React from "react";
import footerLogo from "@/public/footer_logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mx-auto max-w-[1400px] bg-white px-6 pb-16 pt-8 lg:px-[100px] lg:pt-[120px]">
      <div className="flex flex-col justify-center border-b border-[#CEBEFE] pb-16 lg:grid-rows-1 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center">
          <Image
            src={footerLogo}
            alt="Logo"
            width={157}
            height={32}
            className="lg:self-start"
          />
          <div className="mb-8 mt-8 text-center text-lg text-[#596780] sm:text-start">
            Unlocking Business Growth and Investment Opportunities.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-24 ">
          {footerLinks.map((links, i) => (
            <div key={links.heading}>
              <span className="text-xl font-semibold text-[#1A202C]">
                {links.heading}
              </span>
              <div className="mt-6 flex cursor-pointer flex-col gap-6 text-[#596780]">
                {links.links.map((item, i) => (
                  <div key={item.link}>{item.title}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between sm:flex-row sm:gap-8 ">
        <div className="flex flex-col text-lg font-semibold text-[#1A202C] sm:flex-row sm:gap-8">
          <span>Building The Future of Invoicing</span>
          <span className="hidden sm:block">|</span>
          <span>Terms & Conditions</span>
          <span className="hidden sm:block">|</span>
          <span>Cookie Policy</span>
        </div>
        <div className="font-medium text-[#596780]">© Invoicemate 2024</div>
      </div>
    </div>
  );
};

export default Footer;
