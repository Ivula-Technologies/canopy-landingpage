import canopyMark from "../assets/images/canopy-mark.svg";

function Footer() {
  return (
    <footer className="bg-canopy-900 text-sun-100 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-4">
          <img src={canopyMark} alt="" className="h-9 w-auto" />
          <span className="font-display text-2xl font-bold">Canopy</span>
          <p className="text-canopy-200">© 2026 Ivula Technologies. Building Solutions. Solving Problems.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://canopy.ivulatechnologies.com/" className="hover:text-sun-300 transition-colors">Get Started</a>
          <a href="mailto:hello@ivulatechnologies.com" className="hover:text-sun-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
