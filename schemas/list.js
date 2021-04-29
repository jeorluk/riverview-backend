export default {
  name: 'list',
  title: 'Ordered List',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'List Name',
      type: 'string',
    },
    {
      name: 'listItems',
      type: 'array',
      of: [
        { name: 'artist', type: 'reference', to: { type: 'artist' } },
        { name: 'program', type: 'reference', to: { type: 'program' } },
        { name: 'video', type: 'reference', to: { type: 'youtube' } },
      ],
    },
  ],
}
