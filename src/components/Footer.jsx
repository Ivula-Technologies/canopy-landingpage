import canopyMark from "../assets/images/canopy-mark.svg";
import { bookingUrl } from "../lib/booking";

function Footer() {
  return (
    <footer className="bg-canopy-900 py-10 text-sun-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm sm:flex-row">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <img src={canopyMark} alt="" className="h-9 w-auto" />
          <span className="font-display text-2xl font-bold">Canopy</span>
          <p className="text-canopy-200">
            © 2026 Ivula Technologies. Building Solutions. Solving Problems.{" "}
            <a
              href="https://canopy.ivulatechnologies.com/privacy"
              className="underline-offset-4 hover:text-sun-300 hover:underline"
            >
              Privacy
            </a>{" "}
            ·{" "}
            <a
              href="https://canopy.ivulatechnologies.com/terms"
              className="underline-offset-4 hover:text-sun-300 hover:underline"
            >
              Terms
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://canopy.ivulatechnologies.com/" className="transition-colors hover:text-sun-300">
            Get Started
          </a>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sun-300"
          >
            Book a call
          </a>
          <a href="mailto:hello@ivulatechnologies.com" className="transition-colors hover:text-sun-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
