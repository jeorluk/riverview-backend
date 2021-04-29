export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'reference',
      to: { type: 'theme' },
    },
    {
      name: 'backgrounds',
      title: 'Backgrounds',
      type: 'array',
      of: [
        {
          title: 'Background',
          name: 'background',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              title: 'Path',
              name: 'path',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'banner',
      title: 'BannerImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'about',
      title: 'About Info',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    // {
    //   name: '',
    //   title: '',
    //   type: '',
    // },
    // {
    //   name: '',
    //   title: '',
    //   type: '',
    // },
  ],
}
