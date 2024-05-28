import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { getSingleBlogPost } from "@/sanity/lib/queries";
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
  const blog: Post = await getSingleBlogPost(params.slug);
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(blog?.mainImage?.image);

  return {
    authors: blog?.author?.name ? [{ name: blog?.author?.name }] : [],
    title: blog?.title,
    description: blog?.metadata?.description || "",
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}
const SingleBlogPage = async ({ params: { slug } }: Props) => {
  const blog: Post = await getSingleBlogPost(slug);
  return (
    <div className="container mx-auto mt-24 sm:px-16">
      <div className="relative mx-auto mb-8 flex items-center justify-center ">
        <Image
          src={blog?.mainImage?.image}
          alt={blog?.mainImage?.alt}
          height={576}
          width={1024}
        />
      </div>
      <div className="mb-16 text-3xl font-semibold text-[#5a2c66]">
        {blog.title}
      </div>
      <PortableText value={blog.body} components={RichText} />
    </div>
  );
};

export default SingleBlogPage;
