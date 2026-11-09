import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/faq";
import HowItWorks from './components/Howitworks';
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";
import Audience from './components/Audience';
import Footer from './components/Footer';
function App() {
  return (
    // LazyMotion with the small domAnimation bundle keeps the page light on phones.
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <Nav/>
      <Hero />
      <Features />
      <HowItWorks />
      <Audience />
      <Pricing />
      <OurStory />
      <FAQ/>
      <Footer/>
    </MotionConfig>
    </LazyMotion>
  );
}

export default App;