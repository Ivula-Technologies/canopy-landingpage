import { Reveal, Stagger, StaggerItem } from "./Reveal";

const plans = [
  { name: "Starter", price: 29, people: "Up to 150 people", tagline: "For small churches and volunteer groups" },
  { name: "Growth", price: 59, people: "Up to 750 people", tagline: "For growing congregations and nonprofits", featured: true },
  { name: "Pro", price: 119, people: "Unlimited people", tagline: "For large and multi-site organizations" },
];

const included = [
  "Volunteer shifts with public sign-up links and reminders",
  "QR code check-in and attendance tracking",
  "Volunteer hours portal",
  "Donor records and printable receipts",
  "Teams, events, tasks and announcements",
  "Reports and CSV exports",
];

const signupUrl = "https://canopy.ivulatechnologies.com/signup";

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-canopy-900 uppercase tracking-[0.25em] font-semibold text-sm">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-bold">Every feature on every plan.</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pick a plan by the size of your community. Try everything free for 14 days, no credit card required.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => (
            <StaggerItem
              key={plan.name}
              hover
              className={`flex flex-col rounded-2xl p-8 shadow-md text-left ${
                plan.featured ? "bg-canopy-900 text-sun-50 ring-2 ring-sun-400" : "bg-canopy-50 ring-1 ring-canopy-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-sun-400 px-3 py-1 text-xs font-semibold text-canopy-950">Most popular</span>
                )}
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-canopy-100" : "text-gray-600"}`}>{plan.tagline}</p>
              <p className="mt-6">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={plan.featured ? "text-canopy-100" : "text-gray-600"}> / month</span>
              </p>
              <p className={`mt-2 font-medium ${plan.featured ? "text-sun-300" : "text-canopy-700"}`}>{plan.people}</p>
              <a
                href={signupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center px-6 py-3 rounded-lg font-semibold ${
                  plan.featured ? "bg-sun-400 text-canopy-950 hover:bg-sun-300" : "bg-canopy-700 text-white hover:bg-canopy-600"
                }`}
              >
                Start free trial
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl rounded-2xl bg-canopy-50 p-6 ring-1 ring-canopy-100">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-canopy-700">Included on every plan</p>
          <ul className="mt-4 grid gap-2 text-gray-700 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-canopy-700">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default Pricing;
