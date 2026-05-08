'use client';

import { useState } from 'react';
import { FAQ_ENTRIES } from '@/lib/faq-data';

/**
 * FAQAccordion — Accessible accordion for the full FAQ list.
 * First item is open by default. Clicking a question toggles it;
 * clicking an open question closes it.
 */
export default function FAQAccordion() {
  // First item open by default
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div>
      {FAQ_ENTRIES.map(([question, answer], i) => {
        const isOpen = openIdx === i;
        const headingId = `faq-q-${i}`;
        const panelId = `faq-a-${i}`;

        return (
          <div key={question} className={`faq-item${isOpen ? ' open' : ''}`}>
            <div
              className="faq-q"
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={panelId}
              id={headingId}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(i);
                }
              }}
            >
              <h3>{question}</h3>
              <span className="faq-icon" aria-hidden="true">+</span>
            </div>
            <div
              className="faq-a"
              id={panelId}
              role="region"
              aria-labelledby={headingId}
            >
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
