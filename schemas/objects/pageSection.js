export default {
  name: 'pageSection',
  title: 'Page Sections',
  type: 'array',
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
      name: 'youtubeReference',
      title: 'YouTube',
      type: 'reference',
      to: [{ type: 'youtube' }],
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
}
