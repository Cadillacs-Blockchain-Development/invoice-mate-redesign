import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'stats',
    title: 'Stats',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'assetsTokenized',
            title: 'Assets Tokenized',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'assetsFinanced',
            title: 'Assets Financed',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'badDebts',
            title: 'Bad Debts',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),

    ],
})
