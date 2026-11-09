import { Reveal, Stagger, StaggerItem } from "./Reveal";

function Features() {
  const features = [
    {
      title: "Member Management",
      description:
        "Maintain a complete directory of members, volunteers, staff, and stakeholders in one centralized location.",
    },

    {
      title: "Teams & Departments",
      description:
        "Organize individuals into departments, committees, projects, ministries, programs, or volunteer groups.",
    },

    {
      title: "Attendance and Participation Tracking",
      description: "Monitor engagement across activities, events, meetings, and programs.",
    },

    {
      title: "Analytics and Insight Dashboard",
      description:
        "Transform organizational data into actionable intelligence with leadership dashboards providing visibility into membership growth, participation trends, volunteer activity, attendance patterns, team performance, and organizational engagement.",
    },

    {
      title: "Volunteer Shifts & Check-In",
      description:
        "Share a public sign-up link for each shift, send automatic reminders, check volunteers in with a QR code, and keep a record of every hour served.",
    },

    {
      title: "Kids Check-in",
      description:
        "Check families in at the door, print name labels that show allergies, and hand each child back only to an adult holding the matching pickup tag.",
    },

    {
      title: "Giving & Donor Receipts",
      description:
        "Keep donor records and giving history in the same place as your people, and print a receipt for any gift.",
    },

    {
      title: "Communication Tools",
      description: "Reach members quickly through centralized communication.",
    },

    {
      title: "Reports & Insights",
      description: "Generate meaningful reports for better decision making.",
    },
  ];

  return (
    <section id="features" className="bg-canopy-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold tracking-[0.25em] text-canopy-900 uppercase">Features</p>
          <h2 className="text-center text-4xl font-bold">Everything your organization needs to stay organized.</h2>
          <div className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-600">
            <p>
              Replace disconnected spreadsheets and scattered tools with a single workspace for the people, programs,
              and decisions that keep your organization moving.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem
              key={feature.title}
              hover
              className="rounded-xl bg-canopy-100 p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

              <p className="text-gray-600">{feature.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Features;
