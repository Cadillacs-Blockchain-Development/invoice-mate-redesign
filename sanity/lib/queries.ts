import { groq } from "next-sanity";
import { client } from "./client";

export async function getNewsPosts() {
    return client.fetch(
        groq`*[_type == "news"] | order(publishedAt desc)[0...3] {
      _id,
      _createdAt,
      title,
      categories,
      mainImage {alt, "image": asset->url},
      metadata,
      "slug": slug.current,
    }`,
    );
}
export async function getSingleNewsPost(slug: string) {
    return client.fetch(
        groq`*[_type == "news" && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      body,
      categories,
      mainImage {alt, "image": asset->url},
      metadata,
      "slug": slug.current,
    }`,
        { slug },
    );
}
