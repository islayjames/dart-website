import Link from 'next/link';
export default function NotFound() { return <div className="container-narrow guide-empty" style={{ paddingBlock: 100 }}><h1>Guide not found</h1><p>This guide may have moved or is not published yet.</p><Link className="btn btn-primary" href="/guides">Browse guides</Link></div>; }
