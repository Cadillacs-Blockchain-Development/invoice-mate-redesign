import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { inter } from "@/utils/fonts";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import newsImg from "@/public/news/news_img.png";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Offices from "@/components/common/Offices";
import { getNewsPosts } from "@/sanity/lib/queries";
import { Post } from "@/types";

export const revalidate = 10;

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="my-24 flex flex-col items-center justify-center"></div>
      <div className="text-center text-[32px] font-bold text-[#040815] sm:text-[40px]">
        InvoiceMate News
      </div>
      <p className="mx-auto text-center text-xl text-[#667085] lg:max-w-[54%]">
        Stay informed about invoiceMate’s World
      </p>
      <div className="mx-auto mt-10 flex flex-col gap-2 lg:max-w-[40%]">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            className="rounded-full"
            placeholder="Enter your email"
          />
          <Button className="rounded-full bg-[#9E2654] hover:bg-[#9e2654e9]">
            Subscribe
          </Button>
        </div>
        <div className={cn("text-sm text-[#667085]", inter.className)}>
          We care about your data in our{" "}
          <span className="underline">privacy policy</span>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({
  index,
  newsDetails,
}: {
  index: number;
  newsDetails: Post;
}) => {
  return (
    <Card className="mt-4 flex max-w-[400px] flex-grow flex-col overflow-hidden shadow-xl">
      <CardHeader className="p-0">
        <Image
          alt={newsDetails?.mainImage?.alt}
          src={newsDetails?.mainImage?.image}
          width={390}
          height={220}
        />
      </CardHeader>
      <CardContent className="relative mt-8 flex flex-grow items-start justify-between overflow-visible ">
        <div>
          <div
            className={`${inter.className} basis-[90%] text-2xl font-semibold text-[#101828]`}
          >
            {newsDetails.title}
          </div>
          <div className="text-[#667085] ">
            {newsDetails?.metadata?.description}
          </div>
        </div>
        <ArrowUpRight size={24} />
      </CardContent>
      <CardFooter>
        <Link
          href={`/news/${newsDetails.slug}`}
          className="mt-4 text-[#9E2654] transition hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};
const NewsGrid = ({ news }: { news: Post[] }) => {
  return (
    <div className=" container mx-auto mt-24 grid grid-cols-1 gap-8 border-b border-[#EAECF0] pb-16 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((newsDetails, i) => (
        <NewsCard key={i} index={i} newsDetails={newsDetails} />
      ))}
    </div>
  );
};

const PaginationComponent = () => {
  return (
    <div className="container mx-auto mt-5 w-full">
      <Pagination className="w-full">
        <PaginationContent className="flex w-full justify-between">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <div className="flex items-center">
            <PaginationItem className="rounded-[8px] bg-[#FFB5D0] text-[#B4285C]">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      ;
    </div>
  );
};

const Information = () => {
  return (
    <div className="container mx-auto ">
      <div className="my-24 flex flex-col items-center justify-center"></div>
      <div className="mx-auto text-center text-[32px] font-bold text-[#040815] sm:text-[40px] lg:max-w-[60%]">
        Invoice Mate, The Blockchain Based Invoice Management System
      </div>
      <p className="mx-auto mt-5 text-center text-xl text-[#667085]">
        To know more about InvoiceMate, The Blockchain & AI Powered Invoice
        Management System, check the latest from our 
        <span className="cursor-pointer font-bold text-[#9E2654]">Blog</span>
         section. You can find the latest articles covering a wide range of
        topics. Here you will find everything you need to know about invoice
        management, processing, automation, and financing. You can also find
        reads about blockchain, DeFi, and fintech. Our blog section is regularly
        updated to provide you with the latest and the most relevant information
        about invoice management. So keep visiting to learn about what are the
        latest trends in the blockchain-based fintech industry. Stay Ahead, Stay
        Updated with the latest from InvoiceMate, the future of Invoice
        Processing and Financing.
      </p>
      <div className="mt-16 overflow-hidden rounded-2xl">
        <Image
          src={newsImg}
          alt="news image"
          className="min-h-[161px] sm:min-h-[590px]"
        />
      </div>
    </div>
  );
};
const News = async () => {
  const news: Post[] = await getNewsPosts();
  return (
    <div className="">
      <Header />
      <NewsGrid news={news} />
      <PaginationComponent />
      <Information />
      <Offices />
    </div>
  );
};

export default News;
