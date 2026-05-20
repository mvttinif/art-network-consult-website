import { lazy, Suspense } from 'react';
import Hero from './Hero';

// ALL sections below the fold — lazy loaded
const Services = lazy(() => import('./Services'));
const Portfolio = lazy(() => import('./Portfolio'));
const Contact = lazy(() => import('./Contact'));

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
        <Portfolio />
      </Suspense>
      {/* <Testimonials /> */}
      <Suspense fallback={<div className="min-h-[60vh] bg-[#050505]" />}>
        <Contact />
      </Suspense>
    </>
  );
};

export default LandingPage;
