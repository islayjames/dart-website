import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './sanity/env';

export default defineConfig({
  name: 'default', title: 'HeyDart Editorial', projectId: projectId || 'placeholder', dataset,
  basePath: '/studio', plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
  document: { productionUrl: async (_prev, { document }) => document._type === 'guide' && document.slug && typeof document.slug === 'object' && 'current' in document.slug ? `/guides/${document.slug.current}` : undefined },
});
