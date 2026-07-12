'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    return <div className="container-narrow" style={{ paddingBlock: 80 }}><h1 className="h-section">Studio is not connected</h1><p className="lead">Set the Sanity project ID and dataset described in README.md, then restart the app.</p></div>;
  }
  return <NextStudio config={config} />;
}
