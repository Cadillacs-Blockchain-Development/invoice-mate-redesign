import { groq } from "next-sanity";
import { client } from "./client";

/**
 * These functions are used to fetch news posts data from a client using the GROQ query language in
 * a TypeScript environment.
 * @returns The code snippet provided contains three async functions for fetching news posts data from
 * a client using a query language called groq.
 */
export async function getHomeNewsPosts() {
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
/**
 * These functions fetch blog posts data from a client using a specific query language and return
 * either home blog posts, all blog posts, or a single blog post based on the provided slug.
 * @returns The code provided contains three async functions for fetching data related to blog posts
 * from a client using a query language called groq.
 */
export async function getHomeBlogPosts() {
  return client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc)[0...3] {
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
export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc) {
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
export async function getSingleBlogPost(slug: string) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
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

/**
 * The function `getPartnerLogos` fetches partner logos data including images from sanity.
 * @returns The `getPartnerLogos` function is returning an object that contains an array of partner
 * logos data. Each partner logo object in the array includes the `_key`, `heading`, and an array of
 * image URLs for that partner.
 */
export async function getPartnerLogos() {
  const result = await client.fetch(
    groq`*[_type == "partnerLogos"] [0] {
      partners[] {
        _key,
        heading,
        "images": images[].asset->url
      },
      backers[] {
        "image": asset->url
      }
    }`)

  return result;
}

/**
 * This  function fetches statistics related to assets financed, assets tokenized, and bad
 * debts from sanity.
 * @returns The `getStats` function is returning an object with statistics related to assets financed,
 * assets tokenized, and bad debts. The data is fetched from a client using a GROQ query and the
 * function is returning the result of this query.
 */
export async function getStats() {
  const result = await client.fetch(
    groq`*[_type == "stats"] [0] {
    assetsFinanced,
    assetsTokenized,
    badDebts,
    }`)

  return result;
}