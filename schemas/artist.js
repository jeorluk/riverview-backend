export default {
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'featured',
      title: 'Featured Artist',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'intro',
      title: 'Artist Intro Text',
      type: 'blockContent',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
    {
      name: 'instruments',
      title: 'Instruments',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'instrument' } }],
    },
  ],
}
