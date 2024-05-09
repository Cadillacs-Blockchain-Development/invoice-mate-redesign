import React from "react";
import news1 from "@/public/news1.jpg";
import news2 from "@/public/news2.jpg";
import news3 from "@/public/news3.jpg";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/utils/fonts";
import { ArrowUpRight } from "lucide-react";

const newsCards = [
  {
    img: news1,
    title: "INVOICEMATE Q4-2023 ROUNDUP",
    link: "https://www.invoicemate.net/news/invoicemate-q4-2023-roundup/",
  },
  {
    img: news2,
    title: "InvoiceMate Pitched at the DIFC Investor Day",
    link: "https://www.invoicemate.net/news/invoicemate-pitched-at-the-cop28-uae-summit/",
  },
  {
    img: news3,
    title: "InvoiceMate Pitched at the COP28 UAE Summit",
    link: "https://www.invoicemate.net/news/invoicemate-get-pitched-at-the-cop28-uae-summit/",
  },
];

const News = () => {
  return (
    <div className={`mt-24 pb-16`}>
      <div className="mx-auto max-w-[1400px] sm:px-16">
        <h2 className="pt-10 text-center text-[32px] font-semibold text-[#040815]">
          News & Media
        </h2>
        <div className="mx-auto mt-3 px-10 text-center text-xl text-[#667085] lg:max-w-[66%] lg:px-0">
          Find out what&apos;s happening in and around InvoiceMate
        </div>
        <div className="mt-16 grid grid-cols-1 place-items-stretch items-stretch justify-center gap-8 px-6 sm:px-0 lg:grid-cols-3">
          {newsCards.map((card, i) => (
            <Link
              key={card.title}
              href={card.link}
              target="_blank"
              className="mx-auto flex flex-col"
            >
              <Card className="shadow-card-shadow mt-4 flex max-w-[400px] flex-grow flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    alt="Card background"
                    src={card.img}
                    width={390}
                    height={220}
                  />
                </CardHeader>
                <CardContent className="relative mt-8 flex flex-grow items-start justify-between overflow-visible ">
                  <div
                    className={`${inter.className} basis-[90%] text-2xl font-semibold text-[#101828]`}
                  >
                    {card.title}
                  </div>
                  <ArrowUpRight size={24} />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
