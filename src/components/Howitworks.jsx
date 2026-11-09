import { Reveal, Stagger, StaggerItem } from "./Reveal";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Organization",
      description: "Set up your nonprofit, church, or community group in minutes.",
    },

    {
      number: "02",
      title: "Add Members & Volunteers",
      description: "Import or register members and volunteers into the platform.",
    },

    {
      number: "03",
      title: "Organize Events",
      description: "Plan activities, manage attendance, and coordinate schedules.",
    },

    {
      number: "04",
      title: "Create Teams",
      description: "Group your members into committees, departments, or volunteer groups for better collaboration.",
    },
    {
      number: "05",
      title: "Track Engagement",
      description: "Measure participation and gain insights into community growth.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-canopy-200 py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.25em] text-canopy-700 uppercase">How It Works</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-gray-900">
            Launch without a complicated implementation process. Get started in minutes.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ivula Canopy is designed for lean teams that need practical software they can adopt quickly.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5" stagger={0.12}>
          {steps.map((step) => (
            <StaggerItem key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sun-400 text-xl font-bold text-canopy-950">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

              <p className="mt-2 text-gray-600">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default HowItWorks;
