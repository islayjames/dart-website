import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { isSanityConfigured } from './editorial';

export const apiVersion = '2026-07-01';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const sanityConfigured = isSanityConfigured();

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' });
export const previewClient = createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: 'drafts', token: process.env.SANITY_API_READ_TOKEN });
export const urlForImage = (source: Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]) => imageUrlBuilder(client).image(source);

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}, preview = false): Promise<T | null> {
  if (!sanityConfigured) return null;
  if (preview && !process.env.SANITY_API_READ_TOKEN) return null;
  return (preview ? previewClient : client).fetch<T>(query, params);
}
