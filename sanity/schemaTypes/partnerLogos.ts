import { defineField, defineType } from "sanity";

export default defineType({
    name: "partnerLogos",
    title: "Partner Logos",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "partners",
            title: "Partners",
            type: "array",
            of: [{
                type: "object",
                fields: [
                    {
                        name: "heading",
                        title: "Heading",
                        type: "string",
                        validation: (Rule) => Rule.required(),
                    },
                    {
                        name: "images",
                        title: "Images",
                        type: "array",
                        of: [{ type: "image" }],
                        options: {
                            layout: 'grid'
                        },
                        validation: (Rule) => Rule.min(1),
                    }
                ]
            }],
            validation: (Rule) => Rule.min(1),
        }),
        defineField({
            name: "backers",
            title: "Backers",
            type: "array",
            of: [{ type: "image" }],
            options: {
                layout: 'grid'
            },
            validation: (Rule) => Rule.min(1),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: "featuredBy.0",
        },
    },
});
