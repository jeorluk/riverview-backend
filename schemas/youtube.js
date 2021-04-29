import React from 'react'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

const Preview = ({ title, url, caption }) => {
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

const Component = () => {
  return <div>Test component</div>
}

export default {
  name: 'youtube',
  type: 'document',
  title: 'YouTube',
  fields: [
    { name: 'title', type: 'string', title: 'Video Title' },
    { name: 'caption', type: 'string', title: 'Caption' },
    {
      name: 'url',
      type: 'string',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     url: 'url',
  //     caption: 'caption',
  //   },
  //   component: Preview,
  // },
  // component: Component,
}
