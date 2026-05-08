interface FoxProps {
  size?: number;
  accent?: string;
  mark?: string;
  cream?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Fox — HeyDart brand mark.
 * Rust fox with cream chest and twilight ink lines. Hand-drawn storybook feel.
 * Sized to viewBox so any pixel size works. Used in nav, footer, hero.
 */
export default function Fox({
  size = 32,
  accent = 'var(--rust)',
  mark = 'var(--twilight)',
  cream = 'var(--cream)',
  className = '',
  style = {},
}: FoxProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`fox-mark ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Head — pointed-ear bust */}
      <path
        d="M 5 16 Q 4 8 9 5 L 12 2 L 16 6 L 20 2 L 23 5 Q 28 8 27 16 Q 24 24 16 25 Q 8 24 5 16 Z"
        fill={accent}
        stroke={mark}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Inner ears */}
      <path d="M 9 6 L 12 3 L 12 8 Z" fill={mark} opacity="0.85" />
      <path d="M 23 6 L 20 3 L 20 8 Z" fill={mark} opacity="0.85" />
      {/* Face cream patch */}
      <path
        d="M 9 16 Q 9 12 13 11 Q 16 10 19 11 Q 23 12 23 16 Q 23 20 16 21 Q 9 20 9 16 Z"
        fill={cream}
        stroke={mark}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <ellipse cx="13" cy="15" rx="1.2" ry="1.5" fill={mark} />
      <ellipse cx="19" cy="15" rx="1.2" ry="1.5" fill={mark} />
      {/* Nose */}
      <ellipse cx="16" cy="18.5" rx="1" ry="0.8" fill={mark} />
    </svg>
  );
}
