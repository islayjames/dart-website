export function isPreviewConfigured(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.SANITY_API_READ_TOKEN && env.SANITY_PREVIEW_SECRET);
}

export function guidePreviewPath(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
  return `/guides/${slug}`;
}

export function guidePreviewPathFromUrl(value: string) {
  const { pathname } = new URL(value, 'https://heydart.com');
  const match = pathname.match(/^\/guides\/([a-z0-9]+(?:-[a-z0-9]+)*)$/);
  return match ? guidePreviewPath(match[1]) : null;
}

export function buildSanityGuidePreviewUrl({ origin, secret, slug, vercelProtectionBypass }: { origin: string; secret: string; slug: string; vercelProtectionBypass: string }) {
  const destination = guidePreviewPath(slug);
  if (!destination || !secret || !vercelProtectionBypass) throw new Error('Invalid Sanity guide preview request.');

  const previewUrl = new URL('/api/draft/enable', origin);
  previewUrl.searchParams.set('sanity-preview-secret', secret);
  previewUrl.searchParams.set('sanity-preview-pathname', destination);
  previewUrl.searchParams.set('sanity-preview-perspective', 'drafts');
  previewUrl.searchParams.set('x-vercel-protection-bypass', vercelProtectionBypass);
  previewUrl.searchParams.set('x-vercel-set-bypass-cookie', 'true');
  return previewUrl.toString();
}
