import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { guidePreviewPath, isPreviewConfigured } from '@/lib/sanity/preview';

export async function GET(request: NextRequest) {
  if (!isPreviewConfigured()) {
    return NextResponse.json({ error: 'Draft preview is not configured.' }, { status: 503 });
  }

  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug') || '';
  const destination = guidePreviewPath(slug);
  if (secret !== process.env.SANITY_PREVIEW_SECRET || !destination) {
    return NextResponse.json({ error: 'Invalid preview request.' }, { status: 401 });
  }

  (await draftMode()).enable();
  return NextResponse.redirect(new URL(destination, request.url));
}
