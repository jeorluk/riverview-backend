export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: 'Label that appears in page section list',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare({ label }) {
      return {
        title: `${label}`,
        subtitle: 'Text section',
      }
    },
  },
}
