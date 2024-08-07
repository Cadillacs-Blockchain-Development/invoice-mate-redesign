import { PortableTextBlock } from "sanity";

export type HomePost = {
    _id: string;
    _createdAt: string;
    title: string;
    body: PortableTextBlock[];
    categories: string[];
    mainImage: { alt: string; image: string };
    metadata: any;
    slug: string;
};
export type Post = {
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
export interface Partner {
    _key: string;
    heading: string;
    images: string[];
}

export interface PartnerLogos {
    partners: Partner[];
    backers: {
        image: string;
    }[];
}

export type Stats = {
    assetsTokenized: string;
    assetsFinanced: string;
    badDebts: string;
};
