/* global React, Fox */
const { useState, useEffect } = React;

// Image-slot art frame with prompt + recommended model.
// Model recommendations are tuned to the Storybook Nightfall direction:
//   - Midjourney v6 + niji 6 for painterly/storyboard hero pieces
//   - Flux 1.1 Pro for product/photo realism if needed
//   - Recraft v3 for illustration with text/typography needs
//   - Imagen 4 / GPT-Image-1 (gpt-image-1) for fast iteration
const ArtSlot = ({ id, ratio = '4 / 3', height, label, prompt, model, ref_, palette, tone = 'dark' }) => (
  <div>
    <div className="art-frame" style={{ aspectRatio: height ? undefined : ratio, height: height }}>
      <image-slot id={id} shape="rounded" radius="14" placeholder={label}></image-slot>
    </div>
    <div className="art-meta">
      <strong>Image prompt — drop generated art onto frame</strong>
      {prompt}
      {ref_ && <div style={{ marginTop: 6 }}>Style refs: {ref_}</div>}
      {palette && <div>Palette: {palette}</div>}
      {model && <div className="model" style={{ marginTop: 6 }}>Recommended model: {model}</div>}
    </div>
  </div>
);

// Top nav with anchor-based routing
const Nav = ({ page, go }) => {
  const links = [
    ['how-it-works', 'How it works'],
    ['pricing', 'Pricing'],
    ['about', 'About'],
    ['learn', 'Learn'],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <Fox size={32} />
          <span>heydart</span>
        </a>
        <div className="nav-links">
          {links.map(([slug, label]) => (
            <a key={slug} href={`#${slug}`} className={page === slug ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); go(slug); }}>
              {label}
            </a>
          ))}
        </div>
        <a href="#pricing" className="nav-cta" onClick={(e) => { e.preventDefault(); go('pricing'); }}>
          Sign up
        </a>
      </div>
    </nav>
  );
};

// Sitewide footer w/ disclaimer
const Footer = ({ go }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 14 }}>
            <Fox size={28} />
            <span>heydart</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, maxWidth: 320, color: 'var(--cream-2)' }}>
            A planning and in-park assistant for Walt Disney World guests. Pre-launch, 2026.
          </p>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); go('how-it-works'); }}>How it works</a></li>
            <li><a href="#pricing" onClick={(e) => { e.preventDefault(); go('pricing'); }}>Pricing</a></li>
            <li><a href="#learn" onClick={(e) => { e.preventDefault(); go('learn'); }}>Learn / FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); go('about'); }}>About</a></li>
            <li><a href="#partnerships" onClick={(e) => { e.preventDefault(); go('partnerships'); }}>Partnerships</a></li>
            <li><a href="mailto:hello@heydart.com">hello@heydart.com</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy" onClick={(e) => { e.preventDefault(); go('privacy'); }}>Privacy</a></li>
            <li><a href="#terms" onClick={(e) => { e.preventDefault(); go('terms'); }}>Terms</a></li>
            <li><a href="#disclaimer" onClick={(e) => { e.preventDefault(); go('disclaimer'); }}>Disclaimer</a></li>
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

// Eyebrow with pulse dot
const HeroEyebrow = ({ children }) => (
  <div className="hero-eyebrow">
    <span className="dot"></span>
    <span className="eyebrow">{children}</span>
  </div>
);

// Pricing matrix table — three party-size groups stacked, with paired LL / LL+Dining columns
const PricingMatrix = () => (
  <table className="price-matrix">
    <thead>
      <tr>
        <th></th>
        <th><span className="col-group">Party 1–6</span>Lightning Lane</th>
        <th><span className="col-group">Party 1–6</span>+ Dining</th>
        <th><span className="col-group">Party 7+</span>Lightning Lane</th>
        <th><span className="col-group">Party 7+</span>+ Dining</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Single day<span className="row-sub">one park day</span></th>
        <td className="price">$10</td>
        <td className="price">$15</td>
        <td className="price">$15</td>
        <td className="price">$25</td>
      </tr>
      <tr>
        <th scope="row">5-day pack<span className="row-sub">redeem within 30 days</span></th>
        <td className="price">$25</td>
        <td className="price">$35</td>
        <td className="price">$35</td>
        <td className="price">$50</td>
      </tr>
      <tr>
        <th scope="row">Annual<span className="row-sub">unlimited park days</span></th>
        <td className="price">$100</td>
        <td className="price">$150</td>
        <td className="price dim">n/a</td>
        <td className="price dim">n/a</td>
      </tr>
    </tbody>
  </table>
);

