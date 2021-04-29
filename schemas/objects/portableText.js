import { LinkRender } from './link'
import { InternalLinkRender } from './internalLink'

export default {
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
            ],
            blockEditor: {
              icon: () => '🌍',
              render: LinkRender,
            },
          },
          {
            title: 'Internal link to another document',
            name: 'internalLink',
            type: 'reference',
            description: 'Locate a document you want to link to',
            to: [{ type: 'page' }],
            blockEditor: {
              icon: () => '🔗',
              render: InternalLinkRender,
            },
          },
        ],
      },
    },
    { type: 'figure' },
    //   { type: 'embedHTML' },
  ],
}
