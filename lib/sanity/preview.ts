export function isPreviewConfigured(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.SANITY_API_READ_TOKEN && env.SANITY_PREVIEW_SECRET);
}

export function guidePreviewPath(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  return `/guides/${slug}`;
}
