function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Organization",
      description:
        "Set up your nonprofit, church, or community group in minutes.",
    },

    {
      number: "02",
      title: "Add Members & Volunteers",
      description:
        "Import or register members and volunteers into the platform.",
    },

    {
      number: "03",
      title: "Organize Events",
      description:
        "Plan activities, manage attendance, and coordinate schedules.",
    },

    {
      number: "04",
      title: "Create Teams",
      description:
        "Group your members into committees, departments, or volunteer groups for better collaboration.",
    },
    {
      number: "05",
      title: "Track Engagement",
      description:
        "Measure participation and gain insights into community growth.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-blue-200 py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sky-700 uppercase tracking-[0.25em] text-sm font-semibold">
          How It Works
          </p>

<h4 className="mt-4 max-w-3xl mx-auto text-4xl font-bold text-gray-900">
   Launch without a complicated implementation process. Get started in minutes.
   </h4>

<p className="mt-4 max-w-2xl mx-auto text-gray-600">
    Ivula Canopy is designed for lean teams that need practical software they can adopt quickly.
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center"
            >
              <div
                className="
                  w-16
                  h-16
                  bg-blue-800
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mx-auto
                  text-xl
                  font-bold
                "
              >
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>
  );
}

export default HowItWorks;