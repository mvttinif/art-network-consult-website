import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './components/sections/LandingPage';
import Legal from './components/legal/Legal';
import Privacy from './components/legal/Privacy';
import AIConsultant from './components/ai/AIConsultant';
import PreferencesBanner from './components/layout/PreferencesBanner';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacidade" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <AIConsultant />
        <PreferencesBanner />
      </div>
    </Router>
  );
}

export default App;

