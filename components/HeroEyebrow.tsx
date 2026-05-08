import type { ReactNode } from 'react';

interface HeroEyebrowProps {
  children: ReactNode;
}

/**
 * HeroEyebrow — animated pulse dot with eyebrow label.
 * Used in hero sections to indicate live/active status.
 */
export default function HeroEyebrow({ children }: HeroEyebrowProps) {
  return (
    <div className="hero-eyebrow">
      <span className="dot" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
