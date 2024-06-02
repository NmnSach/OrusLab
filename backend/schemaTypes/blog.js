import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
})
