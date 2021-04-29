import { LinkRender } from './link'
import { InternalLinkRender } from './internalLink'

export default {
  title: 'Simple Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [],
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
    // {
    //   type: 'embedHTML',
    // },
  ],
}
