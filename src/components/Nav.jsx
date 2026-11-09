import { m } from "framer-motion";
import canopyMark from "../assets/images/canopy-mark.svg";
import { bookingUrl } from "../lib/booking";
function Nav() {
  return (
    <m.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-white px-4 py-4 shadow-sm sm:px-8"
    >
      {/* Logo */}
      <div className="flex h-10 items-center gap-3">
        <img src={canopyMark} alt="" className="h-9 w-auto object-contain" />

        <span className="font-display text-3xl font-bold text-canopy-900">Canopy</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden gap-8 font-medium md:flex">
        <a href="#features" className="transition-colors duration-200 hover:text-canopy-600">
          Features
        </a>

        <a href="#how-it-works" className="transition-colors duration-200 hover:text-canopy-600">
          How It Works
        </a>

        <a href="#OurStory" className="transition-colors duration-200 hover:text-canopy-600">
          Our Story
        </a>
        <a href="#audience" className="transition-colors duration-200 hover:text-canopy-600">
          Audience
        </a>
        <a href="#pricing" className="transition-colors duration-200 hover:text-canopy-600">
          Pricing
        </a>
        <a href="#faq" className="transition-colors duration-200 hover:text-canopy-600">
          FAQ
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a
          href="https://canopy.ivulatechnologies.com/signup"
          className="inline-block rounded-lg bg-canopy-700 px-4 py-3 whitespace-nowrap text-white hover:bg-canopy-600 sm:px-6"
        >
          Get Started
        </a>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg border border-canopy-600 px-5 py-3 text-canopy-700 transition-colors duration-200 hover:bg-canopy-100 sm:inline-block"
        >
          Book a Demo
        </a>
      </div>
    </m.nav>
  );
}

export default Nav;
