/* global React, ReactDOM, Nav, Footer, FAQSchema,
         PageHome, PageHowItWorks, PagePricing, PageAbout, PagePartnerships, PageLearn,
         PagePrivacy, PageTerms, PageDisclaimer */
const { useState, useEffect } = React;

const App = () => {
  const [page, setPage] = useState(() => (window.location.hash || '#home').slice(1).split('?')[0] || 'home');
  const [signupCtx, setSignupCtx] = useState({ source: 'pricing-direct', preselectedTier: '' });

  const go = (target, ctx = {}) => {
    setPage(target);
    if (ctx.source) setSignupCtx({ source: ctx.source, preselectedTier: ctx.tier || '' });
    window.location.hash = target;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || '#home').slice(1) || 'home';
      setPage(h);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const PageComp = {
    'home': PageHome,
    'how-it-works': PageHowItWorks,
    'pricing': PagePricing,
    'about': PageAbout,
    'partnerships': PagePartnerships,
    'learn': PageLearn,
    'privacy': PagePrivacy,
    'terms': PageTerms,
    'disclaimer': PageDisclaimer,
  }[page] || PageHome;

  return (
    <>
      <Nav page={page} go={go} />
      <main data-screen-label={page}>
        <PageComp go={go} source={signupCtx.source} preselectedTier={signupCtx.preselectedTier} />
      </main>
      <Footer go={go} />
      {page === 'learn' && <FAQSchema />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
