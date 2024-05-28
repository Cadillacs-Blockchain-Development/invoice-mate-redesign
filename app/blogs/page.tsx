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
import news1 from "@/public/news1.jpg";
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
import whatsappIcon from "@/public/icons/whatsapp.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import youtubeIcon from "@/public/icons/youtube.svg";
import mediumIcon from "@/public/icons/medium.svg";
import { Post } from "@/types";
import { getBlogPosts } from "@/sanity/lib/queries";

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
  blogDetails,
}: {
  index: number;
  blogDetails: Post;
}) => {
  return (
    <Card className="mt-4 flex max-w-[400px] flex-grow flex-col overflow-hidden shadow-xl">
      <CardHeader className="p-0">
        <Image
          alt={blogDetails?.mainImage?.alt}
          src={blogDetails?.mainImage?.image}
          width={390}
          height={220}
        />
      </CardHeader>
      <CardContent className="relative mt-8 flex flex-grow items-start justify-between overflow-visible ">
        <div>
          <div
            className={`${inter.className} basis-[90%] text-2xl font-semibold text-[#101828]`}
          >
            {blogDetails.title}
          </div>
          <div className="text-[#667085] ">
            {blogDetails?.metadata?.description}
          </div>
        </div>
        <ArrowUpRight size={24} />
      </CardContent>
      <CardFooter>
        <Link
          href={`/blogs/${blogDetails.slug}`}
          className="mt-4 text-[#9E2654] transition hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};
const BlogGrid = ({ blogs }: { blogs: Post[] }) => {
  return (
    <div className=" container mx-auto mt-24 grid grid-cols-1 gap-8 border-b border-[#EAECF0] pb-16 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blogDetails, i) => (
        <NewsCard
          key={`blog-page-card-${i}`}
          index={i}
          blogDetails={blogDetails}
        />
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
        Stay Updated With InvoiceMate Social Media
      </div>
      <p className="mx-auto mt-5 text-center text-xl text-[#667085]">
        InvoiceMate takes pride in being the world’s first complete Blockchain
        Based Invoice Management System. We are committed to delivering maximum
        value to our customers by employing the latest technologies.
      </p>
      <div className="mt-16 flex items-center justify-center gap-8">
        {[whatsappIcon, facebookIcon, twitterIcon, youtubeIcon].map(
          (item, i) => (
            <Link href={"/blogs"} key={`social-icon${i}`}>
              <Image src={item} alt={`social-icon${i}`} />
            </Link>
          ),
        )}
      </div>
      <div className="mt-16 flex justify-center">
        <Image src={mediumIcon} alt="medium-icon" />
      </div>
    </div>
  );
};
const Blogs = async () => {
  const blogs: Post[] = await getBlogPosts();
  return (
    <div className="">
      <Header />
      <BlogGrid blogs={blogs} />
      <PaginationComponent />
      <Information />
      <Offices />
    </div>
  );
};

export default Blogs;
