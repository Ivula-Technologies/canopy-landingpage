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
    <>
      <Nav/>
      <Hero />
      <Features />
      <HowItWorks />
      <Audience />
      <Pricing />
      <OurStory />
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;