export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'label',
      type: 'string',
      description: 'Label that appears in page section list',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      label: 'label',
      media: 'image',
    },
    prepare({ label, media }) {
      return {
        title: `Image: ${label}`,
        subtitle: 'Image section',
        media,
      }
    },
  },
}
