export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    { name: 'description', title: 'Description', type: 'blockContent' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'ticketLink', title: 'Ticket Link', type: 'url' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'program', title: 'Program', type: 'file' },
    { name: 'video', title: 'Video', type: 'youtube' },
  ],
}
