import donors from "../assets/images/donors.png";
import dashboard from "../assets/images/dashboard.png";
import events from "../assets/images/events.png";

  function Hero() {
  return (
    <section className="bg-linear-to-br from-sky-300 to-white min-h-[80vh] flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

       {/* Left Side */}
        <div>
                 
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Empower Your Community with Better Engagement
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Fill volunteer shifts, track attendance and hours, and keep member and
            donor records in one place. Built for churches and nonprofits.
          </p>
          
          <a
  href="https://canopy.ivulatechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-600 inline-block font-semibold"
>
  Start your free trial
  </a>
          <p className="mt-3 text-sm text-gray-600">14 days free. No credit card required.</p>

        </div>
        

        {/* Right Side Dashboard Showcase */}
        <div className="hidden md:block relative h-[650px] w-full">

          {/* Donor Management */}
          <div
            className="
              absolute
              left-2/3
              -translate-x-1/2
              top-90
              w-[90%]
              bg-white
              p-5
              rounded-2xl
              shadow-2xl
              hover:scale-125
              transition-transform
              duration-300
              z-40
            "
          >
            

            <img
              src={donors}
              alt="Donor Management "
              className="rounded-xl w-full"
            />
          </div>

          {/* Dashboard image */}
          <div
            className="
              absolute
              left-1/3
              -translate-x-1/2
              top-0
              w-full
              bg-white
              p-3
              rounded-2xl
              shadow-2xl
              hover:scale-105
              transition-transform
              duration-300
              z-20
            "
          >
            <div className="flex gap-2 mb-3">
              
            </div>

            <img
              src={dashboard}
              alt="Engagement dashboard"
              className="rounded-xl w-full"
            />
          </div>

          {/* Events image */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-50
              w-[95%]
              bg-white
              p-3
              rounded-2xl
              shadow-2xl
              hover:scale-120
              transition-transform
              duration-300
              z-30
            "
          >
            <div className="flex gap-2 mb-3">
            </div>

            <img
              src={events}
              alt="Events and attendance"
              className="rounded-xl w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;