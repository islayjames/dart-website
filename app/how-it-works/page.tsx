import type { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'How it works',
  description:
    "A mostly conversational planner with a clear schedule and the controls you'd expect. Dart syncs with My Disney Experience, checks Lightning Lane availability throughout the day, and works around your existing dining and fixed plans.",
};

const STEPS = [
  {
    n: '01',
    title: 'Tell Dart your party, dates, and priorities',
    body: "Mostly conversational — a few short forms where structure helps. Who's coming, where you're staying, whether anyone is height-limited, the rides that matter most, when the youngest naps. Dart asks follow-ups when something's missing.",
    shot: { src: '/images/product-mobile-welcome.png', alt: 'Dart welcome / onboarding screen' },
  },
  {
    n: '02',
    title: 'Dart syncs with My Disney Experience',
    body: "A standard Friends & Family connection — same as every other tool in the category. Dart pulls in your party, your tickets, and your existing dining reservations automatically. You don't have to retype the things you've already planned.",
    img: { src: '/images/hiw-2.png', alt: 'Stylized illustration of MDE and Dart connected by a ribbon of light', ratio: '16 / 9' },
  },
  {
    n: '03',
    title: 'Dart checks Lightning Lane availability throughout the day',
    body: "Dart polls Multi Pass availability every few minutes, and when a fit appears for your party, it secures it — on the right ride, at the right time, around your other plans. You see what was secured and what Dart is still watching.",
    shot: { src: '/images/product-mobile-toast.png', alt: 'Dart live day — plan view with a Lightning Lane secured toast' },
  },
  {
    n: '04',
    title: 'Dart adjusts when the day shifts',
    body: "Running late, a ride goes down, a kid needs a break — Dart suggests the next move and reworks the rest of the day quietly. You stay in charge of the schedule; Dart just keeps options ready.",
    img: { src: '/images/hiw-4.png', alt: 'Fox looking at a winding paper map with two divergent paths', ratio: '16 / 9' },
  },
  {
    n: '05',
    title: 'Add Dining when it ships',
    body: "Available Fall 2026 as an optional upgrade — not a replacement of Lightning Lane. Dart watches dining availability and books hard-to-find reservations when they open. Always your choice whether to add it.",
    img: { src: '/images/hiw-5.png', alt: 'Fox carrying a restaurant menu past colorful umbrella tables', ratio: '16 / 9' },
    tag: 'Fall 2026',
  },
];

const DOESNT_DO = [
  ["Doesn't buy your Lightning Lane Multi Pass for you", 'You purchase Multi Pass in My Disney Experience, the same way you always have.'],
  ["Doesn't book Individual Lightning Lanes", 'Those are a separate Disney product. Different game.'],
  ["Doesn't join Virtual Queues", "Not at launch. Possibly later."],
  ["Doesn't replace My Disney Experience", 'Dart works alongside MDE — never instead of it.'],
  ["Doesn't guarantee bookings", "Availability is outside our control. We watch hard and book fast."],
  ["Doesn't work at Disneyland", 'Walt Disney World only at launch.'],
] as const;

export default function HowItWorksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="How it works"
        title={
          <>Tell Dart your day. <span style={{ color: 'var(--gold)' }}>Dart shapes it.</span></>
        }
        lead="A mostly conversational planner with a clear schedule and the controls you'd expect when you want them. Dart syncs with My Disney Experience, checks Lightning Lane availability throughout the day, and works around your existing dining and fixed plans."
      />

      <section className="section">
        <div className="container">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <div className="step-num">{step.n}</div>
              <div>
                <h3>
                  {step.title}
                  {step.tag && (
                    <span className="tag tag-magenta" style={{ marginLeft: 12, verticalAlign: 'middle' }}>
                      {step.tag}
                    </span>
                  )}
                </h3>
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
                        style={{ objectFit: 'cover' }}
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

      {/* The conversation */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div>
              <div className="eyebrow">The conversation</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Mostly chat. Forms when they help.
              </h2>
              <p className="lead">
                Tell Dart things in plain language.{' '}
                <em>&ldquo;We want Space Mountain before the kids get hangry.&rdquo;
                &ldquo;Skip Pirates if the line&apos;s bad.&rdquo;
                &ldquo;Grandparents are joining day two — they tire easily.&rdquo;</em>{' '}
                Dart already knows your dining (it pulled it from MDE). For the things structure
                helps with — party setup, ride preferences — there&apos;s a clean form.
              </p>
            </div>
            <div className="shot-frame shot-mobile">
              <NextImage
                className="shot"
                src="/images/product-mobile-chat.png"
                alt="Dart mobile chat — Big Thunder return window, TRON booking confirmation"
                width={320}
                height={693}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* The schedule */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div className="shot-frame shot-mobile">
              <NextImage
                className="shot"
                src="/images/product-mobile-plan.png"
                alt="Dart mobile schedule — bus, park entry, Peter Pan Lightning Lane"
                width={320}
                height={693}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div>
              <div className="eyebrow">The schedule</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                One day. One view. Lock anything you want.
              </h2>
              <p className="lead">
                Manual blocks (parade, naptime, the character meal you&apos;ve been excited about
                for six months), Lightning Lane selections, and dining all live in one timeline.
                Lock anything and Dart works around it. Unlock and Dart includes it again.
              </p>
            </div>
          </div>
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
