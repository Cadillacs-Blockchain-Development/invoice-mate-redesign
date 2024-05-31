import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import blog from './schemaTypes/blog'
import news from './schemaTypes/news'
import author from './schemaTypes/author'
import partnerLogos from './schemaTypes/partnerLogos'
import stats from './schemaTypes/stats.'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, news, author, category, blockContent, partnerLogos, stats],
}
