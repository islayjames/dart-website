'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NextImage from 'next/image';

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/learn', label: 'Learn' },
] as const;

/**
 * Site-wide sticky navigation with mobile hamburger menu.
 * Blurred background on scroll via backdrop-filter in CSS.
 */
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="brand" onClick={closeMobile} aria-label="HeyDart home">
          <NextImage
            src="/images/dart-logo-mark.png"
            alt="Dart"
            width={32}
            height={32}
            style={{ borderRadius: '999px', objectFit: 'cover' }}
          />
          <span>heydart</span>
        </Link>

        <div className="nav-links" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : ''}
              role="listitem"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link href="/pricing" className="nav-cta">
          Sign up
        </Link>

        {/* Mobile hamburger toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <>
                <path d="M4 4 L18 18" />
                <path d="M18 4 L4 18" />
              </>
            ) : (
              <>
                <path d="M3 6 L19 6" />
                <path d="M3 11 L19 11" />
                <path d="M3 16 L19 16" />
              </>
            )}
          </svg>
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            {mobileOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`nav-mobile-menu${mobileOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : ''}
            onClick={closeMobile}
            style={{ color: pathname === href ? 'var(--brick)' : 'var(--ink)' }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/pricing"
          onClick={closeMobile}
          style={{
            padding: '14px 28px',
            marginTop: 8,
            color: '#fff',
            background: 'var(--brick)',
            fontWeight: 600,
            borderRadius: 0,
            display: 'block',
          }}
        >
          Sign up →
        </Link>
      </div>
    </nav>
  );
}
