// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import artist from './artist'
import instrument from './instrument'
import event from './event'
import program from './program'
import theme from './theme'
import siteSettings from './siteSettings'
import youtube from './youtube'
import page from './page'
import savedQuery from './savedQuery'
import list from './list'
import textSection from './objects/textSection'
import portableText from './objects/portableText'
import figure from './objects/figure'
import imageSection from './objects/imageSection'
import simplePortableText from './objects/simplePortableText'
import link from './objects/link'
import internalLink from './objects/internalLink'
import cta from './objects/cta'
import hero from './objects/hero'
import sidebarSection from './objects/sidebarSection'
import pageSection from './objects/pageSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Object types
    pageSection,
    sidebarSection,
    portableText,
    textSection,
    figure,
    imageSection,
    simplePortableText,
    link,
    internalLink,
    cta,
    hero,

    // The following are document types which will appear
    // in the studio.
    siteSettings,
    page,
    savedQuery,
    list,
    theme,
    instrument,
    event,
    artist,
    program,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    youtube,
  ]),
})
