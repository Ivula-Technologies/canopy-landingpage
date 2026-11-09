import { m } from "framer-motion";
import { bookingUrl } from "../lib/booking";
import donors from "../assets/images/donors.png";
import dashboard from "../assets/images/dashboard.png";
import events from "../assets/images/events.png";

const ease = [0.22, 1, 0.36, 1];

const textGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-canopy-950 via-canopy-900 to-canopy-700 min-h-[80vh] flex items-center px-6 py-16">
      {/* Soft drifting background glows */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sun-400/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-canopy-400/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <m.div variants={textGroup} initial="hidden" animate="show">
          <m.h1 variants={textItem} className="text-5xl md:text-6xl font-bold leading-tight text-sun-100">
            Empower Your Community with Better Engagement
          </m.h1>

          <m.p variants={textItem} className="mt-6 text-lg text-canopy-100 max-w-xl">
            Fill volunteer shifts, track attendance and hours, and keep member and
            donor records in one place. Built for churches and nonprofits.
          </m.p>

          <m.div variants={textItem}>
            <m.a
              href="https://canopy.ivulatechnologies.com/signup"
              className="mt-8 bg-sun-400 text-canopy-950 px-6 py-3 rounded-lg hover:bg-sun-300 inline-block font-semibold shadow-lg shadow-sun-500/30"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start your free trial
            </m.a>
            <p className="mt-3 text-sm text-canopy-200">
              14 days free. No credit card required. Questions first?{" "}
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-sun-300 underline-offset-4 hover:underline">
                Book a call with our founder
              </a>
            </p>
          </m.div>
        </m.div>

        {/* On phones the stacked showcase is hidden, so show one screen. */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="md:hidden bg-white p-2 rounded-2xl shadow-2xl"
        >
          <img src={events} alt="Events and volunteer sign-ups in Canopy" className="rounded-xl w-full" />
        </m.div>

        {/* Right Side Dashboard Showcase */}
        <div className="hidden md:block relative h-[650px] w-full">
          {/* Donor Management */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="absolute left-[55%] -translate-x-1/2 top-90 w-[90%] bg-white p-5 rounded-2xl shadow-2xl hover:scale-110 transition-[scale] duration-300 z-40"
          >
            <img src={donors} alt="Donor management" className="rounded-xl w-full" />
          </m.div>

          {/* Dashboard image */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="absolute left-1/3 -translate-x-1/2 top-0 w-full bg-white p-3 rounded-2xl shadow-2xl hover:scale-105 transition-[scale] duration-300 z-20"
          >
            <img src={dashboard} alt="Engagement dashboard" className="rounded-xl w-full" />
          </m.div>

          {/* Events image */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="absolute left-1/2 -translate-x-1/2 top-50 w-[95%] bg-white p-3 rounded-2xl shadow-2xl hover:scale-110 transition-[scale] duration-300 z-30"
          >
            <img src={events} alt="Events and attendance" className="rounded-xl w-full" />
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
