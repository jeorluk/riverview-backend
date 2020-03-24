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
