export default {
  name: 'sidebarSection',
  title: 'Sidebar Section',
  type: 'array',
  of: [
    {
      name: 'sidebarImage',
      title: 'Image Section',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        {
          name: 'imageSection',
          title: 'Image Section',
          type: 'imageSection',
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
          label: 'imageSection.label',
        },
        prepare({ mobile, label }) {
          const title = `Image: ${label}`
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: `${title}`,
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarHero',
      title: 'Hero Section',

      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        { name: 'hero', title: 'Hero Section', type: 'hero' },
      ],
      preview: {
        select: {
          mobile: 'mobile',
          label: 'hero.label',
        },
        prepare({ mobile, label }) {
          const title = `Hero: ${label}`
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: `${title}`,
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarText',
      title: 'Text Section',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        { name: 'textInput', title: 'Text Section', type: 'textSection' },
      ],
      preview: {
        select: {
          mobile: 'mobile',
          label: 'textInput.label',
        },
        prepare({ mobile, label }) {
          const title = `Text: ${label}`
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: `${title}`,
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarArtistReference',
      title: 'Artist',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        {
          name: 'artistReference',
          title: 'Artist',
          type: 'reference',
          to: [{ type: 'artist' }],
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
        },
        prepare({ mobile }) {
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: 'Artist',
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarEventReference',
      title: 'Event',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },

        {
          name: 'eventReference',
          title: 'Event',
          type: 'reference',
          to: [{ type: 'event' }],
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
        },
        prepare({ mobile }) {
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: 'Event',
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarProgramReference',
      title: 'Program',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        {
          name: 'programReference',
          title: 'Program',
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
        },
        prepare({ mobile }) {
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: 'Program',
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarListReference',
      title: 'Ordered List',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        {
          name: 'listReference',
          title: 'Link to a saved list',
          type: 'reference',
          to: [{ type: 'list' }],
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
        },
        prepare({ mobile }) {
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: 'List',
            subtitle: `${visible}`,
          }
        },
      },
    },
    {
      name: 'sidebarQueryReference',
      title: 'Saved Query',
      type: 'object',
      fields: [
        {
          name: 'mobile',
          title: 'Show in Mobile',
          description: 'Turn on to show this section in mobile layout',
          type: 'boolean',
        },
        {
          name: 'queryReference',
          title: 'Link to a query',
          type: 'reference',
          to: [{ type: 'savedQuery' }],
        },
      ],
      preview: {
        select: {
          mobile: 'mobile',
        },
        prepare({ mobile }) {
          const visible = mobile ? 'Show' : 'Hide'
          return {
            title: 'Saved Query',
            subtitle: `${visible}`,
          }
        },
      },
    },
  ],
}

/*
preview: {
    select: {
      label: 'label',
    },
    prepare({ label }) {
      return {
        title: `${label}`,
        subtitle: 'Text section',
      }
    },
  */
