import { Reveal } from "./Reveal";

const included = [
  "Unlimited events, teams, and announcements",
  "Volunteer shifts with public sign-up links and reminders",
  "QR code check-in and attendance tracking",
  "Volunteer hours portal",
  "Donor and donation records with receipts",
  "Reports and CSV exports",
];

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
        <p className="text-sky-900 uppercase tracking-[0.25em] font-semibold text-sm">
          Pricing
        </p>
        <h2 className="mt-4 text-4xl font-bold">
          One simple price for your whole organization.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Try everything free for 14 days. No credit card required.
        </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 mx-auto max-w-md rounded-2xl border border-sky-200 bg-sky-50 p-8 shadow-md text-left">
          <h3 className="text-xl font-semibold text-sky-900">Ivula Canopy</h3>
          <p className="mt-4">
            <span className="text-5xl font-bold">$25</span>
            <span className="text-gray-600"> / month per organization</span>
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-sky-700">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://canopy.ivulatechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-600"
          >
            Start your free trial
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Pricing;
