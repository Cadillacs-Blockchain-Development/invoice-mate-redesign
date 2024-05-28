import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { getSingleNewsPost } from "@/sanity/lib/queries";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { PortableText } from "@portabletext/react";
import { Post } from "@/types";
import { RichText } from "@/components/RichText";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export const revalidate = 10;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const news: Post = await getSingleNewsPost(params.slug);
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(news?.mainImage?.image);

  return {
    authors: news?.author?.name ? [{ name: news?.author?.name }] : [],
    title: news?.title,
    description: news?.metadata?.description || "",
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}
const SingleNewsPage = async ({ params: { slug } }: Props) => {
  const news: Post = await getSingleNewsPost(slug);
  return (
    <div className="container mx-auto mt-24 sm:px-16">
      <div className="relative mx-auto mb-8 flex items-center justify-center ">
        <Image
          src={news?.mainImage?.image}
          alt={news?.mainImage?.alt}
          height={576}
          width={1024}
        />
      </div>
      <div className="mb-16 text-3xl font-semibold text-[#5a2c66]">
        {news.title}
      </div>
      <PortableText value={news.body} components={RichText} />
    </div>
  );
};

export default SingleNewsPage;
