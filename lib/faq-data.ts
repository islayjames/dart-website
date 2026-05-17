/**
 * FAQ_ENTRIES — All 26 Q&A pairs for the Learn/FAQ page.
 * Each entry is a [question, answer] tuple.
 * Used by FAQAccordion component and JSON-LD FAQPage schema.
 *
 * Vocabulary conventions:
 * - Launch: August 2026
 * - Discount: "the launch discount" (not a specific percentage)
 * - Beta reward: "a full year of Dart free"
 * - Plans and commitments (not "manual blocks")
 * - Beta is open to WDW regulars and experimenters
 */
export const FAQ_ENTRIES: [string, string][] = [
  [
    'What live park data does Dart use?',
    "Dart connects to Lightning Lane Multi Pass availability, standby wait times, dining reservation alerts, walk-up waitlist timing, mobile order wait and pickup timing, park hours, entertainment schedules, and your existing itinerary. It pairs those with your location, walking time, weather, nearby restrooms and points of interest, and your family's preferences and plans to recommend what to do next — and when to stop chasing something.",
  ],
  [
    'How does Dart compare to a generic AI assistant or web search?',
    "Generic chat assistants can summarize what they read on the web. Dart plugs into the things that actually shape your park day — live Multi Pass availability for your party, the dining waitlist that just opened, the mobile-order line that's spiking, the weather, where you are right now — and gives advice grounded in all of it at once. It's the difference between asking a friend who has read a guide and asking a friend who is in the park with the app open.",
  ],
  [
    'What is Lightning Lane Multi Pass?',
    'Lightning Lane Multi Pass (sometimes called LLMP) is a paid Walt Disney World service that lets guests reserve return-time windows for select attractions and enter through the Lightning Lane queue. It replaced the FastPass and Genie+ systems. Multi Pass selections are made through My Disney Experience and are subject to availability.',
  ],
  [
    'How does Dart use Lightning Lane Multi Pass?',
    "Dart watches Multi Pass availability in real time and gives you the right recommendation — or a heads-up to act — when something opens for your party. You make the selection yourself in My Disney Experience. Dart's job is to make sure you don't miss the window.",
  ],
  [
    'Does Dart buy my Lightning Lane Multi Pass for me?',
    "No. Dart monitors availability and tells you when and what to book — you confirm the selection yourself in My Disney Experience. This keeps Dart on the right side of Disney's terms and keeps you in control of what your party commits to.",
  ],
  [
    'Does Dart buy Individual Lightning Lanes (LLSP)?',
    'Not at launch. Individual Lightning Lanes are a separate paid Disney product. Dart focuses on Lightning Lane Multi Pass. Once you own an Individual Lightning Lane, Dart can help route your day around it like any other fixed commitment.',
  ],
  [
    "What's the difference between Day Pass, Trip Pass, and Annual Pass?",
    'Day Pass is for a single park day — try Dart out or cover one big day. Trip Pass covers up to 7 park days within a 15-day window — best for most Disney vacations, and Dart also helps before you arrive and on your rest days. Annual Pass is for frequent visitors and passholders who want Dart available year-round. All three include the full Dart experience.',
  ],
  [
    'What does Trip Pass actually cover?',
    'Trip Pass gives you up to 7 active park days within any 15-day window. On park days Dart is your real-time in-park assistant. On arrival and rest days Dart helps with pre-trip planning, dining strategy, and itinerary prep. One price, one pass, the whole trip.',
  ],
  [
    'Is dining a separate add-on?',
    'No. Every Dart pass includes dining-availability monitoring, walk-up waitlist timing, and mobile order timing. Note: Dart watches and alerts — you confirm the booking yourself in MDE. It\'s one assistant, one price.',
  ],
  [
    'Does Dart book dining reservations for me?',
    "Not on your behalf. Dart watches dining availability throughout the day and alerts you the moment something opens up that fits your party — you confirm the booking yourself in My Disney Experience. This is by design: dining reservations move fast and the few seconds it takes you to confirm are how we stay on the right side of Disney's rules.",
  ],
  [
    'Does Dart place my mobile orders?',
    'No. Dart uses mobile-order wait times and pickup-window data to recommend when to order — but you still place the order yourself in My Disney Experience.',
  ],
  [
    'What does Dart cost?',
    'Day Pass is $15 for parties up to 8, or $25 for parties of 9–20. Trip Pass (up to 7 park days within a 15-day window) is $45 for parties up to 8, or $75 for parties of 9–20. Annual Pass is $120 for parties up to 8. Every pass includes the full Dart experience — no per-person fees, no add-ons. Waitlist members get the launch discount.',
  ],
  [
    'Do I need a My Disney Experience account?',
    'Yes. My Disney Experience is how Disney manages Lightning Lane Multi Pass, dining reservations, and mobile orders. Dart works alongside your MDE account — it cannot replace it.',
  ],
  [
    'How does Dart connect to My Disney Experience?',
    "Dart connects to your My Disney Experience account through a standard Friends & Family connection, the same way other planning tools in the category do. Dart can see your party roster, tickets, and existing dining reservations. Dart never logs in as you and never makes Lightning Lane Multi Pass purchases on your behalf — you handle that in MDE.",
  ],
  [
    'Does Dart work at Disneyland?',
    'Not at launch. Walt Disney World only.',
  ],
  [
    'Does Dart join Virtual Queues?',
    "Not at launch. We may add Virtual Queue support later if there's demand.",
  ],
  [
    'When does Dart launch?',
    'August 2026. Join the waitlist to get the launch discount and early access.',
  ],
  [
    'What is the beta program?',
    "We're looking for Walt Disney World regulars, planners, and folks who genuinely enjoy experimenting to help us test Dart before launch. Selected testers get a full year of Dart free and a direct line to the team — in exchange for honest feedback in real park conditions. Apply through the signup form on the Pricing page.",
  ],
  [
    'Who is the beta program for?',
    "The beta is for Walt Disney World regulars and people who enjoy experimenting with new tools. If you visit WDW more than once a year, or if you're the person in your group who handles the planning, we want to hear from you. Apply on the Pricing page.",
  ],
  [
    'Does my launch discount expire?',
    'The launch discount applies to passes purchased through 2026. Sign up for the waitlist before launch to lock it in; redeem it when you\'re ready.',
  ],
  [
    'Can I use Dart for free?',
    "There is no free tier for the launched product. Approved beta participants get a full year of Dart free — in exchange for honest feedback in real park conditions. Everyone who applies for the beta receives early-access information regardless of selection.",
  ],
  [
    "What if I'm a Disney cast member?",
    "You're welcome to join the waitlist and you'll receive the launch discount like everyone else. For the beta program specifically, please email hello@heydart.com — we'd love to chat directly.",
  ],
  [
    'Does Dart work for large groups?',
    'Yes. Day Pass and Trip Pass both support parties of up to 20. The 9–20 party tier is priced slightly higher to reflect the additional coordination involved. Annual Pass currently supports parties up to 8.',
  ],
  [
    'Is Dart affiliated with Disney?',
    'No. Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company or any of its affiliates or subsidiaries. All Disney park names, attraction names, and related marks are the property of their respective owners.',
  ],
  [
    'Who built Dart?',
    "Dart is built by a husband-and-wife team. He's a serial software founder who worked at Disneyland through college and is currently Chief AI Officer at a billion-dollar company. She started a bespoke travel agency planning custom-tailored trips, and homeschools their kids. They're DVC members and annual passholders. Read more on the About page.",
  ],
  [
    'How do I get in touch?',
    "Email hello@heydart.com — we read every message. For beta questions, general feedback, press, or partnership inquiries, that's the right address. We're a small team and we'll get back to you.",
  ],
];
