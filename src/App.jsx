import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import AIConsultant from './components/ai/AIConsultant';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIConsultant />
    </div>
  );
}

export default App;
