import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-4 flex items-center justify-center">
          <Image
            src={urlForImage(value)}
            alt="Post image"
            width={670}
            height={360}
            className="rounded-[16px] object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-6 text-2xl font-bold text-[#5a2c66]">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-6 text-2xl font-medium text-[#5a2c66]">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-4 text-center text-2xl font-bold ">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-4 text-center text-2xl font-bold ">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="my-4 font-semibold">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l border-l-[#DFE1F4] py-5 pl-5 text-[19.2px] italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};
