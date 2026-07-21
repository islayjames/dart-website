import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { previewClient } from '@/lib/sanity/client';
import { guidePreviewPath, guidePreviewPathFromUrl, isPreviewConfigured } from '@/lib/sanity/preview';

export async function GET(request: NextRequest) {
  if (!isPreviewConfigured()) {
    return NextResponse.json({ error: 'Draft preview is not configured.' }, { status: 503 });
  }

  let destination: string | null = null;

  if (request.nextUrl.searchParams.has('sanity-preview-secret')) {
    try {
      const { isValid, redirectTo } = await validatePreviewUrl(previewClient, request.url);
      destination = isValid && redirectTo ? guidePreviewPathFromUrl(redirectTo) : null;
    } catch {
      destination = null;
    }
  } else {
    const secret = request.nextUrl.searchParams.get('secret');
    const slug = request.nextUrl.searchParams.get('slug') || '';
    destination = secret === process.env.SANITY_PREVIEW_SECRET ? guidePreviewPath(slug) : null;
  }

  if (!destination) {
    return NextResponse.json({ error: 'Invalid preview request.' }, { status: 401 });
  }

  (await draftMode()).enable();
  return NextResponse.redirect(new URL(destination, request.url));
}
