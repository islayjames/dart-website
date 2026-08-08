import type { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'How HeyDart Works — Real-time Disney World assistant',
  description:
    "Dart connects to live Disney park data, your plans and commitments, and your family's preferences — and helps you decide what to do next. Pre-trip and in-park, one assistant.",
  alternates: {
    canonical: 'https://heydart.com/how-it-works',
  },
  openGraph: {
    title: 'How HeyDart Works — Real-time Disney World assistant',
    description:
      "Dart connects to live Disney park data, your plans and commitments, and your family's preferences — and helps you decide what to do next. Pre-trip and in-park, one assistant.",
    url: 'https://heydart.com/how-it-works',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'How HeyDart Works — Real-time Disney World assistant',
    description:
      "Dart connects to live Disney park data, your plans and commitments, and your family's preferences — and helps you decide what to do next. Pre-trip and in-park, one assistant.",
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://heydart.com/how-it-works' },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use HeyDart for Disney World planning',
  description:
    "Dart connects to live Disney park data, your plans and commitments, and your family's preferences — and helps you decide what to do next. Pre-trip and in-park, one assistant.",
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Tell Dart about your trip.',
      text: 'Party size, ages, heights, mobility needs, interests, must-dos, avoids, pace, and what kind of Disney day you want.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Add your plans and commitments.',
      text: "Dining reservations, meet-ups, naps, breaks, hotel time, stroller or ECV needs, shows, parades, fireworks — anything your family needs to protect. Dart shapes the day around them.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Dart helps before you enter the park.',
      text: "Think through priorities, identify must-dos, get ready for Lightning Lane and dining decisions, and understand the shape of the day — so the morning of the park day doesn't feel like a cold start.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Dart connects to live Disney park data.',
      text: 'Lightning Lane availability, standby waits, dining reservation alerts, walk-up waitlist timing, mobile order wait times, entertainment schedules, park hours, your itinerary where available.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Dart watches the day as it changes.',
      text: "Your location and walking time, nearby restrooms and points of interest, directions and transportation, weather, upcoming plans and commitments, party preferences. Things shift, and Dart shifts with them.",
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Dart helps recommend the next move.',
      text: "Take this Lightning Lane. Stay nearby. Eat before crossing the park. Check mobile order timing. Head toward a restroom. Plan transportation earlier. Protect the nap window. Stop scanning and enjoy the moment.",
    },
  ],
};

const STEPS = [
  {
    n: '01',
    title: 'Tell Dart about your trip.',
    body: 'Party size, ages, heights, mobility needs, interests, must-dos, avoids, pace, and what kind of Disney day you want.',
    shot: { src: '/images/product-mobile-welcome.png', alt: 'Dart welcome and onboarding screen' },
  },
  {
    n: '02',
    title: 'Add your plans and commitments.',
    body: "Dining reservations, meet-ups, naps, breaks, hotel time, stroller or ECV needs, shows, parades, fireworks — anything your family needs to protect. Dart shapes the day around them.",
    img: { src: '/images/hiw-2-folded-map.png', alt: "Dart the fox thinking through a family's plans in a colorful park promenade", ratio: '16 / 9', position: 'center 18%' },
  },
  {
    n: '03',
    title: 'Dart helps before you enter the park.',
    body: "Think through priorities, identify must-dos, get ready for Lightning Lane and dining decisions, and understand the shape of the day — so the morning of the park day doesn't feel like a cold start.",
    shot: { src: '/images/product-mobile-chat.png', alt: 'Dart mobile chat — pre-trip planning conversation' },
  },
  {
    n: '04',
    title: 'Dart connects to live Disney park data.',
    body: 'Lightning Lane availability, standby waits, dining reservation alerts, walk-up waitlist timing, mobile order wait times, entertainment schedules, park hours, your itinerary where available.',
    img: { src: '/images/hiw-4-folded-map.png', alt: 'Dart the fox moving through a colorful park promenade as live conditions change', ratio: '16 / 9', position: 'center 18%' },
  },
  {
    n: '05',
    title: 'Dart watches the day as it changes.',
    body: "Your location and walking time, nearby restrooms and points of interest, directions and transportation, weather, upcoming plans and commitments, party preferences. Things shift, and Dart shifts with them.",
    shot: { src: '/images/product-mobile-plan.png', alt: 'Dart mobile plan view showing live day updates' },
  },
  {
    n: '06',
    title: 'Dart helps recommend the next move.',
    body: "Take this Lightning Lane. Stay nearby. Eat before crossing the park. Check mobile order timing. Head toward a restroom. Plan transportation earlier. Protect the nap window. Stop scanning and enjoy the moment.",
    shot: { src: '/images/product-mobile-toast.png', alt: 'Dart recommendation toast — Flight of Passage Lightning Lane' },
  },
];

const DOESNT_DO = [
  ["Doesn't buy your Lightning Lane Multi Pass for you", 'You purchase Multi Pass in My Disney Experience, the same way you always have.'],
  ["Doesn't buy Individual Lightning Lanes (LLSP)", "Those are a separate paid Disney product. You handle the purchase in MDE; Dart can move one you already own."],
  ["Doesn't book dining reservations", "Dart watches dining availability and alerts you the moment something opens — you confirm the booking yourself in MDE."],
  ["Doesn't place your mobile orders", "Dart uses mobile order timing and pickup data to recommend when to order — you place it yourself in MDE."],
  ["Doesn't join Virtual Queues", "Not at launch. Possibly later."],
  ["Doesn't replace My Disney Experience", "Dart works alongside MDE — never instead of it."],
] as const;

export default function HowItWorksPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <PageHeader
        eyebrow="How it works"
        title={<>Tell Dart your trip. <span style={{ color: 'var(--brick)' }}>Live the day.</span></>}
        lead="Dart connects to live Disney park data, your plans and commitments, and your family's preferences — and helps you decide what to do next. Pre-trip and in-park, one assistant."
      />

      <section className="section">
        <div className="container">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <div className="step-num">{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p className="lead" style={{ marginTop: 8, marginBottom: 22 }}>{step.body}</p>
                <div style={{ maxWidth: 720 }}>
                  {step.shot ? (
                    <div className="shot-frame shot-mobile shot-mobile-lg">
                      <NextImage
                        className="shot"
                        src={step.shot.src}
                        alt={step.shot.alt}
                        width={380}
                        height={820}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  ) : step.img ? (
                    <div
                      className="art-frame"
                      style={{ aspectRatio: step.img.ratio, position: 'relative', minHeight: 200 }}
                    >
                      <NextImage
                        src={step.img.src}
                        alt={step.img.alt}
                        fill
                        style={{ objectFit: 'cover', objectPosition: step.img.position }}
                        sizes="(max-width: 880px) 100vw, 720px"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Dart doesn't do */}
      <section className="section section-deep">
        <div className="container">
          <div className="eyebrow">What Dart doesn&apos;t do</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 32, maxWidth: 720 }}>
            Refreshingly direct. The list is short.
          </h2>
          <div className="grid-2" style={{ gap: 18 }}>
            {DOESNT_DO.map(([title, body]) => (
              <div key={title} className="card" style={{ padding: 22 }}>
                <h4 className="serif-i" style={{ fontSize: 19, marginBottom: 6, color: 'var(--gold)' }}>
                  {title}
                </h4>
                <p style={{ color: 'var(--cream-2)', fontSize: 14.5 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-section" style={{ marginBottom: 22 }}>
            Ready to see pricing?
          </h2>
          <Link className="btn btn-primary btn-large" href="/pricing?source=how-it-works-final">
            See pricing →
          </Link>
        </div>
      </section>
    </div>
  );
}
