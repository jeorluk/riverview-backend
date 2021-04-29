import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId())
      ),
    ])

const SpecialView = ({ document }) => {
  return <div>This is my special view</div>
}

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType == 'youtube') {
    // Give all documents of type myDocument the JSON preview,
    // as well as the default form view
    return S.document().views([
      S.view.form(),
      S.view.component(SpecialView).title('Special View'),
    ])
  }
}
