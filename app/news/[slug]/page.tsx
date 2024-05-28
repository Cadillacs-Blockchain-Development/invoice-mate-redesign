import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { getSingleNewsPost } from "@/sanity/lib/queries";
import { Metadata, ResolvingMetadata } from "next";
import { groq } from "next-sanity";
import React from "react";
import { PortableText } from "@portabletext/react";
import { NewsPost } from "@/types";
import { RichText } from "@/components/RichText";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const news: NewsPost = await getSingleNewsPost(params.slug);
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
  const news: NewsPost = await getSingleNewsPost(slug);
  return (
    <div className="container mx-auto mt-24 sm:px-16">
      <div className="mb-8 text-4xl font-bold">{news.title}</div>
      <div className="relative mb-16 h-[400px] w-[800px]">
        <Image src={news?.mainImage?.image} alt={news?.mainImage?.alt} fill />
      </div>
      <PortableText value={news.body} components={RichText} />
    </div>
  );
};

export default SingleNewsPage;
