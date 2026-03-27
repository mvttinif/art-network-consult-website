import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default LandingPage;

