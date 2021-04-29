import { string } from 'prop-types'

export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
    {
      title: 'Column Widths',
      name: 'columns',
      description:
        'Enter whole numbers followed by fr. Default values are 1fr, 4fr, 1fr.',
    },
  ],
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      type: 'pageSection',
      title: 'Page sections',
    },
    {
      name: 'sidebar1',
      title: 'Left Sidebar Sections',
      type: 'sidebarSection',
    },
    {
      name: 'sidebar2',
      title: 'Right Sidebar Sections',
      type: 'sidebarSection',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description:
        'This text will appear as the tab name followed by "| Riverview Early Music"',
      fieldset: 'metadata',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
    {
      name: 'leftWidth',
      type: 'string',
      title: 'Left Sidebar Width',
      fieldset: 'columns',
    },
    {
      name: 'mainWidth',
      type: 'string',
      title: 'Main Content Width',
      fieldset: 'columns',
    },
    {
      name: 'rightWidth',
      type: 'string',
      title: 'Right Sidebar Width',
      fieldset: 'columns',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
    prepare({ title, media }) {
      return {
        title: `${title ? title : 'Riverview Early Music'}`,
        media,
      }
    },
  },
}

/*
{
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { title: 'Text Section', type: 'textSection' },
        { title: 'Image Section', type: 'imageSection' },
        { title: 'Hero Section', type: 'hero' },
        {
          name: 'artistReference',
          title: 'Artist',
          type: 'reference',
          to: [{ type: 'artist' }],
        },
        {
          name: 'eventReference',
          title: 'Event',
          type: 'reference',
          to: [{ type: 'event' }],
        },
        {
          name: 'programReference',
          title: 'Program',
          type: 'reference',
          to: [{ type: 'program' }],
        },
        {
          name: 'listReference',
          title: 'Link to a saved list',
          type: 'reference',
          to: [{ type: 'list' }],
        },
        {
          name: 'queryReference',
          title: 'Link to a query',
          type: 'reference',
          to: [{ type: 'savedQuery' }],
        },
      ],
    },
    */
