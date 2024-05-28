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
