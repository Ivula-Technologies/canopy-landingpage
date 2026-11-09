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
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-linear-to-br from-canopy-950 via-canopy-900 to-canopy-700 px-6 py-16">
      {/* Soft drifting background glows */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sun-400/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-40 h-[28rem] w-[28rem] rounded-full bg-canopy-400/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Side */}
        <m.div variants={textGroup} initial="hidden" animate="show">
          <m.h1 variants={textItem} className="text-5xl leading-tight font-bold text-sun-100 md:text-6xl">
            Empower Your Community with Better Engagement
          </m.h1>

          <m.p variants={textItem} className="mt-6 max-w-xl text-lg text-canopy-100">
            Fill volunteer shifts, track attendance and hours, and keep member and donor records in one place. Built for
            churches and nonprofits.
          </m.p>

          <m.div variants={textItem}>
            <m.a
              href="https://canopy.ivulatechnologies.com/signup"
              className="mt-8 inline-block rounded-lg bg-sun-400 px-6 py-3 font-semibold text-canopy-950 shadow-lg shadow-sun-500/30 hover:bg-sun-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start your free trial
            </m.a>
            <p className="mt-3 text-sm text-canopy-200">
              14 days free. No credit card required. Questions first?{" "}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sun-300 underline-offset-4 hover:underline"
              >
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
          className="rounded-2xl bg-white p-2 shadow-2xl md:hidden"
        >
          <img src={events} alt="Events and volunteer sign-ups in Canopy" className="w-full rounded-xl" />
        </m.div>

        {/* Right Side Dashboard Showcase */}
        <div className="relative hidden h-[650px] w-full md:block">
          {/* Donor Management */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="absolute top-90 left-[55%] z-40 w-[90%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-2xl transition-[scale] duration-300 hover:scale-110"
          >
            <img src={donors} alt="Donor management" className="w-full rounded-xl" />
          </m.div>

          {/* Dashboard image */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="absolute top-0 left-1/3 z-20 w-full -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl transition-[scale] duration-300 hover:scale-105"
          >
            <img src={dashboard} alt="Engagement dashboard" className="w-full rounded-xl" />
          </m.div>

          {/* Events image */}
          <m.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="absolute top-50 left-1/2 z-30 w-[95%] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-2xl transition-[scale] duration-300 hover:scale-110"
          >
            <img src={events} alt="Events and attendance" className="w-full rounded-xl" />
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
