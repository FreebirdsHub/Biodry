import {defineField, defineType} from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'propertyType',
      type: 'string',
      title: 'Property Type',
      options: {
        list: ['Villa', 'Apartment', 'Commercial', 'Heritage'],
      },
    }),
    defineField({
      name: 'challenge',
      type: 'text',
      title: 'The Challenge',
    }),
    defineField({
      name: 'solution',
      type: 'text',
      title: 'The Solution',
    }),
    defineField({
      name: 'result',
      type: 'text',
      title: 'The Result',
    }),
    // Image gallery placeholder
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    }),
  ],
})
