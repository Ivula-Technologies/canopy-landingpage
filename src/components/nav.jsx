
import ivula from "../assets/Dashboard/ivula.png";
function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center px-8 py-4 shadow-sm">
      {/* Logo */}
      <div className="h-10 flex items-center gap-3">
        <img src={ivula} 
        alt="Ivula Logo" className="w-auto h-10 object-contain" />

      <h1 className="text-2xl font-bold text-sky-700">
      IVULA CANOPY
      </h1>
      </div>
     

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 font-medium">
        <a
          href="#features"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Features
        </a>

        <a
          href="#how-it-works"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          How It Works
        </a>

        <a
          href="#audience"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Audience
        </a>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a
  href="https://www.ivulatechnologies.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-sky-800 text-white px-6 py-3 rounded-lg hover:bg-sky-600 inline-block"
>
  Get Started
</a>
<a
  href="https://www.ivulatechnologiesyoutube.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-sky text-sky-600 px-5 py-3 rounded-lg hover:bg-sky-100 transition-colors duration-200"
  >
          Request a Demo
        </a>
      </div>
    </nav>
  );
}

export default Nav;