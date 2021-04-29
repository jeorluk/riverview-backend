export default {
  name: 'savedQuery',
  title: 'Saved Query',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'queryString',
      title: 'Query String',
      type: 'text',
    },
  ],
}
