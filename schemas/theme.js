export default {
  name: 'theme',
  title: 'Themes',
  type: 'document',
  fields: [
    { name: 'name', title: 'Theme Name', type: 'string' },
    {
      name: 'color',
      title: 'Colors',
      type: 'object',
      fields: [
        {
          name: 'lightShade',
          title: 'Light Shade',
          type: 'color',
        },
        {
          name: 'lightAccent',
          title: 'Light Accent',
          type: 'color',
        },
        {
          name: 'main',
          title: 'Main Color',
          type: 'color',
        },

        {
          name: 'darkAccent',
          title: 'Dark Accent',
          type: 'color',
        },
        {
          name: 'darkShade',
          title: 'DarkShade',
          type: 'color',
        },
      ],
    },
  ],
}
