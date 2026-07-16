import { type SchemaTypeDefinition } from 'sanity'

import project from './project'
import message from './message'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, message],
}
