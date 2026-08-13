import { createPreviewSecret } from '@sanity/preview-url-secret/create-secret';
import { defineConfig, type ResolveProductionUrlContext } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { resolveSanityGuidePreviewUrl } from './lib/sanity/preview';
import { schemaTypes } from './sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './sanity/env';

const previewOrigin = process.env.NEXT_PUBLIC_SANITY_PREVIEW_ORIGIN;

async function resolveGuideProductionUrl(_previousUrl: string | undefined, context: ResolveProductionUrlContext) {
  const { document, getClient, currentUser } = context;
  const slug = document._type === 'guide' && document.slug && typeof document.slug === 'object' && 'current' in document.slug
    ? document.slug.current
    : undefined;

  if (!previewOrigin || typeof slug !== 'string') return undefined;

  const client = getClient({ apiVersion: '2025-02-19' });
  return resolveSanityGuidePreviewUrl({
    origin: previewOrigin,
    fallbackOrigin: 'https://heydart.com',
    slug,
    fetchVercelProtectionBypass: () => client.fetch<string | null>(
      '*[_id == "sanity-preview-url-secret.vercel-protection-bypass" && _type == "sanity.vercelProtectionBypass"][0].secret',
    ),
    createSecret: () => createPreviewSecret(
      client,
      'sanity.studio',
      'https://heydart.com/studio',
      currentUser?.id,
    ),
  });
}

export default defineConfig({
  name: 'default', title: 'HeyDart Editorial', projectId: projectId || 'placeholder', dataset,
  basePath: '/studio', plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
  document: { productionUrl: resolveGuideProductionUrl },
});
