import Link from 'next/link';
import Fox from './Fox';

/**
 * Sitewide footer — 4-column grid with brand, product, company, and legal links.
 * Dark twilight-deep background matching design. Server component.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="brand" style={{ marginBottom: 14 }}>
              <Fox size={28} />
              <span>heydart</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, maxWidth: 320, color: 'var(--cream-2)' }}>
              A planning and in-park assistant for Walt Disney World guests. Pre-launch, 2026.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/learn">Learn / FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/partnerships">Partnerships</Link></li>
              <li><a href="mailto:hello@heydart.com">hello@heydart.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <p className="disclaimer">
          Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company or
          any of its affiliates or subsidiaries. All Disney park names, attraction names, and related marks
          are the property of their respective owners.
        </p>
        <p className="copyright">© 2026 HeyDart, Inc.</p>
      </div>
    </footer>
  );
}
