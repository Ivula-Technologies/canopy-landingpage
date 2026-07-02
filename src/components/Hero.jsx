import donors from "../assets/images/donors.png";
import dashboard from "../assets/images/dashboard.png";
import attendance from "../assets/images/attendance.png";

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
            Manage people, volunteers, programs, teams, and engagement insights
            with a modern platform built for real organizational work.
          </p>
          
          <a
  href="https://www.ivulatechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-sky-600 px-6 py-3 rounded-lg hover:bg-sky-800 inline-block"
>
  Get Started
  </a>

        </div>
        

        {/* Right Side Dashboard Showcase */}
        <div className="hidden md:block relative h-[650px] w-full">

          {/* Left Dashboard */}
          <div
            className="
              absolute
              -left-12
              top-90
              w-[45%]
              h-[45%]
              bg-white
              p-3
              rounded-2xl
              shadow-2xl
              hover:scale-105
              transition-transform
              duration-300
              z-10
            "
          >
            

            <img
              src={donors}
              alt="Donor Management "
              className="rounded-xl w-full"
            />
          </div>

          {/* Main Dashboard */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-4
              w-[93%]
              bg-white
              p-3
              rounded-2xl
              shadow-2xl
              hover:scale-105
              transition-transform
              duration-300
              z-30
            "
          >
            <div className="flex gap-2 mb-3">
              
            </div>

            <img
              src={dashboard}
              className="rounded-xl w-full"
            />
          </div>

          {/* Right Dashboard */}
          <div
            className="
              absolute
              -right-8
              top-90
              w-[75%]
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
              src={attendance}
              className="rounded-xl w-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;