import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/sections/LandingPage';

// Lazy load everything below the fold or non-critical
const Footer = lazy(() => import('./components/layout/Footer'));

// Lazy load secondary routes and heavy components
const Legal = lazy(() => import('./components/legal/Legal'));
const Privacy = lazy(() => import('./components/legal/Privacy'));
const AIConsultant = lazy(() => import('./components/ai/AIConsultant'));
const PreferencesBanner = lazy(() => import('./components/layout/PreferencesBanner'));

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/legal" element={
              <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <Legal />
              </Suspense>
            } />
            <Route path="/privacidade" element={
              <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <Privacy />
              </Suspense>
            } />
          </Routes>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <AIConsultant />
        </Suspense>
        <Suspense fallback={null}>
          <PreferencesBanner />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
