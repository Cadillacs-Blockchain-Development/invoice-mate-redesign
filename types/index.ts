import { PortableTextBlock } from "sanity";

export type HomeNewsPost = {
    _id: string;
    _createdAt: string;
    title: string;
    body: PortableTextBlock[];
    categories: string[];
    mainImage: { alt: string; image: string };
    metadata: any;
    slug: string;
};
export type NewsPost = {
    _id: string;
    _createdAt: string;
    title: string;
    body: PortableTextBlock[];
    categories: string[];
    mainImage: { alt: string; image: string };
    metadata: any;
    slug: string;
    author?: {
        name: string;
    }
};
