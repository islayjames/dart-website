import type React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface IconBadgeProps {
  icon: React.ComponentType<IconProps>;
  tint?: 'gold' | 'brick' | 'magenta' | 'teal' | 'rust' | 'cream';
  size?: number;
}

/** IconDart — Darting fox silhouette mid-leap with motion lines */
export function IconDart({ size = 24, color = 'currentColor', className = '', style = {} }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Motion lines behind */}
      <path d="M 2 9 L 5 9 M 2 13 L 6 13 M 2 17 L 4 17" opacity="0.55" />
      {/* Fox body — lunging crescent */}
      <path
        d="M 7 16 Q 7 11 12 10 L 14 7 L 15 10 L 17 7 L 18 11 Q 21 12 21 16 L 19 17 L 18 19 L 16 18 L 13 19 L 11 18 L 9 19 L 7 18 Z"
        fill={color}
        fillOpacity="0.15"
      />
      {/* Tail */}
      <path d="M 7 17 Q 4 18 3 21" />
      {/* Eye */}
      <circle cx="17" cy="13" r="0.6" fill={color} stroke="none" />
    </svg>
  );
}

/** IconHunt — Radar/scope: concentric arcs with a target dot */
export function IconHunt({ size = 24, color = 'currentColor', className = '', style = {} }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" opacity="0.55" />
      <circle cx="12" cy="12" r="2" />
      <path d="M 12 1.5 L 12 4 M 12 20 L 12 22.5 M 1.5 12 L 4 12 M 20 12 L 22.5 12" opacity="0.7" />
      {/* Locked-on dot, off-center */}
      <circle cx="15.5" cy="9" r="1" fill={color} stroke="none" />
    </svg>
  );
}

/** IconMagic — Four-point sparkle with two smaller satellites */
export function IconMagic({ size = 24, color = 'currentColor', className = '', style = {} }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Big sparkle — four-pointed star */}
      <path
        d="M 11 3 Q 12 9 18 11 Q 12 13 11 19 Q 10 13 4 11 Q 10 9 11 3 Z"
        fill={color}
        fillOpacity="0.18"
      />
      {/* Small sparkle top-right */}
      <path
        d="M 19 4 L 19.5 6 L 21.5 6.5 L 19.5 7 L 19 9 L 18.5 7 L 16.5 6.5 L 18.5 6 Z"
        fill={color}
        fillOpacity="0.5"
        stroke="none"
      />
      {/* Small sparkle bottom */}
      <path
        d="M 18 17 L 18.4 18.5 L 20 19 L 18.4 19.5 L 18 21 L 17.6 19.5 L 16 19 L 17.6 18.5 Z"
        fill={color}
        fillOpacity="0.5"
        stroke="none"
      />
    </svg>
  );
}

const palettes = {
  gold:    { bg: 'rgba(200,138,28,0.12)', ring: 'rgba(200,138,28,0.32)', fg: 'var(--gold-deep)' },
  brick:   { bg: 'rgba(200,54,42,0.10)',  ring: 'rgba(200,54,42,0.28)',  fg: 'var(--brick)' },
  magenta: { bg: 'rgba(193,55,138,0.10)', ring: 'rgba(193,55,138,0.28)', fg: 'var(--magenta)' },
  teal:    { bg: 'rgba(44,138,130,0.10)', ring: 'rgba(44,138,130,0.28)', fg: 'var(--teal)' },
  rust:    { bg: 'rgba(185,106,60,0.12)', ring: 'rgba(185,106,60,0.32)', fg: 'var(--rust)' },
  cream:   { bg: 'rgba(251,243,223,0.10)', ring: 'rgba(251,243,223,0.28)', fg: 'var(--gold)' },
} as const;

/** IconBadge — Reusable round icon badge with colored circle */
export function IconBadge({ icon: Icon, tint = 'gold', size = 44 }: IconBadgeProps) {
  const p = palettes[tint] ?? palettes.gold;
  return (
    <span
      className="icon-badge"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: p.bg,
        border: `1px solid ${p.ring}`,
        display: 'inline-grid',
        placeItems: 'center',
        flexShrink: 0,
      }}
    >
      <Icon size={Math.round(size * 0.55)} color={p.fg} />
    </span>
  );
}
