import React from "react";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { inter } from "@/utils/fonts";

const blogCards = [
  {
    img: blog1,
    title: "Financial Freedom with DeFi",
    link: "https://www.invoicemate.net/financial-freedom-with-defi/",
  },
  {
    img: blog2,
    title: "The Basics of RWA Tokenization",
    link: "https://www.invoicemate.net/the-basics-of-rwa-tokenization/",
  },
  {
    img: blog3,
    title: "The Basics of Revenue-Based Financing",
    link: "https://www.invoicemate.net/the-basics-of-revenue-based-financing/",
  },
];

const Blogs = () => {
  return (
    <div className={`mt-24 pb-16`}>
      <div className=" container mx-auto sm:px-16">
        <h2 className="pt-10 text-center text-[32px] font-semibold text-[#040815]">
          Blog
        </h2>
        <Link
          href={"/blogs"}
          className="float-end mt-4 flex items-center gap-1 text-[#9E2654] transition hover:underline"
        >
          <span> View All</span>
          <span>
            <ArrowRightCircle />
          </span>
        </Link>
        <div className="mx-auto mt-3 px-10 text-center text-xl text-[#667085] lg:max-w-[66%] lg:px-0">
          Check more posts in the blog for more features. We will keep you
          updated on the latest features. It will be interesting!
        </div>
        <div className="mt-16 grid grid-cols-1 place-items-stretch items-stretch justify-center gap-8 px-6 sm:px-0 lg:grid-cols-3">
          {blogCards.map((card, i) => (
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

export default Blogs;
