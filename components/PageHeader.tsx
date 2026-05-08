import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}

/**
 * PageHeader — reusable page-header section used on all sub-pages.
 * Matches the `.page-header` CSS pattern from design.
 */
export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 style={{ marginTop: 12 }}>{title}</h1>
        {lead && <p className="lead" style={{ marginTop: 18 }}>{lead}</p>}
      </div>
    </header>
  );
}
