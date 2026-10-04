
import { motion } from "framer-motion";
import canopyMark from "../assets/images/canopy-mark.svg";
function Nav() {
  return (

    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-white flex justify-between items-center gap-4 px-4 sm:px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="h-10 flex items-center gap-3">
        <img src={canopyMark} alt="" className="w-auto h-9 object-contain" />

      <span className="font-display text-3xl font-bold text-canopy-900">
        Canopy
      </span>
      </div>
     

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 font-medium">
        <a
          href="#features"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          Features
        </a>

                
        <a
          href="#how-it-works"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          How It Works
        </a>
        
        <a
          href="#OurStory"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          Our Story
        </a>
        <a
          href="#audience"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          Audience
        </a>
        <a
          href="#pricing"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="hover:text-canopy-600 transition-colors duration-200"
        >
          FAQ
        </a>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a
  href="https://canopy.ivulatechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-canopy-700 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-canopy-600 inline-block whitespace-nowrap"
>
  Get Started
</a>
<a
  href="mailto:hello@ivulatechnologies.com?subject=Ivula%20Canopy%20Demo%20Request"
  className="hidden sm:inline-block border border-canopy-600 text-canopy-700 px-5 py-3 rounded-lg hover:bg-canopy-100 transition-colors duration-200"
  >
          Request a Demo
        </a>
      </div>
    </motion.nav>
  );
}

export default Nav;