// Master signup form (with progressive disclosure for beta opt-in)
const SignupForm = ({ source = 'unknown', preselectedTier = '', onSubmit }) => {
  const [beta, setBeta] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [tier, setTier] = useState(preselectedTier);

  useEffect(() => { setTier(preselectedTier); }, [preselectedTier]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data._source = source;
    data._beta = beta ? 'yes' : 'no';
    setSubmitted(data);
    onSubmit && onSubmit(data);
  };

  if (submitted) {
    const isEmployee = submitted.disney_employee === 'yes';
    const isBeta = submitted._beta === 'yes';
    return (
      <div style={{ padding: 28, borderRadius: 14, background: 'rgba(244,197,66,0.08)', border: '1px solid rgba(244,197,66,0.32)' }}>
        <div className="serif-i" style={{ fontSize: 26, marginBottom: 12, color: 'var(--gold)' }}>
          {isEmployee ? "Thanks for reaching out." : isBeta ? "Thanks for offering to help us test Dart." : "You're on the list."}
        </div>
        <p style={{ color: 'var(--cream-2)', maxWidth: 460 }}>
          {isEmployee
            ? "Your interest signup is processed. We'd love to talk separately — please email hello@heydart.com for a demo conversation."
            : isBeta
              ? "We'll review applications and reach out — and you'll get your 25% discount code either way."
              : "We'll send your 25% discount code by email and keep you posted as we ramp up to launch. The code is good for any tier through the end of 2026."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_source" value={source} />
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="form-field">
        <label htmlFor="tier">Tier interest</label>
        <select id="tier" name="tier" value={tier} onChange={(e) => setTier(e.target.value)}>
          <option value="">Not sure yet</option>
          <option value="1day-ll">Single day · Lightning Lane</option>
          <option value="1day-lld">Single day · Lightning Lane + Dining</option>
          <option value="5day-ll">5-day pack · Lightning Lane</option>
          <option value="5day-lld">5-day pack · Lightning Lane + Dining</option>
          <option value="annual-ll">Annual · Lightning Lane (parties of 1–6)</option>
          <option value="annual-lld">Annual · Lightning Lane + Dining (parties of 1–6)</option>
        </select>
      </div>

      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-field">
          <label htmlFor="party_size">Expected party size</label>
          <input id="party_size" name="party_size" type="number" min="1" max="20" placeholder="4" />
          <p className="form-help">Parties of 7+ have separate pricing; annual is 1–6 only.</p>
        </div>
        <div className="form-field">
          <label htmlFor="trip_status">Trip status</label>
          <select id="trip_status" name="trip_status">
            <option value="planning">Already planning a trip</option>
            <option value="considering">Considering a trip</option>
            <option value="ap">Annual passholder</option>
            <option value="curious">Just curious</option>
          </select>
        </div>
      </div>

      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-field">
          <label htmlFor="park_days">Approximate park days planned <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></label>
          <input id="park_days" name="park_days" type="number" min="0" max="30" />
        </div>
        <div className="form-field">
          <label htmlFor="visit_dates">Visit dates <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></label>
          <input id="visit_dates" name="visit_dates" type="text" placeholder="e.g. May 15 – May 22" />
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <label className="form-checkbox">
          <input type="checkbox" name="email_consent" required />
          <span>Send me updates as Dart ramps up to launch.</span>
        </label>
      </div>

      <div style={{ marginTop: 14 }}>
        <label className="form-checkbox">
          <input type="checkbox" name="beta_optin" checked={beta} onChange={(e) => setBeta(e.target.checked)} />
          <span>I'd like to be considered as an alpha/beta tester.</span>
        </label>
      </div>

      <div className={`beta-fields ${beta ? 'show' : ''}`}>
        <div className="grid-2" style={{ gap: 14 }}>
          <div className="form-field">
            <label htmlFor="fl_ap">Florida annual passholder?</label>
            <select id="fl_ap" name="fl_ap"><option value="yes">Yes</option><option value="no">No</option></select>
          </div>
          <div className="form-field">
            <label htmlFor="visit_window">Visiting May 15 – July 15?</label>
            <select id="visit_window" name="visit_window"><option value="yes">Yes</option><option value="no">No</option></select>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 14 }}>
          <div className="form-field">
            <label htmlFor="window_days">Park days in that window</label>
            <input id="window_days" name="window_days" type="number" min="0" max="30" />
          </div>
          <div className="form-field">
            <label htmlFor="disney_employee">Disney employee?</label>
            <select id="disney_employee" name="disney_employee"><option value="no">No</option><option value="yes">Yes</option></select>
          </div>
        </div>
        <label className="form-checkbox" style={{ marginTop: 4 }}>
          <input type="checkbox" name="beta_ack" required={beta} />
          <span>I understand Dart is a pre-release product, no bookings are guaranteed, and my Lightning Lane Multi Pass purchase is my own responsibility. Catastrophic issues are reviewed individually with no guaranteed reimbursement.</span>
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-large" style={{ marginTop: 22, width: '100%' }}>
        {beta ? 'Apply for the beta' : 'Get my 25% off code'} →
      </button>
    </form>
  );
};

window.ArtSlot = ArtSlot;
window.Nav = Nav;
window.Footer = Footer;
window.HeroEyebrow = HeroEyebrow;
window.PricingMatrix = PricingMatrix;
window.SignupForm = SignupForm;
